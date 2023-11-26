import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function EditCurrency() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [currency, setCurrency] = useState({
    name: "",
    code: "",
    sign: "",
  });

  const { name, code, sign } = currency;

  const onIntupChange = (e) => {
    setCurrency({ ...currency, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadCurrency();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8080/currencies/editCurrency/${id}`, currency)
      .then((responce) => {
        if (responce.status == 200) {
          console.log("Currency was edited succesful");
        } else {
          throw new Error("Invalid input");
        }
      })
      .catch((error) => {
        alert("Invalid input");
      });
    navigate("/");
  };

  const loadCurrency = async () => {
    const result = await axios.get(`http://localhost:8080/currencies/${id}`);
    setCurrency(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
          <h2 className="text-cneter m-4">Edit currency</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
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
              <label htmlFor="Code" className="form-label">
                Code
              </label>
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
              <label htmlFor="Sign" className="form-label">
                Sign
              </label>
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
