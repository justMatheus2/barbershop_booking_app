function ConfirmModal({
  open,
  onClose,
  onConfirm,
  services,
  date,
  time,
  name,
  email,
  totalPrice,
  totalDuration,
}) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          color: "#111",
          padding: "2rem",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h3 style={{ marginBottom: "1rem" }}>Confirm your booking</h3>

        <ul>
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
          <strong>Date:</strong> {date} <br />
          <strong>Time:</strong> {time}
        </p>

        <p>
          <strong>Name:</strong> {name} <br />
          <strong>Email:</strong> {email}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          <button onClick={onClose}>Cancel</button>
          <button onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
