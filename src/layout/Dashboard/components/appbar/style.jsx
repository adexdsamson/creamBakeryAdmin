export default theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.border}`,
    backgroundColor: "#deb887",
    display: 'flex',
    alignItems: 'center',
    height: '64px',
    zIndex: theme.zIndex.appBar
  },
  toolbarButtons: {
    marginLeft: "auto",
    marginRight: -12,
    paddingRight: '12px'
  },
  toolbar: {
    minHeight: 'auto',
    width: '100%'
  },
  title: {
    marginLeft: theme.spacing.unit
  },
  menuButton: {
    marginLeft: '-4px'
  },
  notificationsButton: {
    marginLeft: 'auto'
  },
  signOutButton: {
    marginLeft: theme.spacing.unit
  },
  optionText: {
    marginTop: '2px',
    marginLeft: '5px',
  }
});
