/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { FiDollarSign } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const [creditRemaining, setCreditRemaining] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);

  const handleSelectCourse = (course) => {
    const isExist = selectedCourse.find((courses) => courses.id == course.id);

    let credit = course.credit;
    let price = course.price

    if (isExist) {
        return toast.error("Oops! You can't select same item twice.");
    } else {
      selectedCourse.forEach((courses) => {
        credit = credit + courses.credit;
        price = price + courses.price;
      });
      const remaining = 20 - credit;

      if (credit > 20) {
        return toast.error("Uh-oh! You can't cross the credit limit (<=20)!");
      } else {
        setTotalCreditHour(credit);
        setCreditRemaining(remaining);
        setTotalPrice(price);

        setSelectedCourse([...selectedCourse, course]);
      }
    }
  };

  return (
    
    <div className="max-w-screen-2xl flex mx-auto">
      <div className="flex mb-[84px] flex-wrap gap-14 mx-auto">
        {allCourses.map((course) => (
          <div
            key={course.id}
            className="card bg-white w-[312px] h-[402px] rounded-xl"
          >
            <figure className="px-4 pt-4">
              <img src={course.img} className="rounded-xl w-full" />
            </figure>
            <div className="px-4">
              <p className="mt-4 text-lg font-semibold">{course.title}</p>
              <p className="mt-4 text-sm font-normal leading-6 text-[#1c1b1b99]">
                {course.details}
              </p>

              <div className="flex justify-around mt-3 items-center">
                <FiDollarSign></FiDollarSign>
                <p className="text-base font-medium text-[#1c1b1b99]">Price: {course.price}</p>
                <BsBook></BsBook>
                <p className="text-base font-medium text-[#1c1b1b99]">Credit: {course.credit}hr</p>
              </div>
            
              <button
                onClick={() => handleSelectCourse(course)}
                className="bg-[#2F80ED] w-full mt-3 text-white text-lg h-10 font-semibold rounded-lg p-1"
              >
                Select
              </button>
            </div>
            <div><Toaster></Toaster></div>
          </div>
        ))}
      </div>

      <div className="mx-auto">
        <Cart
          selectedCourse={selectedCourse}
          totalCreditHour={totalCreditHour}
          creditRemaining={creditRemaining}
          totalPrice={totalPrice}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
