'use client'

import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Avatar } from '@mui/material';
import { routes } from "../router/routes";
import { MenuItem } from '../models/routes.model';

const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  marginTop: '80px',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    borderTop:'unset',
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
);

const getIconComponent = (iconName: string): React.JSX.Element => {
  return <i className={iconName}></i>;
};

const MenuItemButton = (menu: MenuItem, open: boolean) => {
  return (
    <ListItemButton
      href={menu.url}
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      >
        {menu.icon ? getIconComponent(menu.icon) : null}
      </ListItemIcon>
      <ListItemText className="text-blakc" primary={menu.label} sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  );
};

const renderMenuItems = (menus: MenuItem[], open: boolean) => {
  return menus.map((menu, index) => (
    <React.Fragment key={index}>
      <ListItem disablePadding sx={{ display: 'block' }}>
        {MenuItemButton(menu, open)}
      </ListItem>
      {menu.children && (
        <List>
          {renderMenuItems(menu.children, open)}
        </List>
      )}
    </React.Fragment>
  ));
};

export default function Sidebar2() {
  return (
    <Drawer variant="permanent" anchor="left">
      <div className="flex flex-col h-full">
        <div className="grow">
          <List>
            {renderMenuItems(routes, true)}
          </List>
        </div>
      </div>
    </Drawer>
  );
}