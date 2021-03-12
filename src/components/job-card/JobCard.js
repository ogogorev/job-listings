import styled from 'styled-components';

const Card = styled.div`
  color: black;
  background-color: white;
  border-radius: 4px;
  
  padding: 0 16px 16px;
  margin-top: 64px; 
  box-shadow: 1px 3px 15px -10px var(--primary);
`;

const Image = styled.img`
  width: 88px;
  height: 88px;
  margin: -44px 0 0;
`;

const FirstRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
`;

const Company = styled.h4`
  color: var(--primary);
  margin: 0 12px 0 0;
`;

const Chip = styled.div`
  color: white;
  background-color: var(--primary);
  border-radius: 24px;
  padding: 8px 8px 6px;
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
`;

const InfoText = styled.div`
  color: var(--dark-grayish-cyan);
  font-size: 13px;
  margin-right: 4px;
`;

const Dot = styled.span`
  width: 4px;
  height: 4px;
  background-color: var(--dark-grayish-cyan);
  border-radius: 50%;

  margin-right: 4px;
`;

const Line = styled.div`
  height: 2px;
  background-color: var(--dark-grayish-cyan);
  border-radius: 2px;
  margin: 16px 0;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagButton = styled.button`
  font-weight: 700;
  color: var(--primary);
  backgroundColor: var(--grayish-cyan);
  border: none;
  border-radius: 4px;
  cursor: pointer;

  padding: 8px;
  margin: 0 12px 12px 0;
`;

const JobCard = ({ jobPosting, onTagClick }) => {
  const {
    id,
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
    <Card>
      <Image src={'../img/' + logo} alt="" />

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

      <TagsContainer>
        {tags.map(t => (
          <TagButton
            key={t} 
            type="button"
            onClick={() => onTagClick(t)}
          >{t}</TagButton>
        ))}
      </TagsContainer>
    </Card>
  );
};

export default JobCard;
