import { ShoppingList } from "./components/ShoppingList";

function App() {
  const prodLimpeza = ["Vassoura", "Detergente", "Amacianete"];
  const prodFruteira = ["Cenoura", "Beterraba", "Alface"];

  return (
    <>
      <ShoppingList title="Lista de produtos de limpeza" itens={prodLimpeza} />
      <ShoppingList title="Lista da Fruteira" itens={prodFruteira} />
    </>
  );
}

export default App;
