import { Text, View, Image } from "react-native";
import React, { Component } from "react";
import NavOpt from './NavOpt';
import Animation from './Animation';
import Footer from './Footer';


class Intro extends Component {
	constructor(props){
		super(props);
		this.state = {
			iterator:0,
			skip: false
		}

		this.handleForward = this.handleForward.bind(this);
      this.handleBackwards = this.handleBackwards.bind(this);
      this.handleSkip = this.handleSkip.bind(this);
	}

	handleForward(){

    const { iterator } = this.state;
    if(iterator < 2){
		

      this.setState(prevState =>{
      	console.log('FORWARD')
        prevState.iterator++;
        return prevState;
      });
    }else{
      this.props.alterCurrentView('Home');
    }
  }

  handleBackwards(){
		console.log('BACKWARD')

    const { iterator } = this.state;
    if( iterator > 0  ){
          this.setState(prevState =>{
        prevState.iterator--;
        return prevState;
      })
    }

  }
  handleSkip(){
  	console.log('skip')
  	this.props.alterCurrentView('Home');
  }

	render() {
		const { viewStyle, navViewStyle, textStyle, viewIntroTabs} = styles;

		const { iterator, skip } = this.state;
 
		const { alterCurrentView, routeTo, intro } = this.props;
		const {handleSkip, handleForward, handleBackwards} = this;
		const currentIntro = intro[iterator]
		return (
			<View style={viewStyle}>

			<Animation />
			
				<View style = {viewIntroTabs} >

					<Text style={textStyle}>{currentIntro}</Text>


				</View>
				 <Footer 
				 	handleForward = {handleForward}
				 	handleBackwards = {handleBackwards}
				 	showBack = {iterator}
				 	handleSkip= {handleSkip}/>
			</View>
		);
	}
}

const styles = {
	viewStyle: {
		borderWidth: 2,
		flex:1,
		justifyContent: 'space-between',
		alignItems: "center",

		backgroundColor: "rgb(186, 188, 188)",
		flexDirection: "column",
		padding:2
	},
	viewIntroTabs:{
		marginTop: 20,
		padding:5,
	},
	textStyle: {
		fontSize: 20,
		fontWeight: "600",
		marginBottom: 10
	}
	
};
export default Intro;
