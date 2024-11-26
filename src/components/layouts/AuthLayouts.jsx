import PropTypes from "prop-types";

const AuthLayouts = (props) => {
  const { Title, Subtitle, children } = props;
  return (
    <div className="w-full min-w-full max-w-full h-screen flex justify-center items-center max-sm:p-4">
      <div className="w-[400px] min-w-[300px] h-[500px]">
        <h1 className="font-black text-5xl mb-4 text-indigo-400">{Title}</h1>
        <p className="text-md text-slate-500">{Subtitle}</p>
        {children}
      </div>
    </div>
  );
};

AuthLayouts.propTypes = {
  Title: PropTypes.string,
  Subtitle: PropTypes.string,
  children: PropTypes.object,
};

export default AuthLayouts;
