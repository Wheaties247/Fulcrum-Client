
//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import Chakra from "./Chakra";
//Import all components, assests, and packages used on this file

class Results extends Component {
	// create function that returns components 

	constructor(props) {
		super(props);
		this.state = {
			// balanceThese: ["crown", "heart", "throat", 'sacral', 'root', 'power', 'third']
			balanceThese: []
		};
    // creates state for component

		this.showChakra = this.showChakra.bind(this);
		this.getBackgroundColor = this.getBackgroundColor.bind(this);
		   /*  Binds above methods so any instances of the word "this" 
    within each method refers to the current component even 
  if it is called by another component*/
	}
	getBackgroundColor(chakra) {
		/*
getBackgroundColor takes one parameter and returns an object concordance with a switch statement in order to style respective components where it is called
		*/
		switch (chakra) {
			case "crown":
				return {
					backgroundColor: "rgb(167, 21, 188)",
					marginTop: 20,
					marginBottom: 20,
					marginLeft: 10,
					marginRight: 10,
					borderRadius: 175,
					padding: 3,
					width: 350,
					height: 350,
					justifyContent: "center",
					alignItems: "center",
					borderWidth: 1
				};
				break;
			case "third":
				return {
					backgroundColor: "rgb(34, 109, 190)",
					marginTop: 20,
					marginBottom: 20,
					marginLeft: 10,
					marginRight: 10,
					borderRadius: 175,
					padding: 3,
					width: 350,
					height: 350,
					justifyContent: "center",
					alignItems: "center",
					borderWidth: 1
				};
				break;
			case "heart":
				return {
					backgroundColor: "rgb(0, 186, 10)",
					marginTop: 20,
					marginBottom: 20,
					marginLeft: 10,
					marginRight: 10,
					borderRadius: 175,
					padding: 3,
					width: 350,
					height: 350,
					justifyContent: "center",
					alignItems: "center",
					borderWidth: 1
				};
				break;
			case "throat":
				return {
					backgroundColor: "rgb(113,191, 228)",
					marginTop: 20,
					marginBottom: 20,
					marginLeft: 10,
					marginRight: 10,
					borderRadius: 175,
					padding: 3,
					width: 350,
					height: 350,
					justifyContent: "center",
					alignItems: "center",
					borderWidth: 1
				};
				break;
			case "sacral":
				return {
					backgroundColor: "rgb(248, 181, 63)",
					marginTop: 20,
					marginBottom: 20,
					marginLeft: 10,
					marginRight: 10,
					borderRadius: 175,
					padding: 3,
					width: 350,
					height: 350,
					justifyContent: "center",
					alignItems: "center",
					borderWidth: 1
				};
				break;
			case "root":
				return {
					backgroundColor: "rgb(249, 64, 59)",
					marginTop: 20,
					marginBottom: 20,
					marginLeft: 10,
					marginRight: 10,
					borderRadius: 175,
					padding: 3,
					width: 350,
					height: 350,
					justifyContent: "center",
					alignItems: "center",
					borderWidth: 1
				};
				break;
			case "power":
				return {
					backgroundColor: "rgb(213, 225, 0)",
					marginTop: 20,
					marginBottom: 20,
					marginLeft: 10,
					marginRight: 10,
					borderRadius: 175,
					padding: 3,
					width: 350,
					height: 350,
					justifyContent: "center",
					alignItems: "center",
					borderWidth: 1
				};
				break;
		}
	}
	showChakra(event) {
		/*
		showChakra method takes one argument and through a concordant switch statement returns two function calls through props of the App component;
		the passData method sets the showChakra state property to the value of the respective switch statement case and alters the App componets current veiw to the Show component
		*/
		console.log("Current Cata", event);
		const currentCatagory = event;
		const { alterCurrentView, passData } = this.props;

		switch (currentCatagory) {
			case "crown":
				passData("showChakra", "crown"), alterCurrentView("Show");
				break;
			case "heart":
				passData("showChakra", "heart"), alterCurrentView("Show");
				break;
			case "throat":
				passData("showChakra", "throat"), alterCurrentView("Show");
				break;
			case "sacral":
				passData("showChakra", "sacral"), alterCurrentView("Show");
				break;
			case "root":
				passData("showChakra", "root"), alterCurrentView("Show");
				break;
			case "power":
				passData("showChakra", "power"), alterCurrentView("Show");
				break;
			case "third":
				passData("showChakra", "third"), alterCurrentView("Show");
		}
		// this.props.alterCurrentView('Show',)
	}
	
	render() {
		console.log(this.props);
		// const results = this.renderChakras();
		const { viewStyle, textStyle, titleStyle, scrollStyle } = styles;
		const { balanceThese } = this.props;
    //deconstructs respective values from variables
		
		return (
			<LinearGradient colors={['rgb(154,  88, 19)', 'rgb( 238, 140, 12)']} style={scrollStyle}>
			{/*
		create LinearGradient component with respective style props to emulate color gradient
	*/}
				<ScrollView>
			{/*
			create ScrollView component with respective style prop to scroll through the following components
		*/}
					{balanceThese.includes("crown")?
					(<Chakra
						getBackgroundColor={this.getBackgroundColor}
						showChakra={this.showChakra}
					>
						<Text chakra="crown" style={textStyle}>
							Crown Chakra Imbalance
						</Text>
					</Chakra>) :
					null
					}
					{balanceThese.includes("third")?
					(<Chakra
						getBackgroundColor={this.getBackgroundColor}
						showChakra={this.showChakra}
					>
						<Text chakra="third" style={textStyle}>
							Third-Eye Chakra Imbalance
						</Text>
					</Chakra>) :
					null
					}
					{balanceThese.includes("throat")?
					(<Chakra
						getBackgroundColor={this.getBackgroundColor}
						showChakra={this.showChakra}
					>
						<Text chakra="throat" style={textStyle}>
							Throat Chakra Imbalance
						</Text>
					</Chakra>) :
					null
					}
					{balanceThese.includes("heart")?
					(<Chakra
						getBackgroundColor={this.getBackgroundColor}
						showChakra={this.showChakra}
					>
						<Text chakra="heart" style={textStyle}>
							Heart Chakra Imbalance
						</Text>
					</Chakra>) :
					null
					}
					{balanceThese.includes("power")?
					(<Chakra
						getBackgroundColor={this.getBackgroundColor}
						showChakra={this.showChakra}
					>
						<Text chakra="power" style={textStyle}>
							Solar Plexus Chakra Imbalance
						</Text>
					</Chakra>) :
					null
					}
					{balanceThese.includes("navel")?
					(<Chakra
						getBackgroundColor={this.getBackgroundColor}
						showChakra={this.showChakra}
					>
						<Text chakra="sacral" style={textStyle}>
							Sacral Chakra Imbalance
						</Text>
					</Chakra>) :
					null
					}
					{balanceThese.includes("root")?
					(<Chakra
						getBackgroundColor={this.getBackgroundColor}
						showChakra={this.showChakra}
					>
						<Text chakra="root" style={textStyle}>
							Root Chakra Imbalance
						</Text>
					</Chakra>) :
					null
					}
				{/*
				create seven ternary operators to render a Chakra component based on the contents of the balanceThese array or to render nothing
				*/}
				</ScrollView>
			</LinearGradient>
		);
	}
}

export default Results;
//exports component to be used outside this file

const styles = {
	textStyle: {
		// padding: 20,
		letterSpacing: 4,
		fontSize:25,
		textAlign: "center",
		fontWeight: '800',
		color: 'white'
	},
	viewStyle: {
		backgroundColor: "rgb(186, 188, 188)"
	},
	titleStyle: {
		alignItems: "center",
		borderBottomWidth: 1,
		backgroundColor: "rgba(199, 199, 199, 0.3)"
	},
	scrollStyle: {
		flex: 1,
		alignItems: "center",
		width: "100%"
	}
};
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge

