import React from "react";
import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.header + " header"}>
      <img src="https://cdn-icons-png.flaticon.com/512/214/214535.png" />
      <div className={style.wrapper}>
        <h1 className={style.title}>ChatBrilliant</h1>
      </div>
      <div className={style.searchmenu}>
        <input type="link" className={style.input} />
        <button></button>
      </div>
    </header>
  );
}

export default Header;
