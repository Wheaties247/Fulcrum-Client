import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import assets from "../assets.js";
import { TextWithLetterSpacing } from './TextWithLetterSpacing';

import SwipeCards from "../SwipeCards";

class Selection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			balanceThese: []
		};
		this.handleFalseInput = this.handleFalseInput.bind(this);
		this.handleTrueInput = this.handleTrueInput.bind(this);
		this.getAllSymps = this.getAllSymps.bind(this);
		this.switchSympsArray = this.switchSympsArray.bind(this);
		this.handleNextGroup = this.handleNextGroup.bind(this);
	}
	getAllSymps() {
		console.log("getting all symptoms");
		
				console.log(assets.symptomSelection)
				this.sortSymps(assets.symptomSelection);
		
	}

	sortSymps(symps) {
		//This method is only called by getAllSymps()
		const crown = symps.filter(symp => symp.category === "crown");
		const heart = symps.filter(symp => symp.category === "heart");
		const third = symps.filter(symp => symp.category === "third");
		const power = symps.filter(symp => symp.category === "power");
		const throat = symps.filter(symp => symp.category === "throat");
		const sacral = symps.filter(symp => symp.category === "sacral");
		const rOOt = symps.filter(symp => symp.category === "root");
		this.setState(
			{ crown, heart, third, power, throat, sacral, last: rOOt },
			() => {
				console.log("HERE");

				this.switchSympsArray();
			}
		);
	}
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

	handleFalseInput(info) {
		console.log("FALSE", info);
		const { symptoms } = this.state;
		const last = symptoms[symptoms.length - 1];
		if (info.id === last.id) {
			this.handleNextGroup();
		}
		//check if info is equal to last card in array
	}

	handleTrueInput(info) {
		console.log(info, "handleTrue");
		this.setState(prevState => {
			prevState.balanceThese.push(info.category);
			return prevState;
		});
		
		this.handleNextGroup();
	}

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

	componentDidMount() {
		this.getAllSymps();
	}

	render() {
		const { viewStyle, textStyle } = styles;
		const { symptoms } = this.state;
		console.log(symptoms);

		if (symptoms) {
			const { symptoms } = this.state;

			return (
				<LinearGradient 
				colors={['rgb(245, 187, 84)','rgb(239, 157, 16)']}
				style={viewStyle}
				>
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
				</LinearGradient>
			);
		} else {
			return <Text style={textStyle}> "loading"</Text>;
		}
	}
}

export default Selection;

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
