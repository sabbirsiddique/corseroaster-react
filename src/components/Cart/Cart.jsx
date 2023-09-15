/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";

const Cart = ({
  selectedCourse,
  totalCreditHour,
  creditRemaining,
  totalPrice,
}) => {
  return (
    <div className="card w-[312px] min-h-fit bg-white rounded-xl sticky top-0 p-4">
      <h1 className="text-center mb-5 text-lg font-bold text-[#2F80ED]">
        Credit Hour Remaining: {creditRemaining} hr
      </h1>
      <hr className="mb-5" />
      <h1 className="mb-5 text-xl font-bold">Course Name</h1>
      <h1>
        {selectedCourse.map((course) => (
          <li
            className="text-[#1c1b1b99] font-medium leading-[32px] list-decimal"
            key={course.id}
          >
            {course.title}
          </li>
        ))}
      </h1>

      <hr className="mt-5" />
      <h1 className="mt-5 text-base font-medium ">
        Total Credit Hour: {totalCreditHour}
      </h1>
      <hr className="mt-5" />
      <h1 className="mt-5 text-base font-semibold">
        Total Price: {totalPrice} USD
      </h1>
    </div>
  );
};

export default Cart;
