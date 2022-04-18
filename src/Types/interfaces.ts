export interface PropsTheme {
  theme: {
    primary: string;
    secondary: string;
    font: string;
  };
}

export interface PropsState {
  id: number;
  name: string;
  quantity: number;
}
export interface AddAction {
  type: string;
  value: PropsState;
}

export interface RemoveAction {
  type: string;
  value: number;
}
