import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/components/Home/Header'

// Home screen
const index = () => {
    return (
        // background color
        <View className='bg-black flex-1'>
            {/* Main container */}
            <View>
<Header/>
            </View>
        </View>
    )
}

export default index