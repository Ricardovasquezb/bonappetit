import React from 'react';
import Card from 'react-bootstrap/Card';
import { Field, Formik} from 'formik';
import Lodash from 'lodash';
import Moment from 'moment';

import { Modal, Button, Form } from 'react-bootstrap';
import DateTimePicker from '../DateTimePicker'
import { ButtonGroup } from 'reactstrap';
import * as firebase from 'firebase/app'
import 'firebase/database'

const ReservationDetail = ({ reservationData, isOpen, onSubmit, onClose, onDelete}) => {
  console.log(reservationData)
  const getInitialValues = () => {
    const restaurantName = Lodash.get(reservationData, ['restaurant', 'name'], null);
    const restaurantTables = Lodash.get(reservationData, ['restaurant', 'tables'], {});
    const restaurantDirection = Lodash.get(reservationData, ['restaurant', 'direction'], null);
    const reservationSchedule = Lodash.get(reservationData, ['schedule'], null);
    const reservationDate = Lodash.get(reservationData, ['date'], null);
    const reservationUid = Lodash.get(reservationData, ['uid'], null);
    const reservationTable = Lodash.get(reservationData, ['table'], null);
    const restaurantImageUrl = Lodash.get(reservationData, ['restaurant', 'layouturl'], '');

    return {
      restaurantName,
      restaurantTables,
      restaurantDirection,
      reservationSchedule,
      reservationDate: Moment(reservationDate,'DD-MM-YYYY').toDate(),
      restaurantImageUrl,
      reservationTable,
      reservationUid
    };
  };
  

  const renderForm = (objFormikProps) => {
    const { handleSubmit, setFieldValue, values} = objFormikProps;
    return (
      <Form noValidate onSubmit={handleSubmit}>
        <Modal show>
          <Modal.Header>
            <Card.Img variant="modal" src={values.restaurantImageUrl} height="100%"/>
          </Modal.Header>

          <Modal.Body>
            <Modal.Title>{values.restaurantName}</Modal.Title>
            <Modal.Body>Codigo de Reserva: <b>{values.reservationUid}</b></Modal.Body>
            <Modal.Body>
            <Form.Label>Mesa:</Form.Label>
            <Field name="reservationTable" component="select" value={values.reservationTable} >
              {Object.keys(values.restaurantTables).map(tableKey => {
                return <option value={tableKey}> #{values.restaurantTables[tableKey].name+1} para {values.restaurantTables[tableKey].capacity} personas</option>
              })}
            </Field>
            </Modal.Body>

            
           
            <Modal.Body>
            <Form.Label>Horario:</Form.Label>
            <Field name="reservationSchedule" component="select" value={values.reservationSchedule}>
              <option value="Mañana">Mañana</option>
              <option value="Tarde">Tarde</option>
              <option value="Noche">Noche</option>
            </Field>
            </Modal.Body>
            
            <Modal.Body>
              <Field
              name={'reservationDate'}
              render={({field: {name}}) => {
                return (
                  <DateTimePicker
                    label="Fecha de inicio"
                    minDate={0}
                    maxDate={4}
                    value={values.reservationDate}
                    onChange={(value) => setFieldValue(name, value)}
                  />
                )
              }}
            /></Modal.Body>

            
            

           

          </Modal.Body>

          <Modal.Footer className="justify-content-between">
            <ButtonGroup>
              <Button variant="dark" onClick={onClose}>Cerrar</Button>
              <Button variant="dark" onClick={handleSubmit}>Guardar Cambios</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="outline-danger" onClick = {onDelete}>Borrar reserva</Button>
            </ButtonGroup>
            
          </Modal.Footer>
      </Modal>
      </Form>
    );
  }
  
  return (
    <Formik
      initialValues={getInitialValues()}
      render={renderForm}
      onSubmit={onSubmit}
    />
  )
}

export default ReservationDetail;