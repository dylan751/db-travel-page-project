import classes from "./menu.module.css";
import Link from "next/link";

function Menu(props) {
  const { menu, currentPath } = props;

  return (
    <li className={`${currentPath === menu.url ? classes["is-active"] : ""}`}>
      <Link href={menu.url}>
        <a>{menu.title}</a>
      </Link>
    </li>
  );
}

export default Menu;
