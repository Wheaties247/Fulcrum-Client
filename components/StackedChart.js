//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import ChartEntry from "./ChartEntry";
//Import all components, assests, and packages used on this file

class StackedChart extends Component {
  //initialize component

    constructor(props) {
        super(props);
    //initialize constructor with props from React.Component

        this.alterStyle = this.alterStyle.bind(this);
        /*  Binds above method so any instances of the word "this" 
    within the method refers to the current component even 
  when it is called by another component*/
    }

    alterStyle() {
        const { dayStyle } = this.props;
        //deconstruct variable from props
        console.log(dayStyle, "running");
        switch (dayStyle) {
            case "three":
                return {
                    borderRadius: 4,
                    borderWidth: 2,
                    borderColor: "rgb(198, 196, 201)",
                    margin: 3,
                    flexDirection: "row",
                };
            case "five":
                return {
                    borderRadius: 4,
                    borderWidth: 2,
                    borderColor: "rgb(198, 196, 201)",
                    margin: 3,
                    flexDirection: "row",
                };
            case "seven":
                return {
                    borderWidth: 2,
                    borderColor: "rgb(198, 196, 201)",
                    margin: 3,
                    flexDirection: "row",
                };
            case "fourteen":
                return {
                    
                    borderWidth: 2,
                    borderColor: "rgb(198, 196, 201)",
                    margin: 3,
                    flexDirection: "row",
                };
            case "thrity":
                return {
                    borderRadius: 4,
                    borderWidth: 5,
                    borderColor: "rgb(198, 196, 201)",
                    margin: 3,
                    justifyContent: "flex-end",
                    width: "3%"
                };
        }
    }
    // controls the style of component depending on the value of dayStyle

    render() {
        console.log(this.props);
        const { entry, data, dayStyle, alterCurrentView, passData } = this.props;
        //deconstruct respective values from props
        const date = data.recordDate;
        // create variable date and set equal to data.recordDate
        const year = date.substring(0, 4);
        // create variable year and set equal to date.substring(0, 4)
        const month = parseInt(date.substring(5, 7)) - 1;
        //create variable month and set equal to date.substring(5, 7) converted to a number and subtracted by one 
        const day = parseInt(date.substring(8)) - 1;
        // create variable day and set equal to date.substring(8) converted to a number and subtracted by one
        console.log("year", year, "month", month, "day", day);
        const longDate = new Date(year, month, day) + "";
        // create variable longDate and set equal to a new Date instanciation with year, month, and day as the parameters
        console.log("longDate", longDate);

        const endSlice = longDate.indexOf(year);
        // create variable endSlice and set equal to longDate.indexOf(year) which is the index of where the year string begins
        console.log("endSlice", endSlice);
        const editedLongDate = longDate.slice(0, endSlice + 4);
        // create variable editedLongDate and set equal to longDate.slice(0, endSlice + 4)
        console.log("editedLongDate", editedLongDate);
        const {
            barStyle,
            crownStyle,
            thirdStyle,
            heartStyle,
            throatStyle,
            rootStyle,
            sacralStyle,
            powerStyle,
            nullStyle,
            textStyle,
            viewStyle
        } = styles;
        //deconstruct variables from styles
        return (
            <View style={viewStyle}>
        {/*Within a Veiw component */}
                <Text style={textStyle}>{editedLongDate}</Text>
        {/*place the editedLongDate within a text component to lable each of the dailycharts*/}

                <View style={barStyle}>
                    {entry.includes("crown") ? (
                        <ChartEntry 
                        passData={passData}
                        alterCurrentView = {alterCurrentView} 
                        entry="Crown" 
                        style={nullStyle} />
                    ) : (
                        <ChartEntry 
                        passData={passData}
                        alterCurrentView = {alterCurrentView} 
                        entry="Crown" 
                        style={crownStyle} />
                    )}
                    {entry.includes("third") ? (
                        <ChartEntry 
                        passData={passData}
                        alterCurrentView = {alterCurrentView} 
                        entry="Third" 
                        style={nullStyle} />
                    ) : (
                        <ChartEntry 
                        passData={passData}
                        alterCurrentView = {alterCurrentView} 
                        entry="Third" 
                        style={thirdStyle} />
                    )}
                    {entry.includes("throat") ? (
                        <ChartEntry 
                        passData={passData}
                        alterCurrentView = {alterCurrentView} 
                        entry="Throat" 
                        style={nullStyle} />
                    ) : (
                        <ChartEntry 
                        passData={passData}
                        alterCurrentView = {alterCurrentView} 
                        entry="Throat" 
                        style={throatStyle} />
                    )}
                    {entry.includes("heart") ? (
                        <ChartEntry
                        passData={passData} 
                        alterCurrentView = {alterCurrentView} 
                        entry="Heart" 
                        style={nullStyle} />
                    ) : (
                        <ChartEntry 
                        passData={passData}  
                        alterCurrentView = {alterCurrentView} 
                        entry="Heart" 
                        style={heartStyle} />
                    )}
                    {entry.includes("power") ? (
                        <ChartEntry 
                        passData={passData} 
                        alterCurrentView = {alterCurrentView} 
                        entry="Power" 
                        style={nullStyle} />
                    ) : (
                        <ChartEntry 
                        passData={passData} 
                        alterCurrentView = {alterCurrentView} 
                        entry="Power" 
                        style={powerStyle} />
                    )}
                    {entry.includes("navel") ? (
                        <ChartEntry 
                        passData={passData} 
                        alterCurrentView = {alterCurrentView}
                         entry="Sacral" 
                         style={nullStyle} />
                    ) : (
                        <ChartEntry 
                        passData={passData} 
                        alterCurrentView = {alterCurrentView} 
                        entry="Sacral" 
                        style={sacralStyle} />
                    )}

                    {entry.includes("root") ? (
                        <ChartEntry 
                        passData={passData} 
                        alterCurrentView = {alterCurrentView} 
                        entry="Root" 
                        style={nullStyle} />
                    ) : (
                        <ChartEntry 
                        passData={passData} 
                        alterCurrentView = {alterCurrentView} 
                        entry="Root" 
                        style={rootStyle} />
                    )}
            {/*within a second View component create seven ternary operators that check if the "entry" array contains each of the seven chakra keywords, if one is within the array render a ChartEntry component with the respective style otherwise render the same component with nullstyle as well as the other prop values to change the veiw when a ChartEntry component is touched and to register the previous veiw within the app component*/}

                </View>
            </View>
        );
    }
}

export default StackedChart;
//exports component to be used outside this file

const styles = StyleSheet.create({
    viewStyle:{
        marginBottom:18
    },
    barStyle: {
        borderRadius: 4,
                    borderWidth: 2,
                    borderColor: "rgb(198, 196, 201)",
                    margin: 3,
                    flexDirection: "row",
    },
    nullStyle: {
        backgroundColor: "rgb(156, 157, 154)",
        height: 20,
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    crownStyle: {
        backgroundColor: "rgb(122, 35, 123)",
        height: 20,
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    thirdStyle: {
        backgroundColor: "rgb(108, 83, 194)",
        height: 20,
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    heartStyle: {
        backgroundColor: "rgb(3, 164, 52)",
        height: 20,
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    throatStyle: {
        backgroundColor: "rgb(0, 138, 214)",
        height: 20,
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    sacralStyle: {
        backgroundColor: "rgb(244, 115, 36)",
        height: 20,
        flex: 1,
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    rootStyle: {
        backgroundColor: "rgb(254, 30, 49)",
        height: 20,
        flex: 1,
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    powerStyle: {
        backgroundColor: "rgb(242, 177, 3)",
        height: 20,
        flex: 1,
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    textStyle: {
        textAlign: "left",
        color: "white",
        paddingLeft: 15,
        fontWeight: "700"
    }
});
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge
