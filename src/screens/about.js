import { View, Text, Button } from "react-native"
import {screens} from "./"

export default ({ navigation }) => {
    return (
    <View>
        <Text>Moi</Text>
        {screens.map((s) => <Button key={s.name} title={s.name} onPress={() => navigation.navigate(s.name)}></Button>)}
        {/* <Button onPress={() => navigation.navigate("Counter")}></Button> */}
    </View>
    )
}