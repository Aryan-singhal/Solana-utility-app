import "../src/polyfills";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function RootLayout() {
    return (
        <SafeAreaProvider style={s.safe}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="token/[mint]" />
                <Stack.Screen name="orders" />
                <Stack.Screen name="watchlist" />
                <Stack.Screen
                    name="send"
                    options={{
                        presentation: "modal",  // slides up from bottom like a sheet
                    }}
                />
            </Stack>
        </SafeAreaProvider>
    );
}

const s = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#0D0D12",
    },
})