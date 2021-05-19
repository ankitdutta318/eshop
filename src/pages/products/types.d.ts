export type IProductAction =
  | { type: "FETCH_PRODUCTS"; payload: IProduct[] }
  | { type: "PRODUCTS_LOADING"; payload: boolean }
  | { type: "PRODUCTS_ERROR"; payload: string }
  | { type: "SORT_NEWEST" }
  | { type: "SORT_ASC_PRICE" }
  | { type: "SORT_DESC_PRICE" }
  | { type: "SORT_ASC_RATING" }
  | { type: "SORT_DESC_RATING" };

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
  loading: boolean;
  error: string | null;
}

export interface IProductsModel {
  state: IProductsState;
  dispatch: React.Dispatch<IProductAction>;
}
