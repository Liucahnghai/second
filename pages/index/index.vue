<template>
	<view class="content">
		<!-- h5 -->
		<view class="nav_h5" v-if="h5">
			<u--image :showLoading="true" :src="src" width="120px" height="35px"></u--image>
		</view>
		<!-- 小程序 -->
		<view class="wx" v-else>
		   <!-- 解决元素占用手机上方的空间的 -->
		    <view class="block">
			</view>
		    <view class="nav">
				<u--image :showLoading="true" :src="src" width="120px" height="35px"></u--image>
		    </view>
		</view>
		
		<view class="tab">
			<u-tabs :list="list1" @click="click" class="w" :scrollable="false"></u-tabs>
		</view>
		<view class="view">
			<Home v-if="index==0"></Home>
			<News v-if="index==1"></News>
			<Count v-if="index==2"></Count>
			<Price v-if="index==3"></Price>
		</view>
		<!-- <view class="component">
			<cpmpponent :is="iscomponent"></cpmpponent>
		</view> -->
	</view>
</template>

<script>
	import Home from "@/components/Home/Home.vue"
	import News from "@/components/News/News.vue"
	import Price from "@/components/Price/Price.vue"
	import Count from "@/components/Count/Count.vue"
	import Shizhan from "@/components/Shizhan/Shizhan.vue"
	import Tixi from "@/components/Tixi/Tixi.vue"
	import Muke from "@/components/Muke/Muke.vue"
	export default {
		data() {
			return {
				h5:true,
				title: 'Hello',
				marginheight:"100",
				src:"/static/logo2.png",
				list1: [
					{
						name: '首页',
				    }, 
					{
				        name: '专栏',
				    }, 
					{
				        name: '手记'
				    }, 
					{
				        name: '免费'
				    },
					{
					    name: '实战'
					},
					{
					    name: '体系'
					},
					{
					    name: '慕课'
					},
				],
				arrs:["Home","News","Count","Price","Shizhan","Tixi","Muke"],
				iscomponent:"Home",
				home:"ture",
				news:"false",
				count:"false",
				price:"false",
				Shizhan:"false",
				Tixi:"false",
				Muke:"false",
				index:0
			}
		},
		components:{
			Home,
			News,
			Count,
			Price,
			Shizhan,
			Tixi,
			Muke
		},
		onLoad() {
			//#ifdef H5
			this.h5 = true
			//#endif
			//#ifndef H5
			this.h5 = false
			//#endif
		},
		methods: {
			click(item){
				console.log(item);
				this.index = item.index
			}
		}
	}
</script>

<style lang="scss">
	.content{
		background: #ededed;
		height: 100vh;
		.nav_h5{
			padding: 2% 0 0 20rpx;
			display: flex;
			align-items: center;
			.title_h5{
				margin: 0 0 0 20rpx;
				font-weight: 600;
			}
		}
		.wx{
			.block{
				height: var(--status-bar-height);
				width: 100%;
			}
			.nav{
				padding: 12% 0 0 20rpx; 
				display: flex;
				align-items: center;
				.title{
					margin: 0 0 0 20rpx;
					font-weight: 700;
				}
			}
		}
	}
	
</style>
