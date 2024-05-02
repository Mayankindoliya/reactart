import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <div>
      <button
        className="px-4 py-2 font-semibold uppercase rounded trext-stone-900 bg-amber-400 hover:bg-amber-500"
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
