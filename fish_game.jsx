import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    state = {
        money: 0,
        luck: 1,
        pole: 10,
        
        luckCost: 10,
        poleCost: 10,
        
        canFish: 0,
        
        page: 1,
        
        ranFish: 0,
        useless: 0,
        
        fish: 0,
    }
    
    doFish = () => this.setState({
        canFish: Math.floor(Math.random() * 2 + 1),
    },
    () => {
        if (this.state.canFish == 1) {
            this.setState({money: this.state.money + Math.floor(Math.random() * this.state.pole + this.state.luck)})
            this.setState({fish: Math.floor(Math.random() * 6 + 1)})
        }
    })
    
    buyLuck = () => this.setState({}, () => {
        if (this.state.money >= this.state.luckCost) {
            this.setState({money: this.state.money - this.state.luckCost,
            luckCost: this.state.luckCost + 5,
            luck: this.state.luck + 1,})
        }
    })
    
    buyPole = () => this.setState({}, () => {
        if (this.state.money >= this.state.poleCost) {
            this.setState({money: this.state.money - this.state.poleCost,
            poleCost: this.state.poleCost + 5,
            pole: this.state.pole + 1,})
        }
    })
    
    pg1 = () => this.setState({page: 1})
    pg2 = () => this.setState({page: 2})
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBox}>
                    <Text style={styles.bText}>
                        Money = {this.state.money}
                    </Text>
                    <Text style={styles.bText}>
                        Luck = {this.state.luck}
                    </Text>
                    <Text style={styles.bText}>
                        Pole = {this.state.pole}
                    </Text>
                </View>
                
                <View style={styles.midBox}>
                    {this.state.page == 1 &&
                    <>
                        {this.state.canFish == 2 &&
                            <Text style={styles.bText}>
                                you lost the fish
                            </Text>
                        }
                        
                        {this.state.canFish == 1 &&
                        <>
                            {this.state.fish == 1 &&
                            <>
                                <Text style={styles.bText}>
                                    you caught a shark
                                </Text>
                                <Image
                                    source={{ uri: 'https://codehs.com/uploads/9153003f3b0e2d76db426943f1877842' }}
                                    style={{ height: 200, width: 200 }}
                                />
                            </>
                            }
                            
                            {this.state.fish == 2 &&
                            <>
                                <Text style={styles.bText}>
                                    you caught blue fish
                                </Text>
                                <Image
                                    source={{ uri: 'https://codehs.com/uploads/e7ba8ee192b0cccbb24f94a213cbbe02' }}
                                    style={{ height: 200, width: 200 }}
                                />
                            </>
                            }
                            
                            {this.state.fish == 3 &&
                            <>
                                <Text style={styles.bText}>
                                    you caught red fish
                                </Text>
                                <Image
                                    source={{ uri: 'https://codehs.com/uploads/a340e29672ab9a55c5ecd6e703fadd50' }}
                                    style={{ height: 200, width: 200 }}
                                />
                            </>
                            }
                            
                            {this.state.fish == 4 &&
                            <>
                                <Text style={styles.bText}>
                                    you caught pink fish
                                </Text>
                                <Image
                                    source={{ uri: 'https://codehs.com/uploads/d7f3be8033903ed8111442e1750190e7' }}
                                    style={{ height: 200, width: 200 }}
                                />
                            </>
                            }
                            
                            {this.state.fish == 5 &&
                            <>
                                <Text style={styles.bText}>
                                    you caught yellow fish
                                </Text>
                                <Image
                                    source={{ uri: 'https://codehs.com/uploads/18896a99bc4cff9ceaf2c77bee07d356' }}
                                    style={{ height: 200, width: 200 }}
                                />
                            </>
                            }
                            
                            {this.state.fish == 6 &&
                            <>
                                <Text style={styles.bText}>
                                    you caught green fish
                                </Text>
                                <Image
                                    source={{ uri: 'https://codehs.com/uploads/0e4804a4f7c4e67ef68aceca540891cd' }}
                                    style={{ height: 200, width: 200 }}
                                />
                            </>
                            }
                        </>
                        }
                    </>
                    }
                    
                    {this.state.page == 2 &&
                        <View style={{ height: '100%', width: '100%', alignItems: "center", justifyContent: "center",}}>
                            <Text style={styles.mText}>
                                Upgrade luck for {this.state.luckCost} money
                            </Text>
                            
                            <TouchableHighlight 
                                onPress = {this.buyLuck}
                                underlayColor='transparent'
                                style={{ height: '20%', width: '80%', backgroundColor: 'black', borderColor: 'white', borderWidth: 2, borderRadius: 10, margin: 5, }}
                            >
                                <View style={styles.button}>
                                    <Text style={styles.bText}>
                                        Upgrade Luck
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                            <Text style={styles.mText}>
                                Upgrade pole for {this.state.poleCost} money
                            </Text>
                            
                            <TouchableHighlight 
                                onPress = {this.buyPole}
                                underlayColor='transparent'
                                style={{ height: '20%', width: '80%', backgroundColor: 'black', borderColor: 'white', borderWidth: 2, borderRadius: 10, margin: 5, }}
                            >
                                <View style={styles.button}>
                                    <Text style={styles.bText}>
                                        Upgrade Pole
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    }
                </View>
                
                <View style={styles.botBox1}>
                    {this.state.page == 1 &&
                        <TouchableHighlight 
                            onPress = {this.doFish}
                            underlayColor='transparent'
                            style={{ height: '90%', width: '80%', backgroundColor: 'black', borderColor: 'white', borderWidth: 2, borderRadius: 10, margin: 5, }}
                        >
                            <View style={styles.button}>
                                <Text style={styles.bText}>
                                    Cast Real
                                </Text>
                            </View>
                        </TouchableHighlight>
                    }
                </View>
                
                <View style={styles.botBox2}>
                    <TouchableHighlight 
                        onPress = {this.pg1}
                        underlayColor='transparent'
                        style={{ height: '90%', width: '40%', backgroundColor: 'black', borderColor: 'white', borderWidth: 2, borderRadius: 10, margin: 5, }}
                    >
                        <View style={styles.button}>
                            <Text style={styles.bText}>
                                Fish
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight 
                        onPress = {this.pg2}
                        underlayColor='transparent'
                        style={{ height: '90%', width: '40%', backgroundColor: 'black', borderColor: 'white', borderWidth: 2, borderRadius: 10, margin: 5, }}
                    >
                        <View style={styles.button}>
                            <Text style={styles.bText}>
                                Shop
                            </Text>
                        </View>
                    </TouchableHighlight>
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
        height: '20%',
        width: '100%',
        backgroundColor: 'black',
        alignItems: "center",
        justifyContent: "center",
    },
    bText: {
        color: 'white',
        fontSize: 24,
    },
    mText: {
        color: 'white',
        fontSize: 20,
    },
    midBox: {
        height: '60%',
        width: '100%',
        backgroundColor: 'black',
        alignItems: "center",
        justifyContent: "center",
    },
    botBox1: {
        height: '10%',
        width: '100%',
        backgroundColor: 'black',
        alignItems: "center",
        justifyContent: "center",
    },
    botBox2: {
        height: '10%',
        width: '100%',
        backgroundColor: 'black',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    button: {
        height: '100%',
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
    },
});