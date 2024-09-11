import React from 'react';

const CallInformationSection = () => {
  return (
    <div>
        <div className="p-4 bg-white shadow-md rounded-lg">
  <div className="grid grid-cols-[20%,80%] gap-x-8 gap-y-4">
    <div className="text-gray-500 text-right">Call To</div>
    <div className="font-semibold text-blue-500">Chau Kitzman (Sample)</div>

    <div className="text-gray-500 text-right">Related To</div>
    <div className="font-semibold">
    <input
        type="text"
            placeholder="—"
    className="p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none  "
  />
</div>


    <div className="text-gray-500 text-right">Call Type</div>
    <div className="font-semibold">Outbound</div>

    <div className="text-gray-500 text-right">Outgoing Call Status</div>
    <div className="font-semibold ">Overdue</div>

    <div className="text-gray-500 text-right">Call Start Time</div>
    <div className="font-semibold">03/07/2024 00:41</div>

    <div className="text-gray-500 text-right">Call Owner</div>
    <div className="font-semibold">Sabu John Bosco</div>

    <div className="text-gray-500 text-right">Subject</div>
    <div className="font-semibold">Follow up with Lead</div>

    <div className="text-gray-500 text-right">Created By</div>
    <div>
      <p className="font-semibold">Sabu John Bosco</p>
      <p className="text-gray-500 text-sm">Tue, 2 Jul 2024 22:41</p>
    </div>

    <div className="text-gray-500 text-right">Modified By</div>
    <div>
      <p className="font-semibold">Sabu John Bosco</p>
      <p className="text-gray-500 text-sm">Tue, 2 Jul 2024 22:41</p>
    </div>
  </div>
</div>

<div className="mt-4 p-4 bg-white shadow-md rounded-lg">
  <div className="mt-6">
    <h2 className="text-lg font-semibold">Purpose Of Outgoing Call</h2>
    <div className="mt-2 p-4 grid grid-cols-[20%,80%] gap-x-8 gap-y-4">
      <div className="text-gray-500 text-right">Call Purpose</div>
      <div className="font-semibold">Prospecting</div>

      <div className="text-gray-500 text-right">Call Agenda</div>
      <div className="font-semibold">—</div>
    </div>
  </div>
</div>


<div className="mt-4 p-4 bg-white shadow-md rounded-lg">
  <div className="mt-6">
    <div className="flex items-center">
      <h2 className="text-lg font-semibold">Notes</h2>
      <button className="ml-64 mr-64 flex items-center  px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-lg">
        <span>Recent Last</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>

    <hr className="my-4 border-gray-300" />

    <textarea
      className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
      placeholder="Add a note..."
    ></textarea>
  </div>
</div>

      </div>
  );
};

export default CallInformationSection;
