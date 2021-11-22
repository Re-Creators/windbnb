import styled from "styled-components";
import ReactDOM from "react-dom";

function ModalOverlay({ showDrawer, toggleDrawer }) {
  return ReactDOM.createPortal(
    <Container showDrawer={showDrawer} onClick={toggleDrawer}></Container>,
    document.getElementById("portal")
  );
}

export default ModalOverlay;
const Container = styled.div`
  transition: all 500ms ease-in-out 0s;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  content: "";
  visibility: ${(props) => (props.showDrawer ? "visible" : "hidden")};
  opacity: ${(props) => (props.showDrawer ? "1" : "0")};
  background-color: rgba(0, 0, 0, 0.6);
`;
