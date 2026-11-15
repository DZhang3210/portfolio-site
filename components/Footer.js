import React from "react";

const Footer = () => {
  return (
    <div className="py-10 border-t border-slate-200">
      <div className="text-gray-600">
        <div className="text-2xl font-bold text-main">David Zhang</div>
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
