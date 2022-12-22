import "./alertBox.style.css";

interface Props {
  text: string;
  variant: string;
}

const AlertBox: React.FC<Props> = (props) => {
  return <div className={`alert_box ${props.variant}`}>{props.text}</div>;
};

export default AlertBox;
