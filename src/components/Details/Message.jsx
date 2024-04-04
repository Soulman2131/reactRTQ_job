import { Alert } from "@material-tailwind/react";

const Message = ({ variant, children }) => {
  return <Alert variant={variant}> {children} </Alert>;
};

Message.defaultProps = {
  variant: "gradient",
};

export default Message;
