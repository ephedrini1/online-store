export interface Wine {
  [key: string]: string | boolean | number;
}

export interface WineDetails extends Wine {
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


