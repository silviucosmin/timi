import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span>For bigger project,
        we can meet in Bucharest.
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:sil.cos@yahoo.com">sil.cos@yahoo.com</a>
      </p>
      {/* End .custom-span-contact */}

    
    </>
  );
};

export default Address;
