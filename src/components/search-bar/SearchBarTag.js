import styled from "styled-components";

import { baseTagStyles } from "../tag/Tag";

const Text = styled.div`
  ${baseTagStyles}

  display: inline-block;
  border-radius: 4px 0 0 4px;
`;

const RemoveButton = styled.button`
  display: inline-block;
  background-color: var(--primary);
  padding: 4px;
  border: none;
  border-radius: 0 2px 2px 0;
  cursor: pointer;

  &:hover {
    background-color: var(--very-dark-grayish-cyan);
  }
`;

const SearchBarTag = ({ tag, onTagRemove }) => {
  return (
    <>
      <Text>{tag}</Text>
      <RemoveButton onClick={onTagRemove}>x</RemoveButton>
    </>
  );
};

export default SearchBarTag;
