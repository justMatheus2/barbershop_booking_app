function CustomerInfo({ name, email, onNameChange, onEmailChange }) {
  return (
    <div className="booking-field-grid">
      <div className="booking-field">
        <label htmlFor="customer-name">Name</label>
        <input
          id="customer-name"
          type="text"
          value={name}
          onChange={(event) => onNameChange(event.target.value)}
          placeholder="Your name"
        />
      </div>

      <div className="booking-field">
        <label htmlFor="customer-email">Email</label>
        <input
          id="customer-email"
          type="email"
          value={email}
          onChange={(event) => onEmailChange(event.target.value)}
          placeholder="you@email.com"
        />
      </div>
    </div>
  );
}

export default CustomerInfo;
