<template>
	<div>
		<CustomHeader />
		<router-view />
		<CustomFooter />
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
</style>
