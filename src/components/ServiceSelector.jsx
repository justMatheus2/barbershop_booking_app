import servicesData from "../data/services";

function ServiceSelector({ selectedServices, onChange }) {
  function toggleService(service) {
    const exists = selectedServices.find((selectedService) => selectedService.id === service.id);

    if (exists) {
      onChange(selectedServices.filter((selectedService) => selectedService.id !== service.id));
      return;
    }

    onChange([...selectedServices, service]);
  }

  return (
    <div className="booking-field">
      <label className="booking-field-legend">Services</label>

      <div className="service-options">
        {servicesData.map((service) => {
          const checked = selectedServices.some((selectedService) => selectedService.id === service.id);

          return (
            <label
              key={service.id}
              className={`service-option ${checked ? "is-selected" : ""}`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggleService(service)}
              />

              <span className="service-option-text">
                <strong>{service.name}</strong>
                <span className="service-option-meta">
                  {service.duration} min · EUR {service.price}
                </span>
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceSelector;
