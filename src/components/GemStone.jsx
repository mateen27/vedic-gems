import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

const GemStone = () => {
  const flatListRef = useRef(null);
  const scrollIndex = useRef(0);

  const gemstones = [
    {
      id: 1,
      name: "Diamond",
      description: "Heera",
      image: require("../images/navratnas/Diamond.png"),
    },
    {
      id: 2,
      name: "Blue Sapphire",
      description: "Neelam",
      image: require("../images/navratnas/blueSapphire.png"),
    },
    {
      id: 3,
      name: "Ruby",
      description: "Manik",
      image: require("../images/navratnas/Ruby.png"),
    },
    {
      id: 4,
      name: "Yellow Sapphire",
      description: "Pukhraj",
      image: require("../images/navratnas/YellowSapphire.png"),
    },
    {
      id: 5,
      name: "Freshwater Cultured",
      description: "Moti",
      image: require("../images/navratnas/Moti.png"),
    },
    {
      id: 6,
      name: "Blue Sapphire",
      description: "Neelam",
      image: require("../images/navratnas/BlueSapphiree.png"),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      scrollIndex.current = (scrollIndex.current + 1) % gemstones.length;
      flatListRef.current?.scrollToIndex({
        index: scrollIndex.current,
        animated: true,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [gemstones.length]);

  return (
    <View style={styles.container}>
      {/* {gemstones.map((gemstone, index) => (
        <View key={index} style={styles.gemstoneContainer}>
          <Image source={gemstone.image} style={styles.gemstoneImage} />
          <Text style={styles.gemstoneText}>{gemstone.name}</Text>
          <Text style={styles.gemstoneVariant}>{gemstone.description}</Text>
        </View>
      ))} */}

      <FlatList
        data={gemstones}
        renderItem={({ item }) => (
          <View style={styles.gemstoneContainer}>
            <Image
              source={item.image}
              style={styles.gemstoneImage}
              resizeMode="contain"
            />
            <Text style={styles.gemstoneName}>{item.name}</Text>
            <Text style={styles.gemstoneSubname}>{item.subname}</Text>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    paddingVertical: 20,
  },
  gemstoneContainer: {
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  gemstoneImage: {
    width: 50,
    height: 50,
  },
  gemstoneText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  gemstoneVariant: {
    fontSize: 14,
    color: "gray",
  },
});

export default GemStone;