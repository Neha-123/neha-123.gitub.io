{messages.map(({ id, primary, secondary, person }) => (
    <React.Fragment key={id}>
      {id === 1 && <ListSubheader >Today</ListSubheader>}
      {id === 3 && <ListSubheader >Yesterday</ListSubheader>}
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt="Profile Picture" src={person} />
        </ListItemAvatar>
        <ListItemText primary={primary} secondary={secondary} />
      </ListItem>
    </React.Fragment>
  ))}