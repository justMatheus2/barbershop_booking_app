const TIMES = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

function TimeSlots({ selectedTime, onSelect, unavailableTimes }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <label>Time</label>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          marginTop: "0.5rem",
        }}
      >
        {TIMES.map((time) => {
          const isUnavailable = unavailableTimes.includes(time);

          return (
            <button
              key={time}
              type="button"
              disabled={isUnavailable}
              onClick={() => onSelect(time)}
              style={{
                padding: "0.5rem 1rem",
                cursor: isUnavailable ? "not-allowed" : "pointer",
                background: isUnavailable ? "#eee" : "#999",
                color: isUnavailable ? "#999" : "#eee",
                border:
                  selectedTime === time
                    ? "3px solid #c9a24d"
                    : "1px solid #ccc",
              }}
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
