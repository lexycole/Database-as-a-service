import * as React from 'react';
import { Dispatch } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-ui/core';
import getLang from '../../../lang/Lang';

type InquiryButtonProps = {
  setShowInquiry: Dispatch<boolean>;
};

export function InquiryButton(props: InquiryButtonProps) {
  const handleClick = () => {
    props.setShowInquiry(true);
  };

  return (
    <Button
      size="large"
      color="primary"
      fullWidth
      disableElevation
      variant="contained"
      id="package-inquiry"
      onClick={handleClick}
      style={{
        color: '#FFF',
        padding: `1rem 2rem`,
        maxWidth: 250,
        fontSize: '1.1rem',
        fontWeight: 600,
      }}
      startIcon={<FontAwesomeIcon icon={faEnvelopeOpen} />}
    >
      {getLang(`package`, `inquiry`)}
    </Button>
  );
}
