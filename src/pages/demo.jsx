import React from "react";

const demoData = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
];

const DemoTable = () => (
  <div style={{ padding: "2rem" }}>
    <h2>Demo Table</h2>
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>ID</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Age</th>
        </tr>
      </thead>
      <tbody>
        {demoData.map((row) => (
          <tr key={row.id}>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {row.id}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {row.name}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {row.age}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DemoTable;
