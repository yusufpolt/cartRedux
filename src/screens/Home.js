import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { cartSelector } from '../AppData/cart/selectors'



const Home = () => {
    const cartPrice = useSelector(cartSelector)
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home
