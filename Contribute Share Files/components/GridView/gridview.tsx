import React from 'react';
import GridStyle from './GridView.module.scss';
// import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import file from 'assets/images/Rectangle.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const GridView: React.FC<{ data: any[] }> = ({}) => {
  return (
    <div className={GridStyle['grid-container']}>
      <div className={GridStyle['files-layout']}>
        <Card className={GridStyle['file-layout']}>
          <CardContent className={GridStyle['layout']}>
            <InsertDriveFileIcon className={GridStyle['file-icon']} />
            <h6 className={GridStyle['text-1']}>Report_Alpha1</h6>
            <MoreVertIcon className={GridStyle['icon']} />
          </CardContent>
          <div className={GridStyle['img']}>
            <img src={file} alt='image' />
          </div>
        </Card>
      </div>
      <div className={GridStyle['files-layout']}>
        <Card className={GridStyle['file-layout']}>
          <CardContent className={GridStyle['layout']}>
            <InsertDriveFileIcon className={GridStyle['file-icon']} />
            <h6 className={GridStyle['text-1']}>Report_Alpha1</h6>
            <MoreVertIcon className={GridStyle['icon']} />
          </CardContent>
          <img src={file} alt='image' />
        </Card>
      </div>
    </div>
  );
};

export default GridView;
