import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "../../../components/select/Filter";
import SearchInput from "../../../components/form-field/SearchInput";
import { Fragment } from "react";
import ResultTable from "../../../components/Table/ResultTable";
const Block = styled.div`
  min-height: 85vh;
  @media (min-height: 665px) {
    min-height: 86vh;
  } ;
`;

const SearchArea = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 50px;
  padding-bottom: 50px;
  position: sticky;
  top: -50px;
  @media (max-width: 450px) {
    top: -15px;
    padding-top: 15px;
    padding-bottom: 35px;
  } ;
`;

const TableData = styled.div``;

export default function Main() {
  return (
    <Fragment>
      <Block className="container">
        <SearchArea>
          <SearchInput />
          <Filter />
        </SearchArea>
        <TableData>
          <ResultTable />
        </TableData>
      </Block>
    </Fragment>
  );
}
