import type { PropsWithChildren } from "react";

import RadioGroupItem from "./RadioGroupItem";
import RadioGroupTitle from "./RadioGroupTitle";

const RadioGroupRoot = ({ children }: PropsWithChildren) => {
  return <fieldset className="flex gap-1">{children}</fieldset>;
};

type RadioGroupComponent = typeof RadioGroupRoot & {
  Title: typeof RadioGroupTitle;
  Item: typeof RadioGroupItem;
};

const RadioGroup = RadioGroupRoot as RadioGroupComponent;
RadioGroup.Title = RadioGroupTitle;
RadioGroup.Item = RadioGroupItem;

export default RadioGroup;
