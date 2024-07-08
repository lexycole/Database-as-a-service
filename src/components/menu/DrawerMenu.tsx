import React from 'react';
import Link from 'next/link';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import { IconButton } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
  NavigationItems,
  NavigationItemType,
} from '../navigation/NavigationProps';
import getLang from '../../lang/Lang';
import { LocaleSelect } from '../locale/LocaleSelect';

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: `auto`,
  },
  drawerLogo: {
    height: `90px`,
    margin: `1rem auto 2rem`,
  },
});

export default function DrawerMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === `keydown` &&
      (event.key === `Tab` || event.key === `Shift`)
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <LocaleSelect />
      {/* <AccountBlock /> */}

      <List>
        {NavigationItems.map((item: NavigationItemType, key: number) => (
          <Link key={key} href={item.url} passHref>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={getLang(`menu`, item.key)} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      {/* <LocaleSelect /> */}
    </div>
  );

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-[42px] h-[42px] text-yellow text-[#54c9b2]"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </IconButton>
      <Drawer open={state} onClose={toggleDrawer(false)}>
        <div className={classes.drawerLogo}>
          <img
            width="auto"
            height="100%"
            alt="expanzo-logo"
            src="/img/logo/logo-expanzo-black.svg"
          />
        </div>

        {list()}
      </Drawer>
    </div>
  );
}
