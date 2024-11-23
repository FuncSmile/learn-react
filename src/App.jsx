import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  render() {
    return (
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        click me!
      </button>
    );
  }
}

const ButtonFucn = (props) => {
  const { color, colorHov } = props;
  return (
    <button
      className={`${color} ${colorHov} text-white font-bold py-2 px-4 rounded`}
    >
      click me!
    </button>
  );
};

ButtonFucn.propTypes = {
  color: PropTypes.string,
  colorHov: PropTypes.string,
};

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-4">
      <Button></Button>
      <ButtonFucn color="bg-sky-500" colorHov="hover:bg-sky-700"></ButtonFucn>
    </div>
  );
}

export default App;
