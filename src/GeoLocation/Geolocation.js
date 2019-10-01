import React, { useState } from "react";
import styled from "styled-components";
import GpsIcon from "../Assets/gps-fixed-indicator";

const FormWrapper = styled.div`
  label.no-error {
    opacity: 0;
  }

  label.error {
    opacity: 1;
  }

  div.error-container {
    height: 28px;
  }

  form svg {
    width: 14px;
    height: 14px;
    fill: #555;
  }

  form .svg-blue > svg path {
    fill: #289af7;
  }

  form input[type="checkbox"] {
    width: 15px;
    height: 15px;
  }

  form label[for="locate-checkbox"] {
    font-size: 20px;
  }

  form label.error-label[for="locate-checkbox"] {
    transition: opacity 500ms ease;
    color: red;
    font-size: 16px;
  }
`;

const Geolocation = ({ updateLocation, children }) => {
  const [errorMessage, setErrorMessage] = useState({
    message: "",
    visible: false
  });

  const [checkboxState, setCheckbox] = useState({ checked: false });

  const setError = message => {
    if (!errorMessage.visible) {
      setTimeout(() => {
        setErrorMessage({ message: message, visible: false });
      }, 3000);
    }

    setErrorMessage({ message: message, visible: true });
  };

  const handleChange = t => {
    setCheckbox({ checked: t.checked });

    if (t.checked) {
      if (navigator.geolocation) {
        updateLocation(
          navigator.geolocation.getCurrentPosition(
            pos => {
              updateLocation(pos);
            },
            error => {
              updateLocation({ coords: null, error: error });
              t.checked = false;
              setCheckbox({ checked: false });
              setError(error.message);
            }
          )
        );
      } else {
        t.checked = false;
        setCheckbox({ checked: false });
        const error = { message: "geolocation not supported", code: 99 };
        setError(error.message);
        updateLocation({
          coords: null,
          error: error
        });
      }
    }
  };

  return (
    <FormWrapper>
      <form method="post">
        <label htmlFor="locate-checkbox">{children}</label>
        <input
          type="checkbox"
          data-testid="locate-toggle"
          onChange={e => handleChange(e.target)}
        />
        <span className={checkboxState.checked ? "svg-blue" : ""}>
          <GpsIcon />
        </span>
        <div className="error-container">
          <label
            className={
              "error-label " + (errorMessage.visible ? "error" : "no-error")
            }
            htmlFor="locate-checkbox"
          >
            {errorMessage.message}
          </label>
        </div>
      </form>
    </FormWrapper>
  );
};

export default Geolocation;
