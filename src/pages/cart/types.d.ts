export type ICartActions =
  | { type: "ADD"; payload: ICartItem }
  | { type: "REMOVE"; payload: number }
  | { type: "UPDATE"; payload: { id: number; qty: number } }
  | { type: "RESET" };

export interface ICartItem {
  id: number;
  title: string;
  category: string;
  image: string;
  price: number;
  qty: number;
}

export interface ICartState {
  data: ICartItem[];
}

export interface ICartModel {
  state: ICartState;
  dispatch: React.Dispatch<ICartActions>;
}
