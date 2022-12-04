import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { increment, addToList } from "../features/counter/counterSlice";
import { selectCount } from "../features/counter/counterSlice";

const DemoUseReduxAGAIN = () => {
  const person = useSelector(selectCount);
  const [contentAdded, setContentAdded] = useState({
    id: "",
    namex: "",
    picture: "",
    content: "",
  });

  const dispatch = useDispatch();

  console.log(contentAdded);

  const renderHMTL = () => {
    return person.map((item, index) => {
      return (
        <div class="card-body" key={index}>
          <div className="row  text-start">
            <div className="col-2">
              <img
                src={item.picture}
                alt={item.picture}
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-10">
              <h6 className="mt-3 text-danger">{item.namex}</h6>
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  const handleChange = (e) => {
    let { value, name } = e.target;
    setContentAdded({ ...contentAdded, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    let objWillBeAdded = {
      ...contentAdded,
      picture: `https://i.pravatar.cc/150?u=${contentAdded.namex},`,
      id: Date.now(),
    };
    setContentAdded(objWillBeAdded);
    dispatch(addToList(contentAdded));
  };

  return (
    <div className="container">
      <div class="card text-center">
        <div class="card-header">Facebook App</div>
        {renderHMTL()}
        <div class="card-footer text-muted">
          <form className="text-start">
            <div className="form-group">
              <h6>Name</h6>
              <input
                type="text"
                className="form-control"
                name="namex"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <h6>Content</h6>
              <input
                type="text"
                className="form-control"
                name="content"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <button className="btn btn-success" onClick={handleUpdate}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DemoUseReduxAGAIN;
