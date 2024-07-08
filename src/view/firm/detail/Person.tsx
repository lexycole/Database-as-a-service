import * as React from 'react';
import { FirmData, MAX_LIST_ROWS, PersonData } from '../FirmProps';
import getLang from '../../../lang/Lang';
import { PersonName } from '../../person/PersonName';
import { PersonRow } from '../style/PersonStyle';
import { DetailBoxSubTitle } from '../../../components/detail/BoxTitle';
import { AccordionList } from '../../../components/accordion/AccordionList';
import {
  BoxHeaderCell,
  BoxRowHeader,
  BoxRows,
  BoxRowsAccordion,
} from '../../../components/detail/BoxStyle';
import { getBoxTitleWithCount } from '../../../components/detail/BoxRowsHelper';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';
import { faUserFriends } from '@fortawesome/pro-solid-svg-icons';

function PersonItem(props: PersonData & { styleOdd: boolean }) {
  const [theme] = useRecoilState(appTheme);

  return (
    <PersonRow t={theme} styleOdd={props.styleOdd}>
      <div>
        <PersonName {...props} />
      </div>
      <div>{props.department}</div>
    </PersonRow>
  );
}

export function Person(props: { firmData: FirmData }) {
  const [theme] = useRecoilState(appTheme);
  const { personList } = props.firmData.contact;

  if (personList === undefined) {
    return null;
  }

  const visibleRows = personList.slice(0, MAX_LIST_ROWS);
  const hiddenRows =
    personList.length > MAX_LIST_ROWS ? personList.slice(MAX_LIST_ROWS) : null;

  return (
    <>
      <DetailBoxSubTitle
        title={getBoxTitleWithCount(
          getLang(`firmDetail`, `personTitle`),
          personList.length,
        )}
        icon={faUserFriends}
      />
      <BoxRowHeader t={Boolean(theme)} noBorder>
        <BoxHeaderCell t={Boolean(theme)} flex="50%">
          {getLang(`firmDetail`, `personHeaderName`)}
        </BoxHeaderCell>
        <BoxHeaderCell t={Boolean(theme)} flex="50%">
          {getLang(`firmDetail`, `personHeaderDepartment`)}
        </BoxHeaderCell>
      </BoxRowHeader>
      <BoxRows t={Boolean(theme)} noPadding>
        {visibleRows.map((item: PersonData, key: number) => (
          <PersonItem styleOdd={key % 2 !== 0} key={key} {...item} />
        ))}
      </BoxRows>
      {hiddenRows && hiddenRows.length > 0 && (
        <AccordionList
          title={getLang(`firmDetail`, `personHiddenList`)}
          count={hiddenRows.length}
        >
          <BoxRowsAccordion>
            {hiddenRows.map((item: PersonData, key: number) => (
              <PersonItem styleOdd={key % 2 === 0} key={key} {...item} />
            ))}
          </BoxRowsAccordion>
        </AccordionList>
      )}
    </>
  );
}
