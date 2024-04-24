// import React from "react";
import PropTypes from "prop-types"; // Aktifkan kembali import ini

// Arrow Function Button
const Button = (props) => {
  const {
    children = "",
    variant = "bg-black hover:bg-blue-500 w-20 mx-auto mb-5",
  } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string.isRequired, // validasi props / text
  children: PropTypes.string.isRequired, // Tambahkan validasi untuk props 'children'
};

// Function Component App
function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-100">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button variant="bg-blue-500 hover:bg-blue-700 w-full">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;