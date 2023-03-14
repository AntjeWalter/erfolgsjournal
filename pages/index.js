import Input from "../components/Input";
import styled from "styled-components";

export default function Home({ successEntries, onAddNewEntry }) {
  return (
    <StyledBody>
      <StyledText>
        <h1>Mein Erfolgsjournal 🪂</h1>
        <Input onAddNewEntry={onAddNewEntry} />
        <h2>Was ich bisher erreicht habe:</h2>
        {successEntries.map((entry) => (
          <StyledEntryContainer>
            <h3>{entry.date}</h3>
            <p>{entry.text}</p>
          </StyledEntryContainer>
        ))}
      </StyledText>
    </StyledBody>
  );
}

const StyledBody = styled.section`
  position: relative;
`;

const StyledEntryContainer = styled.section`
  background-color: lightsteelblue;
  padding: 5px;
  border-radius: 5px;
`;

const StyledText = styled.section`
  position: absolute;
  top: 0;
`;
