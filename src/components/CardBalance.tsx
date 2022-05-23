import '../components/Card.scss';
import rub from '../images/rub.png';
import redRub from '../images/red-rub.png';
export type CardData = {
    title: string;
    sum: number;
    sum_plan: number | null;
  };
export type CardDataProps = {
    data: CardData
}
export const CardBalance = (props: CardDataProps) => {
    const card = props.data;
    return (
        <>
        <div className="card-container">
            <div className="card-title">{card.title}</div>
            <div className="card-balance">
                <span className={`sum ${card.sum_plan && card.sum < 0.45 * card.sum_plan ? `red-flag` : ''}`}>{card.sum}</span>
                {card.sum_plan && card.sum < 0.45 * card.sum_plan ? <img src={redRub} alt='R'></img> : <img src={rub} alt='R'></img> }
                <span className="sum-plan">{card.sum_plan ? `/${card.sum_plan}`: card.sum_plan}</span>
            </div>
        </div>
        </>
    )

}