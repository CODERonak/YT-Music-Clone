import { View, Text } from 'react-native'
import React from 'react'
import ExploreComp from '../components/Home/ExploreComp';

const Explore = () => {
    return (
        // background color
        <View className='bg-black flex-1'>
            {/* Main container */}
            <View>
            <ExploreComp />
            </View>
        </View>
    )
}

export default Explore