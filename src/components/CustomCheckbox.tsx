import React from 'react';
import './CustomCheckbox.css';

interface CustomCheckboxProps {
  isChecked: boolean;
  isHovered: boolean;
  onChange: (value: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ isChecked, isHovered, onChange }) => {

  const handleCheckboxChange = () => {
    onChange(!isChecked);
  };

  return (
    <div
      className={`custom-checkbox ${isChecked ? 'checked' : ''} ${isHovered ? 'hovered' : ''}`}
      onClick={handleCheckboxChange}
    >
      {isChecked && (
        <svg className="checkmark" viewBox="0 0 24 24">
          <path fill="none" stroke="white" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      )}
      {isHovered && (
        <svg className="checkmark" viewBox="0 0 24 24">
          <path fill="none" stroke="white" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
  );
}

export default CustomCheckbox;
