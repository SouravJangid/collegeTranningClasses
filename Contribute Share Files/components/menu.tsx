import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuStyles from './LongMenu.module.scss';

const options = ['Rename', 'Delete'];

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState('');

  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = (content: string) => {
    setModalContent(content);
    setOpenModal(true);
    handleCloseMenu();
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <IconButton
        aria-label='more'
        id='long-button'
        aria-controls={openMenu ? 'long-menu' : undefined}
        aria-expanded={openMenu ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleOpenModal(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box className={MenuStyles['modal-box']}>
          {modalContent === 'Rename' ? (
            <>
              <h2 id='modal-description' className={MenuStyles['modal-title']}>
                Rename
              </h2>
              <Divider />
              <Box mt={2}>
                <input type='text' className={MenuStyles['rename-input']} />
              </Box>
              <Box className={MenuStyles['button-container']}>
                <Button onClick={handleCloseModal} className={MenuStyles['cancel-btn']}>
                  Cancel
                </Button>
                <Button variant='contained' onClick={handleCloseModal} className={MenuStyles['save-btn']}>
                  Save
                </Button>
              </Box>
            </>
          ) : (
            <>
              <h2 id='modal-description' className={MenuStyles['modal-title']}>
                Are you sure you want to delete this file?
              </h2>
              <Divider />
              <Box className={MenuStyles['button-container']}>
                <Button onClick={handleCloseModal} className={MenuStyles['cancel-btn']}>
                  Cancel
                </Button>
                <Button onClick={handleCloseModal} className={MenuStyles['delete-btn']}>
                  Yes, Delete
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
