import React, { useState, useEffect } from "react";
import FlavorInformationComponent from './FlavorInformationComponent';
import ReviewTile from './ReviewTile';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const FlavorShowPage = (props) => {
  const [getFlavorData, setFlavorData] = useState({
    name: "",
    description: "",
    image_url: ""
  });

  useEffect(() => {
  let region_id = props.match.params.region_id
  let flavor_id = props.match.params.id
    fetch(`/api/v1/regions/${region_id}/flavors/${flavor_id}`)
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        let flavor = body;
        setFlavorData(flavor);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  function createData(name, calories, fat, carbs, protein, price) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
      price,
      history: [
        { date: '2020-01-05', customerId: '11091700', amount: 3 },
        { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
      ],
    };
  }
  
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
  }  

  return (
    <div>
      <FlavorInformationComponent 
        key={getFlavorData.id} 
        name={getFlavorData.name} 
        description={getFlavorData.description} 
        image_url={getFlavorData.image_url}/>
      <ReviewTile />
    </div>
  )
};

export default FlavorShowPage;

