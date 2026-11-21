const committeeMembers = [
    {
        name: "Sr. Prof. Kumar Molugaram",
        designation: "Hon'ble Vice-Chancellor, Osmania University",
        role: "Chairperson",
    },
    {
        name: "Prof. M. V. Panduranga Rao",
        designation: "Indian Institute of Technology Hyderabad (IITH)",
        role: "Member",
    },
    {
        name: "Dr. Ashok Kumar Das",
        designation:
            "Professor, International Institute of Information Technology Hyderabad (IIIT Hyderabad)",
        role: "Member",
    },
    {
        name: "Prof. Geetha",
        designation:
            "Professor, Department of Computer Science and Information Systems, BITS Pilani Hyderabad Campus",
        role: "Member",
    },
    {
        name: "Dr. Mahesh U. Patil",
        designation:
            "Scientist 'G' and Associate Director (Cyber Security R&D), C-DAC Hyderabad",
        role: "Member",
    },
    {
        name: "Mr. Sridhar CV",
        designation:
            "Mission Director, Andhra Pradesh Quantum Mission & Head, COIN Academia & Industry Strategic Initiatives, Tata Consultancy Services",
        role: "Member",
    },
    {
        name: "Mr. Madhav VSSV Ayyagari",
        designation: "Consultant, TCS",
        role: "Member",
    },
    {
        name: "Mr. K.V. Krishna Rao",
        designation:
            "Director, Program Management, Qualcomm India Private Limited, Hyderabad",
        role: "Member",
    },
    {
        name: "Mr. S. JayaKrishna Rao",
        designation: "Technical Lead, Enter soft solutions",
        role: "Member",
    },
    {
        name: "Mr. Vasu Adunutula",
        designation: "Founder & CEO, Pragya Cyber Private Limited",
        role: "Member",
    },
    {
        name: "Prof. P. Chandra Sekhar",
        designation:
            "Incharge Director, Centre for Cyber Security and Cyber Law",
        role: "Convener",
    },
];

const SteeringCommittee = () => {
    return (
        <main className="sc-page">

            {/* PAGE HEADER */}

            <section className="sc-hero">
                <div className="sc-hero-inner">
                    <span className="sc-hero-badge">
                        CCSCL
                    </span>

                    <h1>Steering Committee</h1>

                    <p>
                        Leadership, strategic guidance and academic excellence
                        at the Centre for Cyber Security & Cyber Law.
                    </p>
                </div>
            </section>

            {/* COMMITTEE MEMBERS */}

            <section className="sc-content">
                <div className="sc-container">

                    <div className="sc-section-heading">
                        <span>GOVERNANCE & LEADERSHIP</span>

                        <h2>Members of the Steering Committee</h2>

                        <div className="sc-heading-line" />
                    </div>

                    <div className="sc-table-wrapper">
                        <table
                            className="sc-table"
                            aria-label="Steering Committee Members"
                        >
                            <thead>
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col">Name and Designation</th>
                                    <th scope="col">Role</th>
                                </tr>
                            </thead>

                            <tbody>
                                {committeeMembers.map((member, index) => (
                                    <tr key={member.name}>
                                        <td className="sc-serial">
                                            {index + 1}.
                                        </td>

                                        <td className="sc-member-details">
                                            <h3>{member.name}</h3>

                                            <p>{member.designation}</p>
                                        </td>

                                        <td className="sc-role-cell">
                                            <span
                                                className={`sc-role-badge sc-role-${member.role.toLowerCase()}`}
                                            >
                                                {member.role}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>

            <style>{`
        .sc-page {
          min-height: 100vh;
          background: var(--background, #faf8f3);
        }

        /* HERO SECTION */

        .sc-hero {
          padding: 65px 5%;
          background: linear-gradient(
            135deg,
            #07173a 0%,
            #0a1f44 55%,
            #12306a 100%
          );
          border-bottom: 4px solid #b8892b;
          text-align: center;
        }

        .sc-hero-inner {
          max-width: 1000px;
          margin: 0 auto;
        }

        .sc-hero-badge {
          display: inline-block;
          padding: 7px 17px;
          margin-bottom: 18px;
          border: 1px solid rgba(226, 194, 117, 0.5);
          border-radius: 30px;
          background: rgba(184, 137, 43, 0.12);
          color: #e2c275;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .sc-hero h1 {
          margin: 0 0 16px;
          color: #ffffff;
          font-family: "Playfair Display", serif;
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1.2;
          font-weight: 700;
        }

        .sc-hero p {
          max-width: 780px;
          margin: 0 auto;
          color: #d6deea;
          font-size: 16px;
          line-height: 1.8;
        }

        /* CONTENT SECTION */

        .sc-content {
          padding: 55px 4% 80px;
        }

        .sc-container {
          width: 100%;
          max-width: 1380px;
          margin: 0 auto;
        }

        .sc-section-heading {
          margin-bottom: 30px;
        }

        .sc-section-heading > span {
          display: block;
          margin-bottom: 10px;
          color: #b8892b;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .sc-section-heading h2 {
          margin: 0;
          color: #0a1f44;
          font-family: "Playfair Display", serif;
          font-size: clamp(24px, 3vw, 35px);
          line-height: 1.4;
          font-weight: 700;
        }

        .sc-heading-line {
          width: 65px;
          height: 3px;
          margin-top: 14px;
          background: #b8892b;
          border-radius: 5px;
        }

        /* COMMITTEE TABLE */

        .sc-table-wrapper {
          width: 100%;
          overflow-x: auto;
          background: #ffffff;
          border: 1px solid #e8e2d4;
          border-radius: 14px;
          box-shadow: 0 10px 35px rgba(10, 31, 68, 0.08);
        }

        .sc-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          min-width: 650px;
        }

        .sc-table thead {
          color: #ffffff;
          background: #0a1f44;
        }

        .sc-table th {
          padding: 20px 22px;
          font-size: 15px;
          font-weight: 700;
          white-space: nowrap;
          border-bottom: 3px solid #b8892b;
        }

        .sc-table th:first-child {
          width: 8%;
          text-align: center;
        }

        .sc-table th:nth-child(2) {
          width: 74%;
        }

        .sc-table th:last-child {
          width: 18%;
          text-align: center;
        }

        .sc-table tbody tr {
          background: #ffffff;
          border-bottom: 1px solid #e4e9f0;
          transition: background 0.2s ease;
        }

        .sc-table tbody tr:nth-child(even) {
          background: #f0f4fa;
        }

        .sc-table tbody tr:hover {
          background: #fff8e8;
        }

        .sc-table tbody tr:last-child {
          border-bottom: none;
        }

        .sc-table td {
          padding: 18px 22px;
          vertical-align: middle;
        }

        .sc-serial {
          color: #12306a;
          font-size: 15px;
          font-weight: 600;
          text-align: center;
        }

        .sc-member-details h3 {
          margin: 0 0 5px;
          color: #0a1f44;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.4;
        }

        .sc-member-details p {
          margin: 0;
          color: #5b6577;
          font-size: 14px;
          line-height: 1.7;
        }

        /* ROLE BADGES */

        .sc-role-cell {
          text-align: center;
        }

        .sc-role-badge {
          display: inline-block;
          min-width: 105px;
          padding: 7px 14px;
          border: 1px solid #cdd8e8;
          border-radius: 6px;
          background: #edf2f9;
          color: #12306a;
          font-size: 12px;
          font-weight: 600;
          text-align: center;
          white-space: nowrap;
        }

        .sc-role-chairperson {
          background: #0a1f44;
          border-color: #0a1f44;
          color: #ffffff;
        }

        .sc-role-convener {
          background: #fff3d8;
          border-color: #d9b765;
          color: #856018;
        }

        /* RESPONSIVE DESIGN */

        @media (max-width: 768px) {
          .sc-hero {
            padding: 45px 5%;
          }

          .sc-hero p {
            font-size: 14px;
          }

          .sc-content {
            padding: 35px 4% 50px;
          }

          .sc-section-heading {
            margin-bottom: 22px;
          }

          .sc-table th,
          .sc-table td {
            padding: 14px 16px;
          }

          .sc-member-details h3 {
            font-size: 15px;
          }

          .sc-member-details p {
            font-size: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sc-table tbody tr {
            transition: none;
          }
        }
      `}</style>
        </main>
    );
};

export default SteeringCommittee;