import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated, TouchableOpacity } from 'react-native'
import CarouselItem from './CarouselItem'


const { width, heigth } = Dimensions.get('window')

const goToDetail = () => {
    if (navigation) {
        navigation.navigate("ProducAll", {
            item: item,
        });
    }
};

function infiniteScroll(dataList) {
    const numberOfData = dataList.length
    let scrollValue = 0, scrolled = 0

    setInterval(function () {
        scrolled++
        if (scrolled < numberOfData)
            scrollValue = scrollValue + width

        else {
            scrollValue = 0
            scrolled = 0
        }


    }, 3000)
}


const Carousel = ({ data }) => {
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    const [dataList, setDataList] = useState(data)

    useEffect(() => {
        setDataList(data)
        infiniteScroll(dataList)
    })


    if (data && data.length) {
        return (
            <TouchableOpacity style={{ ...styles.container }} onPress={goToDetail}>
                <View>
                    <FlatList data={data}
                        keyExtractor={(item, index) => 'key' + index}
                        horizontal
                        pagingEnabled
                        scrollEnabled
                        snapToAlignment="center"
                        scrollEventThrottle={16}
                        decelerationRate={"fast"}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return <CarouselItem item={item} />
                        }}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }]
                        )}
                    />

                    {/* <View style={styles.dotView}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5 }}
                            />
                        )
                    })}

                </View> */}
                </View>
            </TouchableOpacity>
        )
    }

    console.log('Please provide Images')
    return null
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 4,
        borderRadius: 14,
        flexDirection: "row",
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
    }
});

export default Carousel