import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { handleChangexx } from "../features/counter/counterSlice";

const DemoReduxApp = (props) => {
  const [person, setPerson] = useState({
    id: "",
    content: "",
    name: "",
    hinhAnh: "",
  });
  console.log(person);
  const dispatch = useDispatch();
  const member = useSelector((state) => state.counter.member);

  const handleChange = (e) => {
    let { value, name } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPerson({
      ...person,
      hinhAnh: `https://i.pravatar.cc/150?u=${person.name}`,
    });

    // dispatch(handleChangexx(person));
  };
  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">Facebook App</div>
        {member.map((item, index) => {
          return (
            <div className="row text-start" key={index}>
              <div className="col-2 ">
                <div className="card-body">
                  <img
                    src={item.hinhAnh}
                    className="card-img-top"
                    alt={item.hinhAnh}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="col-10">
                <div className="card-body mt-1">
                  <h4 className="card-title text-danger">{item.name}</h4>
                  <p className="card-text">{item.content}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="card-footer text-muted mt-3">
          <form className="text-start">
            <div className="form-group">
              <h6>Name</h6>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <h6>Content</h6>
              <input
                type="text"
                name="content"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <button className="btn btn-success" onClick={handleSubmit}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DemoReduxApp;
