//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Selection from "./components/Selection"; 
import LinearGradient from 'react-native-linear-gradient';
import Home from "./components/Home";
import Results from "./components/Results";

import assets from "./assets.js";
import Header from './components/Header';
import ShowChakra from './components/ShowChakra';
import UserRegister from './components/UserRegister';
import DailyStats from './components/DailyStats';
import Spinner from 'react-native-loading-spinner-overlay';
//Import all components, assests, and packages used on this file

 
 /*
  
  */



class App extends Component {
  //initialize component
  constructor(props) {
    super(props);
    //initialize constructor with props from React.Component
    this.state = {
      currentView: "Register",
      loading:false,
      previousView: null,
      showChakra: null,
      loginError: null,
      errorText: null,
      records: null, 
      balanceThese: null,
      userInfo : null,
      userLoggedIn : false,
      lastRecord: null,
    };
      //create state object with respective values

    this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
    this.navigateToScreen = this.navigateToScreen.bind(this);
    this.alterCurrentView = this.alterCurrentView.bind(this);
    this.passData = this.passData.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.createResult = this.createResult.bind(this);
    this.getAllRecords = this.getAllRecords.bind(this);
    this.handlePress = this.handlePress.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
    this.forgotCreds = this.forgotCreds.bind(this);
    /*  Binds above methods so any instances of the word "this" 
    within each method refers to the current component even 
  if it is called by another component*/
  }

  capitalizeFirstLetter(input){
    return (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()).trim();
  }
  /*
  capitalizeFirstLetter method takes a string argument
   and returns a string with the first letter capitalized 
   and without white space before or after
  */
  alterCurrentView(view) {
    const {currentView} = this.state
    this.setState({ previousView: currentView, currentView: view});
  }
  /*
  alterCurrentView method takes a string argument 
  and sets two properties of the state on the App component;
  previousView property with the currentVeiw state property
  and currentView property with the string passed into the method
  */ 

  passData(attr, data){
    console.log('PASSDATA', attr, data);
    this.setState({[attr]: data});
  }
  /*
  passData is a multi use method that takes two string arguements 
  and sets the state of the App component 
  the first argument is used to access a current property of state 
  (although it can create new properties)
  and set its value to the second argument passed into the method
  */
  clearErrors(){
    this.setState({errorText: null});
  }
  /*
  clearErrors sets the state of the App component's 
  errorText property with the value null
  */
  createResult(data){
    // createResult method creates imbalanced chakra entries takes one array argument 
    console.log("WITHIN CREATE RESULT")
    console.log("userId_test", this.state)
    const userId = this.state.userInfo.user_id;

     /*
    creates a local variable named userId 
    and sets it equal to the user id located in the property userInfo
    */
    
    const result = {
      crown : false,
    third : false, 
    throat : false,
    heart : false,
    navel : false,
    root : false,
    power : false,
    user_id: userId
    };
     /*
    creates a local variable named result 
    and sets it equal to and object with properites 
    respective to the chakras that may need to be balanced
    as well as the userId created above 
    */

    if(data.includes('crown')){
      result.crown = true;
    }
    if(data.includes('third')){
      result.third = true;
    }
    if(data.includes('throat')){
      result.throat = true;
    }
    if(data.includes('heart')){
      result.heart = true;
    }
    if(data.includes('power')){
      result.power = true;
    }
    if(data.includes('sacral')){
      result.navel = true;
    }
    if(data.includes('root')){
      result.root = true;
    }
    /*
    the series of if statements checks the array passed into the method
    for seven values that the array may contain
    and if it contains the respective value 
    it alters the result variable's (created above)
    respective properties to be changed to true
    */
    const url = (Platform.OS === 'ios' ? 'http://localhost:3000/makeEntry' : 'http://10.0.2.2:3000/makeEntry')
    /* 
    create local variable url 
    and sets its value equal to one of two values
    respective of the platform loading the application
    */
    fetch( url, {
    method: 'post',
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(result)
    //create a post request to server sending result variable in the body
  })
    .then(res => res.json())
    //converts responce to JSON (Javascript object Notation)
    .then(res => {
     console.log('create result', res); 
     this.setState({lastRecord: res.message})
     /*
     the result (res) recieved is the last record created 
     by a succesful post request
     and the App's state is set;
     the lastRecord property is set to the the reult of the post request
      
     */
    })
    .then(()=>{
      this.getAllRecords();
    })
    .catch(err=>{
          console.log('there was an error in createResult', err);
          //error message in console if the was an issue with the error with respective error output
          })
  }


  login(userInput){
    //login method preforms login functionaltity and takes one argument
        this.setState({loginError: false, errorText: null, loading: true});
        //clears Errors before login attempt and shows loading spinner
    const {
      username,
      password,
    } = userInput;
    /* 
    deconstructs userInput arguement
    and saves properties as local 
    variables with respective names
    */
    const usernameFixed = this.capitalizeFirstLetter(username);
    /*
    creates usernameFixed variable 
    and saves it to value of 
    capitalizeFirstLetter function
    with username as argument
    */
    console.log('username', username, 'password', password);
    if( username === null || username.length < 6){
      return this.setState({loading: false, loginError: true, errorText: 'Username must be greater than 6 characters long'});
      //prompts user for longer username
    }
    /*
    above if statement checks 
    if username string is null or less that six characters
    if either conditon is matched 
    the login method ends by setting the state of the App component 
    with the above respective values to 
    show the user the problem with their login attempt
    */
    if( password === null || password.length < 6  ){
      return this.setState({loading: false, loginError: true, errorText: 'Password must be greater than 6 characters long'});
      //prompts user for longer password
    }
     /*
    above if statement checks 
    if password string is null or less that six characters
    if either conditon is matched 
    the login method ends by setting the state of the App component 
    with the above respective values to 
    show the user the problem with their login attempt
    */
    else{
      const url = (Platform.OS === 'ios' ? 'http://localhost:3000/login' : 'http://10.0.2.2:3000/login')
     /* 
    create local variable url 
    and sets its value equal to one of two values
    respective of the platform loading the application
    */
      fetch( url, {
          method: 'post',
           headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
    },
        body: JSON.stringify({usernameFixed, password})
    /*
    create a post request to server 
    sending usernameFixed and password variable in the body
    */
      }).then(res => res.json())
    //converts responce to JSON (Javascript object Notation)
        .then(res =>{
          console.log('Login', res)
      if(res.message === 'User Not Found'|| res.message === 'Incorrect password'){
        console.log('NO USER')
        return this.setState({loading: false, loginError: true, errorText: res.message});
     /*
      if res.message is equal to "User Not Found" or "Incorrect password"
      login method ends by setting the state of the App component to 
      the respective values to show the user the problem with their login attempt
     */
      }else{
        this.setState({loading: false, userInfo: res.message, userLoggedIn: true});
        // this.passData('userInfo', res.message);
        // this.passData('userLoggedIn', true);
      this.alterCurrentView('Home');
      /*
        if none of the above if statements ended the execution of the login method
        the state of the App component is set with the respective values and the alterCurrentView method changes the component being rendered from userRegister to Home
      */
      }
      
    })
    .catch(err=>{
          console.log('there was an error in Login', err);
          //error message in console if the was an issue with the error with respective error output
          }
      )
    }
  }

  validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  /*
  validateEmail method takes one string argument
  and creates a regular experssion to check the arguement with 
  and returns true or false if the argument has a valid email address
  */
  forgotCreds(email, emailConfirm){
    /*
  forgotCreds method takes two string arguments
  */
      this.setState({loading: true, loginError: false, errorText: null});
        //clears Errors before forgotCreds method execution and shows loading spinner
    const url = (Platform.OS === 'ios' ? 'http://localhost:3000/lost' : 'http://10.0.2.2:3000/lost');
     /* 
    create local variable url 
    and sets its value equal to one of two values
    respective of the platform loading the application
    */
    console.log('in forgotCreds', email, emailConfirm)
    const trimedEmail = email.trim();
    //removes white space from both ends of the email string
    const trimedEmailConfirm = emailConfirm.trim();
    //removes white space from both ends of the emailConfirm string

    if(!this.validateEmail(trimedEmail)){
      console.log("first if")

      return this.setState({loading: false, loginError: true, errorText: 'please enter a valid Email address'});
      /*
      if validateEmail method returns false 
      forgetCreds method ends by setting the state of the App component to 
      the respective values to show the user the problem with their forget credentials attempt
      */
    }
    if(trimedEmail !== trimedEmailConfirm){
      console.log("second if")

      return this.setState({loading: false, loginError:true , errorText: "The inputed E-mail's do not match"})
      /*
      if the trimedEmail is not equal to trimedEmailConfirm
      forgetCreds method ends by setting the state of the App component to 
      the respective values to show the user the problem with their forget credentials attempt
  */ 
    }
    else{
      console.log("in Else")
       fetch(url, {
    method: 'post',
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({trimedEmail})
    })
       /*
    create a post request to server 
    sending trimedEmail variable in the body
    */
       .then(res => res.json())
    //converts responce to JSON (Javascript object Notation)

    .then(res=>{
      console.log("forgot credentials", res)
      //console log server response 
    })
    }
   
  }

  register(userInput){
    // register method takes one string argument

        this.setState({loading: true, loginError: false, errorText: null});
        //clears Errors before register attempt and shows loading spinner
    const {
      username,
      password,
      passConfirm,
      email,
      emailConfirm
    } = userInput;

     /* 
    deconstructs userInput arguement
    and saves properties as local 
    variables with respective names
    */
    const usernameFixed = this.capitalizeFirstLetter(username);
    /*
    creates usernameFixed variable 
    and saves it to value of 
    capitalizeFirstLetter function
    with username as argument
    */
    console.log(
      'username' , usernameFixed,
      'password' , password,
      'passConfirm' , passConfirm,
      'email', email,
      'emailConfirm', emailConfirm);

    const trimedEmail = email.trim();
    //removes white space from both ends of the email string
    const trimedEmailConfirm = emailConfirm.trim();
    //removes white space from both ends of the emailConfirm string
    

    if( username === null || username.length < 6){
       return this.setState({loading: false, loginError: true, errorText: 'Username must be greater than 6 characters long'});
       /*
    above if statement checks 
    if username string is null or less that six characters
    if either conditon is matched 
    the register method ends by setting the state of the App component 
    with the above respective values to 
    show the user the problem with their register attempt
    */
    }
    if( password === null || password.length < 6  ){
        return this.setState({loading: false, loginError: true, errorText: 'Password must be greater than 6 characters long'});
           /*
    above if statement checks 
    if password string is null or less that six characters
    if either conditon is matched 
    the register method ends by setting the state of the App component 
    with the above respective values to 
    show the user the problem with their register attempt
    */
    }
    if(!this.validateEmail(email)){
      return this.setState({loading: false, loginError: true, errorText: 'please enter a valid Email address'});
       /*
      if validateEmail method returns false 
      register method ends by setting the state of the App component to 
      the respective values to show the user the problem with their forget credentials attempt
      */
    }
    if(trimedEmail !== trimedEmailConfirm){
      return this.setState({loading: false, loginError : true, errorText: 'The inputed E-mails do not match'});
       /*
      if the email is not equal to trimedEmailConfirm
      validateEmail method ends by setting the state of the App component to 
      the respective values to show the user the problem with their forget credentials attempt
  */ 
    }
    if( password.trim() === passConfirm.trim()){
      //if trimed values of password and passConfirm are equal...
      console.log('PASSWORD CONFIRMED')

      const url = (Platform.OS === 'ios' ? 'http://localhost:3000/register' : 'http://10.0.2.2:3000/register')
        /* 
    create local variable url 
    and sets its value equal to one of two values
    respective of the platform loading the application
    */
       fetch(url, {
    method: 'post',
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({usernameFixed, password, email})
    /*
    create a post request to server 
    sending usernameFixed, password, and email variable in the body
    */
  }).then(res => res.json())
    //converts responce to JSON (Javascript object Notation)
    .then(res => {
      console.log('Register',res)
      if(res.message === 'The inputed Username already exists' ){
        return this.setState({loading: false, loginError: true, errorText:res.message});
        /*
        if res.message equals 'The inputed Username already exists'
      register method ends by setting the state of the App component to 
      the respective values to show the user the problem with their register attempt
        */
      }else{
        this.setState({loading: false, userInfo: res.message, userLoggedIn:true });
        // this.passData('userInfo', res.message);
        // this.passData('userLoggedIn', true);
      this.alterCurrentView('Selection');
       /*
        if none of the above if statements ended the execution of the register method
        the state of the App component is set with the respective values and the alterCurrentView method changes the component being rendered from userRegister to Selection
      */
      }
    })
    }else{
      console.log('passwords dont match')
        return this.setState({loading: false, loginError : true, errorText: 'The inputed passwords do not match'});
         /*
    if the passwords dont match
    register method's execution ends by setting the state of the App component to 
      the respective values to show the user the problem with their register attempt
  */
    }
  }

  getAllRecords(){
    //getAllRecords method gets all users saved methods from server
    console.log("WITHIN GET ALL RECORDS");

    console.log('in getAllRecords, this.state',this.state)
    const { userInfo } = this.state
    // deconstructs userInfo property from the App components state
    console.log('Getting All Records')
      const url = (Platform.OS === 'ios' ? 'http://localhost:3000/allRecords' : 'http://10.0.2.2:3000/allRecords')
       /* 
    create local variable url 
    and sets its value equal to one of two values
    respective of the platform loading the application
    */
    fetch(url, {
    method: 'post',
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({userInfo})
     /*
    create a post request to server 
    sending userInfo in the body
    */
  })
    .then(res => res.json())
    //converts responce to JSON (Javascript object Notation)
    .then(res => {
      console.log('getAllRecords:',res)
      
      // this.passData('records', res.message);
      // this.passData('lastRecord', res.message.lastUserRecord);
      // this.passData('balanceThese', Object.keys( res.message.lastUserRecord))

      const balanceTheseValues = Object.keys( res.message.lastUserRecord)
      /*
      create local variable balanceTheseValues 
      and set equal an array of property names 
      from object res.message.lastUserRecord
      */
      this.setState({balanceThese:balanceTheseValues, records: res.message})
      //sets state of App component's state to respective values
    });
  }


  navigateToScreen() {
    //navigateToScreen method changes component displayed in app component's render method
    const { currentView, results, iterator, showChakra, loginError, errorText, balanceThese, records, userInfo, lastRecord, previousView, loading } = this.state;
    //deconstructs respective values from state to be used as local variables
    const {login, register, alterCurrentView, passData, createResult, getAllRecords, forgotCreds, clearErrors} = this
    //deconstructs respective values from App component to be used as local variables

    const {spinnerStyle} = styles;
    // deconstructs respective values from App component's styles variable
    const loadingMessage = "Loading Profile..."
    //loading message string
    switch (currentView) {
      // switch statement takes currentView as Parameter
      case "Register":
      
      return(
        <UserRegister
          clearErrors = {clearErrors}
          loadingMessage = {loadingMessage} 
          loading = {loading}
          login= {login}
          loginError={loginError}
          errorText = {errorText}
          register={register}
          forgotInfo={forgotCreds}
          />
        );
        // if currentView equals Register end navigateToScreen method's execution by returning userRegister component with respective props and propNames
      break;
      case "Stats":
      
      return(
        <DailyStats 
          passData={passData}
          previousView={previousView}
          alterCurrentView={alterCurrentView}
          allResult = {records} 
          />
        );
         // if currentView equals Stats end navigateToScreen method's execution by returning DailyStats component with respective props and propNames
      break;
      case "Home":
        return <Home 
                userInfo = {userInfo}
                records = { records }
                getAllRecords = {getAllRecords}
                alterCurrentView={alterCurrentView}
                 />;
                 // if currentView equals Home end navigateToScreen method's execution by returning Home component with respective props and propNames
        break;
      case "Selection":
        return <Selection 
                createResult = {createResult}
                passData = {passData}
                alterCurrentView={alterCurrentView} />;
                // if currentView equals Selection end navigateToScreen method's execution by returning Selection component with respective props and propNames
        break;
      case "Results":
        return (
          <Results
            getAllRecords = {getAllRecords}
            previousView={previousView}
            balanceThese = {balanceThese}
            passData={passData}
            results={results}
            alterCurrentView={alterCurrentView}
            />
        );
        // if currentView equals Results end navigateToScreen method's execution by returning Results component with respective props and propNames
        break;
      case "Show":
        return(
            <ShowChakra 
            previousView={previousView}
            currentChakra = {showChakra}
            alterCurrentView={alterCurrentView}
            />
          )
        // if currentView equals Show end navigateToScreen method's execution by returning ShowChakra component with respective props and propNames
    }
  }
 handlePress(){
      console.log('handlePress')
    const {balanceThese, currentView} = this.state; 
    //deconstructs respective properties from App component's state
    if(balanceThese){
      console.log('INSIDE IF in handlePress')
      this.alterCurrentView('Home')
      // if balance these is a 'truthy' value use alterCurrentView method with Home as parameter
    }
 }
  
  render() {
      //render method returns components to be displayed by current component
    const { currentView } = this.state;
    const { viewStyle} = styles;
    //deconstructs respective values from respective variables
    console.log('LODAED')

    return (
      
      <View style = {viewStyle} >

      <Header
      alterCurrentView ={ this.alterCurrentView}
      handlePress={this.handlePress}
       />
      
      
      {this.navigateToScreen()}
    {/* 
    Within view component
    render a static Header for application that has respective props passed in
    as well as the result of the execution of navigateToScreen method
    */}
      </View>
      


      )
  }
}


export default App;
//exports component to be used outside this file

const styles = StyleSheet.create({
  viewStyle:{
      flex : 1
    },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  spinnerStyle:{
    fontSize: 20,
    padding: 10,
    textAlign: "center",
    fontWeight: "900",
    color: "white"
  }

})
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge

