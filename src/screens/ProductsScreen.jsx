import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import blueRing from "../images/rings/blueRing.jpg";
import whiteRing from "../images/rings/whiteRing.jpg";
import RoundDiamond from "../images/rings/RoundDiamond.jpg";
import Emerald from "../images/rings/Emerald.jpg";
import rubyYellowGold from "../images/rings/rubyYellowGold.jpg";
import goldRing from "../images/rings/goldRing.jpg";
import {
  responsiveFontSize,
  responsiveScreenHeight,
} from "react-native-responsive-dimensions";
import JewelleryCategory from "../components/JewelleryCategory";
import ProductGemstone from "../components/ProductGemstone";
import Features from "../components/Features";
import CopyrightSection from "../components/CopyrightSection";
import PaymentLogos from "../components/PaymentLogos";
import BottomTextField from "../components/BottomTextField";
import FixedButton from "../components/FixedButton";

const ProductDescription = ({ route }) => {
  const { item } = route.params;
  console.log("Products Details", item);

  const imageMapping = {
    "../images/rings/blueRing.jpg": blueRing,
    "../images/rings/whiteRing.jpg": whiteRing,
    "../images/rings/RoundDiamond.jpg": RoundDiamond,
    "../images/rings/Emerald.jpg": Emerald,
    "../images/rings/rubyYellowGold.jpg": rubyYellowGold,
    "../images/rings/goldRing.jpg": goldRing,
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={imageMapping[item.image]}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.name} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={styles.price}>{item.price}</Text>
      <View
        style={{
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Image
          style={styles.logoStyle}
          source={{
            uri: "https://vedicgems.dev.angara.in/__next/favicon.ico.png",
          }}
          resizeMode="contain"
        />
        <View style={{ flexDirection: "row", gap: responsiveScreenHeight(6) }}>
          <Text style={{ fontSize: 13, fontWeight: "100", color: "#888" }}>
            {item.payment}
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "100",
              color: "#888",
              textDecorationLine: "underline",
            }}
          >
            Select Plan
          </Text>
        </View>
      </View>

      {/* Explore Navratna */}
      <View style={styles.navratnaContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={[styles.featuredText, { fontSize: 16, fontWeight: "500" }]}
          >
            Gemstone
          </Text>

          <Text
            style={{
              color: "#888",
              textDecorationLine: "underline",
              fontSize: 12,
              fontWeight: "500",
            }}
          >
            Compare
          </Text>
        </View>
        <ProductGemstone name={"Gemstone"} value={"options"} />

        {/* Line */}
        <View style={styles.line} />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={[styles.featuredText, { fontSize: 16, fontWeight: "500" }]}
          >
            Natural Gemstone Quality
          </Text>

          <Text
            style={{
              color: "#888",
              textDecorationLine: "underline",
              fontSize: 12,
              fontWeight: "500",
            }}
          >
            Compare
          </Text>
        </View>
        <ProductGemstone name={"Natural Gemstone"} />
      </View>
      {/* Line */}
      {/* <View style={styles.line} /> */}

      <FixedButton/>

            {/* Line */}
            <View style={styles.line} />

      {/* An Insider View */}
      <View style={styles.favoriteContainer}>
        <Text
          style={[
            styles.featuredText,
            { fontSize: 16, fontWeight: "500", textAlign: "center" },
          ]}
        >
          An Insider View
        </Text>
        <Features />
      </View>

      {/* Bottom */}
      <View>
        <BottomTextField />
      </View>

      {/* Payments */}
      <View>
        <PaymentLogos />
      </View>

      {/* CopyRight Section */}
      <View>
        <CopyrightSection />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingBottom: 80, // Adjust this value as needed
    // justifyContent: 'center',
  },
  image: {
    width: "100%",
    height: 300,
  },
  name: {
    fontSize: responsiveFontSize(2),
    fontWeight: "600",
    marginVertical: 5,
    width: "90%",
  },
  price: {
    fontSize: responsiveFontSize(1.9),
    color: "#010101",
    marginVertical: 5,
    // justifyContent: 'flex-start'
  },
  logoStyle: {
    width: 20,
    height: 20,
  },
  navratnaContainer: {
    marginTop: responsiveScreenHeight(2),
    // alignItems: "center",
    // marginBottom: responsiveScreenHeight(-4),
  },
  line: {
    height: 1,
    backgroundColor: "gray",
    marginHorizontal: 20,
    marginTop: responsiveScreenHeight(0),
    marginBottom: responsiveScreenHeight(2),
  },
  featuredText: {
    fontSize: responsiveScreenHeight(2),
    fontWeight: "bold",
    marginBottom: responsiveScreenHeight(1),
  },
});

export default ProductDescription;
