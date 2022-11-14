<template>
	<div class="header">
		<div class="header__top">
			<div class="header__icon" />
			<p class="header__title">
				Jolly Shop
			</p>
		</div>
		<div class="header__bottom">
			<div
				v-for="accessory in accessories"
				:key="accessory.name"
				class="accessories"
			>
				<div
					class="accessories__img" 
					:style="accessory.icon "
				/>
				<p class="accessories__name">
					{{ accessory.name }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data() {
		return {
			accessories : [
				{
					name : 'браслеты',
					icon : 'background-image: url(/img/icons/accessories/bracelet.png)'
				},
				{
					name : 'подвески',
					icon : 'background-image: url(/img/icons/accessories/necklace.png)'
				},
				{
					name : 'серьги',
					icon : 'background-image: url(/img/icons/accessories/earings.png)'
				},
				{
					name : 'кольца',
					icon : 'background-image: url(/img/icons/accessories/ring.png)'
				}
			]
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.accessories {
	border-right: 1px solid #ddd;
	margin: 5% 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	&:nth-last-child(4n-3) {
		border: none;
	}

	&__img {
		aspect-ratio: 1/1;
		width: 50%;

		background-size: cover;
	}
	&__name {
		margin: 0;
		color: #888
	}
}

.header {
	&__bottom {
		display: grid;
		grid-template-columns: repeat(4,1fr);
		margin: 0 5%;
		text-align: center;border-bottom: 1px solid #ddd;
		
	}

	&__top {
		margin: 0 5%;
		height: calc(5vh + (5vh * 1.2));
		position: relative;
		border-bottom: 1px solid #ddd;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&__icon {
		height: 90%;
		aspect-ratio: 1/1;
		background-image: url("/img/icons/icon.jpeg");
		background-size: cover;
	}

	&__title {
		font-size: 2em;
		margin: calc(5vh * 0.60) 0;
	}
}
</style>
