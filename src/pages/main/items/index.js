import React, { Component } from 'react'
import { View, Input, Button, Image, Text} from '@tarojs/components'
import './index.css'
import touxiang from '../imgs/touxiang.png'
export default class Items extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return (
            <View className='item_body'>
                <View className='touxiang'>
                    <Image className='touxiang_img' src={touxiang}> </Image>
                </View>
                <View className='itme_head'>
                    <View className='item_text'>
                        <View className='item_text_head'>X学生</View>
                        <View className='item_text_head'>X年级</View>
                    </View>
                    <View className='item_xueke'>
                        <View className='item_text_xueke'>
                            <Text className='xueke_font'>学科</Text>    
                        </View>
                        <View className='item_text_xueke'>
                            <Text className='xueke_font'>学科</Text>  
                        </View>
                    </View>
                    <View className='item_footer'>
                        <View className='item_footer_text'>湖北省武汉市xxx</View>
                    </View>
                </View>
            </View>
        )
    }
}