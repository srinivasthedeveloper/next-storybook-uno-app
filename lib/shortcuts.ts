export const shortcuts = {
  btn: "border-0 cursor-pointer flex text-center flex-justify-center flex-items-center gap-2 text-size-md px-md py-0.625 font-satoshi rounded-md outline-primaryOutline focus:outline-2",
  ["btn-primary"]:
    "bg-primary hover:bg-primaryHovered outline-primaryOutline focus:outline-2 text-white",
  ["btn-secondary"]:
    "border-solid border-disabledOutline text-primary border-1 bg-white hover:text-primaryHovered",
  ["btn-ternary"]: "text-primary bg-transparent hover:text-primaryHovered",
  ["disabled"]: "filter-grayscale op-40 pointer-events-none",
  ["btn-sm"]: "gap-1 text-size-sm px-1 py-0.375",
  ["btn-md"]: "gap-2 text-size-md px-md py-xs",
  ["btn-lg"]: "gap-3 text-size-lg px-lg py-1",
} as const;
