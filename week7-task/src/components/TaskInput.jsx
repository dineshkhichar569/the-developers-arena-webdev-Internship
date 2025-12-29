import React, { useState } from "react";

function TaskInput({ onAdd }) {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    onAdd(value);
    setValue("");
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TaskInput;
