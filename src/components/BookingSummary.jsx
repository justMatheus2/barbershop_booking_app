function BookingSummary({ services, date, time, name, email, totalPrice, totalDuration }) {
  if (services.length === 0) {
    return null;
  }

  return (
    <div className="booking-summary">
      <h3>Booking Summary</h3>

      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.name} · {service.duration} min · EUR {service.price}
          </li>
        ))}
      </ul>

      <p>
        <strong>Total duration:</strong> {totalDuration} min
      </p>
      <p>
        <strong>Total price:</strong> EUR {totalPrice}
      </p>
      <p>
        <strong>Date:</strong> {date || "-"}
        {" · "}
        <strong>Time:</strong> {time || "-"}
      </p>
      <p>
        <strong>Name:</strong> {name || "-"}
        {" · "}
        <strong>Email:</strong> {email || "-"}
      </p>
    </div>
  );
}

export default BookingSummary;
