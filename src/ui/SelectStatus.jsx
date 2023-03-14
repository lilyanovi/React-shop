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
      <FormControl sx={{ m: 1, minWidth: 161 }}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={status}
          label="Age"
          onChange={handleChange}
          className={ status === 'Отменить'
            ? 'completed__select completed__selected-delete'
            : 'completed__select'
          }
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