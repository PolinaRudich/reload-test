import '../components/Button.scss';
export type ButtonProps = {
    onClick: () => void;
    text: string;
    isDisabled: boolean;
}
export const Button = (props: ButtonProps) => {
    return (
        <button className={`show-more ${props.isDisabled ? `disabled-button` : ''}`} disabled={props.isDisabled} onClick={props.onClick}>{props.text}</button>
    )
}