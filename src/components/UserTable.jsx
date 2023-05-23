import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import useGetUsers from '../Hooks/useGetUsers'

const UserTable = () => {
  const { data, isLoading } = useGetUsers()

  const handleDelete = (id) => {}

  const columns = [
    { field: 'id', headerName: 'ID', width: '90' },
    { field: 'name', headerName: 'NAME', width: '200' },
    { field: 'email', headerName: 'E-MAIL', width: '300' },
    { field: 'gender', headerName: 'GENDER', width: '90' },
    { field: 'status', headerName: 'STATUS', width: '90' },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/` + params.row.id} state={{ user: params.row }}>
              <EditIcon
                style={{ color: 'gray', marginRight: '10px', fontSize: '20px' }}
              />
            </Link>
            <DeleteOutlineIcon
              className='productListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]

  return (
    <div>
      {data && (
        <DataGrid
          className='table'
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
          getRowId={(row) => row.id}
        />
      )}
    </div>
  )
}

export default UserTable
