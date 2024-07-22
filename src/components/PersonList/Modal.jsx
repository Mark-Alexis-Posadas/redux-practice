import React from "react";
import { closeModal } from "../../features/person-list/personListData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";

export default function Modal({ dispatch, inputData }) {
  return (
    <div className="fixed top-0 left-0 bg-[rgba(0,0,0,0.4)] w-full h-full flex items-center justify-center">
      <div className="bg-white p-2 rounded w-[900px]">
        <header className="flex items-center justify-between">
          <h1 className="font-bold text-md">Edit</h1>
          <button>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </header>

        <main>
          <Form />
        </main>

        <footer className="flex items-center gap-3">
          <button className="text-white p-2 rounded bg-blue-600">submit</button>
          <button
            className="text-white p-2 rounded bg-red-600"
            onClick={() => dispatch(closeModal())}
          >
            cancel
          </button>
        </footer>
      </div>
    </div>
  );
}
