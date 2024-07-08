import * as React from 'react';
import { ReactNode } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  AccordionListContainer,
  AccordionListCount,
} from '../../../styles/Style';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';

type AccordionListProps = {
  title: string;
  count: number;
  children: ReactNode;
};

export function AccordionList(props: AccordionListProps) {
  const [theme] = useRecoilState(appTheme);

  return (
    <AccordionListContainer t={Boolean(theme)}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            {props.title}
            <AccordionListCount>({props.count})</AccordionListCount>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{props.children}</AccordionDetails>
      </Accordion>
    </AccordionListContainer>
  );
}
