import { useState } from "react";

export default function Filter(props: any) {
  const { setQuery } = props;
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col md:flex-row items-center my-4">
      <div className="flex items-center mr-2 p-1 relative border-gray-300 bg-white rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mx-2 text-neutral-700 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          onClick={() => setQuery(value)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          onChange={({ target: { value } }) => setValue(value.toLowerCase())}
          value={value}
          type="text"
          name="gaemeSearch"
          id="gaemeSearch"
          className="w-64 h-12 xs:w-96  shadow-md  block pl-7 p-2 sm:text-sm border-none rounded-md"
          placeholder="name..."
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mx-2 text-neutral-700 cursor-pointer"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => {
            setValue("");
            setQuery("");
          }}
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
