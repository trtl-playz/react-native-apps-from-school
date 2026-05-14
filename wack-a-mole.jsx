import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    state = {
        y1: 200,
        x1: 100,
        y2: 0,
        x2: 0,
        
        posibility: 100,
        
        score: 0,
    }
    
    random = () => this.setState({
        y1: Math.floor(Math.random() * 480 + 1),
        x1: Math.floor(Math.random() * 230 + 1),
        
        posibility: Math.floor(Math.random() * 100 + 1),
        y2: Math.floor(Math.random() * 480 + 1),
        x2: Math.floor(Math.random() * 230 + 1),
        score: this.state.score + 1,
    })
    
    decoy = () => this.setState({score: this.state.score = 0})
    
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight 
                    onPress = {this.random}
                    underlayColor='transparent'
                    style={{ height: 100, width: 100, position: 'absolute', top: this.state.y1, left: this.state.x1 }}
                >
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/de555fcd81f49b0ccfd1dd0090f65406' }}
                        style={{ height: 100, width: 100 }}
                    />
                </TouchableHighlight>
                
                {this.state.posibility <= 20 &&
                <TouchableHighlight 
                    onPress = {this.decoy}
                    underlayColor='transparent'
                    style={{ height: 100, width: 100, position: 'absolute', top: this.state.y2, left: this.state.x2 }}
                >
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/be0cdfc2de23ec0456332cfd74e22b73' }}
                        style={{ height: 100, width: 100 }}
                    />
                </TouchableHighlight>
                }
                
                <Text style={{ fontSize: 42, color: 'white', }}>
                    {this.state.score}
                </Text>
                
            </View>
        );
    }
}
{
// style={{ height: 100, width: 100, position: 'absolute', top: this.state.cord1, left: this.state.cord2 }}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'black'
    },
});