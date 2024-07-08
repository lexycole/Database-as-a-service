import getLang from '@/lang/Lang';
import { FirmData } from '@/view/firm/FirmProps';
import { TableCell, TableRow } from '@material-ui/core';
import { TableRowDetail } from '@/components/detail/DetailRow';
import { FormatDate, FormatPrice, UcFirst } from '@/formatter/Formatter';
import { AddressValue } from '@/components/address/AddressValue';
import { ReactElement } from 'react';

type RegisterDetail = {
  label: string;
  value?: string;
};

export function getRegisterDetails(props: {
  firmData: FirmData;
}): RegisterDetail[] {
  const { idNumber, registerList, visible } = props.firmData;

  const {
    legalForm,
    taxOffice,
    taxNumber,
    firmRegistered,
    firmCreated,
    fileNumber,
    court,
    firmStatus,
    shareCapital,
    firmClosed,
  } = registerList;

  // the data depend on each other
  // do not change the order

  const details: RegisterDetail[] = [
    {
      label: getLang(`firmDetail`, `registerIdNumber`),
      value: idNumber,
    },
  ];

  if (taxNumber && visible) {
    details.push({
      label: getLang(`firmDetail`, `registerTaxNumber`),
      value: taxNumber,
    });
  }

  if (legalForm?.name) {
    details.push({
      label: getLang(`firmDetail`, `registerLegalForm`),
      value: legalForm.name,
    });
  }

  if (firmStatus) {
    details.push({
      label: getLang(`firmDetail`, `registerStatus`),
      value: getLang(`firmDetail`, `firmStatus${UcFirst(firmStatus)}`),
    });
  }

  if (visible) {
    if (taxOffice?.name) {
      details.push({
        label: getLang(`firmDetail`, `registerTaxOffice`),
        value: taxOffice?.name,
      });
    }

    if (firmRegistered) {
      details.push(
        {
          label: getLang(`firmDetail`, `registerCourt`),
          value: court?.name,
        },
        {
          label: getLang(`firmDetail`, `registerFileNumber`),
          value: fileNumber,
        },
        {
          label: getLang(`firmDetail`, `registerFirmRegistered`),
          value: FormatDate(firmRegistered),
        },
      );
    } else if (firmCreated) {
      details.push({
        label: getLang(`firmDetail`, `registerFirmCreated`),
        value: FormatDate(firmCreated),
      });
    }

    if (firmClosed) {
      details.push({
        label: getLang(`firmDetail`, `registerFirmClosed`),
        value: firmClosed,
      });
    }

    if (shareCapital) {
      details.push({
        label: getLang(`firmDetail`, `registerShareCapital`),
        value: FormatPrice(shareCapital),
      });
    }
  }

  return details;
}

function TableCellValue(props: {
  label: string;
  value?: string | ReactElement;
}) {
  return (
    <TableRowDetail>
      <span className="label">{props.label ?? ``}</span>
      <span className="value">{props.value ?? ``}</span>
    </TableRowDetail>
  );
}

export const renderRegisterDetails = (props: { firmData: FirmData }) => {
  const details = getRegisterDetails({ firmData: props.firmData });

  const itemsList: any = [];

  const { name, address, visible } = props.firmData;

  // firm name whole line
  itemsList.push(
    <TableRow>
      <TableCell colSpan={2} style={{ border: 'none', padding: '1rem' }}>
        <TableCellValue
          label={getLang(`firmDetail`, `registerName`)}
          value={name}
        />
      </TableCell>
    </TableRow>,
  );

  // register address whole line
  if (visible) {
    itemsList.push(
      <TableRow>
        <TableCell colSpan={2} style={{ border: 'none' }}>
          <TableCellValue
            label={getLang(`firmDetail`, `registerRegisterAddress`)}
            value={<AddressValue addressData={address} includeCountry />}
          />
        </TableCell>
      </TableRow>,
    );
  }

  for (let i = 0; i < details.length; i += 2) {
    const items = [details[i], details[i + 1]];

    itemsList.push(
      <TableRow>
        {items.map((item) => (
          <TableCell style={{ border: 'none' }}>
            <TableCellValue value={item?.value} label={item?.label} />
          </TableCell>
        ))}
      </TableRow>,
    );
  }

  return itemsList;
};
