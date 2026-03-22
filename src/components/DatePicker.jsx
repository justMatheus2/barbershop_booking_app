function DatePicker({ selectedDate, onChange }) {
  return (
    <div className="booking-field">
      <label htmlFor="booking-date">Date</label>
      <input
        id="booking-date"
        type="date"
        value={selectedDate}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default DatePicker;
