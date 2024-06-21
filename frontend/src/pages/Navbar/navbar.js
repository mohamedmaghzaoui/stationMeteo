import { useContext } from "react";
import { ConnectedNavbar } from "./connectedNavbar";
import { NewNavbar } from "./newNavbar";
import { UserContext } from "../../contexts/userContext";
export const Navbar = () => {
  const { username } = useContext(UserContext);
  return username ? <ConnectedNavbar /> : <NewNavbar />;
};
