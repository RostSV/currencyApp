import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function Exchange() {
  const [rates, setRates] = useState([]);
  const [selectedRate, setSelectedRate] = useState(null);
  const [amountValue, setAmountValue] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [showDiv, setShowDiv] = useState(false);
  const [inputCur, setInputCur] = useState("");
  const [outputCur, setOutputCur] = useState("");

  const { id } = useParams();

  useEffect(() => {
    loadRates();
  }, []);

  const loadRates = async () => {
    const result = await axios.get("http://localhost:8080/rates/show");
    setRates(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(amountValue * selectedRate);
    setShowDiv(true);
    setResultValue(amountValue * selectedRate);
  };

  const handleAmountChange = (e) => {
    setAmountValue(e.target.value);
  };

  const onIntupChange = (e) => {
    const selectedId = e.target.value;
    for (let i = 0; i < selectedId.length; i++) {
      if (rates[i].id == selectedId) {
        setSelectedRate(rates[i].rate);
        setInputCur(rates[i].baseCurrency);
        setOutputCur(rates[i].targetCurrency);
        break;
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
          <h2 className="text-center m-4">Change your money!</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="baseCurrency" className="form-label">
                What to exchange?
              </label>
              <select
                required
                className="form-select"
                name="rate"
                onChange={(e) => onIntupChange(e)}
              >
                <option value="">Select your rate</option>
                {rates.map((rate) => (
                  <option key={rate.id} value={rate.id}>
                    {rate.baseCurrency} to {rate.targetCurrency}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <h6>Rate: 1 to {selectedRate}</h6>

              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <input
                required
                className="form-control m-2"
                type="number"
                placeholder="Enter an amount"
                onChange={(e) => handleAmountChange(e)}
              />
            </div>

            {showDiv && (
              <div className="mb-3">
                <h6>
                  {amountValue} {inputCur} = {resultValue} {outputCur}
                </h6>
              </div>
            )}

            <button type="submit" className="btn btn-outline-primary mt-2">
              Count
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
