import React from 'react'
import Style from "./MainSection.module.css"
import Card from './Card'
import MainTable from './MainTable'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BasicLineChart from './ChartLine';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


  


function MainSection() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={Style.mainSectioncontainer}>
         <div className={Style.mainSectionHeader}>
        <img src="/images/backarrow.svg" alt="back button" />
        <div className={Style.backtext}>Back</div>
        </div>
        <div className={Style.container}>
        <div className={Style.overviewSection}>
            <div><h4>Overview</h4></div>
            <div className={Style.birthday}>
            <input type="date" id="birthday" name="birthday"/></div>
        </div>
        <div className='card-container'>
        <Card/>
        <Card/>
        </div>
        <BasicLineChart/>
        <div onClick={handleOpen}> <MainTable/></div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <MainTable/>
        </Box>
      </Modal>
      </div>
       
    </div>
  )
}

export default MainSection