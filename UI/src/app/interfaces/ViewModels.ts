interface ApiResponse {
    success: boolean;
    message: string;
    item?: any; // Use any for unknown nested type
    items: any[]; // Use any for unknown element type in array
    file?: Uint8Array; // Use Uint8Array for binary data
  }
  
  interface SiloLoadViewModel extends ApiResponse {
    // DropDowns
    // contracts: Contract[];
    // customers: Customer[];
    // products: Product[];
    // silos: Silo[];
    // vehicles: Vehicle[];
  
    // // Values
    // contractId?: number;
    // siloId?: number;
    // vehicleId?: number;
    // firstWeight: number;
  }

  export { ApiResponse};