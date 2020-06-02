import { Route, Redirect, Switch } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import NotFound from './notFound/NotFound';
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";
import AnimalForm from './animal/AnimalForm'
import LocationForm from './location/LocationForm'
import EmployeeForm from './employee/EmployeeForm'
import OwnerForm from './owner/OwnerForm'
import Login from './auth/Login';
import AnimalEditForm from "./animal/AnimalEditForm";
import EmployeeEditForm from './employee/EmployeeEditForm';
import LocationEditForm from './location/LocationEditForm';
import OwnerEditForm from "./owner/OwnerEditForm";


const ApplicationViews = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  return (
    <>
    {/* <Switch> */}
      <Route
        path="/login"
        component={Login} 
      />
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/animals"
        render={props => {
          if(isAuthenticated()) {
            return <AnimalList {...props}/>;
          } else {
            return <Redirect to="/Login"/>;
          }
        }}
      />
      <Route
        exact
        path="/locations"
        render={props => {
          if(isAuthenticated()){
            return <LocationList {...props}/>;
          } else {
            return <Redirect to="/Login"/>;
          }
        }}
      />
      <Route
        exact
        path="/employees"
        render={props => {
          if(isAuthenticated()) {
            return <EmployeeList {...props}/>;
          } else {
            return <Redirect to="/Login"/>;
          }
        }}
      />
      <Route
        exact
        path="/owners"
        render={props => {
          if(isAuthenticated()) {
            return <OwnerList {...props}/>;
          } else {
            return <Redirect to="/Login"/>;
          }
        }}
      />
      <Route
        exact
        path="/animals/:animalId(\d+)"
        render={props => {
          if(isAuthenticated()){
            return (
              <AnimalDetail
                animalId={parseInt(props.match.params.animalId)} {...props} />);
          } else {
            return <Redirect to="/Login"/>;
          }
        }}
      />
      <Route
        exact
        path="/locations/:locationId(\d+)" render={
        (props) => {
          if(isAuthenticated()){
            return (
              <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props}/>);
          } else {
            return <Redirect to="/Login"/>;
          }
        }}
      />
      <Route
        path="/animals/new" render={(props) => {
          if(isAuthenticated()){
            return <AnimalForm {...props}/>
          } else {
            return <Redirect to="/Login"/>;
          }
        }}
      />
      <Route
        path="/employees/new" render={(props) => {
          if(isAuthenticated()){
            return <EmployeeForm {...props}/>;
          } else {
            return <Redirect to="/Login"/>;
          }
        }}
      />
      <Route
        path="/locations/new" render={
        (props) => {
          if(isAuthenticated()){
            return <LocationForm {...props}/>;
          } else {
            return <Redirect to="/Login"/>;
          }
        }}
      />
      <Route
        path="/owners/new" render={
        (props) => {
          if(isAuthenticated()){
            return <OwnerForm {...props}/>;
          } else {
            return <Redirect to="/Login"/>;
          }
        }}
      />
      <Route path="/animals/:animalId(\d+)/edit" render={props => {
        if(isAuthenticated()) {
          return <AnimalEditForm {...props}/>;
        } else {
          return <Redirect to="/Login"/>;
        }
      }}
      />
      <Route path="/employees/:employeeId(\d+)/edit" render={
        props => {
          if(isAuthenticated()) {
            return <EmployeeEditForm {...props}/>;
          } else {
            return <Redirect to="/Login"/>;
          }
        }}
      />
      <Route path="/locations/:locationId(\d+)/edit" render={
        props => {
          if(isAuthenticated()) {
            return <LocationEditForm {...props}/>;
          } else {
            return <Redirect to="/Login"/>;
          }
        }}
      />
      <Route path="/owners/:ownerId(\d+)/edit" render={
        props => {
          if(isAuthenticated()) {
            return <OwnerEditForm {...props}/>;
          } else {
            return <Redirect to="/Login"/>;
          }
        }}
      />
      {/* <Route component={NotFound}/>
      </Switch> */}
    </>
  );
};

export default ApplicationViews;