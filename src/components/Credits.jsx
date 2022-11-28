import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import React from "react";

export default function Credits() {
  const [showModal, setShowModal] = React.useState(false);
  const githubIcon = <FontAwesomeIcon icon={faGithub} />

  return (
    <>
      <button
        // className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        className='text-slate-400 absolute bottom-0 right-0 h-16 w-16'
        type="button"
        onClick={() => setShowModal(true)}
      >
        ?
      </button>
      {showModal ? (
        <>
          <div data-aos="slide-up "
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mobile-card"
          >
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none overflow-hidden soft-shadow pl-8 pr-8">
         
                {/*body*/}
                <div className="relative p-6 flex-auto mr-10">
                  <p className="my-4 text-slate-700 text-md">
                    <a href="https://github.com/fama-623" target="_blank">Developed by Farfama  <span className='ml-1'> {githubIcon} </span> </a>
                  </p>
                  <p className=" text-slate-600 text-sm">
                   <a href="https://www.tofugu.com/" target="_blank"> Mnemonic cards - Tofugu </a>
                  </p>
                  <p className=" text-slate-600 text-sm">
                  <a href="https://www.thoughtco.com/" target="_blank"> Audio - thoughtco </a>
                  </p>
                  <p className=" text-slate-600 text-sm">
                  <a href="https://fonts.google.com/?subset=japanese" target="_blank"> Fonts - Google fonts </a>
                  </p>
                  <p className='mt-5 text-slate-600 text-xs'> Send suggestions to farfama.hargaaya@gmail.com</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end  border-t border-solid border-slate-200 rounded-b p-4">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none  ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}