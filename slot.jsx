import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    state = {
        num1: 0,
        num2: 0,
        num3: 0,
        money: 100,
    }
    
    rollFR = () => this.setState({
        num1: Math.floor(Math.random() * 7 + 1),
        num2: Math.floor(Math.random() * 7 + 1),
        num3: Math.floor(Math.random() * 7 + 1),
    },
    () => {
        if (this.state.num1 == this.state.num2 && this.state.num2 == this.state.num3) {
            this.setState({money: this.state.money + 100})
        }}
    )
    
    minusMon = () => this.setState({money: this.state.money - 1})
    plusMon = () => this.setState({money: this.state.money + 50})
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBox}>
                    <Text style={styles.bigText}>
                        {this.state.money}
                    </Text>
                    
                    {this.state.num1==this.state.num2 && this.state.num2==this.state.num3 &&
                        <Text style={styles.STYLENAME}>
                            you got a jackpot
                        </Text>
                    }
                    
                </View>
                
                <View style={styles.midBox}>
                    <View style={styles.tBox}>
                        <Text style={styles.slotText}>
                            {this.state.num1}
                        </Text>
                    </View>
                    
                    <View style={styles.tBox}>
                        <Text style={styles.slotText}>
                            {this.state.num2}
                        </Text>
                    </View>
                    
                    <View style={styles.tBox}>
                        <Text style={styles.slotText}>
                            {this.state.num3}
                        </Text>
                    </View>
                </View>
                
                <View style={styles.botBox}>
                    <View style={styles.box}>
                        <TouchableHighlight
                            style={styles.button}
                            
                            onPress = {() => { this.rollFR(); this.minusMon(); } }
                            >
                            <View style={styles.thing}>
                                <Text style={styles.text}>click me</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBox: {
        width: '100%',
        height: '25%',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    bigText: {
        fontSize: 24,
        color: 'darkgreen',
    },
    midBox: {
        width: '100%',
        height: '50%',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'green',
        flexDirection: "row",
    },
    tBox: {
        width: '20%',
        height: '30%',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'green',
        backgroundColor: 'darkgreen',
        margin: 10,
    },
    slotText: {
        fontSize: 42,
        color: 'green',
    },
    botBox: {
        width: '100%',
        height: '25%',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    button: {
        width: '90%',
        height: '90%',
    },
    box: {
        width: '100%',
        height: '90%',
        alignItems: "center",
        justifyContent: "center",
    },
    thing: {
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    text: {
        color: 'darkgreen',
    },
})