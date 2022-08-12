import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Header() {
  const notify = () => toast("Wow so easy!");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const url = "https://my-json-    server.typicode.com/typicode/demo/posts";
    const res = await axios.get(url);
    setData(res.data);
  };

  return (
    <nav class="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white sm:items-baseline w-full border-b border-slate-200 ">
      <div
        class="mb-2 sm:mb-0 flex flex-row
  "
      >
        <div class="h-10 w-10 self-center mr-2 rounded-full border bg-gray-200">
          {/* <img
              class="h-10 w-10 self-cente rounded-fullr"
              src="https://csscomps.com/images/csscomps.png"
            /> */}
        </div>
        <div>
          <h1 class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">
            Logo
          </h1>
        </div>
      </div>
      {data.map((item, key) => {
        return <li key={key}>{item.title}</li>;
      })}
      <ToastContainer />
      <div class="sm:mb-0 self-center">
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={fetchData}
        >
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Upload</span>
        </button>
      </div>
    </nav>
  );
}

export default Header;
