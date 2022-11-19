<template>
	<div class="body">
		<div>
			<CustomHeader />
			<router-view />
		</div>
		<CustomFooter class="footer" />
	</div>
</template>

<script>
// @ is an alias to /src
import CustomHeader from '@/components/CustomHeader.vue';
import CustomFooter from '@/components/CustomFooter.vue';

export default {
	name: 'Home',
	components: {
		CustomHeader,
		CustomFooter
	},
};
</script>

<style lang="scss">
@import url(//fonts.googleapis.com/css?family=Inter);

body{
	font-family: 'Inter';
	font-style: normal;
}
.body {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.view {
	flex: 1 0 auto;
}

.footer {
	flex-shrink: 0;
	width: calc(100% - 1em);
}
</style>
