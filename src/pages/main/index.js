import React, { Component } from 'react'
import { View, Input, Button, Image, Text} from '@tarojs/components'
import './index.css'
// import Banner from './banner/Banner'
import h1 from './imgs/h1.png'
import h2 from './imgs/h2.png'
import h3 from './imgs/h3.png'
import h4 from './imgs/h4.png'
import l1 from './imgs/l1.png'
import l2 from './imgs/l2.png'
import l3 from './imgs/l3.png'
import l4 from './imgs/l4.png'
import b1 from './imgs/b1.png'
import b2 from './imgs/b2.png'
import b3 from './imgs/b3.png'
import b4 from './imgs/b4.png'
import b5 from './imgs/b5.png'
import position from './imgs/position.png'
import xiala from './imgs/xiala.png'
import Items from './items/index'
// import { navigateTo } from '@tarojs/taro'
import Taro from '@tarojs/taro'

export default class main extends Component{
    constructor(props){
        super(props)
        this.state={
            i:0,
        }
    }
    changeBanner=()=>{
        let i=this.state.i;
        if(i==4){
            i=-1
        }
        this.setState({i:i+1})
    }
    toFind= ()=>{
        Taro.navigateTo({url:'/pages/find/index'})
        console.log(123)
    }

    render(){
        let src_h=[h1,h2,h3,h4];
        let src_l=[l1,l2,l3,l4];
        let src=[b1,b2,b3,b4,b5];
        return (
            <View className='body'>
                <View className='body-head'>
                <View className='layout'>
                    <View className='grade'>年级
                        <Image className='xiala' src={xiala}></Image>
                    </View>
                    <View className='ident'>身份
                        <Image className='xiala' src={xiala}></Image>
                    </View>
                    <View className='posion'>
                        <Image className='position_img' src={position}></Image>
                        定位
                    </View>
                </View>
                <View className='banner_main'>
                    <Image className='baner_img' src={src[this.state.i]} onTouchEnd={this.changeBanner}></Image>
                    
                </View>
                <View className='search'>
                    <Input className='search_input' placeholder='科目/学科/地点/老师'></Input>
                    {/* <Button className='button_search'>搜索</Button>
                     */}
                </View>

                <View className='shaixuan_paixu'>
                    <View className='shaixuan'>筛选</View>
                    <View className='paixu'>排序</View>
                </View>
                </View>
                <View className='h_student'>
                    <View className='h'>
                        <View className='h_text'>
                            学员库
                        </View>
                    </View>
                </View>

                <Items></Items>
                <Items></Items>
                <Items></Items>  
                <View className='body-footer'>
                    <View className='footer-div'>
                        <Image className='footer_img' src={l2}></Image>
                        <View className='footer_text'>首页</View>
                    </View>
                    <View className='footer-div'>
                        <Image className='footer_img' src={h1} onClick={this.toFind}></Image>
                        <View className='footer_text'>发现</View>
                    </View>
                    <View className='footer-div'>
                        <Image className='footer_img' src={h4}></Image>
                        <View className='footer_text'>消息</View>
                    </View>
                    <View className='footer-div'>
                        <Image className='footer_img' src={h3}></Image>
                        <View className='footer_text'>我的</View>
                    </View>
                </View> 
            </View>

        )
    }
}