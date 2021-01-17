import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import firebase from '../config'
import { Ionicons } from '@expo/vector-icons';

const CardHome = ({ nama, merk, warna, harga, id, nav }) => (
    <View style={styles.item}>
        <View style={styles.card}>
            <Text style={styles.title}>{nama}</Text>
            <Text style={styles.title}>{merk}</Text>
            <Text style={styles.title}>{warna}</Text>
            <Text style={styles.title}>{harga}</Text>
        </View>
        <View style={styles.card2}>
            <TouchableOpacity onPress={() => _edit(id, nav)}>
                {/* <Text>Edit</Text> */}
                <Ionicons name="md-pencil-outline" size={32} color="bluesky" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => _hapus(id)}>
                {/* <Text>Hapus</Text> */}
                <Ionicons name="md-trash" size={32} color="bluesky" />
            </TouchableOpacity>
        </View>
    </View>
);

const _hapus = async (id) => {
    firebase.database().ref('dealer/' + id).remove()
        .then((a) => console.log("Berhasil Hapus!!"));
}

const _edit = async (id, nav) => {
    nav.navigate('Edit', { id: id });
}

export default CardHome;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column'
    },
    card2: {
        flexDirection: 'column'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 32,
    },
})
