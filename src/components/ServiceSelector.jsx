import servicesData from "../data/services";

function ServiceSelector({ selectedServices, onChange }) {
  function toggleService(service) {
    const exists = selectedServices.find((s) => s.id === service.id);

    if (exists) {
      onChange(selectedServices.filter((s) => s.id !== service.id));
    } else {
      onChange([...selectedServices, service]);
    }
  }

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <label>Services</label>

      <div style={{ marginTop: "0.75rem" }}>
        {servicesData.map((service) => {
          const checked = selectedServices.some((s) => s.id === service.id);

          return (
            <label
              key={service.id}
              style={{
                display: "block",
                padding: "0.75rem",
                marginBottom: "0.5rem",
                border: checked ? "2px solid #000" : "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggleService(service)}
                style={{ marginRight: "0.5rem" }}
              />

              <strong>{service.name}</strong> — {service.duration} · {service.price}
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceSelector;
