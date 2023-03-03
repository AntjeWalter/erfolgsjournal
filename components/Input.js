import { nanoid } from "nanoid";
import styled from "styled-components";

export default function Input({ onAddNewEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const newSuccess = event.target.success.value;
    const newSuccessDate = event.target.date.value;
    const newEntry = {
      text: newSuccess,
      date: newSuccessDate,
      id: nanoid(),
    };
    onAddNewEntry(newEntry);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <StyledLabel htmlFor="success">Mein heutiger Erfolg:</StyledLabel>
        <StyledInput type="text" id="success" placeholder="Heute habe ich..." />
        <StyledLabel htmlFor="date">Datum:</StyledLabel>
        <StyledDateInput type="date" id="date" />
        <StyledButton type="submit">Erfolg speichern</StyledButton>
      </form>
      <hr />
    </>
  );
}

const StyledLabel = styled.label`
  margin-right: 10px;
`;

const StyledInput = styled.input`
  height: 50px;
  width: 200px;
  display: block;
`;

const StyledDateInput = styled.input`
  display: block;
  height: 30px;
  padding: 10px;
`;

const StyledButton = styled.button`
  margin-top: 10px;
`;
