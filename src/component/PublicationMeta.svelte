<script lang="ts">
	import moment from 'moment';

	export let authors: string[];
	export let published: string;

	const date = moment(published).format('MMM Do, YYYY');

	const author = authors[0];
</script>

<div class="meta">
	<p>{author}</p>
	<small>{date}</small>
</div>

<style lang="less">
	@import 'src/styles/typography.less';

	.meta {
		display: flex;
		flex-direction: column;

		& p {
			.h3();
		}

		small {
			.label2();
		}
	}
</style>
