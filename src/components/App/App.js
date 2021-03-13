import { Container } from 'semantic-ui-react';
import OrderForm from '../OrderForm/OrderForm';

function App() {
  return (
    <Container children={<OrderForm />} />
  );
}

export default App;
