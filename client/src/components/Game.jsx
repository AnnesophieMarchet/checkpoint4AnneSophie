import PropTypes from "prop-types";

function Game({ title, description, user }) {
  return (
    <div
      className="bg-white bg-opacity-80 p-4 m-4 rounded-lg shadow-lg border-2 border-gray-200 
                    w-80 md:max-w-380 md:mx-auto lg:max-w-440 lg:mr-4"
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-gray-600">Utilisateur ID: {user}</p>
      <div className="flex justify-end space-x-4 mt-4">
        <svg
          className="w-6 h-6 text-gray-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 2a6 6 0 100 12A6 6 0 0010 2zM4.047 4.045a8 8 0 110 11.912A8 8 0 014.047 4.045zM5.5 11a2.5 2.5 0 104.95 1.1A3.493 3.493 0 0012 13.5 3.5 3.5 0 1012 6a3.493 3.493 0 00-1.55.4A2.5 2.5 0 005.5 11zm2 0a.5.5 0 111 0 .5.5 0 01-1 0z" />
        </svg>
        {/* <svg
          className="w-6 h-6 text-gray-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 2a6 6 0 100 12A6 6 0 0010 2zM4.047 4.045a8 8 0 110 11.912A8 8 0 014.047 4.045zM5.5 11a2.5 2.5 0 104.95 1.1A3.493 3.493 0 0012 13.5 3.5 3.5 0 1012 6a3.493 3.493 0 00-1.55.4A2.5 2.5 0 005.5 11zm2 0a.5.5 0 111 0 .5.5 0 01-1 0z" />
        </svg>
        <svg
          className="w-6 h-6 text-gray-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 2a6 6 0 100 12A6 6 0 0010 2zM4.047 4.045a8 8 0 110 11.912A8 8 0 014.047 4.045zM5.5 11a2.5 2.5 0 104.95 1.1A3.493 3.493 0 0012 13.5 3.5 3.5 0 1012 6a3.493 3.493 0 00-1.55.4A2.5 2.5 0 005.5 11zm2 0a.5.5 0 111 0 .5.5 0 01-1 0z" />
        </svg> */}
      </div>
    </div>
  );
}

Game.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  user: PropTypes.number.isRequired,
};

export default Game;
