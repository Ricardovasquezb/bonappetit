import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Button from '../components/normalButton'
import Lodash from 'lodash';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'


const TablesInput = ({ onChange, value = [] }) => {
  const [capacity, setCapacity] = useState(2);
  const [tableName, setTableName] = useState('');
  const [tables, setTables] = useState(value);

  const handleOnTableNameChange = (val) => {
    return setTableName(val.currentTarget.value);
  };

  const handleOnTableChange = (val) => {
    return setCapacity(val.currentTarget.value);
  };

  const handleOnAddClick = () => {
    const objTableCreated = Lodash.find(tables, objTables => objTables.name === tableName);
    console.log({ objTableCreated, tableName, capacity })
    if (Lodash.isEmpty(objTableCreated)) {
      const objTable = {
        capacity,
        name: tableName,
        floor: 1,
      };

      return setTables([...tables, objTable]);
    }
    return alert('Mesa ya creada')

  };

  const handleOnDeleteTable = (objItem) => {
    const newTables = Lodash.filter(tables, objTable => objTable.name !== objItem.name);
    return setTables(newTables);
  }


  useEffect(() => {
    onChange(tables)
  }, [tables])

  return (
    <>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridTableCapacity">
          <Form.Label>Nombre de la mesa</Form.Label>
          <Form.Control onChange={handleOnTableNameChange} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridTableName">
          <Form.Label>Capacidad de la mesa</Form.Label>
          <select class="form-control" id="exampleFormControlSelect1" onChange={handleOnTableChange}>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </Form.Group>
        <Button variant="success" click={handleOnAddClick}>Añadir</Button>
      </Form.Row>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Table Name</th>
            <th>Capacity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((objTable, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{objTable.name}</td>
                <td>{objTable.capacity}</td>
                <td> <Button variant="danger" click={() => handleOnDeleteTable(objTable)}>Borrar</Button></td>
              </tr>
            )
          })}

        </tbody>
      </Table>
    </>
  )
}

export default TablesInput