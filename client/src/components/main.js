import React from 'react';
import Home from './Home'
import ViewVacancy from './vacancyCruds/Vacancy'
import admin from './adminCruds/CreateAdminForm'
import signUp from './usersCruds/signUpForm'
import viewUser from './usersCruds/viewUser'
import {Switch,Route} from 'react-router-dom'
import deleteUser from './usersCruds/deleteUser';
import viewAllUsers from './usersCruds/viewAllUsers';
const Main = ()=>(
<Switch>
    <Route exact path ="/" component = {Home}/>,
    <Route  path= "/createAdmin" component = {admin}/>
    <Route  path= "/vacancy/viewAll" component = {ViewVacancy}/>
    <Route  path= "/signup" component = {signUp}/>
    <Route  path= "/viewUser" component = {viewUser} />
    <Route  path= "/deleteUser" component = {deleteUser} />
    <Route  path= "/viewAllUsers" component = {viewAllUsers} />
</Switch>
)
export default Main;