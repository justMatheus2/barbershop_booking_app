const TIMES = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

function TimeSlots({ selectedTime, onSelect, unavailableTimes }) {
  return (
    <div className="booking-field">
      <span className="booking-field-legend">Time</span>

      <div className="time-slot-grid">
        {TIMES.map((time) => {
          const isUnavailable = unavailableTimes.includes(time);

          return (
            <button
              key={time}
              type="button"
              disabled={isUnavailable}
              onClick={() => onSelect(time)}
              className={`time-slot ${selectedTime === time ? "is-selected" : ""}`}
            >
              {time}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TimeSlots;
