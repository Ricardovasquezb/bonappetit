import React from 'react';
import { Table } from 'reactstrap';
import { Button } from "react-bootstrap"
import * as firebase from 'firebase/app'
import 'firebase/database'

import '../assets/css/table-view.css';

const TableView = props => {

  const activeRes = (id) => {
    return firebase.database().ref(`/reservations/${id}`).update({
      active: true
    })
  }

  const handlerActiveRes = (id) => async () => {
    await activeRes(id)
    props.activeEvent()
  }

  var Data = [];
  var Titles = [];
    Data = props.values;
    Titles = props.titles;

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
              Data.map((item, index) =>(
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <div className='div-user'>
                      <div className='profile-img'>
                        <img src={item.img} className='rounded-circle'/>
                      </div>
                      <div className='profile-name'>
                        {item.Name + ' ' +item.LastName}
                      </div>
                    </div>
                  </td>
                  <td>{item.TableNumber}</td>
                  <td>{item.hour}</td>
                  <td>{item.code}</td>
                  <td className="button-td" >
                    {
                      !item.active ?
                        <Button onClick={handlerActiveRes(item.code)}>
                          Activar reserva
                        </Button>       
                      :
                        "Activa"
                    }
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