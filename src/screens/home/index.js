import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StatusBar, Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import ProductItem from '../../components/ProductItem';
import { dummyData, dummyData2, dummyData3, dummyData4 } from '../../data/product';
import styles from './styles';
import video3 from '../../../assets/video-sneaker-02.mp4';
import video9 from '../../../assets/video-sneaker-09.mp4';
import Carousel from '../../components/Carousel';
import './style.css';

export default function HomeScreen({ navigation }) {
  const [user, setuser] = useState(null);

  const renderItem = ({ item, index }) => {
    return <ProductItem item={item} index={index} navigation={navigation} />;
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
      <TouchableOpacity onPress={() => { navigation.navigate('ProducAll'); }}>
        <View >
          <video id="video3"
            src={video3}
            autoPlay={"autoplay"}
            preLoad="auto"
            muted
            loops
            style={{ width: '100%', zIndex: -100, height: 600, resizeMode: 'cover' }}
          > something</video>

          <View style={{ position: 'absolute', bottom: 0 }}>
            <Text style={{ width: 250, height: 100, fontSize: 30, fontWeight: 'bold', color: 'white', marginLeft: 9 }}>THE FUTURE OF RUNNING</Text>
            <Text style={{ width: 220, height: 130, fontSize: 18, marginTop: 1, fontWeight: 'bold', color: 'white', marginLeft: 9 }}>adidas 4DFWD. Đổi mới chuyển động tiến bước. Mãi mãi.</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate('ProducAll'); }}>
        <View>
          <video id="video3"
            src={video9}
            autoPlay={"autoplay"}
            preLoad="auto"
            muted
            loops
            style={styles.Views}
          > something</video>

          <View style={{ position: 'absolute', bottom: 0 }}>
            <Text style={{ width: 250, height: 100, fontSize: 30, fontWeight: 'bold', color: 'white', marginLeft: 9 }}>THE FUTURE OF RUNNING</Text>
            <Text style={{ width: 220, height: 100, fontSize: 18, marginTop: 1, fontWeight: 'bold', color: 'white', marginLeft: 9 }}>adidas 4DFWD. Đổi mới chuyển động tiến bước. Mãi mãi.</Text>
          </View>

        </View>
      </TouchableOpacity>
      <Text style={{ width: 220, height: 130, fontSize: 30, marginTop: 10, fontWeight: 'bold' }}>WHO ARE YOU SHOPPING FOR?</Text>


      {/* /Carousel/ */}
      <Carousel data={dummyData2} />
      {/* /Carousel/ */}

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
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Select Product</Text>
        <FlatList
          data={dummyData}
          horizontal
          showsHorizontalScrollIndicator={true}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      </View>

      <Text style={{ width: 220, height: 60, fontSize: 30, marginTop: 20, fontWeight: 'bold' }}>WHAT HOT'S</Text>

      {/* /Carousel/ */}
      <Carousel data={dummyData4} />
      {/* /Carousel/ */}



      <View style={styles.sectionContainer}>
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


