import React from 'react';
import styled from 'styled-components';
import getLang from '@/lang/Lang';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';
import ThemeSelectItem from './ThemeSelectItem';
import CloseIcon from '@material-ui/icons/Close';
import { Divider, Slide } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import {
  TEXT_COLOR_DARK,
  TEXT_COLOR_DARK_SECONDARY,
} from '@/../styles/BaseStyle';

const useStyles = makeStyles((theme: any) => ({
  toggleThemeIcon: {
    marginRight: theme.spacing(2),
  },
  menuTitleContainer: {
    width: '100%',
    display: 'flex',
  },
  settingBtn: {
    transition: '.3s all',
    color: TEXT_COLOR_DARK,
    '&:hover': {
      color: TEXT_COLOR_DARK_SECONDARY,
    },
    '&:active': {
      transform: 'rotate(180deg)',
    },
  },
  closeBtn: {
    position: 'absolute',
    top: 3,
    right: 3,
  },
  menuItemContainer: {},
}));

const StyledMenu = withStyles({
  paper: {
    right: 0,
    minWidth: 360,
    maxWidth: 360,
    marginTop: '1.5rem',
    borderRadius: '10px',
    padding: '1rem 2rem',
    boxShadow: '0 0 7px rgba(0,0,0,0.162)',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const MenuHeader = styled.h2<{ t: boolean }>`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${(props) => (props.t ? '#666' : '#CCC')};
`;

export const ToggleButtonLabel = styled.h3`
  margin: 0;
  font-size: 12px;
  margin-left: 5px;
  font-weight: bold;
`;

export default function SettingMenu() {
  const classes = useStyles();
  const [theme] = useRecoilState(appTheme);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.settingBtn}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SettingsIcon />
      </IconButton>

      <StyledMenu
        keepMounted
        id="customized-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        TransitionComponent={Slide}
      >
        <IconButton
          size="small"
          className={classes.closeBtn}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <div className={classes.menuTitleContainer}>
          <h2
            className={`text-[${
              theme ? '#444' : '#ddd'
            }] uppercase font-bold text-[1.1rem] mb-[20px]`}
          >
            {getLang(`setting`, `title`)}
          </h2>
        </div>
        <Divider className="mt-[10px] mb-[1rem]" />
        {/* <div className={classes.menuItemContainer}>
          <MenuHeader t={theme}>{getLang(`setting`, `language`)}</MenuHeader>
          <LocalSelectItem />
        </div> */}
        <div className={`${classes.menuItemContainer} mt-5`}>
          <MenuHeader t={theme}>{getLang(`setting`, `theme`)}</MenuHeader>
          <ThemeSelectItem />
        </div>
      </StyledMenu>
    </div>
  );
}
