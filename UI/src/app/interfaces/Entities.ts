interface Silo {
  id: number;
  number: number;
  friendlyName: string;
  currentMeasurement: number;
  capacity: number;
  spaceAvailable: number;
  precentageFull: number;
  productId?: number;
  product?: Product;
  created: Date;
  modified?: Date;
  archived: boolean;
}

interface SiloLoad {
  id: number;
  loadTypeId: LoadType;
  loadType: string;
  firstWeight: number;
  secondWeight: number;
  totalWeigth: number;
  firstWeightDate?: Date;
  secondWeightDate?: Date;
  isFinalized: boolean;
  finalizedDate?: Date;
  siloId?: number;
  silo?: Silo;
  productId?: number;
  product?: Product;
  contractId?: number;
  contract?: Contract;
  vehicleId?: number;
  vehicle?: Vehicle;
  created: Date;
  modified?: Date;
  archived: boolean;
  wayBillNumber: string;
}

interface Vehicle {
  id: number;
  registrationNumber: string;
  make: string;
  created: Date;
  modified?: Date;
  archived: boolean;
}

interface Product {
  id: number;
  productName: string;
  productCategory: ProductCategory;
  productGrading: string;
  created: Date;
  modified?: Date;
  archived: boolean;
}

interface Customer {
  id: number;
  customerName: string;
  created: Date;
  modified?: Date;
  archived: boolean;
}

interface Contract {
  id: number;
  contractNumber: string;
  maxTonnages: number;
  customerId?: number;
  customer?: Customer;
  productId?: number;
  product?: Product;
  created: Date;
  modified?: Date;
  archived: boolean;
}

interface Settings {
  id: number;
  name: string;
  value: string;
  created: Date;
  modified?: Date;
  archived: boolean;
}

enum LoadType {
  Loading = 0,
  OffLoading = 1,
}

enum ProductCategory {
  Silo = 0,
  // LiveStock = 1,
}

interface BaseClass {
  created: Date;
  modified?: Date;
  archived: boolean;
}

export { Silo, SiloLoad, Vehicle, Product, Customer, Contract, Settings, LoadType, ProductCategory};