import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux'

export default function SelectStatus({propsKey, changeStatus}) {
  const applications = useSelector(store => store.user.applications)
  const [status, setStatus] = React.useState(applications[propsKey].status);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setStatus(applications[propsKey].status.status);
  }, [applications[propsKey].status.status]);  


  const handleChange = (event) => {
    setStatus(event.target.value);
    changeStatus(event.target.value, propsKey)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      {/* <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Open the select
      </Button> */}
      <FormControl sx={{ m: 1, minWidth: 161 }}>
        {/* <InputLabel id="demo-controlled-open-select-label">Age</InputLabel> */}
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={status}
          label="Age"
          onChange={handleChange}
          className="completed__select"
          style={{ color: 'white'}}
        >
          <MenuItem value={"В обработке"}>В обработке</MenuItem>
          <MenuItem value={"Отменить"}>Отменить</MenuItem>
          <MenuItem value={"Завершена"}>Завершена</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}