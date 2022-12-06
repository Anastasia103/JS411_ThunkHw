import React, {useState, useEffect} from 'react'
import {
    Container,
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const options = [
    'Delete'
  ];

  const ITEM_HEIGHT = 48;

const Import = (props) => {
    // fill out this component
    const [cellIndex, setCellIndex] = useState();
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const divStyle = {
    height: 30,
    width: 30 
  }
  const handleClick = (e, index) => {
    setCellIndex(index)
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  useEffect(
    () => {
      console.log(cellIndex);
    },
    // eslint-disable-next-line
    [cellIndex]
  );

    return (
        <Container>
        <h2>COUNT: {props.makes.length}</h2>
        <Button onClick={props.fetchMakes} variant="contained" color="primary">Import</Button>
        <Table className= "Makes" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID </TableCell>
            <TableCell>Make </TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((row, index) => (
            <TableRow key={row.MakeName}>
              <TableCell >{row.MakeId}</TableCell>
              <TableCell >{row.MakeName}</TableCell>
              <TableCell id={row.MakeId}>
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={(e) => handleClick(e, index)}
                    autoFocus
                    style={{ padding: 0}}
               >
                 <MoreVertIcon 
                 row ={row.MakeId}
                 style={divStyle}/>
               </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Delete'} onClick={(idx) => {props.deleteMake(cellIndex)}}>
            {option}
          </MenuItem>
        ))}
      </Menu>

        </Container>
    )
}

export default Import