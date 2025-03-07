// components/Button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ternary";
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  disabled = false,
  onClick,
}) => {
  const variantClass = (() => {
    switch (variant) {
      case "primary":
        return "btn-primary";
      case "secondary":
        return "btn-secondary";
      case "ternary":
        return "btn-ternary";
      default:
        return "btn-primary";
    }
  })();
  return (
    <button
      onClick={onClick}
      // Note:-
      //   className={`btn btn-${variant}
      // ${
      //   // Note UNOCss will create class only if we directly specify the className it will not consider the dynamic generation
      //   // btn-primary btn-secondary btn-success --> if this got removed then btn-${variant} will not work
      //   // we can use a ternary operation here or a function or we can specify these classNames in safeList in uno.config
      //   ""
      // }`}
      className={`btn ${variantClass} ${disabled ? "disabled" : ""}`}
    >
      {children}
    </button>
  );
};
