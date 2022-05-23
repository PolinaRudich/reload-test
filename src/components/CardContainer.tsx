import { useMediaPredicate } from "react-media-hook";
import { balances } from '../cardData/CardData';
import '../components/CardContainer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { CardBalance } from './CardBalance';
import '../styles/_commonStyles.scss'
import { AppState } from '../redux/store';
import { CardsState } from '../redux/reducer/CardPageReducer';
import { showMoreCardsActionCreator, showMoreCardsSupportActionCreator } from '../redux/action/CardPageActions';
import { CardSupport } from './CardSupport';
import { Button } from './Button';
export const CardConainer = () => {
    const dispatch = useDispatch();
    const isBigScreen = useMediaPredicate("(min-width: 1024px)");
    const { cards } = useSelector((state: AppState) => state.cardsPageState as CardsState);
    const { cardsSupport } = useSelector((state: AppState) => state.cardsPageState as CardsState);
    const showMoreCards = () => {
        dispatch(showMoreCardsActionCreator(balances));
    }
    const showMoreSupportCards = () => {
        if (cardsSupport.length < 12) {
            dispatch(showMoreCardsSupportActionCreator(cardsSupport));
        }
    }
    const cut = () => {
        let size = 3;
        let subarray = [];
        for (let i = 0; i < Math.ceil(cards.length / size); i++) {
            subarray[i] = cards.slice((i * size), (i * size) + size);
        }
        return subarray;
    }
    const cutBy6 = () => {
        let size = 6;
        let subarray = [];
        for (let i = 0; i < Math.ceil(cards.length / size); i++) {
            subarray[i] = cards.slice((i * size), (i * size) + size);
        }
        return subarray;
    }
    console.log(cut());
    return (
        <>
            <div className='info-balance-section'>
                <div className="card-container-title">Информация о балансах</div>
                <div className="card-conainer-wrapper">
                    {cards.length <= 6 ? <div className={`flex-container`}>
                        {isBigScreen ?
                            cards.map((el) => {
                                return (
                                    <CardBalance data={el} />
                                )
                            }) : <> <div className='flex-block'>{cut()[0].map((el) => {
                                return (
                                    <CardBalance data={el} />
                                )
                            })}</div>
                                <div className='flex-block'>{cut()[1].map((el) => {
                                    return (
                                        <CardBalance data={el} />
                                    )
                                })}</div></>}
                    </div> : <div className={cards.length < 6 ? `flex-container` : ''}>
                        {isBigScreen ? <> <div className="flex-block">{cutBy6()[0].map((el) => {
                            return (
                                <CardBalance data={el} />
                            )
                        })}</div>
                            <div className="flex-block">{cutBy6()[1].map((el) => {
                                return (
                                    <CardBalance data={el} />
                                )
                            })}</div>
                        </> : <> <div className='flex-block'>{cut()[0].map((el) => {
                            return (
                                <CardBalance data={el} />
                            )
                        })}</div>
                            <div className='flex-block'>{cut()[1].map((el) => {
                                return (
                                    <CardBalance data={el} />
                                )
                            })}</div>
                            <div className='flex-block'>{cut()[2].map((el) => {
                                return (
                                    <CardBalance data={el} />
                                )
                            })}</div>
                            <div className='flex-block'>{cut()[3].map((el) => {
                                return (
                                    <CardBalance data={el} />
                                )
                            })}</div></>}
                    </div>}
                    <Button onClick={showMoreCards} text={'Показать еще'} isDisabled={cards.length === 12 ? true : false}></Button>
                </div>

            </div>
            <div className="support-section">
                <div className="card-container-title">Проекты поддержки</div>
                <div className="card-container-wrapper">
                    <div className={`grid-container ${!isBigScreen ? `grid-container-small` : ''}`}>
                        {
                            cardsSupport.map((el) => {
                                return (
                                    <CardSupport data={el} />
                                )
                            })
                        }
                    </div>
                </div>
                <Button isDisabled={cardsSupport.length === 12 ? true : false} onClick={showMoreSupportCards} text={'Показать еще'}></Button>
            </div>
        </>
    )

}