import React, { useEffect, useState } from 'react';
import Table, { ColumnsType } from 'rc-table';
import ListViewStyles from './ListView.module.scss';
import IconButton from '@mui/material/IconButton';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'; // Import the icon
// API and constants
import useOpenApi, { AxiosErrorResponseType } from 'hooks/useOpenApi';
import { AxiosResponse } from 'axios';
import { userListpUrl } from './constant';
import { User } from './constant';
import LongMenu from '../menu';

const ListView: React.FC = () => {
  const { callOpenApi } = useOpenApi(onSuccess, onError);
  // Add some dummy data for initial display
  const [file, setFiles] = useState<User[]>([
    {
      fileName: 'Report_Alpha1.pdf',
      uploadedDate: '23Oct,2024',
      fileSize: '2 MB',
    },
    {
      fileName: 'Report_Alpha1.pdf',
      uploadedDate: '22Oct,2024',
      fileSize: '3 MB',
    },
  ]);

  useEffect(() => {
    const getList = async () => {
      callOpenApi({ method: 'POST', url: userListpUrl, data: { userType: 'file' } });
    };
    getList();
  }, [callOpenApi]);

  function onSuccess(res: AxiosResponse) {
    console.log('success', res);
    if (res.data) {
      setFiles(res.data);
    }
  }

  function onError(err: AxiosErrorResponseType) {
    console.log('error', err);
  }

  const fileDetailsClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    console.log('Details clicked', event);
    // Add logic to handle file details click event (e.g., open a modal)
  };

  const columns: ColumnsType<unknown>[] = [
    {
      title: 'File Name',
      dataIndex: 'fileName',
      key: 'fileName',
      className: ListViewStyles['fileNameColumn'],
      render: (text) => (
        <div className={ListViewStyles['file-name-cell']}>
          <InsertDriveFileIcon className={ListViewStyles['file-icon']} />
          {text}
        </div>
      ),
    },
    {
      title: 'Uploaded Date',
      dataIndex: 'uploadedDate',
      key: 'uploadedDate',
      className: ListViewStyles['uploadedDateColumn'],
    },
    {
      title: 'File Size',
      dataIndex: 'fileSize',
      key: 'fileSize',
      className: ListViewStyles['fileSizeColumn'],
    },
    {
      title: '',
      key: 'actions',
      className: ListViewStyles['actionsColumn'],
      render: () => (
        <IconButton aria-label='click' className={ListViewStyles['table-action-btn']} onClick={fileDetailsClickHandler}>
          <LongMenu />
        </IconButton>
      ),
    },
  ];

  const tableData = file?.map((file, index) => ({
    key: index,
    fileName: file.fileName,
    uploadedDate: file.uploadedDate,
    fileSize: file.fileSize,
  }));

  return (
    <div className={ListViewStyles['file-table-container']}>
      <Table
        rowClassName={ListViewStyles['table-row']}
        columns={columns}
        data={tableData}
        rowKey='key'
        className={ListViewStyles['custom-table']}
        rowHoverable={true}
      />
    </div>
  );
};

export default React.memo(ListView);
