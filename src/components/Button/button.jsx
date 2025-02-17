import React from 'react';

const Button = ({ text, bgColor, color }) => {
  return (
    <div className={`${bgColor} ${color} px-4 py-2 rounded-lg cursor-pointer hover:opacity-80`}>
      {text}
    </div>
  );
};

export default Button;
