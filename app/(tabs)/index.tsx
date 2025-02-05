import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/app/components/Home/Header'
import QuickPicks from '@/app/components/Home/QuickPicks'

// Home screen
const index = () => {
    return (
        // background color
        <View className='bg-black h-full'>
            {/* Main container */}
                <Header />
                <QuickPicks />
        </View>
    )
}

export default index