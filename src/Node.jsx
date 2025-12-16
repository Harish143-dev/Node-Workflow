import React, { useState } from "react";

const Node = ({ node, onDrag, onPortClick }) => {
  const [dragging, setDragging] = useState(false);

  const onMouseMove = (e) => {
    if (!dragging) return;
    onDrag(node.id, e.clientX - 75, e.clientY - 20);
  };

  return (
    <div
      className="node"
      style={{ left: node.x, top: node.y }}
      onMouseDown={() => setDragging(true)}
      onMouseUp={() => setDragging(false)}
      onMouseMove={onMouseMove}
    >
      <div
        className="port input"
        onClick={() => onPortClick(node.id, "input")}
      />

      <span>Node</span>

      <div
        className="port output"
        onClick={() => onPortClick(node.id, "output")}
      />
    </div>
  );
};

export default Node;
