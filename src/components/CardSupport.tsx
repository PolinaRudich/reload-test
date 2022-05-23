import '../components/Card.scss';
import '../../src/components/CardSupport.scss';
import rub from '../images/rub.png';
import redRub from '../images/red-rub.png';
import { SvgFire } from '../SvgIcons/SvgFire';
import { PercentageEnum } from '../cardData/PercentageEnum';
export type CardSupportData = {
    title: string;
    progress: number;
    burning_count: number,
    inwork_count: number,
    time_fakt: string,
};
export type CardSupportDataProps = {
    data: CardSupportData
}
const percentConverter = (percent: number) => {
    switch (percent) {
        case 1:
            return PercentageEnum.One;
        case 2:
            return PercentageEnum.Two;
        case 3:
            return PercentageEnum.Three;
        case 4:
            return PercentageEnum.Four;
        case 5:
            return PercentageEnum.Five;
        case 6:
            return PercentageEnum.Six;
        case 7:
            return PercentageEnum.Seven;
        case 8:
            return PercentageEnum.Eight;
        case 9:
            return PercentageEnum.Nine;
        case 10:
            return PercentageEnum.Ten;
    }
}
export const CardSupport = (props: CardSupportDataProps) => {
    const card = props.data;

    return (
        <>
            <div className="card-container">
                <div className="data-wrapper">
                    <div className="card-title">{card.title}</div>
                    <div className="card-info">
                        <span className="inwork-number">{card.inwork_count}</span>
                        <div className="fire-box">
                            <div className='burning_count'>{card.burning_count}</div>
                            <div className="fire">{<SvgFire />}</div>
                        </div>
                        <div className='time-block'>
                            <div className="colored-bar">
                                <div style={{ width: `${percentConverter(card.burning_count)}` }} className={`colored-bar-fill ${card.burning_count > 5 ? `red-warning` : ''}`}></div>
                            </div>
                            <div className="time-tracker">{card.time_fakt}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}