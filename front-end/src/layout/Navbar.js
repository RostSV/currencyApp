import React from "react";
import { Link } from "react-router-dom";
export default function () {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            CurrencyExchange
          </a>

          <Link className="btn btn-outline-light" to="/currencies/addCurrency">
            Add currency
          </Link>
          <Link className="btn btn-outline-light" to="/currencies/show">
            Show currencies
          </Link>
          <Link className="btn btn-outline-light" to="/rates">
            Show rates
          </Link>

          <Link className="btn btn-outline-light" to="/exchange">
            Exchange
          </Link>
        </div>
      </nav>
    </div>
  );
}
