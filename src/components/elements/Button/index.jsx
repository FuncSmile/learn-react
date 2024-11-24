import PropTypes from "prop-types";

const Button = (props) => {
  const { color, colorHov } = props;
  return (
    <button
      className={`bg-${color} hover:bg-${colorHov} text-white font-bold py-2 px-4 rounded`}
    >
      click me!
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  colorHov: PropTypes.string,
};

export default Button;
