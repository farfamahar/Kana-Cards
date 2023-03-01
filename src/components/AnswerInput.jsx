import { useEffect } from "react";
import React from "react";
import PropTypes from "prop-types";

//Renders the answer form where the user submits a quiz answer
export default function AnswerInput({
  pause,
  input,
  handleSubmit,
  handleChange,
}) {

    //focus on input when quiz starts
    useEffect(() => {
        const x = document.getElementById("kanaInput");
        x.focus({
          preventScroll: true,
        });
    }, []);
  return (
    <form
      id="myform"
      onSubmit={(event) => handleSubmit(event)}
      autoComplete="off"
    >
      {!pause && (
        <input
          id="kanaInput"
          autoFocus
          type="text"
          value={input}
          onChange={handleChange}
          className="block w-24 mx-auto pb-2 bg-transparent border-b-2 border-b-black outline-none
              text-center text-2xl "
        />
      )}
      {/* {props.isCorrect && <input 
                id="kanaInput"
                disabled
                autoFocus
                type="text"
                value={props.input}
                onChange={props.handleChange}
                className="block w-24 mx-auto pb-2 bg-transparent border-b-2 border-green-500 outline-none
              text-center text-2xl text-green-500 "/>} */}
      <button id="submitForm"></button>
    </form>
  );
}

AnswerInput.propTypes = {
  input: PropTypes.string.isRequired,
  pause: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};
