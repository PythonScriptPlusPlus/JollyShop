<template>
	<div>
		<div
			v-for="item in items"
			:key="item.id"
			class="item"
		>
			<p
				:class="!!(item.id % 2) ? 'item__name' : 'item__name--right'"
			>
				{{ item.name }}
			</p>
			<div
				:style="item.img"
				:class="!!(item.id % 2) ? 'item__image' : 'item__image--right'"
			> 
				<p
					:class="!!(item.id % 2) ? 'item__description' : 'item__description--right'"
				>
					Qui pariatur ipsum duis nisi incididunt proident deserunt anim qui incididunt elit.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items : [
				{
					id: 1,
					name: 'Браслеты',
					img : 'background-image: url(/img/photos/braclet.jpg)'
				},
				{
					id: 2,
					name: 'Подвески',
					img : 'background-image: url(/img/photos/necklace.jpg)'
				},
				{
					id: 3,
					name: 'Серьги',
					img : 'background-image: url(/img/photos/earings.jpg)'
				},
				{
					id: 4,
					name: 'Кольца',
					img : 'background-image: url(/img/photos/rings.jpg)'
				},
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.item {
	&__name {
		font-family: Arial, Helvetica, sans-serif;
		grid-column: span 2;
		margin-bottom: 2%;
		margin-left: 35%;
		font-size: 1.5em;
		font-weight: 900;
		position: relative;

		&::after {
			position: absolute;
			top: .85em;
			left: -10px;
			height: 7px;
			width: 30%;
			content: "";
			background-color: #ebcf5d;
			display: block;
			opacity: 0.5;
		}

		&--right {
			font-family: Arial, Helvetica, sans-serif;
			text-align: right;
			grid-column: span 2;
			margin-bottom: 2%;
			margin-right: 35%;
			font-size: 1.5em;
			font-weight: 900;
			position: relative;
			&::after {
				position: absolute;
				top: .85em;
				right: 0;
				height: 7px;
				width: 30%;
				content: "";
				background-color: #ebcf5d;
				display: block;
				opacity: 0.5;
			}
		}
	}

	&__image {
		background-position-x: center;
		background-position-y: top;
		background-size: cover;
		aspect-ratio: 3/5;
		width: 50%;
		margin-left: 50%;
		margin-top: 4%;
		position: relative;

		&--right {
			background-position-x: center;
			background-position-y: top;
			background-size: cover;
			aspect-ratio: 3/5;
			width: 50%;
			margin-top: 4%;
			position: relative;
		}
	}

	&__description {
		transition: color 0.5s;
		margin: 0;
		position: absolute;
		left: -45vw;
		top: 10%;
		width: 52vw;
		font-size: 1.5em;

		&--right {
			transition: color 0.5s;
			margin: 0;
			position: absolute;
			right: -45vw;
			top: 10%;
			width: 52vw;
			font-size: 1.5em;

			&::after {
				position: absolute;
				left: 0px;
				top: -10px;
				content: "";
				width: 15%;
				height: calc(100% + 6px);
				display: block;
				background-color: #9D39DA;
				opacity: 0.4;
			}
		}

		&::after {
			position: absolute;
			right: 0px;
			top: -10px;
			content: "";
			width: 15%;
			height: calc(100% + 6px);
			display: block;
			background-color: #9D39DA;
			opacity: 0.4;
		}
	}
}
</style>