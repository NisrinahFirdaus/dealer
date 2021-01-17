import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import firebase from '../../config'

export default function edit({ route, navigation }) {
    const { id } = route.params;
    const [nama, setNama] = useState('');
    const [merk, setMerk] = useState('');
    const [warna, setWarna] = useState('');
    const [harga, setHarga] = useState('');

    useEffect(() => {
        firebase.database().ref('dealer/' + id)
        .once('value').then((snapshot) => {
            const data = snapshot.val();
            setNama(data.nama);
            setMerk(data.merk);
            setWarna(data.warna);
            setHarga(data.harga);
        });
    }, [])

    const _edit = async () => {
        firebase.database().ref('dealer/' + id)
            .update({
                nama: nama,
                merk: merk,
                warna: warna,
                harga: harga
            }).then((a) => console.log("Berhasil diubah!!"));
            navigation.navigate('Home');
    }

    return (
        <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setNama(text)}
                value={nama}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setMerk(text)}
                value={merk}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setWarna(text)}
                value={warna}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setHarga(text)}
                value={harga}
            />
            <TouchableOpacity style={styles.update} onPress={() => _edit()}>
                <Text>Update</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    update: {
        backgroundColor: 'skyblue',
        width: 100,
        height: 40,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
})
