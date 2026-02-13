import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { WalletScan } from "./src/screens/WalletScanApp";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { SwapScreen } from "./src/screens/SwapScreen";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";


export default function App() {
  const [active, setActive] = useState<"wallet" | "swap">("wallet");

  // const SwitchTabToWallet = (addr: string) => {
  //   setActive("wallet");
  //   return;
  // }

  // const SwitchTabToSwap = (addr: string) => {
  //   setActive("swap");
  //   return;
  // }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.safe}>

        {active == "wallet" ? <WalletScan /> : <SwapScreen />}

        {/* bottom bar */}
        <View style={s.tabBar}>
          <TouchableOpacity onPress={() => { setActive("wallet") }} style={s.tabBtn}>
            <Ionicons
              name={active === "wallet" ? "wallet" : "wallet-outline"}
              size={24}
              color={active === "wallet" ? "#14F195" : "#6B7280"}
            />
            <Text style={[s.tabLabel, active === "wallet" && s.tabActive]}>Wallet</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { setActive("swap") }} style={s.tabBtn}>
            <Ionicons
              name={active === "swap" ? "swap-vertical" : "swap-vertical-outline"}
              size={24}
              color={active === "swap" ? "#14F195" : "#6B7280"}
            />
            <Text style={[s.tabLabel, active === "swap" && s.tabActive]}>Swap</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  )
}



// ============================================
// Styles
// 💡 Web: CSS file with class names
//    RN: StyleSheet.create() with camelCase, no units
//    Every View is flexbox (direction: column) by default!
// ============================================

const s = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0D0D12",
  },

  tabBar: {
    flexDirection: "row",
    backgroundColor: "#16161D",
    borderTopWidth: 1,
    borderTopColor: "#2A2A35",
    paddingBottom: 8,
    paddingTop: 12,
  },

  tabBtn: {
    flex: 1,
    alignItems: "center",
    gap: 4
  },
  tabLabel: {
    color: "#6B7280",
    fontSize: 12,
  },
  tabActive: {
    color: "#14F195",
  },
})