import React, { useState } from 'react';
import FilesStyle from './Files.module.scss';
import star from 'assets/images/Icon.png';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Grid from './components/grid';
import { Menu, MenuItem, Button } from '@mui/material';

const SharedFiles: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const createHandleMenuClick = (menuItem: string) => () => {
    console.log(`Clicked on ${menuItem}`);
    handleClose();
  };
  return (
    <div className={FilesStyle['container']}>
      <div className={FilesStyle['header']}>
        <img src={star} alt='star' />
        <div className={FilesStyle['header-container']}>
          <h6 className={FilesStyle['header-text']}>Contribution</h6>
          <h6 className={FilesStyle['header-text-2']}>By Adding files here you contribute in training the AI</h6>
        </div>
        <Button
          className={FilesStyle['upload-data-btn']}
          variant='contained'
          endIcon={<CloudUploadIcon />}
          onClick={handleClick}
        >
          Upload Data
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={createHandleMenuClick('Profile')}>Create Folder</MenuItem>
          <MenuItem onClick={createHandleMenuClick('Language settings')}>Upload Folder</MenuItem>
          <MenuItem onClick={createHandleMenuClick('Log out')}>Upload File</MenuItem>
        </Menu>
      </div>
      <div className={FilesStyle['content']}>
        <Grid />
      </div>
    </div>
  );
};

export default React.memo(SharedFiles);
