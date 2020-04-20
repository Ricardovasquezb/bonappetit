import React from 'react';
import { Table } from 'reactstrap';
import { Button } from "react-bootstrap"
import * as firebase from 'firebase/app'
import 'firebase/database'
import { ButtonGroup } from 'reactstrap';


import '../assets/css/table-view.css';
import Spinner from 'react-bootstrap/Spinner'

const TableView = props => {

  const activeRes = (id) => {
    return firebase.database().ref(`/reservations/${id}`).update({
      active: true
    })
  }

  const finishRes = (id) => {
    return firebase.database().ref(`/reservations/${id}`).update({
      done: true
    })
  }
  const deleteRes= (id) => {
    return firebase.database().ref(`/reservations/${id}`).remove()
  }

  const handlerActiveRes = (id) => async () => {
    await activeRes(id)
    props.activeEvent()
  }
  const handlerFinishRes = (id) => async () => {
    await finishRes(id)
    props.activeEvent()
  }
  const handlerDeleteRes = (id) => async () => {
    await deleteRes(id)
    props.activeEvent()
  }

  var Data = [];
  var Titles = [];
  Data = props.values;
  Titles = props.titles;

  console.log(Data)

  return (
    <div className='table-view'>
      <h3>{props.header}</h3>
      <Table hover responsive striped className="mb-0" bordered>
        <thead className='titles'>
          <tr>
            {
              Titles.map((item) =>
                (
                  <th>{item.title}</th>
                ))
            }
          </tr>
        </thead>
        <tbody>
          {
            Data.map((item, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  <div className='div-user'>
                    <div className='profile-img'>
                      <img src={item.img} className='rounded-circle' />
                    </div>
                    <div className='profile-name'>
                      {item.Name + ' ' + item.LastName}
                    </div>
                  </div>
                </td>
                <td>{item.TableNumber}</td>
                <td>{item.hour}</td>
                <td>{item.code}</td>
                <td className="button-td" >
                  <ButtonGroup>
                  {
                    !item.active ?
                      <Button onClick={handlerActiveRes(item.code)}>
                        Activar reserva
                        </Button>
                      :
                      <Button variant="primary" disabled>
                        <Spinner
                          as="span"
                          animation="grow"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      Reserva Activa
                    </Button>
                  }
                  {
                    !item.done ?
                    <Button variant ="dark" onClick={handlerFinishRes(item.code)}>
                    Concluir Reserva
                    </Button>
                      :
                      <Button variant ="success" onClick={handlerFinishRes(item.code)}>
                    Reserva Concluida
                    </Button>
                  }
                  

                        {
                    item.active ?
                      <Button variant="danger" disabled>
                        Eliminar Reserva
                        </Button>
                      :
                      <Button variant="danger" onClick={handlerDeleteRes(item.code)}>
                        Eliminar Reserva
                        </Button>
                  }
                  </ButtonGroup>
                  
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}

export default TableView;