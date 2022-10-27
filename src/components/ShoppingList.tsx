type ShoppingListProps = {
  title: string;
  itens: string[];
};

export function ShoppingList(props: ShoppingListProps) {
  return (
    <div className="shopping-list">
      <h1>{props.title}</h1>
      <ul>
        {props.itens.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
