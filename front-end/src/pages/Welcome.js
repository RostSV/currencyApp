import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Welcome() {
  const name = "Rostyslav Svistula";
  const email = "rostyslav.svistula@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/rostyslav-svistula/";
  const githubUrl = "https://github.com/RostSV";
  const projectDescription =
    "It is a simple full-stack program to deal with currencies and rates. Main functions: 'create new currency', 'create new exchange rate with currencies you have', 'convert one corrency to another";
  const tools = "Java, Spring, PostgreSQL, React, JS, HTML, CSS, Axious";

  return (
    <div className="description-container">
      <section className="personal-info">
        <h6 className="m-3">Made by:</h6>
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <div className="social-links">
          <a
            className="m-2"
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            className="m-2"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="git-hub-icon"
            />
          </a>
        </div>

        <div className="ukrainian-flag">
          <div className="blue-stripe"></div>
          <div className="yellow-stripe"></div>
        </div>
      </section>

      <section className="project-description">
        <h3>Project Description</h3>
        <p>{projectDescription}</p>
      </section>

      <section className="Tools i've used">
        <h4>Tools i've used</h4>
        <ul>{tools}</ul>
      </section>
    </div>
  );
}
