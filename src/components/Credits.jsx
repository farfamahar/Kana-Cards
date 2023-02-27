import React from "react";
import CreditsModal from "./CreditsModal";

export default function Credits() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <button
        className="text-slate-400 absolute bottom-0 right-0 h-16 w-16"
        type="button"
        data-testid="credits-modal-btn"
        onClick={() => setShowModal(true)}
      >
        ?
      </button>
      {showModal ? <CreditsModal closeModal={setShowModal} /> : null}
    </div>
  );
}
