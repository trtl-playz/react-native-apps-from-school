import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    state = {
        number: 0,
    }
    
    roll6 = () => this.setState({number: Math.floor(Math.random() * 6 + 1)})
    roll20 = () => this.setState({number: Math.floor(Math.random() * 20 + 1)})
    roll100 = () => this.setState({number: Math.floor(Math.random() * 100 + 1)})
    
    render() {
        return (
            <View style={styles.container}>
            
                <View style={styles.bigTBox}>
                    <Text style={styles.bigText}>
                        {this.state.number}
                    </Text>
                </View>
                
                <View style={styles.buttonHolder}>
                
                    <View style={styles.button}>
                        <TouchableHighlight
                        style={styles.touch}
                            onPress={this.roll6}
                        >
                            <View style={styles.button1}>
                                <Text style={styles.medText}>
                                    Roll D 6
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                
                    <View style={styles.button}>
                        <TouchableHighlight
                        style={styles.touch}
                            onPress={this.roll20}
                        >
                            <View style={styles.button1}>
                                <Text style={styles.medText}>
                                    Roll D 20
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                
                    <View style={styles.button}>
                        <TouchableHighlight
                        style={styles.touch}
                            onPress={this.roll100}
                        >
                            <View style={styles.button1}>
                                <Text style={styles.medText}>
                                    Roll D 100
                                </Text>
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
        backgroundColor: 'black',
    },
    bigTBox: {
        height: '25%',
        width: '100%',
        //backgroundColor: 'red',
        alignItems: "center",
        justifyContent: "center", 
    },
    bigText: {
        fontSize: 80,
        color: 'white',
    },
    buttonHolder: {
        height: '100%',
        width: '100%',
        //backgroundColor: 'red',
        alignItems: "center",
    },
    button: {
        width: '90%',
        height: '20%',
        margin: 10,
        //backgroundColor: 'red',
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 10
    },
    button1: {
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: "center",
        //backgroundColor: 'red',
    },
    medText: {
        fontSize: 40,
        color: 'white',
    },
    touch: {
        height: '100%',
    },
});