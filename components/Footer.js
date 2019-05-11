import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Footer = props => {
	const { viewStyle, textStyle, buttonStyle } = styles;
	const { handleBackwards, handleForward, showBack, handleSkip } = props;
	return (
		<View style={viewStyle}>
			
				{showBack === 0 ? null : (<TouchableOpacity
							activeOpacity={.2}
							onPress={handleBackwards}
							style={buttonStyle}
						>
<View>
						
							<Text style={textStyle}>Back</Text>
						
					</View>
					</TouchableOpacity>
				)}

				<TouchableOpacity
							underlay="orange"
 			onPress={ handleSkip }
							style={buttonStyle}
						>

				<Text style={textStyle} >Skip Intro</Text>
			</TouchableOpacity>

			<TouchableOpacity style={buttonStyle} onPress={handleForward}>
				<View>
					<Text style={textStyle}>Next</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default Footer;

const styles = {
	viewStyle: {
		height: 40,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginBottom: 7,
		width: "100%"
	},
	textStyle: {
		textAlign: "center",

		fontSize: 20,
		color: "white",
		fontWeight: "500"
	},
	buttonStyle: {
		// borderRightWidth: 1,
		// borderWidthleft: 5,
		borderRadius: 15,
		width: "30%",
		backgroundColor: "black",
		height: "99%",
		justifyContent: "center",
		alignItems: "center"
	},
	skipStyle: {
		color: "red"
	}
};
