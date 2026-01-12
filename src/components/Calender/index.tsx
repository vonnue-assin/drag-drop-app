import { useState } from "react";

import {
  DAYS_OF_WEEK,
  getDaysInMonth,
  getFirstDayOfMonth,
  MONTHS,
} from "../../utils/calender";

import "./styles.css";

const Calendar = () => {
  const [viewDate, setViewDate] = useState(new Date());

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayIndex = getFirstDayOfMonth(year, month);

  const changeMonth = (offset: number) => {
    setViewDate(new Date(year, month + offset, 1));
  };

  return (
    <>
      <h2 className="header-calender">CALENDER</h2>
      <div
        className="calender-container"
        style={{
          maxWidth: "400px",
          margin: "auto",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <button
            onClick={() => changeMonth(-1)}
            className="set-button"
            style={{ cursor: "pointer" }}
          >
            Prev
          </button>
          <h3 className="months">
            {MONTHS[month]} {year}
          </h3>
          <button
            className="set-button"
            style={{ cursor: "pointer" }}
            onClick={() => changeMonth(1)}
          >
            Next
          </button>
        </header>
        <div
          className="calendar-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "5px",
          }}
        >
          {DAYS_OF_WEEK.map((day) => (
            <div
              key={day}
              style={{
                fontFamily: "sans-serif",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              {day}
            </div>
          ))}
          {Array.from({ length: firstDayIndex }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const dayNumber = i + 1;
            const isToday =
              new Date().toDateString() ===
              new Date(year, month, dayNumber).toDateString();
            return (
              <div
                key={dayNumber}
                style={{
                  padding: "10px",
                  textAlign: "center",
                  backgroundColor: isToday ? "rgb(99, 2, 2)" : "#f9f9f9",
                  color: isToday ? "white" : "black",
                  borderRadius: "4px",
                }}
              >
                {dayNumber}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Calendar;
