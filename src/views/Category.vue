<template>
	<div class="category alignment">
		<p class="category__title">
			{{ categoriesRu[categories.indexOf(id)] }}
		</p>
		<div
			v-for="item in items"
			:key="item.id"
		>
			<div 
				class="items"
			>
				<div
					class="items__img"
					:style="{ 'background-image': 'url(' + item.pics[0] + ')' }"
				/>
				<div class="alignment">
					<p class="items__name">
						{{ item.name }}
					</p>
					<button
						class="items__btn"
						@click="changeRoute('/')"
					>
						заказать
					</button>
					<p class="items__price">
						{{ item.price }}<span>&#8381;</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			id : this.$route.params.id,
			items : [],
			categories : ['braclets','necklaces','earrings','rings'],
			categoriesRu : ['браслеты','подвески','серьги','кольца']
		};
	},
	mounted() {
		fetch('http://localhost:3000/accessories?type='+this.id)
			.then(res => res.json())
			.then(data => this.items = data)
			.catch(err => console.log(err.message));	
	},
	methods: {
		changeRoute(route) {
    		this.$router.push(route).catch(error => {});
		}
	},
};
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	margin: 0 5%;
	width: 90%;
	justify-content: space-between;
	align-items: center;
}
.items{
	margin: 0 5% 10% 5%;

	&__price {
		margin: 0;
		width: fit-content;
		font-style: italic;
		font-size: 1.2em;
		font-weight: 100;
		color: #666;
		position: relative;

	}

	&__btn {
		grid-row: span 2;
		margin-top: 12.5%;
		height: 2em;
		border-radius: 1em;
		width: 100%;
		border: 2px solid #9D39DA;
		background-color: #9D39DA;
		color: #fff;
	}
	&__img {
		transition: background-color 0.5s;
		background-size: cover;
		background-position-x: center;
		background-position-y: center;
		background-color: #ddd;
		aspect-ratio: 3/4;
		width: 100%;
    
    &:hover {
        transition: background-color .2s;
        background-color: transparent;
        color: #9D39DA;
    }

    &:active {
        transition: background-color .2s;
        background-color: #9D39DA;
        color: #fff;
    }
	}

	&__name {
		margin: 0px;
		font-size: 1.5em;
		width: fit-content;
		text-transform: capitalize;
		position: relative;

		&::after {
			position: absolute;
			bottom: 3px;
			right: 0px;
			height: calc(.45em + 0px);
			width: 60%;
			content: "";
			background-color: #9D39DA;
			display: block;
			opacity: 0.5;
		}
	}
}

.category {
    &__title {
		text-align: center;
		position: relative;
		text-transform: capitalize;
        font-size: 2.5em;
        margin: 0;
		margin-bottom: 3%;
		margin-left: 50%;
        transform: translateX(-50%);
        font-weight: 900;
		grid-column: span 2;
		width: fit-content;

		&::after {
			position: absolute;
			top: .85em;
			left: -10px;
			height: 7px;
			width: 60%;
			content: "";
			background-color: #ebcf5d;
			display: block;
			opacity: 0.5;
		}
    }

}
.alignment {
	display: grid;
	grid-template-columns: 1fr 1fr;
}
</style>