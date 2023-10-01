import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export default function RowTable(props) {
  const { artworkUrl100, artistName, collectionName, trackName, trackViewUrl } =
    props.row;
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="center">
        <img src={artworkUrl100} alt={artistName + " : " + collectionName} />
      </TableCell>
      <TableCell align="center">{artistName}</TableCell>
      <TableCell align="center">{collectionName}</TableCell>
      <TableCell align="center">
        <a target="_blank" rel="noreferrer" href={trackViewUrl}>
          {trackName}
        </a>
      </TableCell>
    </TableRow>
  );
}
