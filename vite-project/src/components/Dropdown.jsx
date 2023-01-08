import React, { useState } from "react";


const options = ["Received", "Expense"];

export default function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <div className="dropdown">
      <div className="drop-down-container">
        <div className="drop-down-header" onClick={toggling}>
            <p>{selectedOption || "Choose Option"}</p>
            <img src="src/images/arrow.png" />
        </div>
        {isOpen && (
          <div className="drop-down-list-container">
            <ul>
              {options.map(option => (
                <li onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}

        <form className="form">
                <input type="number" placeholder="Enter Amount"/>
                <input type="text"placeholder="Specification"/>
                <button>Submit</button>
        </form>
      </div>
    </div>
  );
}