import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import Chakra from "./Chakra";

class Results extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// balanceThese: ["crown", "heart", "throat", 'sacral', 'root', 'power', 'third']
			balanceThese: []
		};
		this.showChakra = this.showChakra.bind(this);
		this.getBackgroundColor = this.getBackgroundColor.bind(this);
	}
	getBackgroundColor(chakra) {
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
		
		return (
			<LinearGradient colors={['rgb(154,  88, 19)', 'rgb( 238, 140, 12)']} style={scrollStyle}>
				<ScrollView>
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
				</ScrollView>
			</LinearGradient>
		);
	}
}

export default Results;

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
