import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-waybil-print-page',
  templateUrl: './waybil-print-page.component.html',
  styleUrls: ['./waybil-print-page.component.scss']
})

export class waybilPrintPageComponent {
  
    @ViewChild('driverSignatureCanvasDriver') driverSignatureCanvas: ElementRef;
    @ViewChild('signatureCanvas') signatureCanvas: ElementRef;
  
    private contextDriver: CanvasRenderingContext2D;
    private contextSignature: CanvasRenderingContext2D;
    private isDrawing: boolean = false;
    private lastX: number;
    private lastY: number;
  
    constructor() { }
  
    ngAfterViewInit() {
      this.contextDriver = (this.driverSignatureCanvas.nativeElement as HTMLCanvasElement).getContext('2d');
      this.contextSignature = (this.signatureCanvas.nativeElement as HTMLCanvasElement).getContext('2d');
    }
  
    handleMouseDown(event: MouseEvent | TouchEvent) {
      this.isDrawing = true;
      const bounds = (event.target as HTMLElement).getBoundingClientRect();
      this.lastX = (event instanceof MouseEvent) ? event.clientX - bounds.left : event.touches[0].clientX - bounds.left;
      this.lastY = (event instanceof MouseEvent) ? event.clientY - bounds.top : event.touches[0].clientY - bounds.top;
    }
  
    handleMouseMove(event: MouseEvent | TouchEvent) {
      if (!this.isDrawing) return;
      const bounds = (event.target as HTMLElement).getBoundingClientRect();
      const x = (event instanceof MouseEvent) ? event.clientX - bounds.left : event.touches[0].clientX - bounds.left;
      const y = (event instanceof MouseEvent) ? event.clientY - bounds.top : event.touches[0].clientY - bounds.top;
  
      const context = (event.target === this.driverSignatureCanvas.nativeElement) ? this.contextDriver : this.contextSignature;
      
      context.beginPath();
      context.moveTo(this.lastX, this.lastY);
      context.lineTo(x, y);
      context.stroke();
  
      this.lastX = x;
      this.lastY = y;
    }
  
    handleMouseUp() {
      this.isDrawing = false;
    }

}
