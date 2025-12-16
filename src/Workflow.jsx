import React, { useState } from "react";
import Node from "./Node";

const Workflow = () => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  const [activePort, setActivePort] = useState(null);

  const addNode = () => {
    setNodes([
      ...nodes,
      {
        id: Date.now(),
        x: 100,
        y: 100,
      },
    ]);
  };

  const updateNodePosition = (id, x, y) => {
    setNodes(nodes.map(n => n.id === id ? { ...n, x, y } : n));
  };

  const handlePortClick = (nodeId, type) => {
    if (type === "output") {
      setActivePort({ nodeId, type });
    } else if (type === "input" && activePort) {
      setConnections([...connections, {
        from: activePort.nodeId,
        to: nodeId
      }]);
      setActivePort(null);
    }
  };

  return (
    <div className="workflow-container">
      <button onClick={addNode} className="add-btn">
        ➕ Add Node
      </button>

      <svg className="connections">
        {connections.map((c, i) => {
          const from = nodes.find(n => n.id === c.from);
          const to = nodes.find(n => n.id === c.to);
          if (!from || !to) return null;

          return (
            <line
              key={i}
              x1={from.x + 150}
              y1={from.y + 40}
              x2={to.x}
              y2={to.y + 40}
              stroke="#555"
              strokeWidth="2"
            />
          );
        })}
      </svg>

      {nodes.map(node => (
        <Node
          key={node.id}
          node={node}
          onDrag={updateNodePosition}
          onPortClick={handlePortClick}
        />
      ))}
    </div>
  );
};

export default Workflow;
