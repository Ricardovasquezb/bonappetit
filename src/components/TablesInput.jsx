import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Button from '../components/normalButton'
import Lodash from 'lodash';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'


const TablesInput = ({ onChange, value = [], hasError, helperText }) => {
  const [capacity, setCapacity] = useState(null);
  const [tables, setTables] = useState(value);

  const handleOnTableChange = (val) => {
    return setCapacity(val.currentTarget.value);
  };

  const handleOnAddClick = () => {
      const objTable = {
        name: tables.length,
        capacity,
        floor: 1,
      };

      return setTables([...tables, objTable]);

  };

  const handleOnDeleteTable = (objItem) => {
    const newTables = Lodash.filter(tables, objTable => objTable.name !== objItem.name);
    return setTables(newTables);
  }


  useEffect(() => {
    onChange(tables)
  }, [tables])

  const isValid = !Lodash.isEmpty(capacity);
  return (
    <>
      <Form.Row>
        {/* <Form.Group as={Col} controlId="formGridTableCapacity">
          <Form.Label>Nombre de la mesa</Form.Label>
          <Form.Control onChange={handleOnTableNameChange} />
        </Form.Group> */}
        <Form.Group as={Col} controlId="formGridTableName">
          <Form.Label>Capacidad de la mesa</Form.Label>
          <select class="form-control" id="exampleFormControlSelect1" onChange={handleOnTableChange}>
            <option value={null} disabled selected>Select your option</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </Form.Group>
        <Button disabled={!isValid} variant="success" click={handleOnAddClick}>Añadir</Button>
      </Form.Row>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            {/* <th>Table Name</th> */}
            <th>Capacity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((objTable, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                {/* <td>{objTable.name}</td> */}
                <td>{objTable.capacity}</td>
                <td> <Button variant="danger" click={() => handleOnDeleteTable(objTable)}>Borrar</Button></td>
              </tr>
            )
          })}

        </tbody>
   
      </Table>
      {hasError ? <Alert variant={'danger'}>
        {helperText}
      </Alert>:null}
    </>
  )
}

export default TablesInput