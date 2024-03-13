import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={tw`bg-white w-full h-full`}>
      <StatusBar style="light" />
      <Image
        style={tw`w-full h-full absolute`}
        source={require("../assets/images/background.png")}
      />
      <View style={tw`flex-row justify-around w-full absolute`}>
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={tw`w-[90px] h-[225px]`}
          source={require("../assets/images/light.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          style={tw`w-[65px] h-[160px]`}
          source={require("../assets/images/light.png")}
        />
      </View>

      {/* Judul dan form */}
      <View style={tw`h-full w-full flex justify-around pt-40 pb-10`}>
        {/* Judul */}
        <View style={tw`flex items-center`}>
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            style={tw`text-white tracking-wider py-3 w-full text-center font-bold text-5xl`}
          >
            {" "}
            Masuk
          </Animated.Text>
        </View>

        {/* Form */}
        <View style={tw`flex items-center mx-4`}>
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            style={tw`bg-black/5 p-3 rounded-2xl w-full mb-4`}
          >
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            style={tw`bg-black/5 p-3 rounded-2xl w-full mb-3`}
          >
            <TextInput
              placeholder="Kata sandi"
              placeholderTextColor={"gray"}
              secureTextEntry={true}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            style={tw`w-full`}
          >
            <TouchableOpacity
              style={tw`w-full bg-sky-400 p-3 rounded-2xl mb-3`}
            >
              <Text style={tw`text-white text-center font-bold text-lg`}>
                Daftar
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            style={tw`flex-row justify-center`}
          >
            <Text>Belum punya akun? </Text>
            <TouchableOpacity onPress={() => navigation.push("SignUp")}>
              <Text style={tw`text-sky-600 font-bold`}>Registrasi</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
