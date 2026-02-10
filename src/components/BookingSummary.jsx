function BookingSummary({ services, date, time, name, email, totalPrice, totalDuration }) {
  if (services.length === 0) return null;

  return (
    <div
      style={{
        marginTop: "2rem",
        padding: "1.5rem",
        borderRadius: "15px",
        border: "5px solid #ddd",
        background: "gray",
        color: "#fff",
      }}
    >
      <h3 style={{ marginBottom: "1rem" }}>Booking Summary</h3>

      <ul style={{ marginBottom: "1.2rem" }}>
        {services.map((s) => (
          <li key={s.id}>
            {s.name} — {s.duration} min · €{s.price}
          </li>
        ))}
      </ul>

      <p>
        <strong>Total duration:</strong> {totalDuration} min
      </p>
      <p>
        <strong>Total price:</strong> €{totalPrice}
      </p>

      <p>
        <strong>Date:</strong> {date || "-"} <br />
        <strong>Time:</strong> {time || "-"}
      </p>

      <p>
        <strong>Name:</strong> {name || "-"} <br />
        <strong>Email:</strong> {email || "-"}
      </p>
    </div>
  );
}

export default BookingSummary;
