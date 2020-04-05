import React from 'react';
import { Table } from 'reactstrap';

import '../assets/css/table-view.css';

const TableView = props => {

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
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
      );
}

export default TableView;