import React, { useState } from "react";

const AgeCalculator = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    if (!day || !month || !year) return;

    const birthDateObj = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();

    let yearDiff = currentDate.getFullYear() - birthDateObj.getFullYear();
    let monthDiff = currentDate.getMonth() - birthDateObj.getMonth();
    let dayDiff = currentDate.getDate() - birthDateObj.getDate();

    if (dayDiff < 0) {
      monthDiff--;
      dayDiff += new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
    }
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }

    const calculatedAge = `${yearDiff} years ${monthDiff} Months ${dayDiff} Days`;
    setAge(calculatedAge);
  };

  return (
    <div className="bg-grey w-[90%] md:w-7/12 lg:w-5/12 rounded">
      <h1 className="text-center text-4xl text-deepBlue font-semibold border-b-2 border-deepGrey p-2 mb-12 bg-white">
        Age Calculator
      </h1>

      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          calculateAge();
        }}
      >
        <div className="flex justify-between w-10/12 lg:w-9/12 mx-auto mb-12">
          <label className="w-[30%] text-lightBlue font-medium text-lg">
            Day
            <input
              className="block border-2 border-lightBlue rounded-sm w-full mt-2 p-4"
              type="number"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              placeholder="DD"
              min="1"
              max="31"
            />
          </label>

          <label className="w-[30%] text-lightBlue font-medium text-lg">
            Month
            <input
              className="block border-2 border-lightBlue rounded-sm w-full mt-2 p-4"
              type="number"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              placeholder="MM"
              min="1"
              max="12"
            />
          </label>

          <label className="w-[30%] text-lightBlue font-medium text-lg">
            Year
            <input
              className="block border-2 border-lightBlue rounded-sm w-full mt-2 p-4"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="YYYY"
              min="1900"
              max={new Date().getFullYear()}
            />
          </label>
        </div>

        <div className="text-center mb-12">
          <button
            className="bg-deeperBlue py-2 px-12 text-white font-medium rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      {age && (
        <p className="text-center text-deepBlue text-2xl md:text-3xl font-medium p-4">
          Your Age is {age}
        </p>
      )}
    </div>
  );
};

export default AgeCalculator;
