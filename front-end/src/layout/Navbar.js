import React from "react";
import { Link } from "react-router-dom";
export default function () {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/welcome">
            CurrencyExchange
          </a>

          <Link className="btn btn-outline-light" to="/currencies/addCurrency">
            Add currency
          </Link>
          <Link className="btn btn-outline-light" to="/rates">
            Show rates
          </Link>

          <Link className="btn btn-outline-light" to="/exchange">
            Echange
          </Link>
        </div>
      </nav>
    </div>
  );
}
