import React, { useEffect, useMemo } from 'react'
import { useGetUsersQuery } from '../redux/apiSlice'
import { useNavigate } from 'react-router-dom'
import MaterialReactTable from 'material-react-table'
import type { MRT_ColumnDef } from 'material-react-table'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useAppSelector } from '../redux/hooks'
import { IUser } from '../interfaces'

export default function Userlist() {
  const theme = useAppSelector((state) => state.local.theme)
  const user = useAppSelector((state) => state.local.user)
  const navigate = useNavigate()
  const { data: users, isLoading, isError } = useGetUsersQuery()

  useEffect(() => {
    if (user.role !== 'admin') navigate('/')
  }, [user])

  const muiTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme as 'light' | 'dark',
        },
      }),
    [theme],
  )

  function handleClick(user: IUser) {
    navigate('/myreviews', {
      state: user,
    })
  }

  const columns = useMemo<MRT_ColumnDef<IUser>[]>(
    () => [
      {
        accessorFn: (row) => row.name,
        header: 'Name',
        Header: <b className="text-primary">Name</b>,
        Cell: ({ cell }) => (
          <span className='underline cursor-pointer'
            onClick={() => {
              handleClick(cell.row.original)
            }}
          >
            {cell.row.original.name}
          </span>
        ),
      },
      {
        accessorFn: (row) => row.role,
        header: 'Role',
        Header: <b className="text-primary">Role</b>,
      },
    ],
    [],
  )

  if (isLoading) return <h1 className="text-xl">Loading...</h1>
  if (isError) return <h1 className="text-red-700 text-xl">An error occured</h1>

  return (
    <div className="flex flex-col w-full mt-32">
      <h1 className="place-self-center font-bold text-xl mb-5 uppercase">Admin access to users</h1>
      <div className="place-self-center w-auto mb-7">
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <MaterialReactTable columns={columns} data={users as IUser[]} />
        </ThemeProvider>
      </div>
    </div>
  )
}