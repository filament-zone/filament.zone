<script lang="ts">
	import Container from 'component/Container.svelte';
	import Cta from 'component/Cta.svelte';
	import Header from 'component/Header.svelte';
</script>

<div class="hero">
	<Container>
		<Header dark />
	</Container>

	<div class="intro-wrapper">
		<div class="intro">
			<h1>Airdrops that work</h1>
			<p>
				Filament is the first durable incentives platform that enables communities to price
				productivity with conviction.
			</p>
			<Cta href="/publications/position-paper" title="Learn more" dark />
		</div>
	</div>

	<div class="stats">
		<div>
			<h2>Impressions</h2>
			<span>1.5M</span>
		</div>

		<div>
			<h2>Conversion</h2>
			<span>5%</span>
		</div>

		<div>
			<h2>TVL</h2>
			<span>10M</span>
		</div>
	</div>
</div>

<style lang="less">
	@import 'src/styles/colors.less';
	@import 'src/styles/responsive.less';
	@import 'src/styles/typography.less';

	.hero {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		height: 72rem;
		padding-bottom: 9.5rem;

		overflow: hidden;

		background-color: @color-filamint;
		background-image: url('/img/hero-background.svg');
		background-position: calc(50% - 550px) 65%;
		background-repeat: no-repeat;
	}

	.intro-wrapper {
		display: flex;
		justify-content: flex-end;

		width: 80.75rem;

		& .intro {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;

			width: 35.625rem;

			color: var(--dark-color);

			& p {
				.b1();
			}
		}
	}

	.stats {
		align-items: center;
		display: flex;
		justify-content: space-between;

		width: 86rem;

		h2 {
			.h-stat();

			color: var(--stat-foreground);
		}

		span {
			.b-stat();

			margin-top: -1.75rem;

			color: var(--stat-foreground);
		}

		& div {
			align-items: center;
			display: flex;
			flex-direction: column;
			justify-content: center;

			&:first-child h2,
			&:first-child span {
				color: @color-filamint;
			}
		}
	}

	@media @screen-xxs, @screen-xs, @screen-s, @screen-m, @screen-l {
		.hero {
			height: 69rem;

			background-size: 80%;
		}

		.stats {
			justify-content: space-around;

			width: 100%;

			& h2 {
				font-size: 3rem;
			}
			& span {
				margin-top: -1.5rem;

				font-size: 6rem;
			}
		}
	}

	@media @screen-xxs, @screen-xs, @screen-s, @screen-m {
		.hero {
			background-image: none;
		}

		.intro-wrapper {
			justify-content: center;

			width: 100%;
		}

		.stats {
			& div:first-child h2,
			& div:first-child span {
				color: var(--background-color);
			}
		}
	}

	@media @screen-xxs, @screen-xs {
		.hero {
			height: 60rem;

			padding-bottom: 7rem;
		}

		.intro-wrapper {
			& .intro {
				align-items: center;

				padding: 0rem 2.5rem;
				width: 100%;

				& h1,
				p {
					text-align: center;
				}
			}
		}

		.stats {
			& h2 {
				font-size: 2rem;
			}

			& span {
				margin-top: -1rem;

				font-size: 4rem;
			}
		}
	}

	@media @screen-xxs {
		.hero {
			gap: 5rem;

			height: 100%;

			padding-bottom: 5rem;
		}

		.stats {
			flex-direction: column;
			gap: 2rem;
		}
	}
</style>
