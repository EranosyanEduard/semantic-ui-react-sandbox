import React, { useEffect, useMemo, useState } from 'react';
import { Form, Header } from 'semantic-ui-react';
import FieldFactory from '../FieldFactory/FieldFactory';
import './Passenger.css';

function Passenger(props) {
  const {
    fields,
    id,
    isDisabledRemoveButton,
    index,
    // Handlers
    onRemoveButton,
    updateFormValues
  } = props;

  // [STATES]
  const [fieldsetValues, setFieldsetValues] = useState({});
  const [hasBenefit, setHasBenefit] = useState(false);

  // [CONSTANTS]
  const fieldset = useMemo(() => (
    fields.map(({ dependency, ...field }) => {
      const { name, isDirect } = dependency || { name: null };
      switch (name) {
        case 'hasBenefit':
          return { ...field, disabled: isDirect ? hasBenefit : !hasBenefit };
        default:
          return field;
      }
    })
  ), [fields, hasBenefit]);

  // [EFFECTS]
  useEffect(() => {
    setFieldsetValues(() => (
      fields.reduce((acc, { name }) => ({ ...acc, [name]: '' }), {})
    ));
  }, [fields]);
  useEffect(() => {
    updateFormValues(id, fieldsetValues);
  }, [updateFormValues, id, fieldsetValues]);

  // [HANDLERS]
  const handleFieldChange = (evt, { name, value }) => {
    // const { name, value } = evt.target;
    setFieldsetValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <Header as="h2" content={`Пассажир №${index}`} />
      <Form.Button
        type="button"
        content="Удалить пассажира"
        disabled={isDisabledRemoveButton}
        onClick={() => onRemoveButton(id)}
      />
      <Form.Group className="passenger__fieldset">
        <FieldFactory
          as="checkbox"
          type="checkbox"
          checked={hasBenefit}
          label="Оформление билета по ФСС"
          onClick={() => setHasBenefit((prevState) => (!prevState))}
        />
        {fieldset.map((field, index) => (
          <FieldFactory
            key={index}
            value={fieldsetValues[field.name]}
            onChange={handleFieldChange}
            {...field}
          />
        ))}
      </Form.Group>
    </>
  );
}

export default Passenger;
