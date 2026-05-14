import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    state = {
        flip: 2,
        page: 1,
        dice: 0,
    }
    
    coinFlip = () => this.setState({flip: Math.floor(Math.random() * 2)})
    
    roll6 = () => this.setState({dice: Math.floor(Math.random() * 6 + 1)})
    roll20 = () => this.setState({dice: Math.floor(Math.random() * 20 + 1)})
    
    pg1 = () => this.setState({page: 1})
    pg2 = () => this.setState({page: 2})

render() {
    return (
        <View style={styles.container}>
            <View style={styles.topBox}>
            
                {this.state.page==1 &&
                    <View style={styles.Box}>
                        <View style={styles.smallContainer}>
                            {this.state.flip==0 &&
                                <Text style={styles.bigText}>
                                    Tails
                                </Text>
                            }
                            {this.state.flip==1 &&
                                <Text style={styles.bigText}>
                                    Heads
                                </Text>
                            }
                            {this.state.flip==2 &&
                                <Text style={styles.bigText}>
                                    Flip the Coin
                                </Text>
                            }
                        </View>
                        
                        <View style={styles.smallContainer}>
                            
                        </View>
                        
                        <View style={styles.smallContainer}>
                            <TouchableHighlight
                                style={styles.coinButton}
                                onPress = {this.coinFlip}>
                                    <View style={styles.thing}>
                                        <Text>Flip Coin</Text>
                                    </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                }
                
                {this.state.page==2 &&
                    <View style={styles.Box}>
                        <View style={styles.smallContainer}>
                            <Text style={styles.bigText}>
                                {this.state.dice}
                            </Text>
                        </View>
                        
                        <View style={styles.smallContainer}>
                            <TouchableHighlight
                                style={styles.coinButton}
                                onPress = {this.roll6}>
                                    <View style={styles.thing}>
                                        <Text>Roll D6</Text>
                                    </View>
                            </TouchableHighlight>
                        </View>
                        
                        <View style={styles.smallContainer}>
                            <TouchableHighlight
                                style={styles.coinButton}
                                onPress = {this.roll20}>
                                    <View style={styles.thing}>
                                        <Text>Roll D20</Text>
                                    </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                }
            </View>
            
            
            
            <View style={styles.bottomBox}>
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.pg1}>
                        <View style={styles.thing}>
                            <Text>Coin Flip</Text>
                        </View>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.pg2}>
                        <View style={styles.thing}>
                            <Text>Dice Roll</Text>
                        </View>
                </TouchableHighlight>
            </View>
        </View>
);}}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBox: {
        width: '100%',
        height: '90%',
        //backgroundColor: "pink",
        alignItems: "center",
    },
    bottomBox: {
        width: '100%',
        height: '10%',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    button: {
        width: '40%',
        height: '80%',
        borderRadius: 5,
        margin: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
    thing: {
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    bigText: {
        fontSize: 40,
    },
    Box: {
        width: '100%',
        height: '100%',
    },
    smallContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        height: '30%',
    },
    coinButton: {
        width: '90%',
        height: '90%',
        borderRadius: 5,
        margin: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
});