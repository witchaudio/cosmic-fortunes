import './Footer.css'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center fixed bottom-0 w-full">
      <p className="footer-text">&copy; {new Date().getFullYear()} Cosmic Fortunes | Witch Audio Studios</p>
    </footer>
  );
}

export default Footer;
