import React, {useState} from 'react';
import { View, Text, Button, StatusBar } from 'react-native';

export default function Counter() {

    const [count, setCount] = useState(0);

    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title="+" onPress={() => setCount(count + 1)}></Button> 
            <StatusBar style="auto" />
        </View>
    )
}