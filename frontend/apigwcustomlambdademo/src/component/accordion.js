import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import {Button,  TextField, Grid, Paper, makeStyles} from '@material-ui/core';
import axios from 'axios';

const URL = "https://{API_ID}.execute-api.{REGION}.amazonaws.com/{STAGE}/subscriber";

/************************************************************
 * STYLES
 ************************************************************/
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '10px',
      },
      formRoot: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '15ch',
        },
      },
      paper: {
        backgroundColor: 'rgb(255, 193, 7, 0.38);',
        height: '100%',
        textAlign: 'left',
        padding: '10px',
      },
      output: {
        backgroundColor: 'rgba(83, 63, 181, 0.33);',
        height: '100%'
      },
      control: {
        padding: theme.spacing(2),
      },
    container: {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
    },
    flexContainer: {
        display: 'flex',
      },
  }));

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: '#ffefe1bf',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

/************************************************************
 * COMPONENT
 ************************************************************/
export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');
  const [detailsForGetAPICall, setdetailsForGetAPICall] = React.useState({operation:'get',course:'',email:''});
  const [detailsForPostAPICall, setdetailsForPostAPICall] = React.useState({operation:'add',course:'',email:'',first_name:'',last_name:'',address:''});
  const [detailsForPutAPICall, setdetailsForPutAPICall] = React.useState({operation:'update',course:'',email:'',first_name:'',last_name:'',address:''});
  const [detailsForDeleteAPICall, setdetailsForDeleteAPICall] = React.useState({operation:'delete',course:'',email:''});
  const [result, setResult] = React.useState({});

  const classes = useStyles();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  /**
   * GET RELATED CODE
   */
  const handleGetCourseChange = (event) => {
    setdetailsForGetAPICall((prevGetAPIDetails) => { 
      return { ...prevGetAPIDetails, course: event.target.value};
    });
    //console.log(detailsForGetAPICall)
  }

  const handleGetEmailChange = (event) => {
    setdetailsForGetAPICall((prevGetAPIDetails) => { 
      return { ...prevGetAPIDetails, email: event.target.value};
    });
    //console.log(detailsForGetAPICall)
  }

  const onGetSubscriberFormSubmitHandler = (event) => {
    event.preventDefault();

    const params = new URLSearchParams(detailsForGetAPICall).toString();
    console.log(params);
    const NEW_URL = URL +  "?" + params;

    axios.get(NEW_URL)
    .then(response => {setResult(response.data);return result.data;})
    .catch(err => console.warn(err));
  };

  /**
   * 
   * CREATE RELATED CODE
   */
   const handlePostCourseChange = (event) => {
    setdetailsForPostAPICall((prevPostAPIDetails) => { 
      return { ...prevPostAPIDetails, course: event.target.value};
    });
    //console.log(detailsForGetAPICall)
  }

  const handlePostEmailChange = (event) => {
    setdetailsForPostAPICall((prevPostAPIDetails) => { 
      return { ...prevPostAPIDetails, email: event.target.value};
    });
    //console.log(detailsForGetAPICall)
  }

  const handlePostFirstNameChange = (event) => {
    setdetailsForPostAPICall((prevPostAPIDetails) => { 
      return { ...prevPostAPIDetails, first_name: event.target.value};
    });
    //console.log(detailsForGetAPICall)
  }

  const handlePostLastNameChange = (event) => {
    setdetailsForPostAPICall((prevPostAPIDetails) => { 
      return { ...prevPostAPIDetails, last_name: event.target.value};
    });
    //console.log(detailsForGetAPICall)
  }

  const handlePostAddressChange = (event) => {
    setdetailsForPostAPICall((prevPostAPIDetails) => { 
      return { ...prevPostAPIDetails, address: event.target.value};
    });
    //console.log(detailsForGetAPICall)
  }

  const onCreateSubscriberFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log("hello")
    const NEW_URL = URL +  "?operation=add";

    axios.post(NEW_URL,detailsForPostAPICall)
    .then(response => {setResult(response.data);return result.data;})
    .catch(err => console.warn(err));
    


    console.log(result)
  };

/**
   * 
   * UPDATE RELATED CODE
   */
 const handlePutCourseChange = (event) => {
  setdetailsForPutAPICall((prevPutAPIDetails) => { 
    return { ...prevPutAPIDetails, course: event.target.value};
  });
  //console.log(detailsForGetAPICall)
}

const handlePutEmailChange = (event) => {
  setdetailsForPutAPICall((prevPutAPIDetails) => { 
    return { ...prevPutAPIDetails, email: event.target.value};
  });
  //console.log(detailsForGetAPICall)
}

const handlePutFirstNameChange = (event) => {
  setdetailsForPutAPICall((prevPutAPIDetails) => { 
    return { ...prevPutAPIDetails, first_name: event.target.value};
  });
  //console.log(detailsForGetAPICall)
}

const handlePutLastNameChange = (event) => {
  setdetailsForPutAPICall((prevPutAPIDetails) => { 
    return { ...prevPutAPIDetails, last_name: event.target.value};
  });
  //console.log(detailsForGetAPICall)
}

const handlePutAddressChange = (event) => {
  setdetailsForPutAPICall((prevPutAPIDetails) => { 
    return { ...prevPutAPIDetails, address: event.target.value};
  });
  //console.log(detailsForGetAPICall)
}

const onUpdateSubscriberFormSubmitHandler = (event) => {
  event.preventDefault();
  console.log("Update")
  const NEW_URL = URL +  "?operation=update";

  axios.put(NEW_URL,detailsForPutAPICall)
  .then(response => {console.log(response.data);})
  .catch(err => console.warn(err));
  
  console.log(result)
};

  /**
   * DELETE RELATED CODE
   */
  const handleDeleteCourseChange = (event) => {
    setdetailsForDeleteAPICall((prevDeleteAPIDetails) => { 
      return { ...prevDeleteAPIDetails, course: event.target.value};
    });
    //console.log(detailsForGetAPICall)
  }

  const handleDeleteEmailChange = (event) => {
    setdetailsForDeleteAPICall((prevDeleteAPIDetails) => { 
      return { ...prevDeleteAPIDetails, email: event.target.value};
    });
    //console.log(detailsForDeleteAPICall)
  }

  const onDeleteSubscriberFormSubmitHandler = (event) => {
    event.preventDefault();

    const params = new URLSearchParams(detailsForDeleteAPICall).toString();
    console.log(params);

    const NEW_URL = URL +  "?" + params;

    axios.delete(NEW_URL)
    .then(response => {console.log(response.data);})
    .catch(err => console.warn(err));
  };

  const prettyPrint = (data) =>{
    return (<div><pre>{Object.keys(data) == 0 ? "" : JSON.stringify(data, null, 2) }</pre></div>);
  }

  return (
    <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h6" gutterBottom>GET Subscriber</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={4}>
              <Paper className={classes.paper} spacing={2}>
                    <form className={classes.formRoot} onSubmit={onGetSubscriberFormSubmitHandler} noValidate autoComplete="off">
                        <div >
                            <TextField required id="standard-required" label="Course" onChange={handleGetCourseChange}/>
                            <TextField required id="standard-required" label="E-mail" onChange={handleGetEmailChange}/>
                        </div>
                        <div className={classes.container}>
                          <Button type="submit" variant="contained" color="primary">
                            Get Subscriber
                          </Button>
                        </div>
                    </form>
              </Paper>
          </Grid>
          <Grid item xs={8}>
              <Paper className={classes.paper} >
                  {prettyPrint(result)}
              </Paper>
          </Grid>
        </Grid>
                  
        </AccordionDetails>
      </Accordion>
      
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="h6" gutterBottom>CREATE Subscriber</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
              <Paper className={classes.paper} >
                <form onSubmit={onCreateSubscriberFormSubmitHandler} className={classes.formRoot} noValidate autoComplete="off">
                      <div>
                        <TextField required id="course-required" label="Course" onChange={handlePostCourseChange}/>
                        <TextField required id="email-disabled" label="email" onChange={handlePostEmailChange}/>
                      </div>
                      <div>
                        <TextField  id="firstName" label="First Name"  onChange={handlePostFirstNameChange}/>
                        <TextField  id="lastName" label="Last name"  onChange={handlePostLastNameChange}/>
                        <TextField  id="address" label="Address"  onChange={handlePostAddressChange}/>
                      </div>
                      <div>
                      <div className={classes.container}> <Button type="submit" variant="contained" color="primary">
                            Create Subscriber
                        </Button></div>
                      </div>
                    </form>
              </Paper>
          </Grid>
        </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="h6" gutterBottom>UPDATE Subscriber</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
              <Paper className={classes.paper} >
              <form onSubmit={onUpdateSubscriberFormSubmitHandler} className={classes.formRoot} noValidate autoComplete="off">
                      <div>
                        <TextField required id="course-required" label="Course" onChange={handlePutCourseChange}/>
                        <TextField required id="email-disabled" label="email" onChange={handlePutEmailChange}/>
                      </div>
                      <div>
                        <TextField  id="firstName" label="First Name"  onChange={handlePutFirstNameChange}/>
                        <TextField  id="lastName" label="Last name"  onChange={handlePutLastNameChange}/>
                        <TextField  id="address" label="Address"  onChange={handlePutAddressChange}/>
                      </div>
                      <div>
                      <div className={classes.container}> <Button type="submit" variant="contained" color="primary">
                            Update Subscriber
                        </Button></div>
                      </div>
                    </form>
              </Paper>
          </Grid>
        </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="h6" gutterBottom>DELETE Subscriber</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Paper className={classes.paper} spacing={2}>
                        <form onSubmit={onDeleteSubscriberFormSubmitHandler} noValidate autoComplete="off">
                        <div className={classes.container}>
                            <TextField required id="standard-required" label="Course" onChange={handleDeleteCourseChange}/>
                        </div>
                        <div className={classes.container}>
                          <TextField required id="standard-required" label="E-mail" onChange={handleDeleteEmailChange}/>
                        </div>
                        <div className={classes.container}>
                          <Button type="submit" variant="contained" color="primary">
                            Delete Subscriber
                          </Button>
                        </div>
                    </form>
                  </Paper>
            </Grid> 
        </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
