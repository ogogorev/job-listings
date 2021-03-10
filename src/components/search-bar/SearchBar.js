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

const SearchBar = ({ tags, onTagRemove }) => {
  return (
    <Container>
      {tags.map(t => (
        <TagContainer>
          <SearchBarTag
            tag={t}
            onTagRemove={() => onTagRemove(t)}
          />
        </TagContainer>
      ))}
    </Container>
  );
};

export default SearchBar;
