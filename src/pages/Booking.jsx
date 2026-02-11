import BookingForm from "../components/BookingForm";

function Booking() {
  return (
    <section className="content-section">
      <div className="section-head">
        <p className="eyebrow">Online booking</p>
        <h1>Smart scheduling to confirm your appointment in minutes.</h1>
      </div>

      <div className="booking-shell">
        <p>
          Select your services, choose the handiest day and time, and review
          everything before you confirm.
        </p>

        <BookingForm />
      </div>
    </section>
  );
}

export default Booking;
