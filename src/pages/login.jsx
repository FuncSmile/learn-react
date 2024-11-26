import AuthLayouts from "../components/layouts/AuthLayouts";
import FromLogin from "../components/fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayouts Title={"Login"} Subtitle={"Enter Your Account"}>
      <FromLogin />
    </AuthLayouts>
  );
};

LoginPage.propTypes = {};

export default LoginPage;
