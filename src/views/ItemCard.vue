<template>
	<div>
		<div
			v-if="!!items.length"
			class="item"
		>
			<div
				class="item__image--main"
				:style="{ 'background-image': 'url(' + items[0].pics[0] + ')' }"
			/>
			<div class="item__carousel">
				<div
					v-for="pic in items[0].pics"
					:key="pic[10]"
					class="item__wrapper"
				>
					<div
						class="item__image"
						:style="{ 'background-image': 'url(' + pic + ')' }"
					/>
				</div>
			</div>
			
			<div class="item__head">
				<p class="item__name">
					{{ items[0].name }}
				</p>
				<p class="item__price">
					{{ items[0].price }}&#8381;
				</p>
			</div>
			<p class="item__description">
				{{ items[0].materials }}
			</p>
			<a :href="items[0].url">
				<button class="item__buy">
					заказать
				</button>
			</a>
		</div>
		<div v-else>
			lol no category
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			id : this.$route.params.id,
			itemId : this.$route.params.itemId,
			title : 'item card',
			items : [],
		};
	},
	mounted() {
		fetch('http://localhost:3000/accessories?type='+ this.id + '&id=' + this.itemId)
			.then(res => res.json())
			.then(data => this.items = data)
			.catch(err => console.log(err.message));
	}
};    
</script>

<style lang="scss" scoped>
.link {
	&:link {text-decoration: none;}
	&:visited {text-decoration: none;}
	&:active {text-decoration: none;}

}
.item {
	margin: 0 15%;
	&__carousel {
		border-bottom: 1px solid #ddd;
		border-top: 1px solid #ddd;
		// background-color: #9D39DA;
		display: flex;
		justify-content: center;
		margin: 0;
		margin-left: -10px;
		padding: 10px;
		width: 100%;
		height: 50px;
	}

	&__wrapper {
		margin-right: 5%;
		
		&:nth-last-child(3n-2) {
			margin: 0;
		}
	}

	&__name {
		font-size: 2em;
		text-transform: capitalize;
		margin: 0;
		font-weight: bolder;
	}

	&__description {
		margin: 0;
	}

	&__price {
		margin: 0;
		margin-left: 2%;
		font-size: 1.5em;
		font-style: italic;
		color: #ddd;
	}

    &__image {
		aspect-ratio: 1/1;
		height: 100%;
		background-size: cover;
		background-position-y: center;
		background-position-x: center;
		border-radius: 10%;
		box-shadow: 0 0 0 2px white, 0 0 0 4px #ddd;

		&--main{
			margin: 10% 0 2%;
			aspect-ratio: 4/5;
			width: 100%;
			background-size: cover;
		}
	}

	&__buy {
		margin-top: 1em;
		height: 2.5em;
		border-radius: 1.25em;
		padding: 0 1.25em;
		border: 2px solid #9D39DA;
		background-color: #9D39DA;
		color: #fff;
	}

	&__head {
		display: flex;
		justify-content: flex-start;
		align-items: end;
	}
}
</style>
