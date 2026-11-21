import { useRef } from "react";
import "./FutureRoadmap.css";

const roadmapImage = "/images/roadmap/future-roadmap.png";

const FutureRoadmap = () => {
    const dialogRef = useRef(null);

    const openImage = () => {
        dialogRef.current?.showModal();
    };

    const closeImage = () => {
        dialogRef.current?.close();
    };

    return (
        <main className="roadmap-page">

            {/* PAGE HEADER */}

            <section className="roadmap-hero">
                <div className="roadmap-hero-inner">

                    <span className="roadmap-badge">
                        CCSCL
                    </span>

                    <h1>Future Roadmap</h1>

                    <p>
                        Advancing cybersecurity education, research,
                        innovation and industry collaboration.
                    </p>

                </div>
            </section>

            {/* ORIGINAL ROADMAP IMAGE */}

            <section className="roadmap-content">
                <div className="roadmap-container">

                    <figure className="roadmap-image-card">

                        <button
                            type="button"
                            className="roadmap-image-button"
                            onClick={openImage}
                            aria-label="Enlarge Future Roadmap"
                        >
                            <img
                                src={roadmapImage}
                                alt="Future Roadmap covering Academic, Research and Industry Collaboration objectives"
                                className="roadmap-main-image"
                                width="1200"
                                height="900"
                                aria-describedby="roadmap-description"
                            />

                            <span className="roadmap-expand-icon">
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="M8 3H3v5M16 3h5v5M21 16v5h-5M3 16v5h5" />
                                </svg>
                            </span>

                        </button>

                        <figcaption className="roadmap-image-caption">
                            Click on the image to view in full screen.
                        </figcaption>

                    </figure>

                    {/* ACCESSIBLE ROADMAP CONTENT */}

                    <div
                        id="roadmap-description"
                        className="roadmap-accessible-content"
                    >
                        <h2>Academic</h2>

                        <ul>
                            <li>Launch Certificate and Diploma Programmes.</li>
                            <li>Introduce industry-aligned training courses.</li>
                            <li>Develop AI Security curriculum modules.</li>
                        </ul>

                        <h2>Research</h2>

                        <ul>
                            <li>Establish AI Security Research Labs.</li>
                            <li>Promote interdisciplinary research projects.</li>
                            <li>
                                Encourage publications, patents, and
                                technology development.
                            </li>
                        </ul>

                        <h2>Industry Collaboration</h2>

                        <ul>
                            <li>
                                Expand partnerships with cybersecurity organizations.
                            </li>
                            <li>
                                Undertake consultancy and security audit projects.
                            </li>
                            <li>
                                Facilitate internships and placement opportunities.
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* FULL-SCREEN IMAGE VIEW */}

            <dialog
                ref={dialogRef}
                className="roadmap-lightbox"
                aria-label="Future Roadmap enlarged view"
                onClick={(event) => {
                    if (event.target === event.currentTarget) {
                        closeImage();
                    }
                }}
            >
                <button
                    type="button"
                    className="roadmap-lightbox-close"
                    onClick={closeImage}
                    aria-label="Close enlarged image"
                    autoFocus
                >
                    ×
                </button>

                <div className="roadmap-lightbox-content">
                    <img
                        src={roadmapImage}
                        alt="CCSCL Future Roadmap"
                    />
                </div>
            </dialog>

        </main>
    );
};

export default FutureRoadmap;