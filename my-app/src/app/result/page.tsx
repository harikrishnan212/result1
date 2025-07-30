"use client";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";

function Result() {
  const [roll_number, SetRoll_number] = useState("");
  const [dob, setDob] = useState("");

  const [data, setData] = useState([]);
  const Api = async () => {
    try {
      const req = await axios.post("/api/getresult", { roll_number, dob });

      //   console.log(req.data);
      setData(req.data.data);
      console.log(data);
    } catch (error) {}
  };

  return (
    <div className="h-screen w-full flex  justify-center items-center bg-black">
      <div className="flex flex-col bg-white py-10 px-4 rounded w-[30rem] gap-5 shadow-2xl text-black">
        <div className="flex justify-center">
          <div>
            <h1 className="text-center text-xl">Periyar University Result</h1>
            <h1 className="text-center text-sm text-gray-400">Salem-636011</h1>
          </div>
        </div>
        <input
          type="text"
          placeholder="Enter your Roll Number"
          onChange={(e) => SetRoll_number(e.target.value)}
          className="py-1 px-2  border border-gray-500 rounded focus:outline-none focus:border focus:border-black focus:bg-gray-200"
        />
        <input
          type="text"
          placeholder="Enter your Date of Birth"
          onChange={(e) => setDob(e.target.value)}
          className="py-1 px-2  border border-gray-500 rounded focus:outline-none focus:border focus:border-black focus:bg-gray-200"
        />
        <button
          onClick={Api}
          className="bg-blue-400 py-1 px-2 text-white rounded"
        >
          Get Result
        </button>
        <h1 className="text-red-500 text-center font-semibold"> {data.includes("Pls Enter valid data") ? "Invalid User" : ""}</h1>
      </div>
    </div>
  );
}

export default Result;
