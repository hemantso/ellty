import React, { useState } from 'react';
import CustomCheckbox from './components/CustomCheckbox';
import './App.css';

function App() {
  const initialCheckboxes = {
    allPages: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  };

  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);
  const [hover, setHover] = useState({
    allPages: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  const handleCheckboxChange = (key, value) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleHoverChange = (key, value) => {
    setHover((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div className="container">
      <div
        className={`form-group ${checkboxes.allPages || hover.allPages ? 'checked' : ''}`}
        onMouseEnter={() => handleHoverChange('allPages', true)}
        onMouseLeave={() => handleHoverChange('allPages', false)}
        onClick={() => handleCheckboxChange('allPages', !checkboxes.allPages)}
      >
        <label className="form-label">All pages</label>
        <CustomCheckbox
          isChecked={checkboxes.allPages}
          isHovered={hover.allPages}
          onChange={(value) => handleCheckboxChange('allPages', value)}
        />
      </div>
      <div className="hr-wrapper">
        <hr className="line-dropdown" />
      </div>
      {[1, 2, 3, 4].map((pageNumber) => (
        <div
          key={`page${pageNumber}`}
          className={`form-group ${checkboxes[`page${pageNumber}`] || hover[`page${pageNumber}`] ? 'checked' : ''}`}
          onMouseEnter={() => handleHoverChange(`page${pageNumber}`, true)}
          onMouseLeave={() => handleHoverChange(`page${pageNumber}`, false)}
          onClick={() => handleCheckboxChange(`page${pageNumber}`, !checkboxes[`page${pageNumber}`])}
        >
          <label className="form-label">Page {pageNumber}</label>
          <CustomCheckbox
            isChecked={checkboxes[`page${pageNumber}`]}
            isHovered={hover[`page${pageNumber}`]}
            onChange={(value) => handleCheckboxChange(`page${pageNumber}`, value)}
          />
        </div>
      ))}
      <div className="hr-wrapper">
        <hr className="line-dropdown" />
      </div>
      <button className="done-button">Done</button>
    </div>
  );
}

export default App;
