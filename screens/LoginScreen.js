import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const { signIn, loading } = useAuth();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="flex-1">
      <ImageBackground
        resizeMode="cover"
        className="flex-1"
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEv0J0y9g5WVF8prX14MnbiSdQU8mQC9vnFw&usqp=CAU",
        }}
      >
        <TouchableOpacity
          style={{ marginHorizontal: "25%" }}
          className="absolute bottom-40 w-52 bg-white p-4 rounded-2xl"
          onPress={signIn}
        >
          <Text className="text-center font-semibold">
            Sign in & get swiping
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
