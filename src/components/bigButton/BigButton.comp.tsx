import "./bigButton.style.css";

interface Props {
  text: string;
  variant: string;
  handleOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const BigButton = (props: Props) => {
  return (
    <button
      className={`big_button ${props.variant}`}
      onClick={props.handleOnClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export default BigButton;
