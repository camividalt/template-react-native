import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardNavigator from './DashboardNavigator';
import { ICONS } from '../../utilities/Assets';

const Tab = createBottomTabNavigator();

const MainTabNavigator = ({}) => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarButton: () => null,
                tabBarVisible: false,
                tabBarStyle: { height: 1, display: 'none' },
                tabBarActiveTintColor: '#999',
                //tabBarInactiveTintColor: '#000',
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? ICONS.MAINTAB.home : ICONS.MAINTAB.home;
                             break;
                        case 'Ofertas':
                            iconName = focused ? ICONS.MAINTAB.offers : ICONS.MAINTAB.offers;
                             break;
                        case 'Ayuda':
                            iconName = focused ? ICONS.MAINTAB.help : ICONS.MAINTAB.help;
                             break;
                        case 'Más':
                            iconName = focused ? ICONS.MAINTAB.config : ICONS.MAINTAB.config;
                             break; 
                        default:
                            break;
                    }
                    return renderTabBarIcon(focused, iconName);
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={DashboardNavigator}
            /> 
            <Tab.Screen
                name="Ofertas"
                component={DashboardNavigator}
            />  
            <Tab.Screen
                name="Ayuda"
                component={DashboardNavigator}
                />  
            <Tab.Screen
                name="Más"
                component={DashboardNavigator}
                />  
        </Tab.Navigator>
    );
};

const renderTabBarIcon = (focused, imageSelected) => {
    const image = (
        <>
            {focused && (
                <Image 
                    style={{ width: '100%', resizeMode: 'contain' }}
                />
            )}
            <Image
                style={{
                    height: 24,
                    width: 40,
                    resizeMode: 'contain',
                    marginTop: !focused ? 9 : 0,
                }}
                source={imageSelected} 
            />
        </>
    );
    return image;
};

export default MainTabNavigator;
