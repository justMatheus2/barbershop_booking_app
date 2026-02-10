import BookingForm from "../components/BookingForm";

function Booking() {
  return (
    <section style={{ padding: "3rem" }}>
      <h1>Book an Appointment</h1>
      <p>Select a date and time for your booking.</p>

        <BookingForm />
    </section>
  );
}

export default Booking;
