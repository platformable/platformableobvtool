import React from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Grid,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  valueFields,
  locationFields,
  bankFields,
} from '../constants/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '##1b014c',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '3rem 0 5rem 0',
    [theme.breakpoints.up('md')]: {
      border: '3px solid #1b014c',
      borderRadius: '30px',
    },
    backgroundColor: '#e5ddf6',
    border: 'none !important',
  },
  radioGroup: {
    textAlign: 'center',
  },
  radioLabel: {
    padding: '20px',
  },
  radioBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  selectGroup: {
    fontSize: '14px',
    height: '35px',
    paddingLeft: '10px',
    backgroundColor: '#F2F2F2',
  },
  label: {
    padding: '20px',
    color: '#4F4F4F',
  },
  selectBox: {
    paddingTop: '30px',
  },
  button: {
    margin: '30px',
  },
  radio: {
    '&$checked': {
      color: '#707070',
    },
  },
  checked: {
    color: '#707070',
  },
  fieldsBox: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  fieldColumn: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '2rem',
  },
}));

export default function SelectBy({
  handleChangeLocation,
  handleChangeSelect,
  handleChangeBank,
  location,
  valueProp,
  bankType,
}) {
  const classes = useStyles();


  const displayData = (data)=> {
   return ( data.map((item) => {
        return (<option key={item.value} value={item.value}>{item.label}</option>)
      })
      )
  }


  const displayFields = (fieldsArray) => {
    return fieldsArray.map((item) => {
      return (
        <>
          <FormControlLabel
            value={item.value}
            key={item.value}
            control={
              <Radio
                classes={{ root: classes.radio, checked: classes.checked }}
              />
            }
            color="secondary"
            label={item.label}
          />
        </>
      );
    });
  };

  const menuAll = (
    <FormControlLabel
      value={'all'}
      key={'all'}
      control={
        <Radio classes={{ root: classes.radio, checked: classes.checked }} />
      }
      color="secondary"
      label={'All'}
    />
  );

  return (
    <>
      <div className="selectType">
        <div className="type">
          <select onChange={handleChangeLocation}>
            <option value="0">Select a region of the world: </option>
            <option value="All">All</option>
            {displayData(locationFields)}
          </select>
        </div>
        <div className="type">
          <select onChange={handleChangeBank}>
            <option value="0">Select the type of bank: </option>
            <option value="All">All</option>
            
            {displayData(bankFields)}
            
          </select>
        </div>
        <div className="type">
          <select onChange={handleChangeSelect}>
            <option value="0">Select the type of value example: </option>
            <option value="All">All</option>
            {displayData(valueFields)}
          </select>
        </div>
      </div>
    </>
  );
}
