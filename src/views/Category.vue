<template>
	<div class="category alignment">
		<p class="category__title">
			{{ id }}
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
					:style="{ 'background-image': 'url(' + item.urls[0] + ')' }"
				/>
				<p class="items__name">
					{{ item.name }}
				</p>
				<div class="wrapper">
					<p class="items__price">
						300<span>&#8381;</span>
					</p>
					<button
						class="items__btn"
						@click="changeRoute('/')"
					>
						заказать
					</button>
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
	margin-bottom: 5%;

	&__price {
		margin: 0;
		font-style: italic;
		font-size: 1.2em;
		font-weight: 100;
		color: #888;
		position: relative;

		&::after {
			position: absolute;
			bottom: 0px;
			left: 0;
			height: .4em;
			width: 80%;
			content: "";
			background-color: #ebcf5d;
			display: block;
			opacity: 0.5;
		}
	}

	&__btn {
		height: 2em;
		border-radius: 1em;
		width: 55%;
		border: 2px solid #9D39DA;
		background-color: #9D39DA;
		color: #fff;
	}
	&__img {
		transition: background-color 0.5s;
		background-size: cover;
		background-position-x: center;
		background-position-y: center;
		background-color: #9D39DA;
		aspect-ratio: 3/4;
		width: 90%;
		margin: 0 5%;
    
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
		margin:0px 5%;
		font-size: 1.5em;
		width: fit-content;
		text-transform: capitalize;
		position: relative;

		&::after {
			position: absolute;
			bottom: 0px;
			right: 0;
			height: .45em;
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