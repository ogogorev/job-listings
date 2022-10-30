import styled from "styled-components";

import { baseTagStyles } from "../tag/Tag";

const Container = styled.div`
  display: flex;
`;

const Text = styled.span`
  ${baseTagStyles}

  display: inline-block;
  border-radius: var(--border-radius) 0 0 var(--border-radius);
`;

const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  background-color: var(--primary);
  padding: 4px 8px;
  border: none;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
  cursor: pointer;

  margin: 0;

  &:hover {
    background-color: var(--very-dark-grayish-cyan);
  }
`;

const SearchBarTag = ({ tag, onTagRemove }) => {
  return (
    <Container>
      <Text>{tag.label}</Text>
      <RemoveButton
        onClick={onTagRemove}
        title={"Remove tag " + tag.label}
        aria-label={"Remove tag " + tag.label}
      >
        <img src={require("../../assets/img/icon-remove.svg").default} alt="" />
      </RemoveButton>
    </Container>
  );
};

export default SearchBarTag;
