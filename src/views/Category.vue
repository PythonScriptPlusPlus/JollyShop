<template>
	<div class="category">
		<p class="category__title">
			{{ id }}
		</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			id : this.$route.params.id
		};
	}
};
</script>

<style lang="scss" scoped>
.category {
    &__title {
        font-size: 2.5em;
        margin:0;
        font-weight: 900;
    }
}
</style>