
````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Table, TableBody, TableHeader, TableRow, TableCell } from 'xbrick'

ReactDOM.render(
  <Table>
    <TableHeader>
      <TableRow>
        <TableCell tag="th">#</TableCell>
        <TableCell tag="th">First</TableCell>
        <TableCell tag="th">Last</TableCell>
        <TableCell tag="th">Handle</TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow color="primary">
        <TableCell>1</TableCell>
        <TableCell>Mark</TableCell>
        <TableCell>Otto</TableCell>
        <TableCell>@mdo</TableCell>
      </TableRow>
      <TableRow color="success">
        <TableCell>2</TableCell>
        <TableCell>Jacob</TableCell>
        <TableCell>Thornton</TableCell>
        <TableCell>@fat</TableCell>
      </TableRow>
      <TableRow color="warning">
        <TableCell>3</TableCell>
        <TableCell>Larry</TableCell>
        <TableCell>Thornton</TableCell>
        <TableCell>@twitter</TableCell>
      </TableRow>
    </TableBody>
  </Table>
, document.getElementById('root'))

````