<template>
	<view class="content">
		<!-- h5 -->
		<view class="nav_h5" v-if="h5">
			<u-avatar :src="src"></u-avatar>
			<span class="title_h5">惊喜百货</span>
		</view>
		<!-- 小程序 -->
		<view class="wx" v-else>
		   <!-- 解决元素占用手机上方的空间的 -->
		    <view class="block">
			</view>
		    <view class="nav">
				<u-avatar :src="src"></u-avatar>
				<text class="title">惊喜百货</text>
		    </view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				src:"http://gankai.gitee.io/vue-jd-h5/img/demo6.22f1bed1.png"
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