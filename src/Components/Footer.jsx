import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#1B5538] text-white py-6 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4 text-sm md:text-base">
          &copy; {new Date().getFullYear()} OOKR - All Rights Reserved
        </p>
        <p className="text-sm text-gray-300 mb-4">
          Designed &amp; hosted by{" "}
          <a
            href="https://www.embarkdigitals.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white underline"
          >
            Embark Digitals
          </a>
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-[#397D5A]">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/calendar" className="hover:text-white">Calendar</Link>
          <Link to="/vision-plan" className="hover:text-white">Vision Plan 2035</Link>
          <Link to="/objectives" className="hover:text-white">Objectives</Link>
          <Link to="/successstories" className="hover:text-white">Impact Journey</Link>
          <Link to="/divisions" className="hover:text-white">Divisions</Link>
          <Link to="/leadership" className="hover:text-white">Leadership</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
