import Button from "../elements/Button";
import FromInput from "../elements/Input";

const FromRegister = () => {
  return (
    <form className="w-full min-w-[300px] h-[90%] pt-4" action="">
      <FromInput
        LABEL={"Full Name"}
        HTMLFOR={"fullName"}
        ID={"fullName"}
        NAME={"fullName"}
        TYPE={"text"}
        PLACEHOLDER={"Asep@example.com"}
      />
      <FromInput
        LABEL={"Email"}
        HTMLFOR={"email"}
        ID={"email"}
        NAME={"email"}
        TYPE={"email"}
        PLACEHOLDER={"Asep@example.com"}
      />
      <FromInput
        LABEL={"Password"}
        HTMLFOR={"password"}
        ID={"password"}
        NAME={"password"}
        TYPE={"password"}
        PLACEHOLDER={"*******"}
      />
      <FromInput
        LABEL={"Confirm Password"}
        HTMLFOR={"confirmPassword"}
        ID={"confirmPassword"}
        NAME={"confirmPassword"}
        TYPE={"password"}
        PLACEHOLDER={"Confirm Password"}
      />
      <Button
        classname={
          "bg-indigo-400 hover:bg-indigo-600 rounded-md w-full font-bold mt-4"
        }
      >
        Login
      </Button>
    </form>
  );
};

export default FromRegister;
