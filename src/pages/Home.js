import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ACTIVE_OPACITY, COLORS, fontFamily, SIZES} from '../assets/Constants';
import {
  Avatar,
  BgBlur,
  BgEffect,
  DareDevil,
  Dexter,
  Friends,
  Menu,
  ProfilePic,
  Search,
  See,
  StarRating,
  TheBoys,
  Timer,
} from '../assets';
import {SharedElement} from 'react-navigation-shared-element';
const Home = ({navigation}) => {
  const [latest_movies, setLatest_movies] = useState([
    {
      name: 'Dare Devil',
      photo: DareDevil,
      time: '45 min',
      date: '21 October 2012',
      rating: 4.5,
    },
    {
      name: 'See',
      photo: See,
      time: '22 min',
      rating: 4.8,
      date: '12 July 2016',
    },
    {
      name: 'The Boys',
      photo: TheBoys,
      time: '22 min',
      rating: 4.8,
      date: '16 July 2015',
    },
  ]);

  const [fav_movies, setFav_movies] = useState([
    {
      name: 'Friends',
      photo: Friends,
      date: 'PG | September 22, 1994',
      time: '22 min',
      rating: 4.8,
    },
    {
      name: 'Avatar',
      photo: Avatar,
      date: '12A | October 20, 2012',
      time: '2 hours 15 mins',
      rating: 4.9,
    },
    {
      name: 'Dexter',
      photo: Dexter,
      date: '18+ | July 10, 2008',
      time: '45 mins',
      rating: 4.6,
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={BgBlur}
        style={{
          width: 358,
          height: 358,
          zIndex: -5,
          position: 'absolute',
          end: -160,
          top: -90,
          transform: [{scale: 2}],
        }}
      />
      <Image
        source={BgBlur}
        style={{
          width: 358,
          height: 358,
          zIndex: -5,
          position: 'absolute',
          start: -100,
          bottom: 10,
          transform: [{scale: 1.5}],
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header section */}
        <View style={styles.header_section}>
          <TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
            <Image source={Menu} resizeMode="contain" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
            <Image source={Search} resizeMode="contain" style={styles.icon} />
          </TouchableOpacity>
        </View>
        {/* Profile and name */}
        <View style={styles.profile_section}>
          <View>
            <Text style={styles.name_welcome}>Hi Jane,</Text>
            <Text style={styles.txt_welcome}>See what's new today</Text>
          </View>

          <Image
            source={ProfilePic}
            resizeMode="contain"
            style={styles.profilepic}
          />
        </View>
        {/* Latest section */}
        <View style={styles.header_section}>
          <Text style={[styles.name_welcome]}>Latest</Text>
        </View>
        <ScrollView
          style={styles.latest_section}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {latest_movies.map((ele, ind) => (
            <View style={styles.movie_card} key={ind}>
              <TouchableOpacity
                activeOpacity={ACTIVE_OPACITY}
                onPress={() => navigation.push('Detail', {ele})}>
                <SharedElement id={`item.${ele.photo}`}>
                  <Image
                    resizeMode="contain"
                    source={ele.photo}
                    style={styles.movie_poster}
                  />
                </SharedElement>
              </TouchableOpacity>
              <Text style={[styles.movie_name, styles.name_welcome]}>
                {ele.name}
              </Text>
              <Text style={[styles.txt_welcome]}>{ele.date}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Favourite section */}
        <View style={styles.header_section}>
          <Text style={[styles.name_welcome]}>Favourite</Text>
        </View>
        <View style={styles.fav_section}>
          {fav_movies.map((ele, ind) => (
            <View style={styles.fav_card} key={ind}>
              <View style={styles.fav_bgblur} />
              <Image
                source={ele.photo}
                style={styles.fav_poster}
                resizeMode={'contain'}
              />
              <View
                style={{
                  height: 50,
                  width: 34,
                  backgroundColor: COLORS.gold_rating,
                  position: 'absolute',
                  top: 0,
                  end: 28,
                  borderBottomEndRadius: SIZES.rating_border,
                  borderBottomStartRadius: SIZES.rating_border,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={StarRating}
                  style={{width: 12, height: 12, marginBottom: 5}}
                />
                <Text style={[styles.txt_welcome, {color: COLORS.black}]}>
                  {ele.rating}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'space-evenly',
                  height: '90%',
                }}>
                <Text style={styles.fav_name}>{ele.name}</Text>
                <Text style={styles.txt_welcome}>{ele.date}</Text>
                <View style={styles.fav_time_section}>
                  <Image
                    source={Timer}
                    style={{
                      width: 18,
                      height: 18,
                    }}
                  />
                  <Text
                    style={[
                      styles.txt_welcome,
                      {marginStart: SIZES.marginBottom / 4, opacity: 1},
                    ]}>
                    {ele.time}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.main,
  },
  header_section: {
    width: SIZES.WIDTH * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.marginBottom,
    marginTop: SIZES.WIDTH * 0.04,
  },
  icon: {
    width: SIZES.icon_size,
    height: SIZES.icon_size,
  },
  profile_section: {
    width: SIZES.WIDTH * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.marginBottom,
  },
  name_welcome: {
    fontSize: SIZES.h1,
    color: COLORS.white,
    fontFamily: fontFamily,
  },
  txt_welcome: {
    fontSize: SIZES.h3,
    color: COLORS.white,
    opacity: SIZES.txt_opacity,
  },
  profilepic: {
    width: SIZES.icon_size + 10,
    height: SIZES.icon_size + 10,
  },
  latest_section: {
    width: SIZES.WIDTH,
    // alignSelf: 'center',
    marginBottom: SIZES.marginBottom,
  },
  movie_card: {
    marginHorizontal: SIZES.marginBottom / 2,
  },
  movie_poster: {
    width: 150,
    height: 225,
    marginBottom: SIZES.marginBottom / 2,
    borderRadius: SIZES.card_border,
  },
  fav_bgblur: {
    backgroundColor: COLORS.card_bg,
    opacity: SIZES.card_opacity,
    width: SIZES.card_width,
    height: SIZES.card_height,
    position: 'absolute',
    // start: 0,
    top: 0,
    borderRadius: SIZES.card_border,
  },
  fav_section: {
    alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: SIZES.WIDTH * 0.9,
    // backgroundColor: 'red',
  },
  fav_card: {
    padding: SIZES.marginBottom / 2,
    marginBottom: SIZES.marginBottom / 2,
    width: SIZES.card_width,
    height: SIZES.card_height,
    alignItems: 'center',
    flexDirection: 'row',
  },
  fav_poster: {
    width: 67.51,
    height: 90,
    marginEnd: SIZES.marginBottom / 2,
  },
  fav_name: {
    fontSize: SIZES.h1,
    color: COLORS.white,
    fontFamily: fontFamily,
  },
  fav_time_section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
