import React, { useEffect, useMemo, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Passenger from '../Passenger/Passenger';
import ORDER_FORM_FIELDS from '../../utils/order-form-fields';
import api from '../../utils/api';
import './OrderForm.css';

function OrderForm() {
  // [STATES]
  const [passengers, setPassengers] = useState([]);
  const [formValues, setFormValues] = useState([]);

  // [CONSTANTS]
  const fields = useMemo(() => ORDER_FORM_FIELDS, []);
  const initialPassengers = useMemo(() => [{
    id: 0,
    isDisabledRemoveButton: true
  }], []);

  // [EFFECTS]
  useEffect(() => {
    setPassengers(() => initialPassengers);
  }, [initialPassengers]);
  useEffect(() => {
    setFormValues((prevState) => {
      // Add passenger values.
      if (passengers.length > prevState.length) {
        const newPassengerValues = {
          passengerId: passengers[passengers.length - 1].id
        };
        return [...prevState, newPassengerValues];
      }

      // Remove passenger values.
      return prevState.filter(({ passengerId }) => (
        passengers.some(({ id }) => (id === passengerId))
      ));
    });
  }, [passengers]);

  // [HANDLERS]
  const addNewPassenger = () => {
    setPassengers((prevState) => {
      const newPassenger = {
        id: prevState[prevState.length - 1].id + 1,
        isDisabledRemoveButton: false
      };
      return [...prevState, newPassenger];
    });
  };
  const removePassenger = (passengerId) => {
    setPassengers((prevState) => (
      prevState.filter(({ id }) => (id !== passengerId))
    ));
  };

  // form handlers
  const resetForm = (evt) => {
    evt.preventDefault();
    setPassengers(() => initialPassengers);
  };
  const submitForm = (evt) => {
    evt.preventDefault();
    api.submitForm({ passengers: formValues }, console.log, console.error);
  };
  const updateFormValues = useMemo(() => (
    (passengerId, fieldsetValues) => {
      setFormValues((prevState) => (
        prevState.map((passengerValues) => (
          (passengerValues.passengerId === passengerId)
            ? { ...passengerValues, ...fieldsetValues }
            : passengerValues
        ))
      ));
    }
  ), []);

  return (
    <Form onReset={resetForm} onSubmit={submitForm}>
      {passengers.map(({ id, ...others }, index) => (
        <Passenger
          key={id}
          fields={fields}
          id={id}
          index={index + 1}
          onRemoveButton={removePassenger}
          updateFormValues={updateFormValues}
          {...others}
        />
      ))}
      <Form.Button
        type="button"
        content="Добавить пассажира"
        onClick={addNewPassenger}
      />
      <Button.Group floated="right">
        <Form.Button
          type="reset"
          content="Очистить форму"
          negative
        />
        <Button.Or className="buttons__divider_align-self_center" text="" />
        <Form.Button
          type="submit"
          content="Отправить форму"
          positive
        />
      </Button.Group>
    </Form>
  );
}

export default OrderForm;
