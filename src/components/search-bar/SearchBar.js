// Currently it isn't actually a search bar (no input functionality).
// it only contains a container for selected tags and clear button.
// But later it should be.

import styled from "styled-components";
import SearchBarTag from "./SearchBarTag";

const Container = styled.div`
  display: flex;
  background-color: white;
  padding: 24px;
  border: none;
  border-radius: 2px;
`;

const TagContainer = styled.div`
  margin-right: 4px;
`;

const ClearButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SearchBar = ({ tags, onTagRemove, onClearButtonClick }) => {
  return (
    <Container>
      {tags.map(t => (
        <TagContainer key={t.value}>
          <SearchBarTag
            tag={t}
            onTagRemove={() => onTagRemove(t)}
          />
        </TagContainer>
      ))}

      {!!tags.length && (<ClearButton onClick={onClearButtonClick}>Clear</ClearButton>)}
    </Container>
  );
};

export default SearchBar;
