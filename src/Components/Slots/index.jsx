import React from "react";

export const SlotsInfo = ({ slots, date }) => {
  if (!slots) {
    return null;
  }

  return (
    <>
      {slots.map((slot) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            borderColor: "black",
            backgroundColor: "#2ecc71",
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "15px",
          }}
        >
          <span
            style={{ marginRight: "5px" }}
          >{`${slot.dayOfWeek}, ${date}`}</span>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              marginLeft: "5px",
              padding: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{ color: "black", fontWeight: "400" }}
            >{`${slot.startTime}`}</span>
            <div
              style={{
                backgroundColor: "black",
                height: "15px",
                width: "1px",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            ></div>
            <span
              style={{ color: "black", fontWeight: "400" }}
            >{`${slot.endTime}`}</span>
          </div>
        </div>
      ))}
    </>
  );
};
