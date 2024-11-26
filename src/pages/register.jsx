import AuthLayouts from "../components/layouts/AuthLayouts";
import FormRegister from "../components/fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayouts Title={"Register"} Subtitle={"Create Your Account"}>
      <FormRegister />
    </AuthLayouts>
  );
};

RegisterPage.propTypes = {};

export default RegisterPage;
