/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { FiDollarSign } from "react-icons/fi";
import { BsBook } from "react-icons/bs";

const Home = () => {
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto flex">
      <div className="flex flex-wrap gap-8 w-2/3 mx-auto">
        {
            allCourses.map((course)=>(
                <div key={course.id} className="card w-[312px] h-[402px] bg-base-100 shadow-xl rounded-xl">
          <figure className="px-4 pt-4">
            <img
              src={course.img}
              className="rounded-xl w-full"
            />
          </figure>
          <div className="px-4">
            <p className="mt-4">{course.title}</p>
            <p className="mt-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <div className="flex justify-around mt-3 items-center">
              <FiDollarSign></FiDollarSign>
              <p>Price: {course.price}</p>
              <BsBook></BsBook>
              <p>Credit: {course.credit}</p>
            </div>

            <button className="bg-[#2F80ED] w-full mt-3 text-white rounded-lg p-1">
              Select
            </button>
          </div>
        </div>
            ))
        }
      </div>

      <div className="w-1/3 mx-auto">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
