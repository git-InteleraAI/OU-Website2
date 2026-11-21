import { useEffect, useState } from "react";
import "./Infrastructure.css";

import serverImage from "../assets/infrastructure/server.png";
import workstationsImage from "../assets/infrastructure/workstations.png";

/* =========================================================
   INFRASTRUCTURE DETAILS
========================================================= */

const infrastructureDetails = [
  {
    id: 1,
    title: "Desktop Systems",
    description: "Intel Core i7-9700 Processor @ 3.00 GHz",
    quantity: "24",
    icon: "desktop",
  },
  {
    id: 2,
    title: "Dell EMC Rack Server",
    description: "",
    quantity: "01",
    icon: "server",
  },
  {
    id: 3,
    title: "Software & Operating Systems",
    description:
      "Ubuntu 18.04.06; Ubuntu 24.04.2; GCC Compiler; LibreOffice Suite",
    quantity: "—",
    icon: "software",
  },
  {
    id: 4,
    title: "UPS Backup Facility",
    description: "",
    quantity: "—",
    icon: "ups",
  },
];

/* =========================================================
   FACILITY IMAGES
========================================================= */

const facilityImages = [
  {
    id: 1,
    title: "Server",
    description: "Dell EMC Rack Server",
    quantity: "01 Unit",
    src: serverImage,
  },
  {
    id: 2,
    title: "Workstations",
    description: "Intel Core i7-9700 Desktop Systems",
    quantity: "24 Workstations",
    src: workstationsImage,
  },
];

/* =========================================================
   INFRASTRUCTURE ICONS
========================================================= */

const InfrastructureIcon = ({ type }) => {
  const commonProps = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (type) {
    case "desktop":
      return (
        <svg {...commonProps}>
          <rect x="2" y="3" width="15" height="12" rx="2" />
          <path d="M9.5 15v5M6 20h7" />
          <rect x="19" y="3" width="3" height="17" rx="1" />
          <path d="M20.5 7v2" />
        </svg>
      );

    case "server":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="18" height="7" rx="2" />
          <rect x="3" y="14" width="18" height="7" rx="2" />
          <path d="M7 6.5h.01M7 17.5h.01" />
          <path d="M12 6.5h5M12 17.5h5" />
        </svg>
      );

    case "software":
      return (
        <svg {...commonProps}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 8h20M7 12l3 3-3 3M13 18h4" />
          <path d="M5 6h.01M8 6h.01" />
        </svg>
      );

    case "ups":
      return (
        <svg {...commonProps}>
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <rect x="8" y="5" width="8" height="4" rx="1" />
          <path d="M13 11l-3 4h4l-3 4" />
        </svg>
      );

    default:
      return null;
  }
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Infrastructure = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  return (
    <main className="infrastructure-page">

      {/* PAGE HEADER */}

      <section className="infrastructure-hero">
        <div className="infrastructure-hero-inner">

          <span className="infrastructure-badge">
            CCSCL
          </span>

          <h1>Infrastructure</h1>

          <p>
            Computing facilities and technological resources supporting
            research, education and innovation in Cyber Security,
            Artificial Intelligence and Cyber Law.
          </p>

        </div>
      </section>

      {/* INFRASTRUCTURE DETAILS */}

      <section className="infrastructure-content">
        <div className="infrastructure-container">

          <div className="infrastructure-heading">
            <span>COMPUTING & TECHNOLOGY RESOURCES</span>

            <h2>Infrastructure Details</h2>

            <div className="infrastructure-title-line" />
          </div>

          <div className="infrastructure-table-wrapper">

            <table
              className="infrastructure-details-table"
              aria-label="Infrastructure Details"
            >
              <thead>
                <tr>
                  <th scope="col">S.No.</th>
                  <th scope="col">Particulars</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>

              <tbody>
                {infrastructureDetails.map((item) => (
                  <tr key={item.id}>

                    <td className="infrastructure-serial">
                      {item.id}
                    </td>

                    <td>
                      <div className="infrastructure-particular">

                        <div className="infrastructure-item-icon">
                          <InfrastructureIcon type={item.icon} />
                        </div>

                        <div className="infrastructure-item-details">
                          <h3>{item.title}</h3>

                          {item.description && (
                            <p>{item.description}</p>
                          )}
                        </div>

                      </div>
                    </td>

                    <td className="infrastructure-quantity">
                      {item.quantity}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE PHOTOGRAPHS */}

      <section className="infrastructure-facilities">
        <div className="infrastructure-container">

          <div className="infrastructure-heading">
            <span>OUR FACILITIES</span>

            <h2>Computing Infrastructure</h2>

            <div className="infrastructure-title-line" />
          </div>

          <div className="infrastructure-facility-grid">

            {facilityImages.map((facility) => (
              <article
                className="infrastructure-facility-card"
                key={facility.id}
              >
                <button
                  type="button"
                  className="infrastructure-facility-image-wrapper"
                  onClick={() => setSelectedImage(facility)}
                  aria-label={`Enlarge ${facility.title} photograph`}
                >
                  <img
                    src={facility.src}
                    alt={facility.description}
                    className="infrastructure-facility-image"
                    loading="lazy"
                  />

                  <div className="infrastructure-image-overlay">
                    <span>View Image</span>
                  </div>
                </button>

                <div className="infrastructure-facility-details">

                  <div>
                    <h3>{facility.title}</h3>

                    <p>{facility.description}</p>
                  </div>

                  <span className="infrastructure-count-badge">
                    {facility.quantity}
                  </span>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* FULL IMAGE VIEW */}

      {selectedImage && (
        <div
          className="infrastructure-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="infrastructure-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
            autoFocus
          >
            ×
          </button>

          <div
            className="infrastructure-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.description}
            />

            <div className="infrastructure-lightbox-caption">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

    </main>
  );
};

export default Infrastructure;