import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import ImageSlider from "../components/ImageSlider";
import GemStone from "../components/GemStone";
import JewelleryCategory from "../components/JewelleryCategory";
import JewelleryCards from "../components/JewelleryCards";
import OurPartners from "../components/OurPartners";
import Features from "../components/Features";
import BottomTextField from "../components/BottomTextField";
import PaymentLogos from "../components/PaymentLogos";
import CopyrightSection from "../components/CopyrightSection";

const HomeScreen = () => {
  const [selectedText, setSelectedText] = useState("Navratna Jewellery");

  const handlePress = (text) => {
    setSelectedText(text);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFF", padding: 8 }}>
      <SafeAreaView>
        <View style={styles.navigationContainer}>
          <TouchableOpacity onPress={() => handlePress("Navratna Jewellery")}>
            <Text
              style={[
                styles.headerTextStyle,
                selectedText === "Navratna Jewellery" && styles.selectedText,
              ]}
            >
              Navratna Jewellery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress("Gemstone Recommendation")}
          >
            <Text
              style={[
                styles.headerTextStyle,
                selectedText === "Gemstone Recommendation" &&
                  styles.selectedText,
              ]}
            >
              Gemstone Recommendation
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("Blog")}>
            <Text
              style={[
                styles.headerTextStyle,
                selectedText === "Blog" && styles.selectedText,
              ]}
            >
              Blog
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../images/Banner.png")}
          style={styles.imageStyle}
          resizeMode="contain"
        />
        <ImageSlider />

        {/* Line */}
        <View style={styles.line} />

        {/* Explore Navratna */}
        <View style={styles.navratnaContainer}>
          <Text
            style={[styles.featuredText, { fontSize: 16, fontWeight: "500" }]}
          >
            Explore Navaratnas
          </Text>
          <GemStone />
        </View>

        {/* Line */}
        <View style={styles.line} />

        {/* Second Banner of the application */}
        <Image
          source={require("../images/BannerImage.jpg")}
          resizeMode="contain"
          style={styles.bannerImageStyle}
        />

        {/* Find Your Favorite */}
        <View style={styles.favoriteContainer}>
          <Text
            style={[styles.featuredText, { fontSize: 16, fontWeight: "500" }]}
          >
            Find your Favorite
          </Text>
          <JewelleryCategory />
          <JewelleryCards />
        </View>

        {/* Our Partners */}
        <View style={styles.favoriteContainer}>
          <Text
            style={[
              styles.featuredText,
              { fontSize: 16, fontWeight: "500", textAlign: "center" },
            ]}
          >
            Our Partners
          </Text>
          <OurPartners />
        </View>

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
          <PaymentLogos/>
        </View>

        {/* CopyRight Section */}
        <View>
          <CopyrightSection/>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  imageStyle: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(30),
    marginTop: responsiveScreenHeight(-5),
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginTop: responsiveScreenHeight(2),
  },
  headerTextStyle: {
    fontSize: responsiveScreenHeight(1.3),
    fontWeight: "500",
    color: "#333",
  },
  selectedText: {
    textDecorationLine: "underline",
    textDecorationColor: "#333",
  },
  featuredSection: {
    marginTop: responsiveScreenHeight(2),
    alignItems: "center",
  },
  featuredText: {
    fontSize: responsiveScreenHeight(2),
    fontWeight: "bold",
    marginBottom: responsiveScreenHeight(1),
  },
  featuredImage: {
    width: 160,
    height: 40,
    marginHorizontal: 10,
  },
  bannerImageStyle: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(30),
    marginTop: responsiveScreenHeight(-4),
    marginBottom: responsiveScreenHeight(-4),
  },
  line: {
    height: 1,
    backgroundColor: "gray",
    marginHorizontal: 20,
    marginTop: responsiveScreenHeight(3),
  },
  navratnaContainer: {
    marginTop: responsiveScreenHeight(2),
    alignItems: "center",
    marginBottom: responsiveScreenHeight(-4),
  },
  favoriteContainer: {
    paddingLeft: responsiveScreenHeight(1.5),
    // marginBottom: responsiveScreenHeight(4),
  },
});
