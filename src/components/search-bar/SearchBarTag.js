import styled from "styled-components";

const Text = styled.div`
  display: inline-block;
  background-color: #eee;
  padding: 4px;
  border: none;
  border-radius: 2px 0 0 2px;
`;

const RemoveButton = styled.button`
  display: inline-block;
  background-color: #ccc;
  padding: 4px;
  border: none;
  border-radius: 0 2px 2px 0;
  cursor: pointer;
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
