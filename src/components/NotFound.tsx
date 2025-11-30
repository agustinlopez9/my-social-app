import { FaExclamationCircle } from "react-icons/fa";

interface NotFoundProps {
  message?: string;
}

const NotFound = ({
  message = "We couldn't find what you're looking for. The page you requested might have been moved or doesn't exist.",
}: NotFoundProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8">
      <FaExclamationCircle className="text-orange-600 text-6xl mb-4" />
      <h2 className="text-white text-2xl font-bold mb-2">Oops!</h2>
      <p className="text-zinc-400 text-lg text-center max-w-md">{message}</p>
    </div>
  );
};

export default NotFound;
