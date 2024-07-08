import * as React from 'react';
import Link from 'next/link';
import getLang from '../../lang/Lang';
import { Button, Tooltip } from '@material-ui/core';
import { faFilter } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAdvancedSearchUrl } from '../link/AdvancedSearchLink';

export function AdvancedSearchButton() {
  return (
    <Link href={getAdvancedSearchUrl()} passHref>
      <Tooltip title={`${getLang(`advancedSearch`, `button`)}`}>
        <Button
          fullWidth
          color="primary"
          id="advanced-search"
          className="search-button"
          size="large"
          startIcon={
            <FontAwesomeIcon icon={faFilter} className="search-icon" />
          }
        />
      </Tooltip>
    </Link>
  );
}
