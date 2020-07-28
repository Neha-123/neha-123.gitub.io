import React, { useState, useEffect } from 'react';
import { Grid, Paper, Fab, Typography, List, ListItem, ListItemText, AppBar, Toolbar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import AddTodoModal from './AddTodoModal';


const styles = {
    fabButton: {
        position: 'relative !important',
        zIndex: '1 !important',
        top:'-10 !important',
        margin: 'auto !important',
    },
    appBar: {
        position: 'absolute !important',
        width:'91% !important',
        top:'83% !important',
        right:'5% !important'
       
    },
    paper: {
        paddingBottom: '100px',
        padding: '20px 20px 65px 20px',
        width:"90%",
        margin:"auto",
        height:"500px",
        overflow:"scroll"
    }
}

const FabButton = styled(Fab)(styles.fabButton);
const AppBarStyle = styled(AppBar)(styles.appBar);
const PaperStyle = styled(Paper)(styles.paper);


const HomePage = () => {

    const [open, setDialog] = useState(false);
    return (
        <Grid container spacing={5}>
            <Grid item xs={12} >
                <PaperStyle square >
                    <Typography variant="h5" gutterBottom>
                        Create Todo List
                    </Typography>
                    <List >
                        <ListItem button>
                            <ListItemText primary="hello" secondary="morning" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="hello" secondary="morning" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="hello" secondary="morning" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="hello" secondary="morning" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="hello" secondary="morning" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="hello" secondary="morning" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Oiuyt" secondary="morning" />
                        </ListItem>
                    </List>
                    <AppBarStyle color="primary" >
                        <Toolbar >
                            {open ? <AddTodoModal open={open}/> : null}
                            <FabButton color="secondary" >
                                <AddIcon onClick={()=>setDialog(true)}/>
                            </FabButton>
                        </Toolbar>
                    </AppBarStyle>
                </PaperStyle>
            </Grid>


        </Grid>




    )
}

export default HomePage;