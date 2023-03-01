import "./index.css";
const Btn = ({ name, click }: BtnType) => {
  return (
    <button className="btn" onClick={click}>
      {name}
    </button>
  );
};

export default Btn;

interface BtnType {
  name: string;
  click: () => void;
}
