import { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import "../assets/css/Menu.css";

export default function Menu() {
  const [selectItem, setSelectItem] = useState<number | null>(null);

  return (
    <>
      <aside className="menu">
        <Link to={"/"}>
          <p className="menu__text">
            <span className="menu__text-span">Dev</span>challenges.io
          </p>
        </Link>

        <ul className="menu__ul">
          <li>
            <Link
              to={"/"}
              className={classnames({
                ["menu__ul__a"]: true,
                ["active"]: selectItem === 1,
              })}
              onClick={() => setSelectItem(1)}
            >
              Colors
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              className={classnames({
                ["menu__ul__a"]: true,
                ["active"]: selectItem === 2,
              })}
              onClick={() => setSelectItem(2)}
            >
              Typography
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              className={classnames({
                ["menu__ul__a"]: true,
                ["active"]: selectItem === 3,
              })}
              onClick={() => setSelectItem(3)}
            >
              Spaces
            </Link>
          </li>
          <li>
            <Link
              to={"/buttons"}
              className={classnames({
                ["menu__ul__a"]: true,
                ["active"]: selectItem === 4,
              })}
              onClick={() => setSelectItem(4)}
            >
              Buttons
            </Link>
          </li>

          <li>
            <Link
              to={"/inputs"}
              className={classnames({
                ["menu__ul__a"]: true,
                ["active"]: selectItem === 5,
              })}
              onClick={() => setSelectItem(5)}
            >
              Inputs
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              className={classnames({
                ["menu__ul__a"]: true,
                ["active"]: selectItem === 6,
              })}
              onClick={() => setSelectItem(6)}
            >
              Grid
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
