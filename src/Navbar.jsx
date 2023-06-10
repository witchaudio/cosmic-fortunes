import './navbar.css';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex justify-center items-center navbar-section">
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-bold whitespace-no-wrap flex-grow">
            Cosmic Fortunes
          </h1>
          <img className="image-logo" src="assets/crystall-ball.png" alt="Crystal Ball" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
