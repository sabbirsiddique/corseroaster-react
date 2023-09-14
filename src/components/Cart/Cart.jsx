/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";

const Cart = ({ selectedCourse, totalCreditHour, creditRemaining }) => {
  return (
    <div className="card w-[312px] h-[402px] bg-base-100 shadow-xl rounded-xl sticky top-0">
      <h1 className="text-center">Credit Hour Remainings: {creditRemaining} hr</h1>
      <hr />
      <h1>
        Course Name
        {selectedCourse.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </h1>
      <hr />
      <h1>Total Credit Hour: {totalCreditHour} hr</h1>
    </div>
  );
};

export default Cart;
