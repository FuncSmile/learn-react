import PropTypes from "prop-types";
const Input = (props) => {
  const { Type, Name, Id, Placeholder } = props;
  return (
    <input
      type={Type}
      name={Name}
      id={Id}
      placeholder={Placeholder}
      className="w-full border border-gray-400 rounded-md px-3 py-1 text-slate-400 outline-indigo-500"
      autoComplete="off"
    />
  );
};

Input.propTypes = {
  Type: PropTypes.string,
  Name: PropTypes.string,
  Id: PropTypes.string,
  Placeholder: PropTypes.string,
};

export default Input;
