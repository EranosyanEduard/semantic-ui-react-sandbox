import { Form } from 'semantic-ui-react';

function FieldFactory({ as, ...fieldProps }) {
  switch (as) {
    case 'checkbox':
      return (
        <Form.Checkbox {...fieldProps} />
      );
    case 'select':
      return (
        <Form.Select {...fieldProps} />
      );
    default:
      return (
        <Form.Input {...fieldProps} />
      );
  }
}

export default FieldFactory;
