import React, { useState } from 'react';
import {
  StyledTD,
  InterviewsContainer,
  InterviewsTable,
  InterviewsTHead,
  StyledTH,
  Icon,
} from './styles';

const interviewsData = [
  {
    firstContact: '01/01/2021',
    company: 'facebook',
    jobName: 'devops',
    stage1: null,
    stage2: true,
    stage3: false,
    offered: true,
    job: true,
    id: 1,
  },
  {
    firstContact: '04/04/2021',
    company: 'amazon',
    jobName: 'frontend',
    stage1: null,
    stage2: true,
    stage3: false,
    offered: true,
    job: true,
    id: 2,
  },
  {
    firstContact: '04/05/2021',
    company: 'netflix',
    jobName: 'backend',
    stage1: null,
    stage2: true,
    stage3: false,
    offered: true,
    job: true,
    id: 3,
  },
  {
    firstContact: '04/07/2021',
    company: 'google',
    jobName: 'fullstack',
    stage1: null,
    stage2: true,
    stage3: false,
    offered: true,
    job: true,
    id: 4,
  },
  {
    firstContact: '04/07/2021',
    company: 'microsoft',
    jobName: 'fullstack',
    stage1: null,
    stage2: true,
    stage3: false,
    offered: true,
    job: true,
    id: 5,
  },
  {
    firstContact: '04/08/2021',
    company: 'airbnb',
    jobName: 'fullstack',
    stage1: null,
    stage2: true,
    stage3: false,
    offered: true,
    job: true,
    id: 6,
  },
  
];
const Interviews = (props) => {
  const [interviews, setInterviews] = useState(interviewsData);

  const handleToggleStatus = (id, key) => (e) => {
    e.preventDefault();
    // eslint-disable-next-line array-callback-return
    const newInterviews = interviews.map((el) => {
      if (el.id !== id) return el;

      if (el[key] === true) return { ...el, [key]: false };
      if (el[key] === false) return { ...el, [key]: null };
      if (el[key] === null) return { ...el, [key]: true };
    });
    setInterviews(newInterviews);
  };

  const handleRemove = (id) => (e) => {
    e.preventDefault();
    const newInterviews = interviews.filter((el) => el.id !== id);
    setInterviews(newInterviews);
  };

  const renderTD = (el) => {
    return (
      <tr key={el.id}>
        {Object.keys(el).map((key) => (
          <StyledTD key={el.id + key}>
            {key === 'id' ? (
              <Icon href="#" onClick={handleRemove(el.id)}>
                <i className="fal fa-ban"></i>
              </Icon>
            ) : (
              <Icon href="#" onClick={handleToggleStatus(el.id, key)}>
                {typeof el[key] === 'string' && el[key]}
                {el[key] === null && (
                  <div>
                    <i className="fal fa-minus-circle"></i>
                  </div>
                )}
                {el[key] === true && (
                  <div>
                    <i color="green" className="fal fa-check-circle"></i>
                  </div>
                )}
                {el[key] === false && (
                  <div>
                    <i color="red" className="fal fa-times-circle"></i>
                  </div>
                )}
              </Icon>
            )}
          </StyledTD>
        ))}
      </tr>
    );
  };

  return (
    <InterviewsContainer>
      <InterviewsTable>
        <InterviewsTHead>
          <tr>
            <StyledTH>First Contact</StyledTH>
            <StyledTH>Company</StyledTH>
            <StyledTH>Job name</StyledTH>
            <StyledTH>Stage 1</StyledTH>
            <StyledTH>Stage 2</StyledTH>
            <StyledTH>Final Stage</StyledTH>
            <StyledTH>Offer</StyledTH>
            <StyledTH>Job</StyledTH>
            <StyledTH>Remove</StyledTH>
          </tr>
        </InterviewsTHead>
        <tbody>{interviews.map(renderTD)}</tbody>
      </InterviewsTable>
    </InterviewsContainer>
  );
};

Interviews.propTypes = {};

export default Interviews;
