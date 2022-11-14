<template>
	<div>
		<HelloWorld />
		<router-view />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/CustomHeader.vue';

export default {
	name: 'Home',
	components: {
		HelloWorld,
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
