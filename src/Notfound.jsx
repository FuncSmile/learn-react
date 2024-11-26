import { Link, useRouteError } from "react-router-dom";
const Errorpage = () => {
  const error = useRouteError();
  // console.log(error);
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-5">
      <h1 className="text-5xl font-black text-red-500">Oops! {error.status}</h1>
      <p className="text-2xl">{error.statusText}</p>
      <p className="text-lg italic">
        <span className="text-red-500">Error : </span> {error.error.message}
      </p>
      <Link to={"/"} className="underline">
        Back to Home
      </Link>
    </div>
  );
};

export default Errorpage;
