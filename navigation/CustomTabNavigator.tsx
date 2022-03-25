import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DiscoverScreen } from "../screens/Discover";
import { Ionicons } from "@expo/vector-icons";
import { DefaultColor } from "../constants/Colors";
import { HomeParamList } from "../types";

const Tab = createBottomTabNavigator<HomeParamList>();

export default function CustomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Play"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 100,
                    justifyContent: 'center',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    elevation: 0,
                    position: 'absolute',
                    backgroundColor: DefaultColor.main,
                    borderTopWidth: 0,
                    borderTopColor: "transparent",
                },
                tabBarActiveTintColor: DefaultColor.secondary,
                tabBarInactiveTintColor: DefaultColor.white,
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={DiscoverScreen}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
                }}
            />
            <Tab.Screen
                name="Discover"
                component={DiscoverScreen}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
                }}
            />
            <Tab.Screen
                name="Play"
                component={DiscoverScreen}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="play-circle-outline" color={color} size={60} />,
                }}
            />
            <Tab.Screen
                name="Chat"
                component={DiscoverScreen}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="chatbox-ellipses" color={color} />,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={DiscoverScreen}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
                }}
            />
        </Tab.Navigator>
    );
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof Ionicons>['name'];
    color: string;
    size?: number;
}) {
    return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
}
