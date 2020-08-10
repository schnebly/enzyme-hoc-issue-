import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const styles = {
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 68,
      padding: '0 30px',
    },
  };


const MyComponent = props => {
    const { classes } = props;

    const QUERY = gql`
        {
            launchesPast(limit: 1) {
                mission_name
            }
        }
    `;

    const { loading, error, data } = useQuery(QUERY);

    console.log(data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className={classes.root}>
            <Paper elevation={3} />
            {data.launchesPast[0].mission_name}
        </div>
        
    );
};

export default withStyles(styles)(MyComponent);