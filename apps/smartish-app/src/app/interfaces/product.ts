export type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export type Status = 'Active' | 'Inactive';

export interface Photo {
  source: string;
  title: string;
}

export interface Product {
  sku: string;
  sizes: Size[];
  quantity: number;
  name: string;
  description: string;
  photos: Photo[];
  status: Status;
  price: number;
}
