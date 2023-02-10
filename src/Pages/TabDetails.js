import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const TabDetails = () => {
  return (
    <>
         <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Button variant="success"> Y</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td><Button variant="danger"> N</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td><Button variant="success"> Y</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td><Button variant="danger"> N</Button></td>
        </tr>
      </tbody>
    </Table>

      
    </>
  )
}

export default TabDetails
