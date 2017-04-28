<template lang="pug">
	main
		img(src="./../../../static/img/arrow_left_button.svg")
		icon-svg(name="logo")
</template>
<script type="text/javascript">
	import IconSvg from './../../../components/IconSvg.vue'
	
	export default {
		components : {IconSvg},
	}
</script>

<style media="screen">
	i{
		width: 350px;
		display: inline-block;
	}
</style>
