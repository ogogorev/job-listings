import styled from "styled-components";

import { screen } from "../../breakpoints";
import { baseTagStyles } from "../Tag/Tag";

const Card = styled.div`
  color: black;
  background-color: white;
  border-radius: var(--border-radius);
  ${(props) => props.featured && `border-left: 4px solid var(--primary);`}

  padding: 0 16px 16px;
  margin-top: 64px;
  box-shadow: 1px 3px 15px -10px var(--primary);

  @media ${screen.desktop} {
    display: flex;
    padding: 16px;
    align-items: center;

    margin-top: 24px;
  }
`;

const Image = styled.img`
  width: 88px;
  height: 88px;
  margin: -44px 0 0;

  @media ${screen.desktop} {
    margin: 0;
  }
`;

const InfoGroup = styled.div`
  @media ${screen.desktop} {
    margin: 0 16px;
  }
`;

const FirstRow = styled.div`
  height: 27px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
`;

const Company = styled.h4`
  font-size: 13px;
  color: var(--primary);
  margin: 0 12px 0 0;
`;

const Chip = styled.div`
  color: white;
  background-color: var(--primary);
  border-radius: 24px;
  padding: 8px;
  margin: 0 4px;
`;

const DarkChip = styled(Chip)`
  background-color: var(--very-dark-grayish-cyan);
`;

const Position = styled.h3`
  color: var(--very-dark-grayish-cyan);
  font-weight: 700;
  margin: 16px 0;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;

  @media ${screen.desktop} {
    margin: 0;
  }
`;

const InfoText = styled.div`
  color: var(--dark-grayish-cyan);
  font-size: 13px;
`;

const Dot = styled.span`
  width: 4px;
  height: 4px;
  background-color: var(--dark-grayish-cyan);
  border-radius: 50%;
  margin: 0 8px;
`;

const Line = styled.div`
  height: 1px;
  background-color: var(--dark-grayish-cyan);
  border-radius: 2px;
  margin: 16px 0;

  @media ${screen.desktop} {
    display: none;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${screen.desktop} {
    justify-content: flex-end;
    margin-left: auto;
  }
`;

const TagButton = styled.button`
  ${baseTagStyles}
  font-family: inherit;
  cursor: pointer;
  margin: 0 12px 12px 0;

  &:hover {
    color: white;
    background-color: var(--primary);
  }

  @media ${screen.desktop} {
    margin: 6px 0 6px 12px;
  }
`;

const JobCard = ({ jobPosting, onTagClick }) => {
  const {
    company,
    logo,
    new: isNew,
    featured,
    position,
    postedAt,
    contract,
    location,
    tags,
  } = jobPosting;

  return (
    <Card featured={featured}>
      <Image src={"../img/" + logo} alt="company logo" />

      <InfoGroup>
        <FirstRow>
          <Company>{company}</Company>
          {isNew && <Chip>NEW!</Chip>}
          {featured && <DarkChip>FEATURED</DarkChip>}
        </FirstRow>

        <Position>{position}</Position>

        <Info>
          <InfoText>{postedAt}</InfoText>
          <Dot />
          <InfoText>{contract}</InfoText>
          <Dot />
          <InfoText>{location}</InfoText>
        </Info>

        <Line />
      </InfoGroup>

      <TagsContainer>
        {tags.map((t) => (
          <TagButton
            key={t.label}
            title={`Select tag ${t.label}`}
            aria-label={`Select tag ${t.label}`}
            onClick={() => onTagClick(t)}
          >
            {t.label}
          </TagButton>
        ))}
      </TagsContainer>
    </Card>
  );
};

export default JobCard;
