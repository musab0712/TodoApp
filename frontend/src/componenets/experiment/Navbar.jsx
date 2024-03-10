import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigation = useNavigate();
  return (
    <>
      <button onClick={() => navigation("/")}>Landing</button>
      <button onClick={() => navigation("/dashboard")}>Dashborad</button>
    </>
  );
}
