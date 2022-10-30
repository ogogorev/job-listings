// Currently it isn't actually a search bar (no input functionality).
// it only contains a container for selected tags and clear button.
// But later it should be.

import styled from "styled-components";
import SearchBarTag from "./SearchBarTag";

const Container = styled.div`
  display: flex;
  background-color: white;
  border: none;
  border-radius: var(--border-radius);

  padding: 24px;
  box-shadow: 1px 3px 15px -10px var(--primary);
`;

const TagsContainer = styled.ul`
  max-width: 80%;
  display: flex;
  flex-wrap: wrap;

  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const TagContainer = styled.li`
  margin: 4px;
`;

const ClearButton = styled.button`
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  color: var(--dark-grayish-cyan);
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    color: var(--primary);
    text-decoration: underline;
  }
`;

const Placeholder = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: var(--dark-grayish-cyan);
`;

const SearchBar = ({ tags, onTagRemove, onClearButtonClick }) => {
  return (
    <Container className="search-bar">
      {!tags.length && <Placeholder>Click any tag to filter</Placeholder>}

      <TagsContainer>
        {tags.map((t) => (
          <TagContainer key={t.value}>
            <SearchBarTag tag={t} onTagRemove={() => onTagRemove(t)} />
          </TagContainer>
        ))}
      </TagsContainer>

      {!!tags.length && (
        <ClearButton
          onClick={onClearButtonClick}
          title="Remove all tags"
          aria-label="Remove all tags"
        >
          Clear
        </ClearButton>
      )}
    </Container>
  );
};

export default SearchBar;
