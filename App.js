/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Selection from "./components/Selection"; 
import LinearGradient from 'react-native-linear-gradient';
import Home from "./components/Home";
import Results from "./components/Results";
import Intro from "./components/Intro";
import assets from "./assets.js";
import Header from './components/Header';
import ShowChakra from './components/ShowChakra';
import UserRegister from './components/UserRegister';
import DailyStats from './components/DailyStats';
import Spinner from 'react-native-loading-spinner-overlay';

 




class App extends Component {
  constructor(props) {
    super(props);
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
  }
  capitalizeFirstLetter(input){
    return (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()).trim();
  }

  alterCurrentView(view) {
    const {currentView} = this.state
    this.setState({ previousView: currentView, currentView: view});
  }
  
  passData(attr, data){
    console.log('PASSDATA', attr, data);
    this.setState({[attr]: data});
  }
  clearErrors(){
    this.setState({errorText: null});
  }
  
  createResult(data){
    const userId = this.state.userInfo.user_id;
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
    const url = (Platform.OS === 'ios' ? 'http://localhost:3000/makeEntry' : 'http://10.0.2.2:3000/makeEntry')
    fetch( url, {
    method: 'post',
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(result)
  }).then(res => res.json())
    .then(res => {
     console.log('create result', res); 
     this.setState({lastRecord: res.message})
  }
     ) 
}

  login(userInput){
        this.setState({loginError: false, errorText: null, loading: true});
        //clears Errors before login attempt and shows loading spinner
    const {
      username,
      password,
    } = userInput;
    const usernameFixed = this.capitalizeFirstLetter(username);

    console.log('username', username, 'password', password);
    if( username === null || username.length < 6){
      return this.setState({loading: false, loginError: true, errorText: 'Username must be greater than 6 characters long'});
      //prompts user for longer username
    }
    if( password === null || password.length < 6  ){
      return this.setState({loading: false, loginError: true, errorText: 'Password must be greater than 6 characters long'});
      //prompts user for longer password
    }else{
      const url = (Platform.OS === 'ios' ? 'http://localhost:3000/login' : 'http://10.0.2.2:3000/login')
      fetch( url, {
          method: 'post',
           headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
    },
        body: JSON.stringify({usernameFixed, password})
      }).then(res => res.json())
        .then(res =>{
          console.log('Login', res)
      if(res.message === 'User Not Found'|| res.message === 'Incorrect password'){
        console.log('NO USER')
        return this.setState({loading: false, loginError: true, errorText: res.message});
        
      }else{
        this.setState({loading: false});
        this.passData('userInfo', res.message);
        this.passData('userLoggedIn', true);
      this.alterCurrentView('Home');
      }
      
    })
    .catch(err=>{
          console.log('there was an error in Login', err);
          }
      )
    }
  }
  validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  forgotCreds(email, emailConfirm){
      this.setState({loading: true, loginError: false, errorText: null});

    const url = (Platform.OS === 'ios' ? 'http://localhost:3000/lost' : 'http://10.0.2.2:3000/lost');
    console.log('in forgotCreds', email, emailConfirm)
    const trimedEmail = email.trim();
    const trimedEmailConfirm = emailConfirm.trim();
    if(!this.validateEmail(trimedEmail)){
      console.log("first if")

      return this.setState({loading: false, loginError: true, errorText: 'please enter a valid Email address'});
    }
    if(trimedEmail !== trimedEmailConfirm){
      console.log("second if")

      return this.setState({loading: false, loginError:true , errorText: "The inputed E-mail's do not match"})
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
    }).then(res => res.json())
    .then(res=>{
      console.log("forgot credentials", res)
    })
    }
   
  }

  register(userInput){
        this.setState({loading: true, loginError: false, errorText: null});
        //clears Errors before register attempt
    const {
      username,
      password,
      passConfirm,
      email,
      emailConfirm
    } = userInput;
    const usernameFixed = this.capitalizeFirstLetter(username);
    console.log(
      'username' , usernameFixed,
      'password' , password,
      'passConfirm' , passConfirm,
      'email', email,
      'emailConfirm', emailConfirm);
    if( username === null || username.length < 6){
       return this.setState({loading: false, loginError: true, errorText: 'Username must be greater than 6 characters long'});
    }
    if( password === null || password.length < 6  ){
        return this.setState({loading: false, loginError: true, errorText: 'Password must be greater than 6 characters long'});
    }
    if(!this.validateEmail(email)){
      return this.setState({loading: false, loginError: true, errorText: 'please enter a valid Email address'});
    }
    if(email.trim() !== emailConfirm.trim()){
      return this.setState({loading: false, loginError : true, errorText: 'The inputed E-mails do not match'});
    }
    if( password.trim() === passConfirm.trim()){
      console.log('PASSWORD CONFIRMED')

      const url = (Platform.OS === 'ios' ? 'http://localhost:3000/register' : 'http://10.0.2.2:3000/register')
       fetch(url, {
    method: 'post',
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({usernameFixed, password, email})
  }).then(res => res.json())
    .then(res => {
      console.log('Register',res)
      if(res.message === 'The inputed Username already exists' ){
        return this.setState({loading: false, loginError: true, errorText:res.message});
      }else{
        this.setState({loading: false});
        this.passData('userInfo', res.message);
        this.passData('userLoggedIn', true);
      this.alterCurrentView('Selection');
      }

    })
    }else{
      console.log('passwords dont match')
        return this.setState({loading: false, loginError : true, errorText: 'The inputed passwords do not match'});
    }
  }
  getAllRecords(){
    console.log('in getAllRecords, this.state',this.state)
    const { userInfo } = this.state
    console.log('Getting All Records')
      const url = (Platform.OS === 'ios' ? 'http://localhost:3000/allRecords' : 'http://10.0.2.2:3000/allRecords')

    fetch(url, {
    method: 'post',
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({userInfo})
  })
    .then(res => res.json())
    .then(res => {
      console.log('getAllRecords:',res)
      this.passData('records', res.message);
      // this.passData('lastRecord', res.message.lastUserRecord);
      this.passData('balanceThese', Object.keys( res.message.lastUserRecord))
    });
  }


  navigateToScreen() {
    const { currentView, results, iterator, showChakra, loginError, errorText, balanceThese, records, userInfo, lastRecord, previousView, loading } = this.state;
    const {login, register, alterCurrentView, passData, createResult, getAllRecords, forgotCreds, clearErrors} = this
    const {spinnerStyle} = styles;
    const loadingMessage = "Loading Profile..."

    switch (currentView) {
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
      break;
      case "Home":
        return <Home 
                userInfo = {userInfo}
                records = { records }
                getAllRecords = {getAllRecords}
                alterCurrentView={alterCurrentView}
                 />;
        break;
      case "Selection":
        return <Selection 
                createResult = {createResult}
                passData = {passData}
                alterCurrentView={alterCurrentView} />;
        break;
      case "Results":
        return (
          <Results
            previousView={previousView}
            balanceThese = {balanceThese}
            passData={passData}
            results={results}
            alterCurrentView={alterCurrentView}
            />
        );
        break;
      case "Show":
        return(
            <ShowChakra 
            previousView={previousView}
            currentChakra = {showChakra}
            alterCurrentView={alterCurrentView}
            />
          )
    }
  }
 handlePress(){
      console.log('handlePress')
    const {balanceThese, currentView} = this.state; 
    if(balanceThese){
      console.log('INSIDE IF in handlePress')
      this.alterCurrentView('Home')
    }
 }
  
  render() {
    const { currentView } = this.state;
    const { viewStyle} = styles;
    console.log('LODAED')
    return (
      
      <View style = {viewStyle} >
      
      <Header
      alterCurrentView ={ this.alterCurrentView}
      handlePress={this.handlePress}
       />
      
      
      {this.navigateToScreen()}

      </View>
      


      )
  }
}


export default App;


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

