import "./index.css";
const Input = ({ name, inputErr }: InputType) => {
  return (
    <div className="input-box">
      <label>{name}:</label>
      <input
        type="text"
        id={name}
        placeholder={`Enter ${name.toLowerCase()}`}
        className={inputErr ? "err-input" : ""}
      />
      {inputErr ? <p className="err-text"> This field is empty</p> : <></>}
    </div>
  );
};

export default Input;

interface InputType {
  name: string;
  inputErr: Boolean;
}
