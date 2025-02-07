import { View, FlatList } from 'react-native';
import React from 'react';
import Header from '@/app/components/Home/Header';
import QuickPicks from '@/app/components/Home/QuickPicks';
import Albums from '@/app/components/Home/Albums';
import BCardio from '@/app/components/Home/BCardio';
import Explore from '@/app/components/Home/Explore';

// created the components array to render it using the flatlist
const components = [Header, QuickPicks, Albums, BCardio, Explore];

const Index = () => {
    return (
        // container for background color
        <View className="bg-black h-full">
            {/* flatlist for rendering componenents */}
            <FlatList
                data={components}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item: Component }) => <Component />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50 }}
            />
        </View>
    );
};

export default Index;
