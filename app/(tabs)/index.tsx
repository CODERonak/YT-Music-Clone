import { View, ScrollView } from 'react-native';
import React from 'react';
import Header from '@/app/components/Home/Header';
import QuickPicks from '@/app/components/Home/QuickPicks';
import Albums from '@/app/components/Home/Albums';
import BCardio from '@/app/components/BCardio';

const Index = () => {
    return (
        <View className="bg-black h-full">
            <ScrollView 
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={{ paddingBottom: 50 }}
            >
                <Header />
                <QuickPicks />
                <Albums />
                <BCardio />
            </ScrollView>
        </View>
    );
};

export default Index;
