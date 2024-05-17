<script lang="ts">
	import Cta from 'component/Cta.svelte';
</script>

<div class="content">
	<div class="highlight playbooks">
		<div class="info">
			<h2>Playbooks</h2>
			<p>
				Describe complex campaign scenarios succinctly. Adopt, adjust and repeat existing recipes.
			</p>
			<Cta href="/playbooks" title="Coming soon" disabled />
		</div>
		<img src="/img/playbook-example.png" alt="Playbook Example" />
	</div>
	<div class="highlight design">
		<div class="info">
			<h2>Design</h2>
			<p>Create campaigns with any criteria based on on-chain & off-chain datasets.</p>
		</div>
		<img src="/img/campaign-design.png" alt="Campaign design & creation" />
	</div>

	<div class="highlight execute">
		<img src="/img/campaign-execution.png" alt="Campaign execution" />
		<div class="info">
			<h2>Execute</h2>
			<p>Let users engage and disperse funds across the ecosystem.</p>
		</div>
	</div>

	<div class="highlight insights">
		<div class="info">
			<h2>Insights</h2>
			<p>Close the loop by analysing how and when users interact with your campaigns.</p>
		</div>
		<img src="/img/campaign-insights.png" alt="Campaign insights" />
	</div>
</div>

<style lang="less">
	@import 'src/styles/responsive.less';
	@import 'src/styles/typography.less';

	.content {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 20rem;
	}

	.highlight {
		align-items: center;
		display: flex;
		flex-direction: row;
		gap: 1rem;

		max-width: 84rem;
	}

	.info {
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
		gap: 1.5rem;

		padding: 0.75rem;
		width: 28rem;
		z-index: 2;

		background-color: var(--background-color);
	}

	img {
		max-width: 60rem;

		z-index: 0;
	}

	h2 {
		.h1();
	}

	p {
		.b1();
	}

	.playbooks {
		align-items: start;

		padding: 0 2rem 18rem 2rem;

		background-image: url('/img/playbooks-background.svg');
		background-position: 35% 20rem;
		background-repeat: no-repeat;

		& img {
			width: 42rem;

			margin-top: 4rem;
		}
	}

	.design {
		align-items: flex-end;
		width: 67.5rem;

		& h2,
		& p {
			text-align: right;
		}

		img {
			margin-left: -5rem;
		}

		.info {
			margin-bottom: -3rem;
		}
	}

	.execute {
		img {
			margin-right: -3rem;
		}

		.info {
			margin-bottom: -5rem;
		}
	}

	.insights {
		align-items: start;

		& h2,
		& p {
			text-align: right;
		}

		img {
			margin-left: -4rem;
		}

		.info {
			margin-top: -4rem;
		}
	}

	@media @screen-xxs, @screen-xs, @screen-s, @screen-m, @screen-l {
		.content {
			align-items: start;
		}
	}

	@media @screen-xxs, @screen-xs, @screen-s, @screen-m {
		.content {
			align-items: center;
		}

		.highlight {
			flex-direction: column-reverse;
			gap: 0;

			width: 46rem;
		}

		.info {
			width: 18rem;
		}

		img {
			width: 46rem;
		}

		.design {
			& .info {
				margin-left: -9rem;
				margin-top: -2rem;
			}
		}

		.execute {
			flex-direction: column;
		}

		.playbooks {
			align-items: center;
			flex-direction: column;

			padding: 0;
			width: 100%;

			background-position: 10% 50%;
		}
	}

	@media @screen-xxs, @screen-xs {
		.highlight {
			align-items: center;

			width: 100%;
		}

		.design .info {
			margin-left: 0;
		}

		img {
			width: 39rem;
		}

		.playbooks {
			background-image: none;

			img {
				width: 30rem;
			}
		}
	}

	@media @screen-xxs, @screen-xs {
		.playbooks img {
			width: 24rem;
		}
	}
</style>
