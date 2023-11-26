import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [currencies, setCurencies] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadCurenices();
  }, []);

  const loadCurenices = async () => {
    const result = await axios.get("http://localhost:8080/");
    setCurencies(result.data);
  };

  const deleteCurrency = async (id) => {
    await axios.delete(`http://localhost:8080/currencies/delete/${id}`);
    loadCurenices();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">Currency</th>
              <th scope="col">Code</th>
              <th scope="col">Sign</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map((Currency, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>

                <td>{Currency.name}</td>
                <td>{Currency.code}</td>
                <td>{Currency.sign}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary mx-2 "
                    to={`/currencies/editCurrency/${Currency.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2 "
                    onClick={() => deleteCurrency(Currency.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
