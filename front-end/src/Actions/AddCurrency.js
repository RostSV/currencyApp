import axios from "axios";
import { Alert } from "bootstrap";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function AddCurrency() {
  let navigate = useNavigate();

  const [currency, setCurrency] = useState({
    name: "",
    code: "",
    sign: "",
  });

  const { name, code, sign } = currency;

  const onIntupChange = (e) => {
    setCurrency({ ...currency, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8080/currencies/save", currency)
      .then((responce) => {
        if (responce.status == 200) {
          console.log("Currency added succesful");
        } else {
          throw new Error("Invalid input");
        }
      })
      .catch((error) => {
        alert("Invalid input");
      });

    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
          <h2 className="text-cneter m-4">Add currency</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb3">
              <label className="form-label">Name</label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter currency name"
                name="name"
                value={name}
                onChange={(e) => onIntupChange(e)}
              ></input>
            </div>

            <div className="mb3">
              <label className="form-label">Code</label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter currency code"
                name="code"
                value={code}
                onChange={(e) => onIntupChange(e)}
              ></input>
            </div>

            <div className="mb3">
              <label className="form-label">Sign</label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter currency sign"
                name="sign"
                value={sign}
                onChange={(e) => onIntupChange(e)}
              ></input>
            </div>

            <button type="submit" className="btn btn-outline-primary mt-2">
              Submit
            </button>

            <Link className="btn btn-outline-danger mt-2 mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
