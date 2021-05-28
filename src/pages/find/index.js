import React, { Component } from 'react'
import { View, Input, Button, Image, Text} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'
import cup from './img/cup.png'
import icon from './img/icon.png'
import p1 from './img/1.png'
import p2 from './img/2.png'
import p3 from './img/3.png'
import j1 from './img/4.png'
import j2 from './img/5.png'
import j3 from './img/6.png'
import k from './img/shiping.png'
import h1 from './img/h1.png'
import h2 from './img/h2.png'
import h3 from './img/h3.png'
import h4 from './img/h4.png'
import l1 from './img/l1.png'
import l2 from './img/l2.png'
import l3 from './img/l3.png'
import l4 from './img/l4.png'

export default class find extends Component{
    constructor(porps){
        super(porps)
        this.state={
            i:0
        }
    }
    toMain=()=>{
        Taro.redirectTo({url:'/pages/main/index'})
    }

    render(){
        return (
            <View className='find_body'>
                <View className='paihangbang'>
                    <View className='paihangbang_head'>
                        <View className='paihangbang_head_center'>
                            <View className='paihangbang_text'>排行榜</View>
                            <Image className src={cup} className='paihangbang_img'></Image>
                        </View>
                        <View className='jingyan'>经验</View>
                        <Image className='jingyan_img' src={icon}></Image>
                    </View>
                    <View className='paihangbang_body'>
                        <Image className='p1' src={p1}></Image>
                        <Image className='p2' src={p2}></Image>
                        <Image className='p3' src={p3}></Image>
                        <Image className='j1' src={j2}></Image>
                        <Image className='j2' src={j1}></Image>
                        <Image className='j3' src={j3}></Image>
                    </View>
                </View>

                <View className='shiping'>
                    <Image className='shiping_img' src={k}></Image>
                </View>
                <View className='find_text'>自习室板块(敬请期待)</View>
                <View className='find_text'>志愿汇(敬请期待)</View>
                <View className='find_text'>学习计划师(敬请期待)</View>

                <View className='body-footer'>
                    <View className='footer-div'>
                        <Image className='footer_img' src={h2} onClick={this.toMain}></Image>
                        <View className='footer_text'>首页</View>
                    </View>
                    <View className='footer-div'>
                        <Image className='footer_img' src={l1}></Image>
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