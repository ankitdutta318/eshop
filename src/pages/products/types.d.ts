export type IProductAction =
  | { type: "FETCH_PRODUCTS"; payload: IProduct[] }
  | { type: "FETCH_CATEGORIES"; payload: any[] }
  | { type: "PRODUCTS_LOADING"; payload: boolean }
  | { type: "PRODUCTS_ERROR"; payload: string };

interface IProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  rating: number;
  createdAt: string;
}

export interface IProductsState {
  data: IProduct[] | any[] | any;
  categories: any[];
  loading: boolean;
  error: string | null;
}

export interface IProductsModel {
  state: IProductsState;
  dispatch: React.Dispatch<IProductAction>;
}
