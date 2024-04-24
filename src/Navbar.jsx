import { useSelector } from "react-redux";

export default function Navbar() {
  const cartCount = useSelector((state) => state.cartCount.value);
  return <div>Number of cart {cartCount}</div>;
}
