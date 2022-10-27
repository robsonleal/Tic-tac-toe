type SquareProps = {
  value: number;
};

export function Square(props: SquareProps) {
  return (
    <button className="square" onClick={() => console.log("click")}>
      {props.value}
    </button>
  );
}
