import "./inputContainer.style.css";
interface Props {
  label: string;
  type: string;
  placeholder: string;
  inputId: string;
  value: string;
  handleOnChange: Function;
  required?: boolean;
}

const InputContainer = (props: Props) => {
  const { label, type, placeholder, inputId, value, handleOnChange, required } =
    props;
  return (
    <div className="input_container">
      <label className="input_container__label" htmlFor={`${inputId}`}>
        {label}
      </label>
      <input
        className="input_container__input"
        id={`${inputId}`}
        type={`${type}`}
        name={`${inputId}`}
        placeholder={`${placeholder}`}
        value={`${value}`}
        onChange={(e) => handleOnChange(e)}
        required={required ? required : true}
      />
    </div>
  );
};

export default InputContainer;
