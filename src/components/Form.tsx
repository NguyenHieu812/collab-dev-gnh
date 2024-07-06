'use client'
import React, { useState } from "react";
import zodiacData from "./ZodiacData";

export default function Form() {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [status, setStatus] = useState('');
  const [zodiacColor, setZodiacColor] = useState('');

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();
    const date = new Date(birthday);
    const monthDay = `${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

    const zodiacSign = zodiacData.find(
      (sign) => monthDay >= sign.start && monthDay <= sign.end
    );

    if (zodiacSign) {
      setStatus(`${zodiacSign.name}: ${zodiacSign.personality}`);
      setZodiacColor(zodiacSign.color);
    } else {
      setStatus("Ngày sinh không hợp lệ.");
    }
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmitForm}>
      <h1 className="text-4xl font-bold text-gray-800 text-center">Kiểm tra tử vi</h1>
      <div className="mb-5">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên của bạn</label>
        <input
          type="text"
          id="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Nguyen Van A"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="birthday" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ngày sinh của bạn</label>
        <input
          type="date"
          id="birthday"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="text-white bg-primary-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Check Now
      </button>
      {status && (
        <div className="mt-4 text-center text-sm text-gray-600 dark:text-white">
          Cung hoàng đạo của bạn là:
          <span className={zodiacColor}>
            {status.split(":")[0]}
          </span>
          - Bạn là người{`: ${status.split(":")[1]}`}
        </div>
      )}
    </form>
  );
}
