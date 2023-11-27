import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function AddRate() {
  let navigate = useNavigate();

  const [Rate, setRate] = useState({
    baseCurrency: "",
    rate: "",
    targetCurrency: "",
  });

  const { baseCurrency, rate, targetCurrency } = Rate;

  const onIntupChange = (e) => {
    setRate({ ...Rate, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/rates/add", Rate);
    navigate("/rates");
  };

  const [currencies, setCurencies] = useState([]);

  useEffect(() => {
    loadCurenices();
  }, []);

  const loadCurenices = async () => {
    const result = await axios.get("http://localhost:8080/currencies/show");
    setCurencies(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
          <h2 className="text-cneter m-4">Add Rate</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="baseCurrency" className="form-label">
                Base Currency
              </label>
              <select
                className="form-select"
                name="baseCurrency"
                onChange={(e) => onIntupChange(e)}
                value={baseCurrency}
              >
                <option value="">Select Base Currency</option>
                {currencies.map((currency, index) => (
                  <option key={index} value={currency.code}>
                    {currency.code}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="targetCurrency" className="form-label">
                Target Currency
              </label>
              <select
                className="form-select"
                name="targetCurrency"
                onChange={(e) => onIntupChange(e)}
                value={targetCurrency}
              >
                <option value="">Select Target Currency</option>
                {currencies.map((currency, index) => (
                  <option key={index} value={currency.code}>
                    {currency.code}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb3">
              <label htmlFor="text" className="form-label">
                Rate
              </label>
              <input
                type={"integer"}
                className="form-control"
                placeholder="Enter an exchange rate"
                name="rate"
                value={rate}
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
