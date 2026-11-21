const objectives = [
    {
        title: "Research & Innovation",
        description:
            "Promote advanced research in cyber security, artificial intelligence, digital forensics, cryptography and emerging security technologies.",
    },
    {
        title: "Education & Skill Development",
        description:
            "Develop skilled cybersecurity professionals through industry-oriented education, specialized training, workshops and hands-on learning.",
    },
    {
        title: "Cyber Law & Digital Governance",
        description:
            "Encourage interdisciplinary research in cyber law, data protection, privacy, digital governance and responsible technology adoption.",
    },
    {
        title: "Industry Collaboration",
        description:
            "Establish strong partnerships with industries, government agencies, academic institutions and research organizations.",
    },
];

const mission = [
    {
        title: "Advanced Research",
        description:
            "Promote research and innovation in cyber security, AI-driven security solutions, digital forensics, cyber threat intelligence, cryptography and secure computing.",
    },
    {
        title: "Professional Development",
        description:
            "Develop skilled professionals through certificate programmes, specialized training, workshops, Faculty Development Programmes (FDPs) and hands-on learning.",
    },
    {
        title: "Research Infrastructure",
        description:
            "Establish advanced research facilities supporting intelligent threat detection, malware analysis, cybercrime investigation and AI-enabled cyber defence.",
    },
    {
        title: "Cyber Security Awareness",
        description:
            "Strengthen cybersecurity capabilities among students, faculty, professionals, government organizations, law enforcement agencies and society.",
    },
    {
        title: "Interdisciplinary Collaboration",
        description:
            "Integrate cyber security, artificial intelligence, cyber law, policy, governance and ethics to address complex digital challenges.",
    },
    {
        title: "Strategic Partnerships",
        description:
            "Foster collaborative research, technology transfer, internships, consultancy and innovation through partnerships with industry and research institutions.",
    },
    {
        title: "Digital Trust",
        description:
            "Contribute to a secure and trustworthy digital ecosystem through responsible technology adoption, cybersecurity research and effective cyber governance.",
    },
];

const researchAreas = [
    "Cyber Security & Network Security",
    "Artificial Intelligence for Security",
    "Digital Forensics & Cybercrime Investigation",
    "Cyber Threat Intelligence",
    "Cryptography & Secure Computing",
    "Vulnerability Assessment & Penetration Testing",
    "Data Protection & Privacy",
    "Cyber Law & Digital Governance",
    "Malware Analysis & Threat Detection",
    "Quantum Computing & Quantum Security",
    "Privacy-Preserving Technologies",
    "Responsible AI & Digital Trust",
];

const About = () => {
    return (
        <main className="caiic-about-page">

            {/* HERO SECTION */}

            <section className="caiic-about-hero">
                <div className="caiic-about-hero-inner">

                    <span className="caiic-about-badge">
                        ABOUT CCSCL
                    </span>

                    <h1>
                        Centre for Cyber Security
                        <br />
                        and Cyber Law
                    </h1>

                    <p>
                        University College of Engineering,
                        Osmania University
                    </p>

                </div>
            </section>


            {/* INTRODUCTION */}

            <section className="caiic-section">
                <div className="caiic-container">

                    <div className="caiic-intro-grid">

                        <div className="caiic-intro-heading">

                            <span className="caiic-section-label">
                                WHO WE ARE
                            </span>

                            <h2>
                                Advancing Cyber Security,
                                Cyber Law & Digital Trust
                            </h2>

                            <div className="caiic-accent-line"></div>

                        </div>

                        <div className="caiic-intro-content">

                            <p>
                                The Centre for Cyber Security and Cyber Law
                                (CCSCL) at Osmania University is a
                                multidisciplinary centre dedicated to
                                research, innovation, education and skill
                                development in cyber security, artificial
                                intelligence, cyber law and emerging
                                digital technologies.
                            </p>

                            <p>
                                The Centre was established in the year
                                2019 under the Rashtriya Uchchatar Shiksha
                                Abhiyan (RUSA 2.0), Ministry of Human
                                Resource Development (MHRD),
                                Government of India.
                            </p>

                            <p>
                                CCSCL provides opportunities for faculty
                                members, undergraduate and postgraduate
                                students, and research scholars to pursue
                                research and address emerging challenges
                                in the digital ecosystem.
                            </p>

                            <p>
                                By integrating technological innovation
                                with legal, ethical and governance
                                perspectives, the Centre aims to
                                contribute towards a secure, resilient
                                and trustworthy digital society.
                            </p>

                        </div>

                    </div>

                </div>
            </section>


            {/* HISTORY AND ESTABLISHMENT */}

            <section className="caiic-section">
                <div className="caiic-container">

                    <div className="caiic-achievement-card">

                        <div className="caiic-achievement-year">
                            2019
                        </div>

                        <div className="caiic-achievement-content">

                            <span className="caiic-section-label caiic-label-light">
                                OUR HISTORY
                            </span>

                            <h2>
                                Established under RUSA 2.0
                            </h2>

                            <p>
                                The Centre for Cyber Security and Cyber
                                Law was established in 2019 under
                                RUSA 2.0, MHRD, Government of India,
                                with the objective of promoting research,
                                academic excellence and capacity building
                                in cyber security and cyber law.
                            </p>

                        </div>

                    </div>

                </div>
            </section>


            {/* VISION */}

            <section className="caiic-vision-section">
                <div className="caiic-container">

                    <div className="caiic-vision-card">

                        <span className="caiic-section-label">
                            OUR VISION
                        </span>

                        <h2>
                            Building a Nationally Recognized
                            Centre of Excellence
                        </h2>

                        <p>
                            To create a nationally recognized Centre of
                            Excellence in Cyber Security, Artificial
                            Intelligence, Cyber Law, Quantum Computing
                            and Digital Trust by fostering advanced
                            research, innovation, education and
                            industry-driven solutions for building a
                            secure, resilient and intelligent
                            digital society.
                        </p>

                    </div>

                </div>
            </section>


            {/* CORE OBJECTIVES */}

            <section className="caiic-section caiic-section-soft">
                <div className="caiic-container">

                    <div className="caiic-heading-center">

                        <span className="caiic-section-label">
                            CORE OBJECTIVES
                        </span>

                        <h2>
                            Research, Education & Innovation
                        </h2>

                        <p>
                            The Centre focuses on developing technological
                            expertise, interdisciplinary knowledge and
                            practical cybersecurity capabilities.
                        </p>

                    </div>

                    <div className="caiic-cards-grid">

                        {objectives.map((item) => (
                            <article
                                className="caiic-card"
                                key={item.title}
                            >
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}

                    </div>

                </div>
            </section>


            {/* MISSION */}

            <section className="caiic-section">
                <div className="caiic-container">

                    <div className="caiic-heading-center">

                        <span className="caiic-section-label">
                            OUR MISSION
                        </span>

                        <h2>
                            Strengthening Cyber Security
                            Through Research & Education
                        </h2>

                        <p>
                            Our mission is to advance cybersecurity
                            knowledge, develop skilled professionals
                            and promote responsible innovation.
                        </p>

                    </div>

                    <div className="caiic-cards-grid">

                        {mission.map((item) => (
                            <article
                                className="caiic-card"
                                key={item.title}
                            >
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}

                    </div>

                </div>
            </section>


            {/* RESEARCH AREAS */}

            <section className="caiic-research-section">
                <div className="caiic-container">

                    <div className="caiic-heading-center caiic-heading-light">

                        <span className="caiic-section-label caiic-label-light">
                            RESEARCH AREAS
                        </span>

                        <h2>
                            Multidisciplinary Research & Innovation
                        </h2>

                        <p>
                            CCSCL focuses on emerging research areas
                            spanning cyber security, artificial
                            intelligence, cyber law and digital trust.
                        </p>

                    </div>

                    <div className="caiic-research-grid">

                        {researchAreas.map((area) => (
                            <div
                                className="caiic-research-item"
                                key={area}
                            >
                                {area}
                            </div>
                        ))}

                    </div>

                </div>
            </section>


            {/* RESEARCH INFRASTRUCTURE */}

            <section className="caiic-section caiic-section-soft">
                <div className="caiic-container">

                    <div className="caiic-heading-center">

                        <span className="caiic-section-label">
                            RESEARCH FACILITIES
                        </span>

                        <h2>
                            Supporting Practical Learning & Research
                        </h2>

                        <p>
                            The Centre provides computing infrastructure
                            to support academic research, technical
                            experimentation and hands-on learning.
                        </p>

                    </div>

                    <div className="caiic-cards-grid">

                        <article className="caiic-card">
                            <h3>24 Desktop Workstations</h3>
                            <p>
                                Intel Core i7-9700 processor-based
                                systems supporting research,
                                programming and technical training.
                            </p>
                        </article>

                        <article className="caiic-card">
                            <h3>Dell EMC Rack Server</h3>
                            <p>
                                Centralized computing infrastructure
                                to support research and development
                                activities.
                            </p>
                        </article>

                        <article className="caiic-card">
                            <h3>Software Environment</h3>
                            <p>
                                Ubuntu-based operating systems,
                                GCC compiler and software tools
                                supporting research and
                                application development.
                            </p>
                        </article>

                        <article className="caiic-card">
                            <h3>Research Laboratory</h3>
                            <p>
                                A dedicated environment for
                                collaborative learning, cybersecurity
                                experimentation and student projects.
                            </p>
                        </article>

                    </div>

                </div>
            </section>


            {/* INDUSTRY COLLABORATION */}

            <section className="caiic-section">
                <div className="caiic-container">

                    <div className="caiic-collaboration-grid">

                        <div className="caiic-collaboration-heading">

                            <span className="caiic-section-label">
                                INDUSTRY–ACADEMIA COLLABORATION
                            </span>

                            <h2>
                                Bridging Academic Research
                                & Industry Expertise
                            </h2>

                            <div className="caiic-accent-line"></div>

                        </div>

                        <div className="caiic-collaboration-content">

                            <p>
                                CCSCL promotes collaboration with
                                cybersecurity organizations, academic
                                institutions and industry experts
                                to strengthen research, innovation
                                and professional development.
                            </p>

                            <p>
                                The Centre has undertaken Memorandum
                                of Agreement (MoA) initiatives with
                                <strong>
                                    {" "}Pragya Cyber Private Limited{" "}
                                </strong>
                                and
                                <strong>
                                    {" "}iGLOBUS Corporate Consulting.
                                </strong>
                            </p>

                            <p>
                                These initiatives focus on Vulnerability
                                Assessment and Penetration Testing
                                (VAPT), AI security curriculum
                                development, cybersecurity training,
                                industry-sponsored research and
                                innovation activities.
                            </p>

                            <p>
                                The Centre also organizes expert guest
                                lectures and interactive sessions
                                covering Governance, Risk and Compliance
                                (GRC), data protection, data privacy,
                                AI for security and emerging
                                cybersecurity trends.
                            </p>

                        </div>

                    </div>

                </div>
            </section>


            {/* FUTURE DIRECTION */}

            <section className="caiic-vision-section">
                <div className="caiic-container">

                    <div className="caiic-vision-card">

                        <span className="caiic-section-label">
                            OUR FUTURE DIRECTION
                        </span>

                        <h2>
                            Towards a Secure and Resilient
                            Digital Future
                        </h2>

                        <p>
                            CCSCL aims to expand its academic
                            programmes, establish AI security
                            research laboratories and promote
                            interdisciplinary research in cyber
                            security, artificial intelligence,
                            cyber law and emerging technologies.
                        </p>

                        <p>
                            The Centre's future roadmap includes
                            certificate and diploma programmes,
                            industry-aligned training courses,
                            research publications, patents,
                            technology development, consultancy
                            and security audit projects.
                        </p>

                        <p>
                            Through stronger industry partnerships,
                            internships and placement opportunities,
                            the Centre seeks to develop skilled
                            cybersecurity professionals and
                            contribute to a secure and trustworthy
                            digital ecosystem.
                        </p>

                    </div>

                </div>
            </section>

        </main>
    );
};

export default About;