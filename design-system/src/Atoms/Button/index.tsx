// components/Button.tsx
import React from "react";
import loadingIcon from "../../../../public/assets/loading.svg";
import loadingRedIcon from "../../../../public/assets/loadingRed.svg";
import Image from "next/image";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ternary";
  onClick?: () => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  disabled = false,
  size = "md",
  loading = false,
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
  const btnSize = (() => {
    switch (size) {
      case "sm":
        return "btn-sm";
      case "md":
        return "btn-md";
      case "lg":
        return "btn-lg";
      default:
        return "btn-md";
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
      className={`btn ${variantClass} ${btnSize} ${disabled ? "disabled" : ""}`}
    >
      {loading ? (
        <Image
          src={variant === "primary" ? loadingIcon : loadingRedIcon}
          alt=""
          className="w-25px h-25px animate-spin animate-count-infinite animate-duration-1s"
        />
      ) : (
        children
      )}
    </button>
  );
};
