import { Rule } from "unocss";

export const rules: Rule[] = [
  [/^m-(\d+)$/, ([, d]: any) => ({ margin: `${d}rem` })],
  [/^p-(\d+)$/, (match: any) => ({ padding: `${match[1]}rem` })],
] as const;
