import React, { useState, useEffect } from "react";
import Axios from 'axios'

const options = ["Received", "Expense"];

export default function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [details, setDetails] = useState(
    {
      amount: 0,
      specification: ""
    }
  );
  
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  
   const formSubmit = (e) => {
    // e.preventDefault();
    Axios.post('http://localhost:3002/api/create', details)
    console.log(details);
   }

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

        <form onSubmit={formSubmit} className="form">
                <input 
                  onChange={(e) => { 
                    setDetails((prev)=>{
                      return (
                        {
                          ...prev,
                          amount: e.target.value,
                        }
                      )
                    });
                  }}
                  type="number" placeholder="Enter Amount" />
                <input 
                  onChange={(e) => { 
                    setDetails((prev)=>{
                      return (
                        {
                          ...prev,
                          specification: e.target.value,
                        }
                      )
                    });
                  }}
                  type="text" placeholder="Specification"/>
                <button>Submit</button>
        </form>
      </div>
    </div>
  );
}