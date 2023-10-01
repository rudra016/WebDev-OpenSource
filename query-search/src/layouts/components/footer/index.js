import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  padding-top: 5px;
  border-top: 1px solid gray;
`;

export default function Footer() {
  return (
    <Block>
      <div>By Roméo KAKPO</div>
    </Block>
  );
}
