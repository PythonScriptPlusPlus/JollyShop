<template>
	<div class="footer">
		<div class="footer__info">
			"Что творит Алис Вардо"
			<p class="footer__info--copyright">
				&copy;Jolly shop
			</p>
		</div>
		<div class="footer__social">
			<div class="footer__icon" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'CustomFooter'
};
</script>

<style lang="scss" scoped>
.footer {
    position: relative;
    background-color: #ebcf5d;
    height: 5em;
    width: calc(100vw - 1em);
    padding: .5em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__info {
        color: #fff;
        font-style: italic;
    
        &--copyright {
            text-decoration: underline;
            margin: 0;
        }
    }

    &__social {
        position: absolute;
        right: .5em;
        border-left: 3px solid #fff;
        height: calc(100% - 1.5em);
    }

    &__icon {
        background-image: url('/img/icons/footer_icon.png');
        background-size: cover;
        aspect-ratio: 1/1;
        height: 100%;
        margin-left: .5em;
    }
}
</style>

