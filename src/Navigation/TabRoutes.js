import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import {Image, StyleSheet, View, Text} from 'react-native';
import {
  Home,
  Search,
  Post,
  Notification,
  Profile,
  ChatUsersList,
  Rewards,
  Contact,
} from '../Screens';
import {
  moderateScale,
  width,
  moderateScaleVertical,
  height,
} from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import strings from '../constants/lang';
import navigationStrings from '../constants/navigationStrings';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

const BottomTab = createBottomTabNavigator();

const TabRoutes = props => {
  return (
    <BottomTab.Navigator
      tabBar={tabsProps => (
        <>
          <BottomTabBar {...tabsProps} />
        </>
      )}
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          justifyContent: 'space-evenly',
          height: moderateScale(76),
          // keyboardHidesTabBar: true,
    
        },
      }}
      tabBarOptions={{
        style: styles.customBottomtabsStyle,
        activeTintColor: colors.blackColor,
        inactiveTintColor: 'gray',
        showLabel: false,
        keyboardHidesTabBar: true,
      }}>
      <BottomTab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.activeView}>
                <Image source={imagePath.homeActive} />
                <View style={styles.tabactivedot} />
              </View>
            ) : (
              <View style={styles.activeView}>
                <Image source={imagePath.homeInActive} />
                <View
                  style={{
                    ...styles.tabactivedot,
                    backgroundColor: colors.white,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.CHATUSERSLIST}
        component={ChatUsersList}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.activeView}>
                <Image source={imagePath.chatActive} />
                <View style={styles.tabactivedot} />
              </View>
            ) : (
              <View style={styles.activeView}>
                <Image source={imagePath.chatInActive} />
                <View
                  style={{
                    ...styles.tabactivedot,
                    backgroundColor: colors.white,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.REWARDS}
        component={Rewards}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.activeView}>
                <Image source={imagePath.rewardsActive} />
                <View style={styles.tabactivedot} />
              </View>
            ) : (
              <View style={styles.activeView}>
                <Image source={imagePath.rewardsInActive} />
                <View
                  style={{
                    ...styles.tabactivedot,
                    backgroundColor: colors.white,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.CONTACTS}
        component={Contact}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.activeView}>
                <Image source={imagePath.contactsActive} />
                <View style={styles.tabactivedot} />
              </View>
            ) : (
              <View style={styles.activeView}>
                <Image source={imagePath.contactsInActive} />
                <View
                  style={{
                    ...styles.tabactivedot,
                    backgroundColor: colors.white,
                  }}
                />
              </View>
            );
          },
        }}
      />
      {/* <BottomTab.Screen
                name={navigationStrings.PROFILE}
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ?
                                <Image source={imagePath.fifthActiveIcon} />
                                : <Image source={imagePath.fifthInActiveIcon} />
                        );
                    },
                }}
            /> */}
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  customBottomtabsStyle: {
    // height: moderateScale(60)
  },
  tabactivedot: {
    height: moderateScale(6),
    width: moderateScale(6),
    borderRadius: 20,
    backgroundColor: colors.Blue,
    marginTop: moderateScale(9),
  },
  activeView: {
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default TabRoutes;
