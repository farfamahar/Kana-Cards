import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import PropTypes from "prop-types";

export default function CreditsModal({ closeModal }) {
  const githubIcon = <FontAwesomeIcon icon={faGithub} />;

  return (
    <div>
      <div
        data-aos="slide-up"
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mobile-card"
      >
        <div className="relative w-auto my-6 mx-auto max-w-4xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none overflow-hidden soft-shadow pl-8 pr-8">
            {/*body*/}
            <div className="relative p-6 flex-auto mr-10">
              <p className="my-4 text-slate-700 text-md">
                <a
                  href="https://github.com/fama-623"
                  rel="noreferrer"
                  target="_blank"
                  data-testid="github-link"
                >
                  Developed by Farfama{" "}
                  <span className="ml-1"> {githubIcon} </span>{" "}
                </a>
              </p>
              <p className=" text-slate-600 text-sm">
                <a
                  href="https://www.tofugu.com/"
                  rel="noreferrer"
                  target="_blank"
                  data-testid="tofugu-link"
                >
                  {" "}
                  Mnemonic cards - Tofugu{" "}
                </a>
              </p>
              <p className=" text-slate-600 text-sm">
                <a
                  href="https://www.thoughtco.com/"
                  rel="noreferrer"
                  target="_blank"
                  data-testid="thoughtco-link"
                >
                  {" "}
                  Audio - thoughtco{" "}
                </a>
              </p>
              <p className=" text-slate-600 text-sm">
                <a
                  href="https://fonts.google.com/?subset=japanese"
                  rel="noreferrer"
                  data-testid="google-link"
                  target="_blank"
                >
                  {" "}
                  Fonts - Google fonts{" "}
                </a>
              </p>
              <p className="mt-5 text-slate-600 text-xs">
                {" "}
                Send suggestions to farfama.hargaaya@gmail.com
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end  border-t border-solid border-slate-200 rounded-b p-4">
              <button
                className="text-red-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none  ease-linear transition-all duration-150"
                type="button"
                data-testid="close-credits-button"
                onClick={() => closeModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
}

CreditsModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
