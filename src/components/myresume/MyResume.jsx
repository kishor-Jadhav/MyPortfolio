
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import MyResumeNavbar from "./MyResumeNavbar";
import kkImage from "../../assets/kk.jpg"
const MyResume = () => {
  return (
    <>

      <div className="min-h-screen bg-gray-200 py-10 px-12 mt-4">

        <div className="max-w-7xl mx-auto bg-white shadow-2xl grid md:grid-cols-[320px_1fr] md:overflow-hidden mt-2">

          {/* LEFT SIDEBAR */}
          <div className="bg-[#1e293b] text-white p-8">

            {/* PROFILE IMAGE */}
            <div className="flex justify-center">
              <img
                src={kkImage}
                alt="profile"
                className="w-52 h-52 rounded-full border-4 border-gray-300 object-cover"
              />
            </div>

            {/* NAME */}
            <div className="text-center mt-8">
              <p className="text-blue-300 text-xl mt-2">
                UI Developer & Tech Lead
              </p>
            </div>

            {/* CONTACT */}
            <div className="mt-14">
              <h2 className="text-3xl font-bold mb-6 uppercase">
                Contact
              </h2>

              <div className="space-y-5 text-lg">

                <div className="flex gap-4 items-start">
                  <FaPhoneAlt className="mt-1 text-blue-300" />
                  <span>+91 93224 55007</span>
                </div>

                <div className="flex gap-4 items-start break-all">
                  <FaEnvelope className="mt-1 text-blue-300" />
                  <span>kishor01jadhav@gmail.com</span>
                </div>

                <div className="flex gap-4 items-start">
                  <FaMapMarkerAlt className="mt-1 text-blue-300" />
                  <span>Pune, Maharashtra</span>
                </div>

                <div className="flex gap-4 items-start">
                  <FaLinkedin className="mt-1 text-blue-300" />
                  <span>LinkedIn Profile</span>
                </div>

              </div>
            </div>

            {/* SKILLS */}
            <div className="mt-14">
              <h2 className="text-3xl font-bold mb-6 uppercase">
                Skills
              </h2>

              <ul className="space-y-3 text-lg list-disc pl-5 text-gray-300 leading-8">
                <li>Angular 10+</li>
                <li>React.js</li>
                <li>Redux / NGRX</li>
                <li>Spring Boot</li>
                <li>JavaScript / TypeScript</li>
                <li>HTML5 / CSS3 / SCSS</li>
                <li>Bootstrap / PrimeNG</li>
                <li>RxJS</li>
                <li>MySQL / MS SQL</li>
                <li>Stored Procedures</li>
                <li>JasperReports</li>
                <li>Crystal Reports</li>
                <li>Git / Agile / Scrum</li>
              </ul>
            </div>

            {/* LANGUAGES */}
            <div className="mt-14">
              <h2 className="text-3xl font-bold mb-6 uppercase">
                Languages
              </h2>

              <ul className="space-y-3 text-lg text-gray-300 list-disc pl-5">
                <li>English</li>
                <li>Hindi</li>
                <li>Marathi</li>
              </ul>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div>
            <MyResumeNavbar />
            <div className="p-10 mt-14 md:p-14 text-gray-800">
              {/* PROFILE */}
              <section id="profile">
                <h2 className="text-3xl font-bold uppercase mb-8">
                  Profile
                </h2>

                <p className="text-xl leading-10 text-gray-700 text-justify">
                  UI Developer & Tech Lead with 10+ years of IT experience
                  specializing in Angular (v10+), React.js, Redux/NGRX,
                  and Spring Boot. Proven expertise in delivering scalable,
                  responsive, and high-performance applications across
                  Healthcare, Logistics, Ecommerce, Education, and Industry
                  domains.

                  <br /><br />

                  Recently completed M.Tech in Data Science from BITS Pilani
                  (2024), bringing additional strengths in analytics,
                  machine learning, and advanced reporting.
                </p>
              </section>

              {/* CORE SKILLS */}
              <section id="skills" className="mt-20">
                <h2 className="text-3xl font-bold uppercase mb-10">
                  Core Skills
                </h2>

                <div className="space-y-6">

                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      Front-End
                    </h3>
                    <p className="text-lg leading-8 text-gray-700">
                      Angular 10+, React.js 17+, Redux, NGRX, TypeScript, JavaScript, HTML5, CSS3, SCSS, Bootstrap, PrimeNG, Kendo UI
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      Back-End
                    </h3>
                    <p className="text-lg leading-8 text-gray-700">
                      Spring Boot (REST API), Java, JasperReports (PDF/Excel Reporting), Crystal Reports, Node.js (basic)
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      Data Science & Analytics
                    </h3>
                    <p className="text-lg leading-8 text-gray-700">
                      Python (basics), Data Processing, Visualization, Machine Learning (academic exposure)
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      Databases
                    </h3>
                    <p className="text-lg leading-8 text-gray-700">
                      MySQL, MS SQL, Stored Procedures, Query Optimization
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      Tools & Practices
                    </h3>
                    <p className="text-lg leading-8 text-gray-700">
                      Git, Agile/Scrum, UI Testing, Debugging, Performance Tuning
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      Domains
                    </h3>
                    <p className="text-lg leading-8 text-gray-700">
                      Healthcare, Logistics, Ecommerce, Education, Inventory, Industry
                    </p>
                  </div>

                </div>
              </section>

              {/* EXPERIENCE */}
              <section id="experience" className="mt-20">
                <h2 className="text-3xl font-bold uppercase mb-10">
                  Work Experience
                </h2>

                {/* CTS */}
                <div className="mb-16">

                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold">
                        Lead UI Developer
                      </h3>

                      <p className="text-xl font-semibold text-gray-600 mt-1">
                        Cognizant Technology Solutions
                      </p>
                    </div>

                    <span className="text-lg text-gray-600 mt-2 md:mt-0">
                      27-Oct-2021 – Present | Pune
                    </span>
                  </div>

                  <div className="mb-4 text-gray-700">
                    <p className="text-sm font-semibold mb-2">
                      <span className="text-slate-800">Technologies:</span> Angular, React.js, JavaScript, NGRX, Redux, HTML, CSS, Bootstrap, RxJS, Typescript, Spring Boot, Jasper Reports
                    </p>
                    <p className="text-sm font-semibold">
                      <span className="text-slate-800">Domains:</span> Healthcare, Logistics, Industry
                    </p>
                  </div>

                  <ul className="list-disc pl-8 text-lg leading-10 text-gray-700">
                    <li>
                      Led UI/Full-Stack development across major client accounts
                    </li>

                    <li className="ml-4 text-base">
                      <strong>John Deere India</strong> (Industry, Associate): Angular, JavaScript, NGRX, RxJS
                    </li>

                    <li className="ml-4 text-base">
                      <strong>FedEx</strong> (Logistics, Sr. Developer): React.js, Redux Thunk, Spring Boot, Jasper Reports
                    </li>

                    <li className="ml-4 text-base">
                      <strong>CVS Pharmacy</strong> (Healthcare, Lead Developer): Angular, Spring Boot, Jasper Reports
                    </li>

                    <li>
                      Improved app performance by 30% with NGRX/Redux optimizations.
                    </li>

                    <li>
                      Mentored junior developers, enforced coding standards, and ensured on-time delivery.
                    </li>
                  </ul>
                </div>

                {/* OK INFOSOFT */}
                <div className="mb-16">

                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold">
                        Founder / Sr. Software Engineer
                      </h3>

                      <p className="text-xl font-semibold text-gray-600 mt-1">
                        OK Infosoft
                      </p>
                    </div>

                    <span className="text-lg text-gray-600 mt-2 md:mt-0">
                      01-Nov-2020 – 25-Sep-2021 | Sangli (10 months)
                    </span>
                  </div>

                  <div className="mb-4 text-gray-700">
                    <p className="text-sm font-semibold mb-2">
                      <span className="text-slate-800">Technologies:</span> React.js, Angular, JavaScript, SQL, Stored Procedures, Crystal Reports, HTML, CSS, Bootstrap, RxJS, TypeScript
                    </p>
                    <p className="text-sm font-semibold">
                      <span className="text-slate-800">Domains:</span> Ecommerce, Inventory, Industry
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="text-base font-semibold text-gray-800 mb-2">Products Delivered:</p>
                    <ol className="list-decimal pl-8 text-lg leading-8 text-gray-700 space-y-1">
                      <li>Textile ERP Application – MS SQL, Stored Procedures, Crystal Reports</li>
                      <li>Ecommerce Platform – MySQL, React.js, JavaScript, Html, CSS, Bootstrap</li>
                      <li>Web Applications - Angular, TypeScript, Html, CSS, Bootstrap</li>
                    </ol>
                  </div>

                  <ul className="list-disc pl-8 text-lg leading-10 text-gray-700">
                    <li>
                      Acted as Team Lead, managing client communication, planning, and delivery.
                    </li>

                    <li>
                      Developed reusable components and optimized SQL for performance.
                    </li>
                  </ul>
                </div>

                {/* MYGROUP */}
                <div className="mb-16">

                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold">
                        Software Engineer
                      </h3>

                      <p className="text-xl font-semibold text-gray-600 mt-1">
                        MyGroup Corporation
                      </p>
                    </div>

                    <span className="text-lg text-gray-600 mt-2 md:mt-0">
                      01-Dec-2014 – 16-Oct-2020 | Kolhapur (5.10 Years)
                    </span>
                  </div>

                  <div className="mb-4 text-gray-700">
                    <p className="text-sm font-semibold mb-2">
                      <span className="text-slate-800">Technologies:</span> Angular, React.js, JavaScript, HTML, CSS, Bootstrap, RxJS, TypeScript, SQL, Stored Procedures, Crystal Reports
                    </p>
                    <p className="text-sm font-semibold">
                      <span className="text-slate-800">Domains:</span> Ecommerce, Inventory, Industry, Online Delivery
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="text-base font-semibold text-gray-800 mb-2">Products Delivered:</p>
                    <ol className="list-decimal pl-8 text-lg leading-8 text-gray-700 space-y-1">
                      <li>FoodCard Delivery Application – Angular, TypeScript, SQL, Html, CSS, Bootstrap</li>
                      <li>Textile ERP Application – MS SQL, Stored Procedures, Crystal Reports</li>
                      <li>Ecommerce Platform – MySQL, React.js, JavaScript, Html, CSS, Bootstrap</li>
                    </ol>
                  </div>

                  <ul className="list-disc pl-8 text-lg leading-10 text-gray-700">
                    <li>
                      Reduced reporting time by 35% with optimized SQL and Crystal Reports.
                    </li>
                  </ul>
                </div>

                {/* BIYANI */}
                <div>

                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold">
                        Software Developer
                      </h3>

                      <p className="text-xl font-semibold text-gray-600 mt-1">
                        Biyani Technologies
                      </p>
                    </div>

                    <span className="text-lg text-gray-600 mt-2 md:mt-0">
                      22-Oct-2012 – 10-May-2014 | Kolhapur (1.6 Years)
                    </span>
                  </div>

                  <div className="mb-4 text-gray-700">
                    <p className="text-sm font-semibold mb-2">
                      <span className="text-slate-800">Technologies:</span> SQL, Crystal Reports, Stored Procedures, Database Concepts
                    </p>
                    <p className="text-sm font-semibold">
                      <span className="text-slate-800">Domain:</span> Education (College Management System)
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="text-base font-semibold text-gray-800 mb-2">Modules Delivered:</p>
                    <p className="text-lg text-gray-700">Home, Library, Hostel, SMS, Reports</p>
                  </div>

                  <ul className="list-disc pl-8 text-lg leading-10 text-gray-700">
                    <li>
                      Designed SQL schema, developed stored procedures, and created Crystal Reports.
                    </li>

                    <li>
                      Delivered a scalable College Management System used by institutions.
                    </li>
                  </ul>
                </div>

              </section>

              {/* PROJECTS */}
              <section id="projects" className="mt-20">
                <h2 className="text-2xl font-bold uppercase mb-10">
                  Key Projects
                </h2>

                <div className="space-y-10 text-lg text-gray-700 leading-9">

                  <div>
                    <h3 className="text-1xl font-bold mb-3">
                      ERP Reporting with JasperReports
                    </h3>

                    <ul className="list-disc pl-8">
                      <li>Integrated JasperReports with Spring Boot + Angular.</li>
                      <li>Generated PDF and Excel reports.</li>
                      <li>Improved report generation speed by 40%.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-1xl font-bold mb-3">
                      Customer Analytics Dashboard
                    </h3>

                    <ul className="list-disc pl-8">
                      <li>Built analytics dashboard using Python.</li>
                      <li>Applied ML models for customer segmentation.</li>
                      <li>Delivered business intelligence reports.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-1xl font-bold mb-3">
                      Inventory Management System
                    </h3>

                    <ul className="list-disc pl-8">
                      <li>Built scalable inventory system using React.js + Spring Boot.</li>
                      <li>Used Redux for state management.</li>
                      <li>Reduced system load time by 30%.</li>
                    </ul>
                  </div>

                </div>
              </section>

              {/* EDUCATION */}
              <section id="education" className="mt-20">
                <h2 className="text-2xl font-bold uppercase mb-10">
                  Education
                </h2>

                <div className="space-y-10">

                  <div>
                    <h3 className="text-2xl font-bold">
                      M.Tech – Data Science
                    </h3>

                    <p className="text-xl text-gray-600 mt-2">
                      BITS Pilani | 2022 – 2024
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      B.E – Computer Science
                    </h3>

                    <p className="text-xl text-gray-600 mt-2">
                      TKIET Warananagar | 2008 – 2012
                    </p>
                  </div>

                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyResume;