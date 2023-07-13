import { InputHTMLAttributes } from "react";
import "../assets/css/Input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string | undefined;
  iconLeft?: boolean;
  iconRight?: boolean;
}

export default function Input({ className, iconLeft, iconRight }: InputProps) {
  const combinedInputClassName = `custom__input ${className || ""}`;

  return (
    <div className={iconLeft || iconRight ? "containerInput" : undefined}>
      {iconLeft ? (
        <span className="material-icons icon-gray icon-phone">phone</span>
      ) : null}

      {iconRight ? (
        <span className="material-icons icon-gray icon-lock">lock</span>
      ) : null}

      <input
        className={combinedInputClassName}
        type="text"
        placeholder="Placeholder"
      />
    </div>
  );
}
