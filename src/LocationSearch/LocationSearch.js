import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../Assets/search.svg";

const SearchWrapper = styled.div`
  form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  form > input[type="text"] {
    height: 32px;
    font-size: 1rem;
  }

  form > label {
    font-size: 2rem;
    padding-right: 0.5rem;
  }

  form > button {
    height: 38px;
    width: 34px;
    padding: 0;
  }

  form > button > div {
    width: 100%;
    height: 100%;
    display: grid;
  }

  form > button > div > svg {
    width: 20px;
    height: 20px;
    justify-self: center;
    align-self: center;
  }

  @media (max-width: 400px) {
    form > label[for="search"] {
      font-size: 1.5em;
    }
  }
`;

const LocationSearch = ({ searchLocation, children }) => {
  const [location, updateLocation] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    searchLocation(location);
  };

  const handleChange = e => {
    updateLocation(e.target.value);
  };

  return (
    <SearchWrapper>
      <form method="post" onSubmit={handleSubmit}>
        <label data-test htmlFor="search">
          Location
        </label>
        <input
          type="text"
          id="search"
          data-testid="search-input"
          placeholder={children}
          onChange={handleChange}
        />
        <button data-testid="search-button" type="submit">
          <div>
            <SearchIcon />
          </div>
        </button>
      </form>
    </SearchWrapper>
  );
};

export default LocationSearch;
