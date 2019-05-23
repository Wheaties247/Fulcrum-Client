//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import assets from "../assets.js";
import { TextWithLetterSpacing } from './TextWithLetterSpacing';
import SwipeCards from "../SwipeCards";
//Import all components, assests, and packages used on this file

class Selection extends Component {
  //initialize component

	constructor(props) {
		super(props);
		//initialize constructor with props from React.Component
		this.state = {
			count: 0,
			balanceThese: []
		};
    	//create state object with respective values

		this.handleFalseInput = this.handleFalseInput.bind(this);
		this.handleTrueInput = this.handleTrueInput.bind(this);
		this.getAllSymps = this.getAllSymps.bind(this);
		this.switchSympsArray = this.switchSympsArray.bind(this);
		this.handleNextGroup = this.handleNextGroup.bind(this);
		/*  Binds above methods so any instances of the word "this" 
    within each method refers to the current component even 
  if it is called by another component*/
	}
	getAllSymps() {
		console.log("getting all symptoms");
				console.log(assets.symptomSelection)
				this.sortSymps(assets.symptomSelection);
	}
	// getAllSymps method calls sortSymps method with assets.symptomSelection as the arguement to sort the symptoms into their respective values

	sortSymps(symps) {
		//This method is only called by getAllSymps()
		const crown = symps.filter(symp => symp.category === "crown");
		const heart = symps.filter(symp => symp.category === "heart");
		const third = symps.filter(symp => symp.category === "third");
		const power = symps.filter(symp => symp.category === "power");
		const throat = symps.filter(symp => symp.category === "throat");
		const sacral = symps.filter(symp => symp.category === "navel");
		const rOOt = symps.filter(symp => symp.category === "root");
		this.setState(
			{ crown, heart, third, power, throat, sacral, last: rOOt },
			() => {
				console.log("HERE");

				this.switchSympsArray();
			}
		);
	}
	// sortSymps method take one argument and calls filter or respective categories to sort and set the question symptoms into their respective values then calls switchSympsArray method
	switchSympsArray() {
		const {
			count,
			crown,
			heart,
			third,
			power,
			throat,
			sacral,
			last,
			balanceThese
		} = this.state;
		switch (count) {
			case 0:
				this.setState({ symptoms: last });
				
				break;
			case 1:
				this.setState({ symptoms: sacral });
				
				break;
			case 2:
				this.setState({ symptoms: power });
				
				break;
			case 3:
				this.setState({ symptoms: heart });
				break;
			case 4:
				this.setState({ symptoms: throat });
				break;
			case 5:
				this.setState({ symptoms: third });
				break;
			case 6:
				this.setState({ symptoms: crown });
				break;
			case 7:
				this.props.createResult(balanceThese);
				this.props.passData('balanceThese', balanceThese);
				this.props.alterCurrentView("Results");
			
				break;
		}
	}
	//switchSympsArray method deconstructs respective property values from state and then executes a switch statement in respect to count variable to place a different array of questions into symptoms state property.
	//in case 7 the switch statement calls three methods thru props from app; createResult passes data to the app component by passData method and and then calls alterCurrentView to change the view to the Results component

	handleFalseInput(info) {
		console.log("FALSE", info);
		const { symptoms } = this.state;
		const last = symptoms[symptoms.length - 1];
		if (info.id === last.id) {
			this.handleNextGroup();
		}
		//check if info is equal to last card in array
	}
	//handleFalseInput method takes one argument and checks if the last item from the symptoms property in state has the same id as the current argument from the info. if they are equal to each other then handleNextGroup is called

	handleTrueInput(info) {
		console.log(info, "handleTrue");
		this.setState(prevState => {
			prevState.balanceThese.push(info.category);
			return prevState;
		});
		
		this.handleNextGroup();
	}
	//handleTrueInput takes one argument and when the method is called it adds the current argument to state by pushing that arguments catagory into state and then handleNextGroup is called

	handleNextGroup() {
		this.setState(
			prevstate => {
				prevstate.count = prevstate.count + 1;
				return prevstate;
			},
			() => {
				this.switchSympsArray();
			}
		);
	}
	//handleNextGroup method sets state of current compionent by adding one to the state property count and then switchSympsArray is called 

	componentDidMount() {
		this.getAllSymps();
	}
	//componentDidMount lifecycle method runs before the components render is called with the getAllSymps method being called before the component renders

	render() {
		const { viewStyle, textStyle } = styles;
		const { symptoms } = this.state;
		//deconsruct the respective variables from respective properties
		console.log(symptoms);

		if (symptoms) {
			// const { symptoms } = this.state;

			return (
				<LinearGradient 
				colors={['rgb(245, 187, 84)','rgb(239, 157, 16)']}
				style={viewStyle}
				>
				{/* 
		    LinearGradient component takes an array of rgb values to create a gradient from one color to the next with respective style prop passed in
		    */}
					<TextWithLetterSpacing 
					spacing={1}
					textStyle={textStyle}
					>
					Do you ...
					</TextWithLetterSpacing>

					<SwipeCards
						style={{ flex: 1 }}
						cards={symptoms}
						handleTrue={this.handleTrueInput}
						handleFalse={this.handleFalseInput}
						handleNext={this.handleNextGroup}
						
					/>
				{/*
				create SwipeCards component that takes respective props and allows users to use directional swiping to activate left right and next swipes
				*/}
				</LinearGradient>
			);
		} else {
			return <Text style={textStyle}> "loading"</Text>;
			// if symptoms does not exist then return a text string that states loading
		}
	}
}

export default Selection;
//exports component to be used outside this file

const styles = StyleSheet.create({
	viewStyle: {
		flex: 1,
		alignItems:'center',
		justifyContent: "space-between",
		padding: 20,
		backgroundColor: "rgb(186, 188, 188)"
	},
	boolStyle: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	textStyle: {
		marginTop:'15%',
		fontSize: 50,
		fontWeight:'800',
		color: "white"
	}
});
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge
