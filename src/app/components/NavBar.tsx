import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const NavBar = () => {
  return (
    <>
    <div className="px-2 flex-row bg-blue-300">
      <IconButton size="small">
        <Menu />
      </IconButton>
      <ul className="">
        <li>option1</li>
        <li>option2</li>
      </ul>

    </div>
    </>
  );
};
export default NavBar;
