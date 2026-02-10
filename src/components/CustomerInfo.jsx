function CustomerInfo({ name, email, onNameChange, onEmailChange }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <label>Name</label>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="Your name"
        style={{ width: "100%", marginBottom: "1rem" }}
      />

      <label>Email</label>
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        placeholder="you@email.com"
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default CustomerInfo;
