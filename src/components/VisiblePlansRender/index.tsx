import { JSX } from "react";

type PriceKey = "Silver" | "Gold" | "Platinum";

type VisiblePlansRendererProps = {
  plans: PriceKey[];
  render: (plan: PriceKey, index: number) => JSX.Element;
};

const VisiblePlansRenderer = ({ plans, render }: VisiblePlansRendererProps) => {
  return <>{plans.map(render)}</>;
};

export default VisiblePlansRenderer;
