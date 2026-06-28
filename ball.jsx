import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    state = {
        number: 0,
    }
    
    roll = () => this.setState({number: Math.floor(Math.random() * 20 + 1)})
    
render() {
return (
    <View style={styles.container}>
        <View style={styles.topBox}>
            <View style={styles.outline}>
                <View style={styles.outerCircle}>
                    <View style={styles.midCircle}>
                        <View style={styles.innerCircle}>
                            {this.state.number==0 && <Text style={styles.text8}>shake me plz</Text>}
                            {this.state.number==1 && <Text style={styles.text8}>It is certain</Text>}
                            {this.state.number==2 && <Text style={styles.text8}>It is decidedly so</Text>}
                            {this.state.number==3 && <Text style={styles.text8}>Better not tell you now</Text>}
                            {this.state.number==4 && <Text style={styles.text8}>Don't count on it</Text>}
                            {this.state.number==5 && <Text style={styles.text8}>yes</Text>}
                            {this.state.number==6 && <Text style={styles.text8}>no</Text>}
                            {this.state.number==7 && <Text style={styles.text8}>maybe</Text>}
                            {this.state.number==8 && <Text style={styles.text8}>shake me plz</Text>}
                            {this.state.number==9 && <Text style={styles.text8}>As I see it, yes</Text>}
                            {this.state.number==10 && <Text style={styles.text8}>Most likely</Text>}
                            {this.state.number==11 && <Text style={styles.text8}>Most likely not</Text>}
                            {this.state.number==12 && <Text style={styles.text8}>It's possible</Text>}
                            {this.state.number==13 && <Text style={styles.text8}>It's not possible</Text>}
                            {this.state.number==14 && <Text style={styles.text8}>Signs point to yes</Text>}
                            {this.state.number==15 && <Text style={styles.text8}>Signs point to no</Text>}
                            {this.state.number==16 && <Text style={styles.text8}>Signs point to Lohman</Text>}
                            {this.state.number==17 && <Text style={styles.text8}>Deffinatley not</Text>}
                            {this.state.number==18 && <Text style={styles.text8}>100% no</Text>}
                            {this.state.number==19 && <Text style={styles.text8}>idk</Text>}
                            {this.state.number==20 && <Text style={styles.text8}>you rolled a nat 20</Text>}
                        </View>
                    </View>
                </View>
            </View>
        </View>
        
        <View style={styles.bottomBox}>
            
            <View style={styles.box}>
                <TouchableHighlight
                    style={styles.ballButton}
                    onPress = {this.roll}>
                    <View style={styles.thing}>
                        <Text style={styles.text8}>Shake The Eight-Ball</Text>
                    </View>
                </TouchableHighlight>
            </View>
            
            <Text style={styles.text8}>{this.state.number}</Text>
        </View>
    
    </View>
);}}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    text8: {
        color: "white"
    },
    topBox: {
        height: '50%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    outline: {
        height: 260,
        width: 260,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        borderRadius: 300,
    },
    outerCircle: {
        height: 250,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "black",
        borderRadius: 300,
    },
    midCircle: {
        height: 170,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "grey",
        borderRadius: 300,
    },
    innerCircle: {
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "purple",
        borderRadius: 300,
    },
    bottomBox: {
        height: '50%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        height: '30%',
    },
    thing: {
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    ballButton: {
        width: '90%',
        height: '90%',
        borderRadius: 5,
        margin: 5,
        borderColor: 'white',
        borderWidth: 1,
    },
});
