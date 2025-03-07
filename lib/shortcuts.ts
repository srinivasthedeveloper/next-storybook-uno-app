export const shortcuts = {
  btn: "border-0 cursor-pointer text-size-md px-lg py-1.2 font-satoshi rounded-md outline-primaryOutline focus:outline-2",
  ["btn-primary"]:
    "bg-primary hover:bg-primaryHovered outline-primaryOutline focus:outline-2 text-white",
  ["btn-secondary"]:
    "border-solid border-disabledOutline text-primary border-1 bg-white hover:text-primaryHovered",
  ["btn-ternary"]: "text-primary bg-white hover:text-primaryHovered",
  ["disabled"]: "filter-grayscale op-40 pointer-events-none",
} as const;
