import { ButtonHTMLAttributes } from "react";
import "../assets/css/Button.css";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
}

export default function Button({
  text,
  className,
  iconLeft,
  iconRight,
}: IButton) {
  const combinedClassName = `btn ${className || ""}`;
  return (
    <>
      <button className={combinedClassName}>
        {iconLeft ? (
          <span className="material-icons md-16">add_shopping_cart</span>
        ) : (
          ""
        )}{" "}
        {text}{" "}
        {iconRight ? (
          <span className="material-icons md-16">add_shopping_cart</span>
        ) : (
          ""
        )}
      </button>
    </>
  );
}
