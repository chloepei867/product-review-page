import BreakdownItem from "./BreakdownItem";

export default function ReviewBreakdown() {
  return (
    <div className="flex flex-col gap-4 justify-between ">
      <BreakdownItem label={"Excellent"} percentage={39} bgColor={"#16A34A"} />
      <BreakdownItem label={"Good"} percentage={35} bgColor={"#22C55E"} />
      <BreakdownItem label={"Average"} percentage={6} bgColor={"#EAB308"} />
      <BreakdownItem
        label={"Below Average"}
        percentage={19}
        bgColor={"#FDE047"}
      />
      <BreakdownItem label={"Poor"} percentage={0} bgColor={"#F5C634"} />
    </div>
  );
}
