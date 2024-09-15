import Alert from "react-bootstrap/Alert";

const MessageBox = (props) => {
  return <Alert variant={"danger" || "info"}>{props.children}</Alert>;
};
export default MessageBox;
