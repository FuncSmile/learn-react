import PropTypes from "prop-types";

const Button = (props) => {
  const { classname, children } = props;
  return (
    <button className={`${classname} text-white font-bold py-2 px-4 rounded`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  classname: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
