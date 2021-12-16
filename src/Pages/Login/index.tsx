import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';

import {styles} from './styles';

const Login = () => {
    const [meuTexto,setMeuTexto] = useState('');
    return(
        <View style={styles.content}>
            <Text>Login</Text>
            <TextInput style={styles.textInput} 
                onChangeText={ e => setMeuTexto(e)}/>
            <Text>{meuTexto}</Text>
        </View>
    );
}

export default Login;