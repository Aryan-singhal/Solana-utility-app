import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Orders = () => {
    const router = useRouter();
    return (
        <SafeAreaView>
            <Text>Orders</Text>

            <TouchableOpacity style={{ backgroundColor: "black", width: 50, paddingVertical: 15, paddingHorizontal: 10, margin: 10, borderRadius: 20 }} onPress={() => router.back()}>
                <Text style={{ color: "white" }}>Go Back</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Orders;
