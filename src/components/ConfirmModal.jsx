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
  if (!open) {
    return null;
  }

  return (
    <div className="confirm-modal-overlay">
      <div className="confirm-modal">
        <h3>Confirm your booking</h3>

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
          <strong>Date:</strong> {date}
          {" · "}
          <strong>Time:</strong> {time}
        </p>
        <p>
          <strong>Name:</strong> {name}
          {" · "}
          <strong>Email:</strong> {email}
        </p>

        <div className="confirm-actions">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="button" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
