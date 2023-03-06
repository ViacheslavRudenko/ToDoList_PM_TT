import "./index.css";
const Btn = ({ name, click, type = "button" }: BtnType) => {
  return (
    <button className="btn" onClick={click} type={type}>
      {name}
    </button>
  );
};

export default Btn;

interface BtnType {
  name: string;
  click?: () => void;
  type: "button" | "submit" | "reset";
}
