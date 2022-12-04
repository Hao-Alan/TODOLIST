import React, { memo } from "react";

const ChildUseMemo = (props) => {
  console.log("hellooooo");
  return (
    <table className="table">
      <tbody>
        {props.objectMemo.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default memo(ChildUseMemo);
