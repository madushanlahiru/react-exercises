type ReducerActionProp = {
  type: string;
  payload: any;
};

export default (state: any, action: ReducerActionProp) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transation: any) => transation.id !== action.payload.id
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};
