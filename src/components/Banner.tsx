import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white dark:bg-gray-900 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div className="max-w-md text-center lg:text-left">
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-800">GNH NUMEROLOGY</h1>
        <p className="mt-4 text-gray-600">
          Thấu hiểu được nhu cầu khám phá bí ẩn đằng sau những con số và tên của bản thân, chúng tôi đem đến cho bạn những giải pháp được nghiên cứu và chứng nghiệm với các nhà thần số học có danh tiếng trong ngành.
        </p>
        <button className="mt-6 px-6 py-2 bg-primary-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Xem thêm
        </button>
      </div>
      <div className="mt-6 lg:mt-0 lg:ml-6 flex-shrink-0">
        <Image src="/img/gnhlogo.PNG" className="object-cover rounded-lg" height={256} width={256} alt="GNH Logo" />
      </div>
    </div>
  );
}
