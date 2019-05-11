import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import ChartEntry from "./ChartEntry";

class StackedChart extends Component {
    constructor(props) {
        super(props);
        this.alterStyle = this.alterStyle.bind(this);
    }
    alterStyle() {
        const { dayStyle } = this.props;
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

    render() {
        console.log(this.props);
        const { entry, data, dayStyle, alterCurrentView, passData } = this.props;
        const date = data.recordDate;
        const year = date.substring(0, 4);
        const month = parseInt(date.substring(5, 7)) - 1;
        const day = parseInt(date.substring(8)) - 1;
        console.log("year", year, "month", month, "day", day);
        const longDate = new Date(year, month, day) + "";
        console.log("longDate", longDate);

        const endSlice = longDate.indexOf(year);
        console.log("endSlice", endSlice);
        const editedLongDate = longDate.slice(0, endSlice + 4);
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
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>{editedLongDate}</Text>
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
                </View>
            </View>
        );
    }
}

export default StackedChart;

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
