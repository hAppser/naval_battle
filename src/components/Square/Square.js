import "./Square.scss";

export default function Square({ x, y, className }) {
  return <button className={`square ${className}`}></button>;
}
