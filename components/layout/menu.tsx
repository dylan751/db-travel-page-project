import classes from './Menu.module.css';
import Link from 'next/link';

interface MenuProps {
  menu: {
    url: string;
    title: string;
  };
  currentPath: string;
}

const Menu = ({ menu, currentPath }: MenuProps) => {
  return (
    <li className={`${currentPath === menu.url ? classes['is-active'] : ''}`}>
      <Link href={menu.url}>
        <a>{menu.title}</a>
      </Link>
    </li>
  );
};

export default Menu;
