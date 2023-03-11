import React from 'react'

import { Link } from 'react-router-dom'

import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon
} from '@mui/material'
import { Inbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material'

import {
  DASHBOARD,
  DATAVISUALIZATION,
  PATHFINDER,
  routeToPathLookUp,
  SORTING
} from './utils'

const routesList = [DASHBOARD, DATAVISUALIZATION, PATHFINDER, SORTING]

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 'fit-content',
          flexShrink: 0,
          padding: '0 1rem',
          [`& .MuiDrawer-paper`]: {
            width: 'fit-content',
            background: 'transparent',
            position: 'initial',
            boxSizing: 'border-box',
            border: 'none'
          },
        }}
      >
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {routesList.map((route, index) => {
              const { path, Component } = Object.entries(routeToPathLookUp).map(([key, value]) => {
                console.log('value...', value)
                if (key === route) return value
                return false
              }).filter(Boolean)[0]
              return (
                <ListItem key={route} disablePadding>
                  <Link
                    to={path}
                    element={<Component />}
                  >
                    <ListItemIcon
                      sx={({
                        minWidth: 'max-content',
                        color: 'white',
                        paddingTop: '0.75rem',
                        paddingBottom: '0.75rem',
                        [`& .MuiSvgIcon-root`]: {
                          width: '1.5em',
                          fontSize: '1.75rem'
                        }
                      })}
                    >
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                  </Link>
                </ListItem>
              )
            })}
          </List>
          <Divider sx={({
            borderColor: 'rgba(250, 250, 250, 0.32)',
            width: '35%',
            margin: '0 auto'
          })} />
          <List>
          {routesList.map((route, index) => {
              const { path, Component } = Object.entries(routeToPathLookUp).map(([key, value]) => {
                console.log('value...', value)
                if (key === route) return value
                return false
              }).filter(Boolean)[0]
              return (
                <ListItem key={route} disablePadding>
                  <Link
                    to={path}
                    element={<Component />}
                  >
                    <ListItemIcon
                      sx={({
                        minWidth: 'max-content',
                        color: 'white',
                        paddingTop: '0.75rem',
                        paddingBottom: '0.75rem',
                        [`& .MuiSvgIcon-root`]: {
                          width: '1.5em',
                          fontSize: '1.75rem'
                        }
                      })}
                    >
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                  </Link>
                </ListItem>
              )
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}