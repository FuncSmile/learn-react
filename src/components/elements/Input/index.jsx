import PropTypes from "prop-types";
import Label from "./Label";
import Input from "./Input";

const FromInput = (props) => {
  const { LABEL, HTMLFOR, ID, NAME, TYPE, PLACEHOLDER } = props;
  return (
    <div className="w-full mb-4">
      <Label HtmlFor={HTMLFOR}> {LABEL} </Label>
      <Input Id={ID} Name={NAME} Type={TYPE} Placeholder={PLACEHOLDER} />
    </div>
  );
};

FromInput.propTypes = {
  LABEL: PropTypes.string,
  HTMLFOR: PropTypes.string,
  ID: PropTypes.string,
  NAME: PropTypes.string,
  TYPE: PropTypes.string,
  PLACEHOLDER: PropTypes.string,
};

export default FromInput;
