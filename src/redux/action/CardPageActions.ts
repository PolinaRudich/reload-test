import { CardData } from "../../components/CardBalance";
import { CardSupportData } from "../../components/CardSupport";

export const SHOW_CARDS = 'SHOW_CARDS';
export const SHOW_CARDSUPPORT = 'SHOW_CARDSUPPORT';

export const showMoreCardsActionCreator = (cards: CardData[]) => ({
  type: SHOW_CARDS,
  payload: cards,
});

export const showMoreCardsSupportActionCreator = (cardsSupport: CardSupportData[]) => ({
  type: SHOW_CARDSUPPORT,
  payload: cardsSupport,
});
export type CardPageAction =
  | ReturnType<typeof showMoreCardsActionCreator>
  | ReturnType<typeof showMoreCardsSupportActionCreator>;