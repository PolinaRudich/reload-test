import '../components/Button.scss';
export type ButtonProps = {
    onClick: () => void;
    text: string;
}
export const Button = (props: ButtonProps) => {
    return (
        <button className='show-more'  onClick={props.onClick}>{props.text}</button>
    )
}