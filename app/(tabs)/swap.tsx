import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function SwapScreen() {
    const [fromAmount, setFromAmount] = useState("100");
    const [toAmount, setToAmount] = useState("0.28014");
    const [fromToken, setFromToken] = useState("USDC");
    const [toToken, setToToken] = useState("SOL");

    const swapTokens = () => {
        setFromToken(toToken);
        setToToken(fromToken);
        setFromAmount(toAmount);
        setToAmount(fromAmount);
    };

    const handleSwap = () => {
        if (!fromAmount) return Alert.alert("Enter an amount");
        Alert.alert(
            "Swap",
            `Swapping ${fromAmount} ${fromToken} to ${toAmount} ${toToken}`,
        );
    };

    return (
        <ScrollView style={s.scroll} contentContainerStyle={s.scrollContent}>
            <Text style={s.title}>SwapCoins</Text>

            <View style={s.content}>
                <View style={s.card}>
                    <View style={s.header}>
                        <TouchableOpacity style={s.btn}>
                            <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
                                {fromToken}
                            </Text>
                            <Ionicons
                                name="chevron-down"
                                size={18}
                                style={{ color: "white" }}
                            />
                        </TouchableOpacity>
                        <TextInput
                            value={fromAmount}
                            style={s.headerText}
                            onChangeText={setFromAmount}
                            keyboardType="numeric"
                            placeholder="0"
                            placeholderTextColor="#666"
                        />
                    </View>
                    <View style={s.footer}>
                        <Text style={s.footerText}>
                            Balance: 0.0661 ETH
                        </Text>
                        <Text style={s.footerText}>
                            $499.749
                        </Text>
                    </View>
                </View>

                <View style={s.swapArrow}>
                    <TouchableOpacity style={s.arrowBtn} onPress={swapTokens}>
                        <Ionicons
                            name="swap-vertical"
                            style={{ color: "white" }}
                            size={24}
                        />
                    </TouchableOpacity>
                </View>

                <View style={s.card}>
                    <View style={s.header}>
                        <TouchableOpacity style={s.btn}>
                            <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
                                {toToken}
                            </Text>
                            <Ionicons
                                name="chevron-down"
                                size={18}
                                style={{ color: "white" }}
                            />
                        </TouchableOpacity>
                        <TextInput
                            value={toAmount}
                            style={s.headerText}
                            onChangeText={setFromAmount}
                            keyboardType="numeric"
                            placeholder="0"
                            placeholderTextColor="#666"
                        />
                    </View>
                    <View style={s.footer}>
                        <Text style={s.footerText}>
                            Balance: 0.0661 ETH
                        </Text>
                        <Text style={s.footerText}>
                            $499.749
                        </Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacity style={s.swapBtn} onPress={handleSwap}>
                        <Text style={s.swapText}>
                            SWAP
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


        </ScrollView>
    )
};

const s = StyleSheet.create({
    scroll: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 16,
        backgroundColor: "black"
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: "center",
    },
    title: {
        color: "#FFFFFF",
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 20,
        // letterSpacing: -0.5,
    },

    content: {

    },
    card: {
        backgroundColor: "#181818",
        borderRadius: 20,
        padding: 16,
        borderWidth: 1,
        borderColor: "#1E1E1E",
        marginBottom: 6
    },
    header: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    btn: {
        flexDirection: "row",
        // flex: 1,
        alignItems: "center",
        backgroundColor: "black",
        gap: 5,
        // paddingHorizontal: 15,
        paddingRight: 15,
        paddingLeft: 10,
        paddingVertical: 10,
        borderRadius: 20,

    },
    headerText: {
        color: "white",
        fontSize: 40,
        fontWeight: "600",
        textAlign: "right",
        flex: 1,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        // marginTop: 12
    },
    footerText: {
        color: "#A9AAB2",
        fontSize: 14,
    },

    swapArrow: {
        alignItems: "center",
        marginVertical: -22,   // ← pulls it up, overlapping both cards
        zIndex: 10,
    },
    arrowBtn: {
        backgroundColor: "#0D0D12",
        width: 44,
        height: 44,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 3,
        borderColor: "#0D0D12",
    },

    swapBtn: {
        backgroundColor: "#14F195",
        alignItems: "center",
        borderRadius: 20,
        padding: 20,
        marginTop: 20

    },
    swapText: {
        fontSize: 20,
        fontWeight: "600",
        color: "black"
    }

});