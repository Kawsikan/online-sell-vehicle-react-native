import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, StatusBar, FlatList } from 'react-native';

const ListVehcile = () => {



    return (
        <View>

            <Image
                source={{
                    uri: 'https://live.staticflickr.com/1920/29913654857_f130040b7a_b.jpg',
                }}
                style={{
                    width: 70, height: 70
                }}
            />

        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
export default ListVehcile