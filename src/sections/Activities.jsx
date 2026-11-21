import { useEffect, useState } from "react";
import "./Activities.css";

/* =========================================================
   ACTIVITIES DATA
========================================================= */

const activities = [
    {
        id: 1,
        category: "INDUSTRY COLLABORATION",
        title: "MoA with Pragya Cyber Private Limited",
        description:
            "Memorandum of Agreement (MoA) between the Centre of Excellence (CoE) and Pragya Cyber Private Limited.",

        highlights: [
            "Vulnerability Assessment and Penetration Testing (VAPT)",
            "AI Security Curriculum Development",
            "Cyber Security Training Programs",
            "Industry-sponsored Research and Innovation Activities",
        ],

        images: [
            {
                src: "/images/activities/pragya-moa.png",
                alt: "Memorandum of Agreement with Pragya Cyber Private Limited",
            },
        ],
    },

    {
        id: 2,
        category: "INDUSTRY COLLABORATION",
        title: "MoA with iGLOBUS Corporate Consulting",
        description:
            "A significant milestone achieved by the Centre is the finalisation of a Memorandum of Agreement (MoA) between the CoE and iGLOBUS Corporate Consulting.",

        highlights: [
            "Guest lecture on Governance, Risk and Compliance (GRC), Data Protection, Data Privacy and AI for Security.",
            "Interactive session with students on emerging cybersecurity trends.",
        ],

        images: [
            {
                src: "/images/activities/iglobus-moa.png",
                alt: "Memorandum of Agreement with iGLOBUS Corporate Consulting",
            },
        ],
    },

    {
        id: 3,
        category: "GUEST LECTURES",
        title: "Guest Lecture with Industry Experts",
        description:
            "Guest lectures delivered by industry experts to strengthen students' understanding of emerging cybersecurity technologies and industry practices.",

        highlights: [
            "Guest lecture on GRC, Data Protection, Data Privacy and AI for Security.",
            "Interactive session with students on emerging cybersecurity trends.",
        ],

        images: [
            {
                src: "/images/activities/guest-lecture-1.png",
                alt: "Industry experts delivering a guest lecture",
            },
            {
                src: "/images/activities/guest-lecture-2.png",
                alt: "Students attending the cybersecurity guest lecture",
            },
        ],
    },

    {
        id: 4,
        category: "STUDENT ENGAGEMENT",
        title: "Interaction Sessions with Industry Experts & Students",
        description:
            "Interactive sessions connecting students with industry professionals through discussions and direct engagement.",

        highlights: [],

        images: [
            {
                src: "/images/activities/interaction-1.png",
                alt: "Industry expert interacting with students in the laboratory",
            },
            {
                src: "/images/activities/interaction-2.png",
                alt: "Interactive discussion between industry experts and students",
            },
        ],
    },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Activities = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (!selectedImage) return;

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedImage(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;

            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [selectedImage]);

    return (
        <main className="activities-page">

            {/* PAGE HEADER */}

            <section className="activities-hero">
                <div className="activities-hero-inner">

                    <span className="activities-badge">
                        CCSCL
                    </span>

                    <h1>Activities</h1>

                    <p>
                        Industry collaborations, academic initiatives,
                        expert lectures and student engagement activities
                        at the Centre for Cyber Security &amp; Cyber Law.
                    </p>

                </div>
            </section>

            {/* ACTIVITIES SECTION */}

            <section className="activities-content">
                <div className="activities-container">

                    <div className="activities-heading">
                        <span>ACADEMIC & INDUSTRY ENGAGEMENT</span>

                        <h2>Our Activities & Initiatives</h2>

                        <div className="activities-heading-line" />
                    </div>

                    <div className="activities-list">

                        {activities.map((activity) => (
                            <article
                                className={`activity-card ${activity.images.length === 1
                                    ? "activity-card-single"
                                    : "activity-card-multiple"
                                    }`}
                                key={activity.id}
                            >

                                {/* ACTIVITY CONTENT */}

                                <div className="activity-card-content">

                                    <div className="activity-meta">
                                        <span className="activity-number">
                                            {String(activity.id).padStart(2, "0")}
                                        </span>

                                        <span className="activity-category">
                                            {activity.category}
                                        </span>
                                    </div>

                                    <h3>{activity.title}</h3>

                                    <p className="activity-description">
                                        {activity.description}
                                    </p>

                                    {activity.highlights.length > 0 && (
                                        <div className="activity-highlights">

                                            <h4>Key Highlights</h4>

                                            <ul>
                                                {activity.highlights.map(
                                                    (highlight, index) => (
                                                        <li key={index}>

                                                            <span className="activity-check">
                                                                ✓
                                                            </span>

                                                            <span>{highlight}</span>

                                                        </li>
                                                    )
                                                )}
                                            </ul>

                                        </div>
                                    )}

                                </div>

                                {/* ACTIVITY IMAGES */}

                                <div
                                    className={`activity-image-grid ${activity.images.length > 1
                                        ? "activity-images-double"
                                        : "activity-images-single"
                                        }`}
                                >

                                    {activity.images.map((image, index) => (
                                        <button
                                            type="button"
                                            className="activity-image-wrapper"
                                            key={image.src}
                                            onClick={() =>
                                                setSelectedImage(image)
                                            }
                                            aria-label={`Enlarge photograph ${index + 1
                                                } of ${activity.title}`}
                                        >

                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="activity-image"
                                                loading="lazy"
                                            />

                                            <div className="activity-image-overlay">
                                                <span>View Image</span>
                                            </div>

                                        </button>
                                    ))}

                                </div>

                            </article>
                        ))}

                    </div>
                </div>
            </section>

            {/* FULL-SCREEN IMAGE VIEW */}

            {selectedImage && (
                <div
                    className="activity-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={selectedImage.alt}
                    onClick={() => setSelectedImage(null)}
                >

                    <button
                        type="button"
                        className="activity-lightbox-close"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close image"
                        autoFocus
                    >
                        ×
                    </button>

                    <div
                        className="activity-lightbox-content"
                        onClick={(event) => event.stopPropagation()}
                    >

                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                        />

                        <p>{selectedImage.alt}</p>

                    </div>

                </div>
            )}

        </main>
    );
};

export default Activities;