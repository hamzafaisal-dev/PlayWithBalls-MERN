import React from "react";
import "./style.css";

export const SlotsInfo = ({ slots, date }) => {
  if (!slots) {
    return null;
  }

  return (
    <>
      {slots.map((slot) => (
        <div className="slot-div" key={slot._id}>
          <span
            style={{ marginRight: "5px" }}
          >{`${slot.dayOfWeek}, ${date}`}</span>
          <div className="slot-inner-div">
            <span
              style={{ color: "black", fontWeight: "400" }}
            >{`${slot.startTime}`}</span>
            <div className="slot-divider"></div>
            <span
              style={{ color: "black", fontWeight: "400" }}
            >{`${slot.endTime}`}</span>
          </div>
        </div>
      ))}
    </>
  );
};
