import ImageSlider from "../components/ImageSlider";

const OrganizationCard = ({ title, type, group = false }) => {
  return (
    <div className={`org-card org-card-${type}`}>
      <div className="org-card-icon">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          {group ? (
            <>
              <circle cx="12" cy="6" r="3" />
              <circle cx="4.5" cy="9" r="2.5" />
              <circle cx="19.5" cy="9" r="2.5" />
              <path d="M7 21v-4a5 5 0 0 1 10 0v4H7Z" />
              <path d="M1 20v-3a4 4 0 0 1 5-4v7H1Z" />
              <path d="M18 13a4 4 0 0 1 5 4v3h-5v-7Z" />
            </>
          ) : (
            <>
              <circle cx="12" cy="6" r="4" />
              <path d="M3 22v-4a9 9 0 0 1 9-9 9 9 0 0 1 9 9v4H3Z" />
              <path
                d="M10 12h4l-2 8-2-8Z"
                className="org-icon-tie"
              />
            </>
          )}
        </svg>
      </div>

      <span className="org-card-title">{title}</span>
    </div>
  );
};

const Home = () => {
  return (
    <section id="home" className="home-section">
      <ImageSlider />

      {/* EXISTING VISION AND MISSION SECTION */}

      <div className="quick-info-wrapper">
        <div className="quick-info-card">
          <div className="quick-info-content">
            <h3>Our Vision</h3>

            <p>
              To create a nationally recognized Centre of Excellence in
              Cyber Security, Artificial Intelligence, Cyber Law,
              Quantum Computing and Digital Trust by fostering advanced
              research, innovation, education, and industry-driven
              solutions for building a secure, resilient, and
              intelligent digital society.
            </p>
          </div>
        </div>

        <div className="quick-info-card featured">
          <div className="quick-info-content">
            <h3>Our Mission</h3>

            <ul className="mission-list">
              <li>
                To promote cutting-edge research and innovation in Cyber
                Security, Artificial Intelligence-driven security
                solutions, Digital Forensics, Cyber Threat Intelligence,
                Cryptography, Secure Computing, Privacy-Preserving
                Technologies, and emerging digital technologies.
              </li>

              <li>
                To develop skilled cybersecurity professionals through
                industry-oriented education, certificate programs,
                specialized training, workshops, Faculty Development
                Programs (FDPs), and hands-on learning initiatives.
              </li>

              <li>
                To establish advanced research infrastructure and
                innovation ecosystems supporting intelligent threat
                detection, malware analysis, secure systems design,
                cybercrime investigation, AI-enabled cyber defense, and
                responsible AI technologies.
              </li>

              <li>
                To create awareness and strengthen cybersecurity
                capabilities among students, faculty, professionals,
                government organizations, law enforcement agencies,
                and society through knowledge-sharing programs and
                outreach activities.
              </li>

              <li>
                To promote interdisciplinary collaboration by
                integrating Cyber Security, Artificial Intelligence,
                Cyber Law, policy, governance, and ethics for
                addressing complex challenges in the digital ecosystem.
              </li>

              <li>
                To foster strong partnerships with industry, government
                agencies, research organizations, startups, and academic
                institutions for collaborative research, technology
                transfer, internships, consulting, and innovation-driven
                initiatives.
              </li>

              <li>
                To contribute towards building a secure and trustworthy
                digital ecosystem by advancing cybersecurity research,
                responsible technology adoption, and effective cyber
                governance practices.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* NEW ORGANIZATION SECTION */}

      <section
        className="org-section"
        aria-labelledby="org-heading"
      >
        <div className="org-container">
          <div className="org-section-heading">
            <span className="org-eyebrow">
              GOVERNANCE & LEADERSHIP
            </span>

            <h2 id="org-heading">
              Organization of the Centre
            </h2>

            <div className="org-heading-line" />
          </div>

          <div className="org-chart">

            {/* LEVEL 1: STEERING COMMITTEE */}

            <div className="org-single-level">
              <OrganizationCard
                title="Steering Committee"
                type="steering"
                group
              />
            </div>

            <div className="org-vertical-line" />

            {/* LEVEL 2: DIRECTOR */}

            <div className="org-single-level">
              <OrganizationCard
                title="Director"
                type="director"
              />
            </div>

            <div className="org-vertical-line" />

            {/* LEVELS 3 AND 4 */}

            <div className="org-branches">
              {[1, 2].map((branch) => (
                <div className="org-branch" key={branch}>

                  {/* JOINT DIRECTOR */}

                  <div className="org-branch-director">
                    <OrganizationCard
                      title="Joint Director"
                      type="joint"
                    />
                  </div>

                  <div className="org-vertical-line" />

                  {/* COORDINATORS */}

                  <div className="org-coordinators">
                    {[1, 2].map((coordinator) => (
                      <div
                        className="org-coordinator"
                        key={coordinator}
                      >
                        <OrganizationCard
                          title="Coordinator"
                          type="coordinator"
                          group
                        />
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .org-section {
          padding: 64px 4% 80px;
          background: var(--background, #faf8f3);
        }

        .org-container {
          max-width: 1380px;
          margin: 0 auto;
          padding: 48px 32px 56px;
          background: #ffffff;
          border: 1px solid var(--border, #e8e2d4);
          border-radius: 22px;
          box-shadow: 0 12px 40px rgba(10, 31, 68, 0.07);
        }

        .org-section-heading {
          text-align: center;
          margin-bottom: 48px;
        }

        .org-eyebrow {
          display: inline-block;
          margin-bottom: 12px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          color: var(--gold, #b8892b);
        }

        .org-section-heading h2 {
          margin: 0;
          color: var(--navy, #0a1f44);
          font-family: "Playfair Display", serif;
          font-size: clamp(26px, 3vw, 42px);
          font-weight: 700;
          line-height: 1.3;
        }

        .org-heading-line {
          width: 65px;
          height: 3px;
          margin: 18px auto 0;
          background: var(--gold, #b8892b);
          border-radius: 10px;
        }

        .org-chart {
          max-width: 1180px;
          margin: 0 auto;
          --org-line-color: #b8892b;
        }

        .org-single-level {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .org-card {
          --card-color: #0a1f44;

          display: flex;
          align-items: center;
          width: 100%;
          min-height: 68px;
          overflow: hidden;
          background: #ffffff;
          border: 1.5px solid var(--card-color);
          border-radius: 12px;
          box-shadow: 0 6px 16px rgba(10, 31, 68, 0.09);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .org-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 22px rgba(10, 31, 68, 0.15);
        }

        .org-card-icon {
          align-self: stretch;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 66px;
          background: var(--card-color);
          color: #ffffff;
        }

        .org-icon-tie {
          fill: var(--card-color);
        }

        .org-card-title {
          flex: 1;
          padding: 14px 10px;
          text-align: center;
          font-size: 16px;
          line-height: 1.4;
          font-weight: 700;
          color: #0a1f44;
        }

        .org-card-steering {
          --card-color: #0a1f44;
          max-width: 340px;
          background: #f1f5fb;
        }

        .org-card-director {
          --card-color: #12306a;
          max-width: 290px;
          background: #f1f5fb;
        }

        .org-card-joint {
          --card-color: #b8892b;
          max-width: 280px;
          background: #fffbf1;
        }

        .org-card-coordinator {
          --card-color: #526784;
          background: #f5f7fa;
        }

        .org-card-coordinator .org-card-title {
          font-size: 14px;
        }

        .org-card-coordinator .org-card-icon {
          width: 54px;
        }

        .org-card-coordinator svg {
          width: 25px;
          height: 25px;
        }

        .org-vertical-line {
          width: 2px;
          height: 34px;
          margin: 0 auto;
          background: var(--org-line-color);
          position: relative;
        }

        .org-vertical-line::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          background: #ffffff;
          border: 2px solid var(--org-line-color);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .org-branches {
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
        }

        .org-branches::before {
          content: "";
          position: absolute;
          top: 0;
          left: 25%;
          right: 25%;
          height: 2px;
          background: var(--org-line-color);
        }

        .org-branch {
          padding: 28px 12px 0;
          position: relative;
          min-width: 0;
        }

        .org-branch::before {
          content: "";
          position: absolute;
          top: 0;
          left: calc(50% - 1px);
          height: 28px;
          width: 2px;
          background: var(--org-line-color);
        }

        .org-branch-director {
          display: flex;
          justify-content: center;
        }

        .org-coordinators {
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
        }

        .org-coordinators::before {
          content: "";
          position: absolute;
          top: 0;
          left: 25%;
          right: 25%;
          height: 2px;
          background: var(--org-line-color);
        }

        .org-coordinator {
          padding: 28px 7px 0;
          position: relative;
          min-width: 0;
        }

        .org-coordinator::before {
          content: "";
          position: absolute;
          top: 0;
          left: calc(50% - 1px);
          width: 2px;
          height: 28px;
          background: var(--org-line-color);
        }

        @media (max-width: 1050px) {
          .org-container {
            padding: 40px 20px;
          }

          .org-card-title {
            font-size: 14px;
          }

          .org-card-icon {
            width: 52px;
          }

          .org-card-coordinator .org-card-icon {
            width: 40px;
          }

          .org-card-coordinator .org-card-title {
            font-size: 12px;
            padding: 12px 4px;
          }
        }

        @media (max-width: 700px) {
          .org-section {
            padding: 35px 4% 45px;
          }

          .org-container {
            padding: 30px 12px;
            border-radius: 16px;
            overflow-x: auto;
          }

          .org-section-heading {
            margin-bottom: 30px;
          }

          .org-eyebrow {
            font-size: 10px;
            letter-spacing: 1.5px;
          }

          .org-chart {
            min-width: 620px;
          }

          .org-card {
            min-height: 56px;
          }

          .org-card-steering {
            max-width: 260px;
          }

          .org-card-director {
            max-width: 230px;
          }

          .org-card-joint {
            max-width: 200px;
          }

          .org-card-icon {
            width: 46px;
          }

          .org-card-coordinator .org-card-icon {
            width: 34px;
          }

          .org-card-coordinator .org-card-title {
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .org-card {
            transition: none;
          }

          .org-card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;