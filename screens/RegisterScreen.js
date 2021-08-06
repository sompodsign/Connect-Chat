import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native'
import '../fire'

const LoginScreen = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const continueScreen = () => {
        props.navigation.navigate('Login', { email: email });
    }

    const myIcon = <Icon name="arrow-forward-outline" size={30} color="#FFF" />;

    return (
        <View style={styles.container}>
            <View style={styles.circle} />
            <View style={{ marginTop: 64 }}>
                <Image source={require('../assets/caht.png')}
                    style={{ width: 100, height: 100, alignSelf: 'center' }} />
            </View>
            <View style={{ marginHorizontal: 32 }}>
                <Text style={styles.header}>Sign Up</Text>
                <TextInput style={styles.input}
                    placeholder="Full Name"
                    onChangeText={name => setName(name)}
                    value={name} />
                <TextInput style={styles.input}
                    placeholder="Email"
                    onChangeText={email => setEmail(email)}
                    value={email} />
                <TextInput style={styles.input}
                    placeholder="Password"
                    onChangeText={pw => setPassword(pw)}
                    value={password} />
                    <View style={styles.textContainer}>
                    <Text>Have an account? </Text> 
                    <TouchableOpacity>
                    <Text 
                    onPress={() => props.navigation.navigate('Login')}
                    style={styles.linkStyle}
                    >Login</Text>
                    </TouchableOpacity>
                    </View>
                <View style={{ alignItems: "flex-end", marginTop: 34 }}>
                    <TouchableOpacity style={styles.continue} onPress={continueScreen}>
                        {myIcon}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F5F7',
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: "#FFF",
        position: "absolute",
        left: -120,
        top: -20
    },
    header: {
        fontWeight: "800",
        fontSize: 30,
        color: "#514E5A",
        marginTop: 32,
    },
    input: {
        marginTop: 32,
        height: 50,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#BAB7C3",
        borderRadius: 30,
        paddingHorizontal: 16,
        color: "#514E5A",
        fontWeight: "600",
    },
    continue: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: "#9075E3",
        alignItems: "center",
        justifyContent: "center"
    },
    textContainer: {
        marginTop: 10,
        marginLeft: 5,
        flexDirection: 'row',
    }, 
    linkStyle: {
        color: 'red',
    }
})


export default LoginScreen
