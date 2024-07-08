import * as React from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import getLang from '../../lang/Lang';

export function SearchButton() {
  return (
    <Button
      disableElevation
      type="submit"
      color="primary"
      variant="contained"
      title={getLang(`search`, `searchButton`)}
      startIcon={<FontAwesomeIcon icon={faSearch} />}
    />
  );
}
