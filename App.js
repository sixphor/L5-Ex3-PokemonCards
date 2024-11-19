import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, StatusBar, Button, SectionList, Image} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 20,
    },

    listContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#D6A6FF',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 3,
        borderWidth: 1,
        width: '100%',
    },

    headerText: {
        color: 'black',
        fontSize: 18,
        marginLeft: 10,
    },

    pokemonName: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    image: {
        width: 193,
        height: 270,
    },

    buttonStyle: {
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 5,
    }
});

const datasource = [
    {data:[
            {name: 'Charizard', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_6.png'},
            {name: 'Charmeleon', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_5.png'},
        ],
        title:"FIRE", bgColor: "orange", icon: "burn", iconColour: "#FF4500"},
    {data:[
            {name: 'Vaporeon', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_134.png'},
            {name: 'Lapras', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_131.png'},
        ],
        title:"WATER", bgColor: "skyblue", icon: "tint", iconColour: "#1E90FF"},
    {data: [
            {name: 'Jolteon', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_135.png'},
            {name: 'Zapdos', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_145.png'},
        ],
        title:"ELECTRIC", bgColor: "yellow", icon: "bolt", iconColour: "#FFD700"},
    {data: [
            {name: 'Mewtwo', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_150.png'},
            {name: 'Mew', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_151.png'},
        ],
        title:"PSYCHIC", bgColor: "#b241d1", icon: "brain", iconColour: "#8A2BE2"},
];

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.listContainer}>
            <Text style={styles.pokemonName}>{item.name}</Text>
            <Image source={{ uri: item.image }} style={styles.image} />
        </TouchableOpacity>
    )
};

const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.buttonStyle}>
                <Button title={"ADD POKEMON"} />
            </View>
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({section:{title, bgColor, icon, iconColour}}) => (
                    <View style={[styles.header, {backgroundColor: bgColor}]}>
                        <FontAwesome5 name={icon} size={20} color={iconColour} />
                        <Text style={[styles.headerText]}>{title}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default App;
