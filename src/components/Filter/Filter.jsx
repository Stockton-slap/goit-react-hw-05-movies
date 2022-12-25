import { Form, InputValue, FormBtn } from './Filter.styled';

const Filter = ({ handleSubmit, handleChange, inputValue }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <InputValue type="input" value={inputValue} onChange={handleChange} />
      <FormBtn type="submit">Search</FormBtn>
    </Form>
  );
};

export default Filter;
