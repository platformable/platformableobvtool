import './App.css';
import React, { useState, useEffect } from 'react';
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SelectBy from './components/SelectBy.js';
import GridBox from './components/GridBox';
import data from './data/newData';
import { makeStyles } from '@material-ui/core/styles';
import Table from './components/Table';
import Footer from './components/footer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: '#200550',
    [theme.breakpoints.up('md')]: {
      padding: '3rem',
    },
  },
  select: {
    flex: 'flex',
    paddingTop: '4rem',
  },
}));

function App() {
  const classes = useStyles();
  const [location, setLocation] = useState('all');
  const [value, setValue] = useState(6);
  const [bankType, setBankType] = useState('all');
  const [filtered, setFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
    setCurrentPage(1);
    filter();
  };

  const handleChangeBank = (event) => {
    setBankType(event.target.value);
    setCurrentPage(1);
    filter();
  };

  const handleChangeSelect = (event) => {
    setValue(Number(event.target.value));
    setCurrentPage(1);
    filter();
  };

  const filter = () => {
    let filteredData;

    switch (location) {
      case 'europe':
        filteredData = data.filter(
          (item) =>
            item.stakeholderRegion === 'UK' ||
            item.stakeholderRegion === 'Europe'
        );
        break;
      case 'us':
        filteredData = data.filter(
          (item) => item.stakeholderRegion === 'North America'
        );
        break;
      case 'asia':
        filteredData = data.filter((item) => item.stakeholderRegion === 'APAC');
        break;
      case 'africa':
        filteredData = data.filter(
          (item) => item.stakeholderRegion === 'Africa & Middle East'
        );
        break;
      case 'latinAmerica':
        filteredData = data.filter(
          (item) => item.stakeholderRegion === 'Latin America'
        );
        break;
      default:
        filteredData = data;
    }
    switch (bankType) {
      case 'retail':
        filteredData = filteredData.filter(
          (item) => item.bankType === 'Retail'
        );
        break;
      case 'neobank':
        filteredData = filteredData.filter(
          (item) =>
            item.bankType === 'Neo' ||
            item.bankType === 'Microfinance' ||
            item.bankType === 'Fintech'
        );
        break;
      case 'private':
        filteredData = filteredData.filter(
          (item) =>
            item.bankType === 'Commercial' ||
            item.bankType === 'Investment' ||
            item.bankType === 'Private'
        );
        break;
      case 'commercial':
        filteredData = filteredData.filter(
          (item) => item.bankType === 'Commercial'
        );
        break;
      default:
        filteredData = filteredData;
    }
    switch (value) {
      case 1:
        filteredData = filteredData.filter((item) =>
          item.values.some(
            (obj) =>
              obj.existingPortfolioEnhancement &&
              obj.existingPortfolioEnhancement.length
          )
        );
        break;
      case 2:
        filteredData = filteredData.filter((item) =>
          item.values.some(
            (obj) =>
              obj.newPortfolioExpansion && obj.newPortfolioExpansion.length
          )
        );
        break;
      case 3:
        filteredData = filteredData.filter((item) =>
          item.values.some(
            (obj) =>
              obj.efficiencyEnhancement && obj.efficiencyEnhancement.length
          )
        );
        break;
      case 4:
        filteredData = filteredData.filter((item) =>
          item.values.some(
            (obj) => obj.networkOptimisation && obj.networkOptimisation.length
          )
        );
        break;
      case 5:
        filteredData = filteredData.filter((item) =>
          item.values.some(
            (obj) =>
              obj.enhanceFinancialPerformance &&
              obj.enhanceFinancialPerformance.length
          )
        );
        break;
      default:
        filteredData = filteredData;
    }
    setFiltered(filteredData);
  };

  useEffect(() => {
    filter();
  }, [location, value, bankType]);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <img
            className={classes.logo}
            src={process.env.PUBLIC_URL + '/images/logo.png'}
            alt="logo"
          />
          <Button color="inherit">
            <a href="http://www.platformable.com">Homepage</a>
          </Button>
        </Toolbar>
      </AppBar>
      <div className="table">
        <Table />
      </div>
      <Grid container>
        <Container>
          <Grid item md={12} className="selectBy">
            <SelectBy
              handleChangeLocation={handleChangeLocation}
              handleChangeSelect={handleChangeSelect}
              handleChangeBank={handleChangeBank}
              location={location}
              valueProp={value}
              bankType={bankType}
            />
          </Grid>
          <Grid item md={12}>
            <GridBox
              banks={filtered}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              valueProp={value}
            />
          </Grid>
        </Container>
        <Footer />
      </Grid>
    </div>
  );
}

export default App;
