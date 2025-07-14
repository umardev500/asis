import { useLogin } from "@/src/hooks";
import clsx from "clsx";
import { useImperativeHandle, useRef, useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import { SafeAreaView } from "react-native-safe-area-context";

type InputRef = {
  getValue: () => string;
};

type InputProps = {
  label?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  ref?: React.Ref<InputRef>;
};

function Input(props: InputProps) {
  const [focused, setFocused] = useState(false);
  const { label, placeholder, secureTextEntry, ref } = props;
  const inputRef = useRef<TextInput>(null);

  const [value, setValue] = useState("");

  useImperativeHandle(ref, () => {
    return {
      getValue: () => value,
    };
  });

  const onChangeText = (text: string) => {
    setValue(text);
  };

  return (
    <View className="gap-1.5">
      <Text className="text-sm text-gray-800">{label}</Text>
      <TextInput
        ref={inputRef}
        onChangeText={onChangeText}
        className={clsx("px-4 h-11 rounded-xl border border-gray-300", {
          "border-primary": focused,
        })}
        secureTextEntry={secureTextEntry}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
      />
    </View>
  );
}

export default function Login() {
  const { mutate: login, isPending } = useLogin();

  const usernameRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);

  const handleLogin = () => {
    const username = usernameRef.current?.getValue();
    const password = passwordRef.current?.getValue();

    if (!username || !password) return;
    login({ username, password });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={"padding"}
        keyboardVerticalOffset={100}
        style={{ flex: 1 }}
      >
        <View className="px-4 flex-1 items-center justify-center">
          <Text className="text-2xl font-medium text-gray-800">Login</Text>
          <Text className="text-sm text-gray-500 mt-2">
            Masuk untuk melanjutkan
          </Text>

          <View className="mt-10 w-full gap-2">
            <Input
              ref={usernameRef}
              label="Username"
              placeholder="Username or Email"
            />
            <Input
              ref={passwordRef}
              label="Password"
              placeholder="Password"
              secureTextEntry
            />

            <TouchableOpacity
              onPress={handleLogin}
              activeOpacity={0.7}
              className="bg-primary justify-center items-center h-11 rounded-xl mt-4"
            >
              {isPending ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text className="text-sm font-semibold text-white">
                  Continue
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
