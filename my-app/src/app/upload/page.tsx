"use client";

import * as XLSX from "xlsx";
import { useState } from "react";
import axios from "axios";

export default function ExcelToJson() {
  const [jsonData, setJsonData] = useState<any[]>([]);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (evt) => {
      const data = evt.target?.result;
      const workbook = XLSX.read(data, { type: "binary" });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const json = XLSX.utils.sheet_to_json(worksheet);
      setJsonData(json);
    };

    reader.readAsBinaryString(file);
  };

  const Api = async () => {
    try {
      const res = await axios.post("/api/addmany", jsonData);
      console.log("Upload success:", res.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Upload bulk Student data</h2>

      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFile}
        className="file:bg-green-400 file:py-1 file:px-2 file:rounded-full ml-1 my-4"
      />

      {jsonData.length > 0 && (
        <table className="table-auto border-collapse border border-gray-400 w-full mt-4">
          <thead>
            <tr>
              {Object.keys(jsonData[0]).map((key) => (
                <th key={key} className="border border-gray-300 px-2 py-1">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {jsonData.map((row, i) => (
              <tr key={i}>
                {Object.values(row).map((val, j) => (
                  <td key={j} className="border border-gray-300 px-2 py-1">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        onClick={Api}
        className="py-2 px-4 bg-green-500 text-white mt-6 rounded hover:bg-green-600"
      >
        Upload Students
      </button>
    </div>
  );
}
