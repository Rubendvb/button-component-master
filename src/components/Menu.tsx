import "../assets/css/Menu.css";

export default function Menu() {
  return (
    <>
      <aside className="menu">
        <p className="menu__text">
          <span className="menu__text-span">Dev</span>challenges.io
        </p>

        <ul className="menu__ul">
          <li>Colors</li>
          <li>Typography</li>
          <li>Spaces</li>
          <li>Buttons</li>
          <li>Inputs</li>
          <li>Grid</li>
        </ul>
      </aside>
    </>
  );
}
