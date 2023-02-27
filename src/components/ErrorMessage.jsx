import React from "react";
import PropTypes from "prop-types";

//Renders an error display the correct answer when answering wrong
export default function ErrorMessage({ error }) {
  return (
    <p data-aos="fade-up" className="text-red-600 , text-center ">
      {" "}
      {error}{" "}
    </p>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.bool.isRequired,
};
