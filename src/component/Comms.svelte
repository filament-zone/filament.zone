<script lang="ts">
	import IconButton from 'component/IconButton.svelte';

	import IconGithub from 'icon/Github.svelte';
	import IconMail from 'icon/Mail.svelte';
	import IconTwitter from 'icon/Twitter.svelte';

	export let alternative = false;
</script>

<ul>
	<li>
		<a href="https://github.com/filament-zone" title="Pulzaar Github">
			<IconButton {alternative}><IconGithub /></IconButton>
		</a>
	</li>
	<li>
		<a href="https://twitter.com/filamentzone" title="Filament Twitter">
			<IconButton {alternative}><IconTwitter /></IconButton>
		</a>
	</li>
	<li>
		<a href="mailto:connect@filament.zone" title="Filament Mail">
			<IconButton {alternative}><IconMail /></IconButton>
		</a>
	</li>
</ul>

<style lang="less">
	@import 'src/styles/responsive.less';

	ul {
		display: flex;
		align-items: center;

		height: 100%;
	}

	li:not(:last-of-type) {
		margin-right: 12px;
	}

	li a {
		display: block;

		height: 36px;
		width: 36px;
	}

	@media @screen-xxs, @screen-xs, @screen-s {
		li:not(:last-of-type) {
			margin-right: 6px;
		}
	}

	@media @screen-xxs {
		li a {
			height: 26px;
			width: 26px;
		}
	}
</style>
