import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {userRows,userColumns} from '../../datatablesource'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Datatable = () => {
  const [data,setData]=useState(userRows);

  const handleDelete=(id)=>{
   setData(data.filter((item)=>item.id !== id));
  };

const actionColumn=[{
    field:"action",
    headerName:"Actions",
    width:300,
    renderCell:(params)=>{
        return(
            <div className="cellAction">
              <Link to='/users/test' >
                <div className="viewBtn">View</div>
                </Link>
                <div className="deletebtn" onClick={()=>handleDelete(params.row.id)}>Delete</div>
            </div>
        )
    }
}
]

  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add New
        <Link to='/users/new' className='link'>
        Add New
        </Link>
      </div>
            <DataGrid className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[9]}
        checkboxSelection
      />

    </div>
  )
}

export default Datatable