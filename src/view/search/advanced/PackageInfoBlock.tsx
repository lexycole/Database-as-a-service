import * as React from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import getLang from '../../../lang/Lang';
import { getPackageUrl } from '../../../components/link/PackageLnk';
import { PackageInfoContainer } from '../style/PackageStyle';

export function PackageInfoBlock() {
  return (
    <PackageInfoContainer>
      <h4>{getLang(`advancedSearch`, `packageInfo`)}</h4>
      <Link href={getPackageUrl()} passHref>
        <Button
          size="large"
          color="primary"
          disableElevation
          id="package-firm"
          variant="contained"
          startIcon={<FontAwesomeIcon icon={faSearch} />}
          style={{
            padding: '1rem 2rem',
          }}
        >
          {getLang(`package`, `button`)}
        </Button>
      </Link>
    </PackageInfoContainer>
  );
}
