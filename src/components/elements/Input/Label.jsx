import PropTypes from "prop-types";

const Label = (props) => {
  const { HtmlFor, children } = props;
  return (
    <label htmlFor={HtmlFor} className="block p-2">
      {children}
    </label>
  );
};

Label.propTypes = {
  HtmlFor: PropTypes.string,
  children: PropTypes.array,
};

export default Label;
