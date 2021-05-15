import React from "react";
import { useSelector } from "react-redux";
import WorkflowTodo from "../../Components/Question/WorkflowTodo";

export default function Workflows() {
  const {
    user: { workflows },
  } = useSelector((state) => state);
  return workflows ? (
    <div className="w-full overflow-auto  px-5 py-7 flex flex-col space-y-5">
      {workflows.map((w) => {
        return <WorkflowTodo todo={w} />;
      })}
    </div>
  ) : (
    <div className="border-8 mt-24 mx-auto rounded-full w-24 h-24 border-gray-500 border-dashed animate-spin"></div>
  );
}