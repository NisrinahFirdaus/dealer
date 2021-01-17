import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import firebase from '../../config'
import CardHome from '../../components/cardHome'

export default class home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {},
            loading: false

        }
    }


    componentDidMount() {
        this._get_data();
    }

    _get_data = async () => {
        firebase.database().ref('dealer/')
            .on('value', (snapshot) => {
                const tasks = [];
                snapshot.forEach((shot) => {
                    tasks.push({ ...shot.val(), key: shot.key });
                    this.setState({
                        data: tasks,
                        loading: true
                    });
                    console.log(tasks);
                });
            });
    }

    renderItem = ({ item }) => (
        <CardHome
            nama={item.nama}
            merk={item.merk}
            warna={item.warna}
            harga={item.harga}
            id={item.key}
            nav={this.props.navigation}
        />
    );

    render() {
        const { data, loading } = this.state;
        let tampil = ''
        if (loading === false) {
            tampil = (
                <View>
                    <Text>Memuat...</Text>
                </View>
            )
        } else if (data.length) {
            tampil = (
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.key}
                />
            )
        }
        return (
            <View style={styles.container}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 26}}>Data Motor</Text>
                </View>
                <SafeAreaView style={styles.card}>
                    {tampil}
                </SafeAreaView>
                <TouchableOpacity style={styles.tambah} onPress={() => this.props.navigation.navigate('Add')}>
                    <Text style={{fontSize: 26, fontWeight: 'bold'}}>Tambah</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'space-around'
    },
    card: {
        flex: 1,
        marginTop: 10,
    },
    tambah: {
        width: '100%',
        height: 40,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
