import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import firebase from '../../config'

export default function add({ navigation }) {
    const [nama, setNama] = useState('');
    const [merk, setMerk] = useState('');
    const [warna, setWarna] = useState('');
    const [harga, setHarga] = useState('');

    const _simpan = async () => {
        firebase.database().ref('dealer')
            .push().set({
                nama: nama,
                merk: merk,
                warna: warna,
                harga: harga
            }).then((a) => console.log("Berhasil disimpan!!"));
        navigation.navigate('Home');
    }

    return (
        <View style={styles.card}>
            <View style={{justifyContent: 'flex-start', width: '70%', marginTop: 10}}>
                <Text style={{fontSize: 18}}>Nama</Text>
            </View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setNama(text)}
                value={nama}
                placeholder="Masukkan nama"
                style={styles.input}
            />
            <View style={{justifyContent: 'flex-start', width: '70%', marginTop: 10}}>
                <Text style={{fontSize: 18}}>Merk</Text>
            </View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setMerk(text)}
                value={merk}
                placeholder="Masukkan merk"
                style={styles.input}
            />
            <View style={{justifyContent: 'flex-start', width: '70%', marginTop: 10}}>
                <Text style={{fontSize: 18}}>Warna</Text>
            </View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setWarna(text)}
                value={warna}
                placeholder="Masukkan warna"
                style={styles.input}
            />
            <View style={{justifyContent: 'flex-start', width: '70%', marginTop: 10}}>
                <Text style={{fontSize: 18}}>Harga</Text>
            </View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setHarga(text)}
                value={harga}
                placeholder="Masukkan harga"
                style={styles.input}
            />
            <TouchableOpacity style={styles.simpan} onPress={() => _simpan()}>
                <Text>Simpan</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    simpan: {
        backgroundColor: 'skyblue',
        width: 100,
        height: 40,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        marginTop: 10,
        padding: 10,
        borderRadius: 20
    },
    card: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }
})
