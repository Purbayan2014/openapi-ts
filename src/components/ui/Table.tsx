'use client'

import { createTheme, ThemeProvider } from '@mui/material'
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid'
import { ApiRequest } from '@prisma/client'
import { useTheme } from 'next-themes'
import { FC } from 'react'

// timestamp is not serializable so we have to remove it from the type
// and add it back with a different name
// this is the modified type
type ModifiedRequestType<K extends keyof ApiRequest> = Omit<ApiRequest, K> & {
  timestamp: string
}

// userRequests is the data that is passed to the table
interface TableProps {
  userRequests: ModifiedRequestType<'timestamp'>[]
}

// all types of thec column definations are here
const columnsDraft: GridColDef[] = [
  {
    field: 'col1',
    headerName: 'API key used',
    width: 400,
    // renderHeader is a function that is used to render the header of the column
    renderHeader(params) {
      return (
        <strong className='font-semibold'>{params.colDef.headerName} 🔑</strong>
      )
    },
  },
  { field: 'col2', headerName: 'Path', width: 250 },
  { field: 'col3', headerName: 'Recency', width: 250 },
  { field: 'col4', headerName: 'Duration', width: 150 },
  { field: 'col5', headerName: 'Status', width: 150 },
]

const columns = columnsDraft.map((col) => {
  if (col.field === 'col1') {
    return col
  }

  return {
    ...col,
    renderHeader(params: GridColumnHeaderParams<any, any, any>) {
      return (
        <strong className='font-semibold'>{params.colDef.headerName}</strong>
      )
    },
  }
})

const Table: FC<TableProps> = ({ userRequests }) => {
  const { theme: applicationTheme } = useTheme()

  const darkTheme = createTheme({
    // pallette is the theme of the table
    palette: {
      mode: applicationTheme === 'light' ? 'light' : 'dark',
    },
  })

  // rows is the data that is passed to the table
  const rows = userRequests.map((request) => ({
    id: request.id,
    col1: request.usedApiKey,
    col2: request.path,
    col3: `${request.timestamp} ago`,
    col4: `${request.duration} ms`,
    col5: request.status,
  }))
  return (
    <ThemeProvider theme={darkTheme}>
        {/* Datagrid is the table component */}
      <DataGrid
        style={{
          backgroundColor: applicationTheme === 'light' ? 'white' : '#152238',
          fontSize: '1rem',
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        autoHeight
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        columns={columns}
        rows={rows}
      />
    </ThemeProvider>
  )
}

export default Table