import { withStyles, Theme } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import {
  BORDER_COLOR,
  BORDER_COLOR_DARK,
  CARD_BOX_BACKGROUND,
  CARD_BOX_BACKGROUND_DARK,
} from '@/../styles/BaseStyle';

const IconButtonOutlined = withStyles((theme: Theme) => ({
  root: {
    padding: 6,
    margin: 3,
    borderRadius: '10px',
    '&:hover': {
      backgroundColor:
        theme.palette.type === 'dark'
          ? CARD_BOX_BACKGROUND_DARK
          : CARD_BOX_BACKGROUND,
    },
    border: `1px solid ${
      theme.palette.type === 'dark' ? BORDER_COLOR_DARK : BORDER_COLOR
    }`,
  },
}))(IconButton);

export default IconButtonOutlined;
