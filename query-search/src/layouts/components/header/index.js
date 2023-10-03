import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";

const Block = styled.div`
  display: flex;
  justify-content: center;
  padding-top:15px;
  padding-bottom:15px;
  font-size:1.5rem;
 
  box-shadow: 1px 1px 10px;
`;

export default function Header() {
  return <Block>
    <div>iTunes Music</div>
  </Block>;
}

