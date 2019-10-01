import React, { useState } from "react";
import styled from "styled-components";

const NavWrapper = styled.nav`
  button {
    background: none;
    border: none;
    width: 100%;
    height: 100%;
    color: #647084;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
  }

  li {
    letter-spacing: 2px;
    list-style: none;
    padding: 0;
  }

  li:not(:last-child) {
    border-right: 1px solid #647084;
  }

  li.selected > button {
    font-weight: 900;
    color: #dedede;
  }

  ul {
    display: flex;
    flex-direction: row;
  }
`;

const Nav = ({ items, setItem }) => {
  const [state, setState] = useState({ selected: items[0] });
  const handleNavClick = item => {
    setItem(item);
    setState({ selected: item });
  };

  return (
    <NavWrapper>
      <ul>
        {items.map((item, i) => (
          <li
            key={"nav-item-" + i}
            className={item === state.selected ? "selected" : ""}
          >
            <button onClick={() => handleNavClick(item)}>{item}</button>
          </li>
        ))}
      </ul>
    </NavWrapper>
  );
};

export default Nav;
