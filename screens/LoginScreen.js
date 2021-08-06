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

const LoginScreen = (props) => {

    const [name, setname] = useState('');

    const continueScreen = () => {
        props.navigation.navigate('Chat', { name: name });
    }
    const myIcon = <Icon name="arrow-forward-outline" size={30} color="#FFF" />;

    return (
        <View style={styles.container}>
            <View style={styles.circle} />
                <View style={{marginTop: 64}}>
                    <Image source={require('../assets/caht.png')} 
                    style={{width: 100, height: 100, alignSelf: 'center'}} />
                </View>
                <View style={{ marginHorizontal: 32 }}>
                    <Text style={styles.header}>Username</Text>
                    <TextInput style={styles.input}
                     placeholder="DesignIntoCode" 
                     onChangeText={name => setname(name)}
                     value={name} />
                     <View style={{alignItems: "flex-end", marginTop: 34}}>
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
        borderRadius: 500/ 2,
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
        borderRadius: 70/2,
        backgroundColor: "#9075E3",
        alignItems: "center",
        justifyContent: "center"
    }
})


export default LoginScreen
