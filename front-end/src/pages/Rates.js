import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Rates() {
  const [rates, setRates] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    loadRates();
  }, []);

  const loadRates = async () => {
    const result = await axios.get("http://localhost:8080/rates/show");
    setRates(result.data);
  };

  const deleteRate = async (id) => {
    await axios.delete(`http://localhost:8080/rates/delete/${id}`);
    loadRates();
  };

  return (
    <div>
      <div className="container">
        <div className="py-4">
          <table className="table">
            <caption>List of exchange rates</caption>
            <thead className="bg-secondary text-white">
              <tr>
                <th>From</th>
                <th>To</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((Rate, index) => (
                <tr>
                  <td>1 {Rate.baseCurrency}</td>
                  <td>
                    {Rate.rate} {Rate.targetCurrency}
                  </td>

                  <button
                    type="delete"
                    className="btn btn-danger btn-outline-danger mt-2 pr-2"
                    onClick={() => deleteRate(Rate.id)}
                  >
                    Delete
                  </button>
                </tr>
              ))}
            </tbody>
          </table>

          <Link className="btn btn-primary" to="/rates/add">
            Add exchange rate
          </Link>
        </div>
      </div>
    </div>
  );
}
