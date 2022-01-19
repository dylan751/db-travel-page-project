import Link from "next/link";

import {ArrowSmRightIcon} from '@heroicons/react/solid';

import classes from "./button.module.css";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}  <ArrowSmRightIcon className="w-6 h-6 inline-block" /></a>
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}  <ArrowSmRightIcon className="w-6 h-6 inline-block text-clr_jaffa" />
    </button>
  );
}

export default Button;
