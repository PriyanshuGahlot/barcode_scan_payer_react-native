import { TouchableWithoutFeedback, View ,Text, TouchableOpacity} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "@/components/Home/Home";
import Cart from "@/components/Cart/Cart";
import History from "@/components/History/History";
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <View className="flex-1 pt-10">
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName: "home" | "cart" | "time" | undefined;

            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Cart') iconName = 'cart';
            else if (route.name === 'history') iconName = 'time';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="history" component={History} />
      </Tab.Navigator>

    </View>
  );
}
