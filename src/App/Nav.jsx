import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 'fit-content',
          flexShrink: 0,
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
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  sx={({ paddingTop: '0.75rem', paddingBottom: '0.75rem' })}
                >
                  <ListItemIcon
                    sx={({
                      minWidth: 'max-content',
                      color: 'white',
                      [`& .MuiSvgIcon-root`]: {
                        width: '1.5em',
                        fontSize: '1.75rem'
                      }
                    })}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={({ borderColor: 'rgba(250, 250, 250, 0.32)' })} />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  sx={({ paddingTop: '0.75rem', paddingBottom: '0.75rem' })}
                >
                  <ListItemIcon
                    sx={({
                      minWidth: 'max-content',
                      color: 'white',
                      [`& .MuiSvgIcon-root`]: {
                        width: '1.5em',
                        fontSize: '1.75rem'
                      }
                    })}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}