import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTaskFilter } from "../../redux/slices/taskSlice";

const TaskFilter = () => {
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    dispatch(setTaskFilter(newFilter));
  };

  return (
    <div className="task-filter">
      <button
        onClick={() => handleFilterChange("all")}
        style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
      >
        All Tasks
      </button>
      <button
        onClick={() => handleFilterChange("completed")}
        style={{ fontWeight: filter === "completed" ? "bold" : "normal" }}
      >
        Completed
      </button>
      <button
        onClick={() => handleFilterChange("incomplete")}
        style={{ fontWeight: filter === "incomplete" ? "bold" : "normal" }}
      >
        Incomplete
      </button>
    </div>
  );
};

export default TaskFilter;
