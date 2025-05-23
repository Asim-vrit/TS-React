import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/ProductCard";
import UserCard from "./components/UserCard";

import type { Product, Users } from "./types/types";

function App() {
  const [state, setState] = useState<Product[]>([]);
  const [users, setUsers] = useState<Users>([]);

  async function fetchProducts() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data: Product[] = await res.json();
      setState(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchUsers() {
    try {
      const res = await fetch("https://fakestoreapi.com/users");
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data: Users = await res.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchUsers();
  }, []);

  return (
    <div>
      {state.map((item) => (
        <Card product={item} />
      ))}
      {users.map((item) => (
        <UserCard user={item} />
      ))}
    </div>
  );
}

export default App;
