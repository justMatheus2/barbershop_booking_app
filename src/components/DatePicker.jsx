function DatePicker({ selectedDate, onChange }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <label>Date</label>
      <br />
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default DatePicker;
