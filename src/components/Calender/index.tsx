import { useState } from "react";

import {
  getDaysInMonth,
  getFirstDayOfMonth,
  DAYS_OF_WEEK,
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
      <h1 style={{ textAlign: "center" }}>CALENDER</h1>
      <div
        className="calendar-container"
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
          <button onClick={() => changeMonth(-1)} className="button-calender">
            &lt; Prev
          </button>
          <h3 className="dates">
            {MONTHS[month]} {year}
          </h3>
          <button onClick={() => changeMonth(1)} className="button-calender">
            Next &gt;
          </button>
        </header>

        <div
          className="calender-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "10px",
          }}
        >
          {DAYS_OF_WEEK.map((day) => (
            <div
              style={{
                color: "black",
                fontFamily: "sans-serif",
                fontWeight: "bold",
                textAlign: "center",
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
                className="day-number"
                key={dayNumber}
                style={{
                  backgroundColor: isToday ? "rgb(141, 5, 5)" : "#f9f9f9",
                  color: isToday ? "white" : "black",
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
