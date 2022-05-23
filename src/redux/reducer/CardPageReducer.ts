import { Reducer } from "react";
import { balances } from "../../cardData/CardData";
import { support } from "../../cardData/SupportData";
import { CardData } from "../../components/CardBalance";
import { CardSupportData } from "../../components/CardSupport";
import { CardPageAction, SHOW_CARDS, SHOW_CARDSUPPORT } from "../action/CardPageActions";

export interface CardsState {
    cards: CardData[];
    cardsSupport: CardSupportData[];
}
const initialState: CardsState = {
    cards: balances,
    cardsSupport: support,
};
export const CardPageReducer: Reducer<CardsState | undefined, CardPageAction> = (
    state: CardsState | undefined = initialState,
    action
  ) => {
    switch (action.type) {
      case SHOW_CARDS: {
        return {
          ...state,
            cards: state.cards.concat(action.payload as CardData[]),
        };
      }
      case SHOW_CARDSUPPORT: {
        return {
          ...state,
          cardsSupport: state.cardsSupport.concat(action.payload as CardSupportData[]),
        }
      }
      default:
        return state;
    }
  };
  