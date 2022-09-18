import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function MyTabBar({ state, descriptors, navigation }) {
  var imgArr = [
    require("../../assets/Home1.png"),
    require("../../assets/search1.png"),
    require("../../assets/Basket1.png"),
    require("../../assets/profile1.png"),
  ];
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            onPress={onPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            <Image
              style={{
                tintColor: isFocused ? "#6bd1f3" : "#222",
                height: 22,
                width: 22,
                resizeMode: "contain",
              }}
              source={imgArr[index]}
            />
            <View
              style={{
                marginTop: 4,
                height: 2,
                width: 8,
                borderRadius: 10,
                backgroundColor: isFocused ? "#6bd1f3" : "transparent",
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
