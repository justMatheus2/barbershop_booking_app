import { useState } from "react";
import DatePicker from "./DatePicker";
import TimeSlots from "./TimeSlots";
import CustomerInfo from "./CustomerInfo";
import ServiceSelector from "./ServiceSelector";
import bookedSlots from "../data/bookedSlots";
import BookingSummary from "./BookingSummary";
import ConfirmModal from "./ConfirmModal";

function BookingForm() {
  const [services, setServices] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  const unavailableTimes = date ? bookedSlots[date] || [] : [];

  const isValid =
    services.length > 0 &&
    date &&
    time &&
    !unavailableTimes.includes(time) &&
    name.trim().length > 1 &&
    email.includes("@");

  const totalPrice = services.reduce((sum, service) => sum + service.price, 0);
  const totalDuration = services.reduce((sum, service) => sum + service.duration, 0);

  function handleSubmit(event) {
    event.preventDefault();

    if (!isValid) {
      return;
    }

    setShowConfirm(true);
  }

  function confirmBooking() {
    setShowConfirm(false);

    alert(
      `Booking confirmed!\n\nServices: ${services
        .map((service) => service.name)
        .join(", ")}\nTotal: EUR ${totalPrice}\nDuration: ${totalDuration} min`,
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <ServiceSelector selectedServices={services} onChange={setServices} />
      <DatePicker selectedDate={date} onChange={setDate} />
      <TimeSlots
        selectedTime={time}
        onSelect={setTime}
        unavailableTimes={unavailableTimes}
      />
      <CustomerInfo
        name={name}
        email={email}
        onNameChange={setName}
        onEmailChange={setEmail}
      />

      <BookingSummary
        services={services}
        date={date}
        time={time}
        name={name}
        email={email}
        totalPrice={totalPrice}
        totalDuration={totalDuration}
      />

      <ConfirmModal
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={confirmBooking}
        services={services}
        date={date}
        time={time}
        name={name}
        email={email}
        totalPrice={totalPrice}
        totalDuration={totalDuration}
      />

      <button type="submit" className="booking-submit" disabled={!isValid}>
        Confirm Booking
      </button>
    </form>
  );
}

export default BookingForm;
