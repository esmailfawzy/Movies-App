import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SharedElement} from 'react-navigation-shared-element';
import {
  Actor1,
  Actor2,
  Actor3,
  Actor4,
  Avatar,
  BackArrow,
  BgBlur,
  BgEffect,
  BigBG,
  BlackEffect,
  DareDevil,
  Dexter,
  Friends,
  Heart,
  Menu,
  ProfilePic,
  RatingStars,
  Search,
  See,
  StarRating,
  TheBoys,
  Timer,
} from '../assets';
import {ACTIVE_OPACITY, COLORS, fontFamily, SIZES} from '../assets/Constants';
const Details = ({navigation, route}) => {
  const {ele} = route.params;
  const Actors = [
    {name: "Vincennt\nD'Onofrio", pic: Actor1},
    {name: 'John\nBernthal', pic: Actor2},
    {name: 'Deborah\nAnn Woll', pic: Actor3},
    {name: 'Charlie\nCox', pic: Actor4},
  ];
  return (
    <View style={styles.container}>
      <SharedElement id={`item.${ele.photo}`}>
        <Image source={ele.photo} style={styles.poster_bg} />
      </SharedElement>

      <SafeAreaView style={{flex: 1, justifyContent: 'flex-end'}}>
        <Image
          source={BlackEffect}
          style={{
            height: 561,
            width: 430,
            alignSelf: 'center',
            position: 'absolute',
            bottom: -20,
            // start: 0,
          }}
        />
        {/* Header section */}
        <View
          style={[
            styles.header_section,
            {position: 'absolute', top: SIZES.WIDTH * 0.04 + 43},
          ]}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            activeOpacity={ACTIVE_OPACITY}>
            <Image
              source={BackArrow}
              resizeMode="contain"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* name and fav icon */}
        <View style={styles.header_section}>
          <Text style={styles.movie_name}>{ele.name}</Text>
          <TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
            <Image source={Heart} resizeMode="contain" style={styles.icon} />
          </TouchableOpacity>
        </View>

        {/* Date and duration */}
        <View style={styles.date_section}>
          <View
            style={{
              width: 50,
              height: 18,
              backgroundColor: '#006FD5',
              justifyContent: 'center',
              alignItems: 'center',
              marginEnd: 13,
              borderRadius: 3,
            }}>
            <Text style={{fontFamily: fontFamily, fontSize: 12, color: '#fff'}}>
              13A
            </Text>
          </View>
          <Text style={styles.txt_welcome}>{`${ele.date} - ${ele.time}`}</Text>
        </View>
        {/* Rating */}
        <View style={styles.date_section}>
          <Image
            source={RatingStars}
            style={{
              width: 95,
              height: 15,
              marginEnd: 15,
            }}
          />
          <Text style={styles.txt_welcome}>{`${ele.rating} star rating`}</Text>
        </View>
        {/* Description */}
        <View style={styles.description_section}>
          <Text style={[styles.txt_welcome, {marginBottom: 10}]}>
            Daredevil: Matt Murdock, a blind lawyer by day and vigilante by
            night, tries to protect Hell’s Kitchen with his enhanced abilities
            as Daredevil outside the system while also trying to live a
            (somewhat) normal life as a lawyer working within the bounds of the
            law...
          </Text>
          <Text
            style={{
              fontFamily: fontFamily,
              color: COLORS.blur_color,
            }}>{`Read more >`}</Text>
        </View>
        {/* cast */}
        <View style={styles.header_section}>
          <Text
            style={{
              fontFamily,
              color: COLORS.white,
              fontSize: 18,
            }}>{`Cast`}</Text>
          <Text
            style={{
              fontFamily: fontFamily,
              color: COLORS.blur_color,
            }}>{`see all`}</Text>
        </View>
        <View style={styles.date_section}>
          <View style={styles.actors_wrapper}>
            {Actors.reverse().map((actor, index) => (
              <View
                key={index}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={actor.pic}
                  style={{
                    width: 60,
                    height: 60,
                    marginBottom: 4,
                    borderRadius: 10,
                  }}
                />
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: 14,
                    fontFamily: fontFamily,
                  }}>
                  {actor.name}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.main,
  },
  poster_bg: {
    width: 431,
    height: 676,
    position: 'absolute',
    top: 0,
    start: 0,
    zIndex: -5,
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

  movie_name: {
    fontSize: 24,
    fontFamily: fontFamily,
    color: COLORS.white,
  },
  date_section: {
    width: SIZES.WIDTH * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: SIZES.marginBottom,
  },
  txt_welcome: {
    fontSize: SIZES.h3,
    color: COLORS.white,
    opacity: SIZES.txt_opacity,
  },
  description_section: {
    width: SIZES.WIDTH * 0.9,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: SIZES.marginBottom,
  },
  actors_wrapper: {
    width: SIZES.WIDTH * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
