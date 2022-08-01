<template>
	<view class="content">
		<div class="card">	
			<img src="../../static/62af3ac40985111a04920282.jpg" alt="">
			<p class="pusb">70人学习.线上好课</p>
			<p class="price">￥11999</p>
			<u-icon name="chat" color="#ff0000" size="28"></u-icon>
		</div>
		<div class="card">
			<img src="../../static/62af3ae10902617e04920282.jpg" alt="">
			<p class="pusb">70人学习.线上好课</p>
			<p class="price">￥11999</p>
			<u-icon name="chat" color="#ff0000" size="28"></u-icon>
		</div>
		<div class="card">
			<img src="../../static/62af3afe09dd77b604920282.jpg" alt="">
			<p class="pusb">70人学习.线上好课</p>
			<p class="price">￥11999</p>
			<u-icon name="chat" color="#ff0000" size="28"></u-icon>
		</div>
		<div class="card">
			<img src="../../static/62af3b5a09cddc4704920282.png" alt="">
			<p class="pusb">70人学习.线上好课</p>
			<p class="price">￥11999</p>
			<u-icon name="chat" color="#ff0000" size="28"></u-icon>
		</div>
		<div class="card">
			<img src="../../static/62c64f8208d00dd504920282.jpg" alt="">
			<p class="pusb">70人学习.线上好课</p>
			<p class="price">￥11999</p>
			<u-icon name="chat" color="#ff0000" size="28"></u-icon>
		</div>
	</view>
</template>

<script>
	export default {
		name:"Home",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.content{
		padding: 20px;
		display: flex;
		flex-wrap: wrap;
	}
	.card{
		margin: 10px;
		background: #ffffff;
		border-radius: 5px;
		width: 160px;
		height: 180px;
		overflow: hidden;
		img{
			
			width: 160px;
			height: 100px;
		}
	}
</style>