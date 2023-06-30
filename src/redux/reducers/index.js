import { combinedReducers} from "redux";
import{ productReducer, selectedProductReducer} from "./productReducer";


const reducers =combinedReducers({
  allProducts:ProductReducer,
  product:selectedProductReducer,
});

export default reducers;