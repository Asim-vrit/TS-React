import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import type { Product } from "./types/types";

function App() {
  const [state, setState] = useState<Product[]>([]);
  async function fetchProducts() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error("something went wrong");
      }
      const data: Product[] = await res.json();
      setState(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Header
        state={state}
        id={1}
        name={"asim"}
        studentDetails={[
          { name: "asim", roll: 55 },
          { roll: 40, name: "kjasdb" },
        ]}
      />
    </>
  );
}

export default App;
