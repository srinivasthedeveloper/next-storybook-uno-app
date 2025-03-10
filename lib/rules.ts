import { Rule } from "unocss";

export const rules: Rule[] = [
  [/^m-(\d*\.?\d+)/, ([, d]: any) => ({ margin: `${d}rem` })],
  [
    /^mx-(\d*\.?\d+)/,
    ([, d]: any) => [
      { "margin-left": `${d}rem` },
      { "margin-right": `${d}rem` },
    ],
  ],
  [
    /^my-(\d*\.?\d+)/,
    ([, d]: any) => [
      { "margin-top": `${d}rem` },
      { "margin-bottom": `${d}rem` },
    ],
  ],
  [/^p-(\d*\.?\d+)/, (match: any) => ({ padding: `${match[1]}rem` })],
  [
    /^px-(\d*\.?\d+)/,
    ([, d]: any) => [
      { "padding-left": `${d}rem` },
      { "padding-right": `${d}rem` },
    ],
  ],
  [
    /^py-(\d*\.?\d+)/,
    ([, d]: any) => [
      { "padding-top": `${d}rem` },
      { "padding-bottom": `${d}rem` },
    ],
  ],
] as const;
