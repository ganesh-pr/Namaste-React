import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  const { status, statusText } = useRouteError();
  return (
    <>
      <h1 className="font-bold text-2xl p-5">Oops!!</h1>
      <h2 className="font-bold text-xl p-5">Something went wrong</h2>
      <h3 className="font-bold text-lg p-5">
        {status ? status + " " + statusText : ""}
      </h3>
    </>
  );
};

export default Error;
