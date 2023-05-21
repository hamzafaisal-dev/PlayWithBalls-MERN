import React from "react";

export const getCurrentDate = (separator = "") => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return (
    <div style={{ color: "black" }}>
      {` ${year}${separator}${
        month < 10 ? `0${month}` : `${month}`
      }${separator}$
      {date}`}
    </div>
  );
};
