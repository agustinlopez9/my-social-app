interface NotFoundProps {
  message?: string;
}

const NotFound = ({ message = "Not found" }: NotFoundProps) => {
  return <div>{message}</div>;
};

export default NotFound;
