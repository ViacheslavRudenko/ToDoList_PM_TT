import "./index.css";
const Input = ({ name, inputErr, value, setChange }: InputType) => {
  return (
    <div className="input-box">
      <label>{name}:</label>
      <input
        type="text"
        placeholder={`Enter ${name.toLowerCase()}`}
        value={value}
        onChange={(e) => setChange(e.target.value)}
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
  value: string;
  setChange: (value: string) => void;
}
