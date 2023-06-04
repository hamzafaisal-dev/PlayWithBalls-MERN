import React from "react";
import "./style.css";

export const SlotsInfo = ({ slots, date }) => {
  const calcMeridian = (time) => {
    const afterMeridianRegex = /^(0[0-9]|1[0-1])$/;
    const hrs = time.substring(0, 2);

    let meridian = afterMeridianRegex.exec(hrs);

    meridian ? (meridian = "AM") : (meridian = "PM");

    return meridian;
  };

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
            <span style={{ color: "black", fontWeight: "400" }}>{`${
              slot.startTime
            } ${calcMeridian(slot.startTime)}`}</span>
            <div className="slot-divider"></div>
            <span style={{ color: "black", fontWeight: "400" }}>{`${
              slot.endTime
            } ${calcMeridian(slot.endTime)}`}</span>
          </div>
        </div>
      ))}
    </>
  );
};
