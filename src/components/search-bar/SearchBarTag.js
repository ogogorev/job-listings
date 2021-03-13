import styled from "styled-components";

import { baseTagStyles } from "../tag/Tag";

const Container = styled.div`
  display: flex;
`;

const Text = styled.div`
  ${baseTagStyles}

  display: inline-block;
  border-radius: 4px 0 0 4px;
`;

const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  background-color: var(--primary);
  padding: 4px 8px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  margin: 0;

  &:hover {
    background-color: var(--very-dark-grayish-cyan);
  }
`;

const SearchBarTag = ({ tag, onTagRemove }) => {
  return (
    <Container>
      <Text>{tag}</Text>
      <RemoveButton onClick={onTagRemove} title={"Remove tag " + tag} aria-label={"Remove tag " + tag}>
        <img src={require('../../assets/img/icon-remove.svg').default} alt="" />
      </RemoveButton>
    </Container>
  );
};

export default SearchBarTag;
