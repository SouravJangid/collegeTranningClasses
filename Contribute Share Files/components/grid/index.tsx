import React, { useState, useEffect } from 'react';
import GridStyle from './Grid.module.scss';
import { Menu, MenuItem, Button, Divider } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchIcon from '@mui/icons-material/Search';
import GridView from '../GridView/gridview';
import ListView from '../ListView/listview';

const Grid: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeView, setActiveView] = useState('grid');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/content')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

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

  const handleViewChange = (view: string) => () => {
    setActiveView(view);
  };

  return (
    <div className={GridStyle['container']}>
      <div className={GridStyle['header']}>
        <h6 className={GridStyle['header-text']}>Storage &gt; {activeView === 'grid' ? 'Storage' : 'File Name'}</h6>

        <div className={GridStyle['header-right']}>
          <Button onClick={handleClick} endIcon={<KeyboardArrowDownIcon />}>
            File Type
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={createHandleMenuClick('Profile')}>Profile</MenuItem>
            <MenuItem onClick={createHandleMenuClick('Language settings')}>Language settings</MenuItem>
            <MenuItem onClick={createHandleMenuClick('Log out')}>Log out</MenuItem>
          </Menu>

          <Button onClick={handleClick} endIcon={<KeyboardArrowDownIcon />}>
            Sort by
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={createHandleMenuClick('Profile')}>Profile</MenuItem>
            <MenuItem onClick={createHandleMenuClick('Language settings')}>Language settings</MenuItem>
            <MenuItem onClick={createHandleMenuClick('Log out')}>Log out</MenuItem>
          </Menu>

          <div className={GridStyle['header-container']}>
            <GridViewIcon
              onClick={handleViewChange('grid')}
              className={activeView === 'grid' ? GridStyle['active'] : ''}
            />
            <FormatListBulletedIcon
              onClick={handleViewChange('list')}
              className={activeView === 'list' ? GridStyle['active'] : ''}
            />
          </div>
          <div className={GridStyle['inputBox_container']}>
            <div className={GridStyle['input-box']}>
              <SearchIcon />
              <input className={GridStyle['inputBox']} id='inputBox' type='text' placeholder='Search For Products' />
            </div>
          </div>
        </div>
      </div>
      <Divider />

      {activeView === 'grid' ? <GridView data={data} /> : <ListView data={data} />}
    </div>
  );
};

export default React.memo(Grid);
