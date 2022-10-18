import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StatusBar, Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import ProductItemList from '../../components/ProductItem';
import { dummyData, dummyData2, dummyData3, dummyData4 } from '../../data/product';
import styles from '../home/styles';
import video3 from '../../../assets/video-sneaker-02.mp4';
import video9 from '../../../assets/video-sneaker-09.mp4';
import Carousel from '../../components/Carousel';
import { Ionicons } from "@expo/vector-icons";


export default function HomeScreen({ navigation }) {
    const [user, setuser] = useState(null);

    const renderItem = ({ item, index }) => {
        return <ProductItemList item={item} index={index} navigation={navigation} />;
    };
    const getUserData = async () => {
        let curUser = await AsyncStorage.getItem('curUser');
        curUser = JSON.parse(curUser);
        setuser(curUser);
    };
    useEffect(() => {
        getUserData();
    }, []);

    return (
        <ScrollView
            style={{
                backgroundColor: '#fff',
                paddingHorizontal: 12,
                marginTop: StatusBar.currentHeight + 10,
            }}
        >
            <View style={{ position: "relative" }}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('HomeTab'); }}
                    style={{
                        backgroundColor: "#333",
                        top: 30,
                        left: 12,
                        width: 40,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 100,
                    }}
                >
                    <Ionicons name="chevron-back-outline" size={30} color="white" />
                </TouchableOpacity>
            </View>

            <Text style={{ width: 220, height: 130, fontSize: 30, marginTop: 10, fontWeight: 'bold' }}>WHO ARE YOU SHOPPING FOR?</Text>


            {/* <Text style={{ marginTop: 20, fontSize: 22 }}>{`Chào, ${user && user.name
        }!`}</Text> */}
            <View
                style={{
                    backgroundColor: '#67E5CE',
                    padding: 20,
                    borderRadius: 12,
                    marginTop: 20,
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                        GIẢM
                    </Text>
                    <Text
                        style={{
                            color: '#000',
                            fontWeight: 'bold',
                            fontSize: 24,
                        }}
                    >
                        {' 50% '}
                    </Text>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                        CHO NGƯỜI MỚI
                    </Text>
                </View>
                <Text
                    style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 10,
                        marginTop: 30,
                    }}
                >
                    SỰ DỤNG CODE NÀY
                </Text>
                <Text
                    style={{
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize: 24,
                    }}
                >
                    DUCHANDSOME
                </Text>
            </View>
            <View style={styles.sectionContainerList}>
                <Text style={styles.title}>Select Product</Text>
                <FlatList
                    data={dummyData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item + index}
                    renderItem={renderItem}
                />
            </View>

            <Text style={{ width: 220, height: 60, fontSize: 30, marginTop: 20, fontWeight: 'bold' }}>WHAT HOT'S</Text>

            {/* /Carousel/ */}
            <Carousel data={dummyData4} />
            {/* /Carousel/ */}



            <View style={styles.sectionContainerList}>
                <Text style={styles.title}>BEST OF ADIDAS</Text>
                <FlatList
                    data={dummyData3}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item + index}
                    renderItem={renderItem}
                />
            </View>
        </ScrollView>
    );
}


