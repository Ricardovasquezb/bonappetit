import React from 'react';
import Card from 'react-bootstrap/Card';
import { Field, Formik} from 'formik';
import Lodash from 'lodash';
import Moment from 'moment';

import { Modal, Button, Form } from 'react-bootstrap';
import DateTimePicker from '../DateTimePicker'

const ReservationDetail = ({ reservationData, isOpen, onSubmit, onClose}) => {
  const getInitialValues = () => {
    console.log({ reservationData})
    const restaurantName = Lodash.get(reservationData, ['restaurant', 'name'], null);
    const restaurantTables = Lodash.get(reservationData, ['restaurant', 'tables'], {});
    const restaurantDirection = Lodash.get(reservationData, ['restaurant', 'direction'], null);
    const reservationSchedule = Lodash.get(reservationData, ['schedule'], null);
    const reservationDate = Lodash.get(reservationData, ['date'], null);
    const reservationTable = Lodash.get(reservationData, ['table'], null);
    const restaurantImageUrl = Lodash.get(reservationData, ['restaurant', 'profileurl'], '');

    return {
      restaurantName,
      restaurantTables,
      restaurantDirection,
      reservationSchedule,
      reservationDate: Moment(reservationDate).toDate(),
      restaurantImageUrl,
      reservationTable,
    };
  };

  const renderForm = (objFormikProps) => {
    const { handleSubmit, setFieldValue, values} = objFormikProps;

    return (
      <Form noValidate onSubmit={handleSubmit}>
        <Modal show>
          <Modal.Header closeButton>
            <Card.Img variant="top" src={values.restaurantImageUrl} />
          </Modal.Header>

          <Modal.Body>
            <Modal.Title>{values.restaurantName}</Modal.Title>
            <Form.Label>Mesa: </Form.Label>
            <Field name="reservationTable" component="select" value={values.reservationTable} >
              {Object.keys(values.restaurantTables).map(tableKey => {
                return <option value={tableKey}>Mesa: {values.restaurantTables[tableKey].number} || capacity: {values.restaurantTables[tableKey].capacity}  </option>
              })}
            </Field>
            <Form.Label>Horario:</Form.Label>
            <Field name="reservationSchedule" component="select" value={values.reservationSchedule}>
              <option value="Mañana">Mañana</option>
              <option value="Tarde">Tarde</option>
              <option value="Noche">Noche</option>
            </Field>
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
            />
            

           

          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>Close</Button>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
  </Button>
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