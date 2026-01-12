export type ButtonCategory = "number" | "operator";

export type CalculatorButton = {
  label: string;
  category: ButtonCategory;
};

export const calculatorButtons: CalculatorButton[] = [
  { label: "7", category: "number" },
  { label: "8", category: "number" },
  { label: "9", category: "number" },
  { label: "/", category: "operator" },

  { label: "4", category: "number" },
  { label: "5", category: "number" },
  { label: "6", category: "number" },
  { label: "*", category: "operator" },

  { label: "1", category: "number" },
  { label: "2", category: "number" },
  { label: "3", category: "number" },
  { label: "-", category: "operator" },

  { label: "0", category: "number" },
  { label: ".", category: "number" },
  { label: "+", category: "operator" },
];
