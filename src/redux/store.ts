import { combineReducers, createStore } from "redux";
import { CardPageReducer, CardsState } from "./reducer/CardPageReducer";
export interface AppState {
    cardsPageState: CardsState | undefined;
}
let  reducers = combineReducers<AppState>({
    cardsPageState: CardPageReducer,
});

 export let store = createStore(reducers);