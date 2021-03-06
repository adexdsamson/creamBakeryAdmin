export default theme => ({
  root: {
    backgroundColor: '#deb887',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '63px',
    flexShrink: 0
  },
  logoLink: {
    fontSize: 0,
    display: 'contents',
    flexDirection: 'row',
  
  },
  logoImage: {
    cursor: 'pointer',
    width: '48px'
  },
  logoDivider: {
    marginBottom: theme.spacing(2)
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  sideButton: {
    width: '100%',
  },
  avatar: {
    width: '100px',
    height: '100px',
    marginRight: theme.spacing(2)
  },
  nameText: {
    marginTop: theme.spacing(2)
  },
  bioText: {},
  profileDivider: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  listSubheader: {
    color: theme.palette.text.secondary
  },
  listItem: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      borderLeft: `4px solid #deb887`,
      borderRadius: '4px',
      '& $listItemIcon': {
        color: theme.palette.primary.white,
        marginLeft: '-4px'
      }
    },
    '& + &': {
      marginTop: theme.spacing.unit
    }
  },
  activeListItem: {
    borderLeft: `4px solid ${theme.palette.primary.mai}`,
    borderRadius: '4px',
    backgroundColor: theme.palette.primary.light,
    '& $listItemText': {
      color: "#deb887"
    },
    '& $listItemIcon': {
      color: theme.palette.primary.white,
      marginLeft: '-4px'
    }
  },
  listItemIcon: {
    marginRight: 0
  },
  listItemText: {
    fontWeight: 500,
    color: theme.palette.text.secondary
  },
  listDivider: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  formControl: {
    marginLeft: theme.spacing(2),
    minWidth: 60,
    marginRight: 'auto'
  },
  language: {
    bottom: 10,
    position: 'fixed'
  },
  icon: {
    width: '24px',
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
});
