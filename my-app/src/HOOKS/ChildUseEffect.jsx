import React, { memo } from "react";

const ChildUseEffect = (props) => {
  let hello = "anh yeu em";
  let object = { id: 1, name: "hello" };
  console.log(hello);
  console.log(object);
  console.log("hello em re-render");
  return (
    <div>
      <span> {props.tangSoLuong()}</span>
      {/* <h2>hello all</h2> */}
    </div>
  );
};

export default memo(ChildUseEffect);
