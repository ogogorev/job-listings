import styled from 'styled-components';

const Card = styled.div`
  color: black;
  background-color: white;
  padding: 16px;
  border-radius: 5px;

  box-shadow: 0 0 5px 5px black;
`;

const TagButton = styled.button`
  backgroundColor: #eee;
  padding: 8px;
  border-radius: 4px;
`;

const JobCard = ({ jobPosting }) => {
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

  const onTagClick = () => {}; 

  return (
    <Card>
      <img src={'../img/' + logo} alt="" />

      <div>
        <h4>{company}</h4>
        {isNew && <span>NEW</span>}{' '}
        {featured && <span>FEATURED</span>}
      </div>

      <h3>{position}</h3>

      <div>
        {postedAt}{' - '}
        {contract}{' - '}
        {location}
      </div>

      <div>
        {tags.map(t => (
          <TagButton key={t.value} type="button" onClick={() => onTagClick(t)}>{t.value}</TagButton>
        ))}
      </div>

    </Card>
  );
};

export default JobCard;
