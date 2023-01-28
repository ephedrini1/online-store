export type Wine = {
  id: number,
  name: string;
  madeBy: string;
  country: string;
  year: string;
  alcohol: string;
  vol: string;
  price: string;
  color: string;
  image: string;
  count: number;
  inStock: boolean;
  inCart: number;
}


export interface DefaultFilters {
  country: string[],
  color: string[],
  year: string[],
  price: string[],
}


