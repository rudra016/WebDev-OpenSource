import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RowTable from "./RowTable";
import { useDispatch, useSelector } from "react-redux";
import { showing, show_loaded } from "../../redux/actions";
import { stringInclude } from "../../helpers/stringInclude";

export default function ResultTable() {
  const dispatch = useDispatch();
  const { result, show, searchword, loading, show_load, error, filterby } =
    useSelector((state) => state.data);

  let results;
  if (result.results) results = result.results;
  //Scroll event
  window.onscroll = () => {
    if (
      !((show + 1) * 10 >= results?.filter(applyFilter).length) &&
      document.body.scrollHeight - window.scrollY <= window.innerHeight + 5
    ) {
      dispatch(show_loaded());
      setTimeout(() => {
        dispatch(showing());
      }, 300);
    }
  };

  //Filter results
  const applyFilter = (line) => {
    switch (filterby) {
      case "":
        return true;
      case "artistTerm":
        return stringInclude(line.artistName, searchword);
      case "albumTerm":
        return stringInclude(line.collectionName, searchword);
      case "songTerm":
        return stringInclude(line.trackName, searchword);
      default:
        return false;
    }
  };

  return (
    <TableContainer
      component={Paper}
      style={{ marginBottom: "30px" }}
      id="scrollToHere"
    >
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <b>Picture</b>
            </TableCell>
            <TableCell align="center">
              <b>Artiste(s)</b>
            </TableCell>
            <TableCell align="center">
              <b>Album</b>
            </TableCell>
            <TableCell align="center">
              <b>Song</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(show_load || loading) && (
            <TableRow colSpan={4}>
              <TableCell align="center" colSpan={4}>
                Loading...
              </TableCell>
            </TableRow>
          )}
          {error && (
            <TableRow>
              <TableCell
                style={{ color: "darkred" }}
                align="center"
                colSpan={4}
              >
                Error :( Make sure you've turned off security mode on your
                browser or check your network
              </TableCell>
            </TableRow>
          )}
          {
            //When match result
            !show_load &&
              result.results &&
              results
                .filter(applyFilter)
                .slice(show * 10, show * 10 + 10)
                .map((row, index) => <RowTable row={row} key={index} />)
          }

          {
            //When no result
            (result.resultCount === 0 ||
              results?.filter(applyFilter).length === 0) && (
              <TableRow colSpan={4}>
                <TableCell style={{ color: "gray" }} align="center" colSpan={4}>
                  No Result for your query...
                </TableCell>
              </TableRow>
            )
          }

          {
            //Search query is empty
            searchword === "" && (
              <TableRow>
                <TableCell style={{ color: "gray" }} align="center" colSpan={4}>
                  No query, no result...
                </TableCell>
              </TableRow>
            )
          }
          {results?.length !== 0 &&
            (show === 19 ||
              (show + 1) * 10 >= results?.filter(applyFilter).length) && (
              <TableRow>
                <TableCell style={{ color: "gray" }} align="center" colSpan={4}>
                  You have seen all result...
                </TableCell>
              </TableRow>
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
