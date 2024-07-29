export default function ConfirmationPopUp({ handleConfirmDelete }) {
  return (
    <div className="fixed top-0 left-0 bg-[rgba(0,0,0,0.4)] w-full h-full overflow-hidden flex items-center justify-center">
      <div className="w-[500px] rounded p-3 bg-white shadow-md text-center">
        <p>
          Are you sure to delete this <b>item?</b>
        </p>
        <div className="flex items-center justify-center gap-3 mt-5">
          <button
            className="text-white text-sm rounded p-2 bg-red-600"
            onClick={handleConfirmDelete}
          >
            Delete
          </button>
          <button className="text-white text-sm rounded p-2 bg-blue-600">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
