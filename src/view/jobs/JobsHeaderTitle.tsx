import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';
import { ChipIconButton } from '@/components/utils/ChipIconButton';

const JobsHeaderTitleContainer = styled.div`
  width: full;
  margin-top: 1rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin: 0;
  }

  .icons {
  }
`;

function JobsHeaderTitle() {
  const [theme] = useRecoilState(appTheme);

  return (
    <JobsHeaderTitleContainer>
      <h1>Konzultant síťových tenchnologií</h1>
      <div className="icons">
        <ChipIconButton theme={Boolean(theme)} />
        <ChipIconButton theme={Boolean(theme)} />
        <ChipIconButton theme={Boolean(theme)} />
        <ChipIconButton theme={Boolean(theme)} />
      </div>
    </JobsHeaderTitleContainer>
  );
}

export default JobsHeaderTitle;
