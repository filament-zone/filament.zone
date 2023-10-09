<script lang="ts">
	import { Color } from '$lib/ui';

	import Button from 'component/Button.svelte';
	import Frame from 'component/Frame.svelte';
	import Container from 'component/Container.svelte';
	import Logo from 'component/Logo.svelte';
	import PageLanding from 'component/PageLanding.svelte';
	import Segment from 'component/Segment.svelte';
</script>

<PageLanding>
	<div id="hero" slot="hero">
		<div class="background">
			<Container>
				<div class="hero-content">
					<div class="logo">
						<Logo />
					</div>
					<h1>Pioneering Interchain Connectivity</h1>
					<p>
						Step into the future with Filament - designed for unparalleled decentralized growth and
						connectivity. Envision a world of seamless experiences for protocols and users.
					</p>
					<Button href="" label="Learn More" title="" outline={Color.White} />
				</div>
			</Container>
		</div>
	</div>

	<div class="content" slot="content">
		<Segment color={Color.BackgroundsDark}>
			<Container>
				<div class="actors">
					<section>
						<div class="frame">
							<Frame>
								<h2>For Campaigners</h2>
								<p>
									Navigate the world of blockchains with Filament. Elevate your growth campaign in
									the vast Interchain landscape. Harness Numia's & Mekatek's ecosystem to connect
									with users that are most relevant to you.
								</p>
								<div class="cta">
									<Button
										href="mailto:connect@filament.zone?subject=New campaign on Filamen"
										label="Launch Campaign"
										title="Launch Campaign"
										outline={Color.White} />
								</div>
							</Frame>
						</div>
						<div class="info alternate">
							<img src="/img/campaigner.png" alt="A robot campaigner" />
						</div>
					</section>
					<section>
						<div class="frame">
							<Frame>
								<h2>For Distributors</h2>
								<p>
									With Filament, become a pivotal connector in the expansive Internet of
									Blockchains. Extend your experiences to users and open new avenues of growth &
									revenue.
								</p>
								<div class="cta">
									<Button
										href="mailto:connect@filament.zone?subject=Join Filament as distributor"
										label="Join the Network"
										title="Join Filament as Distributor"
										outline={Color.White} />
								</div>
							</Frame>
						</div>
						<div class="info">
							<img src="/img/distributor.png" alt="A distributors store" />
						</div>
					</section>
				</div>
			</Container>
		</Segment>
	</div>
</PageLanding>

<style lang="less">
	@import 'src/styles/colors.less';
	@import 'src/styles/responsive.less';

	p {
		font-family: 'Satoshi-Medium';
		font-size: 1.375rem;
		font-style: normal;
		font-weight: 500;
		line-height: 180%;
	}

	div#hero {
		display: flex;
		flex: 1;
		flex-direction: column;

		div.background {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			height: 100%;
			width: 100%;

			background-attachment: scroll;
			background-image: linear-gradient(
					to bottom,
					rgba(255, 255, 255, 0) 65%,
					rgba(13, 13, 40, 1) 100%
				),
				url('/img/hero-landscape.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
		}
	}

	div.hero-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 2.5rem;

		max-width: 32rem;

		padding: 12rem 0 18rem;

		h1 {
			color: @color-primary-white;
			font-size: 3.125rem;
			font-style: normal;
			font-weight: 500;
			line-height: 140%;
		}

		p {
			color: @color-primary-white;
			font-family: 'GT-Eesti-Display-Regular';
			font-style: normal;
			font-weight: 400;
			font-size: 1.375rem;
			line-height: 180%;
		}

		div.logo {
			height: 6.5rem;
		}
	}

	div.content {
		flex: 1;

		h2 {
			font-family: 'GT-Eesti-Display-Bold';
			font-size: 3.125rem;
			font-style: normal;
			font-weight: 700;
			line-height: 150%;
		}
	}

	div.value {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		padding: 3.75rem 0;

		h2 {
			margin-bottom: 0.6rem;

			color: @color-blue;
			text-align: center;
		}

		p {
			max-width: 46.5rem;

			color: @color-primary-black;
			font-family: 'Satoshi-Medium';
			font-size: 1.375rem;
			font-style: normal;
			font-weight: 500;
			line-height: 180%;
			text-align: center;
		}
	}

	div.actors {
		display: flex;
		flex-direction: column;
		gap: 5rem;

		padding: 5rem 0;

		section {
			display: flex;
			flex: 1;
			gap: 5rem;
			align-items: center;
			justify-content: center;

			div {
				flex: 1;
				order: 2;
			}

			div.info {
				display: flex;
				flex-direction: column;
				gap: 2rem;

				&.alternate {
					order: 1;
				}
			}

			div.cta {
				width: 16rem;
			}

			h2 {
				color: @color-primary-cyan;
			}

			p {
				color: @color-primary-white;
			}
		}
	}

	@media @screen-s, @screen-xs, @screen-xxs {
		div.hero-content {
			justify-content: flex-end;

			max-width: inherit;
			padding: 9rem 2rem 3rem;

			h1 {
				font-size: 2.5rem;
				text-align: center;
			}

			p {
				text-align: center;
			}

			div.logo {
				align-self: center;
			}
		}

		div.actors section {
			flex-direction: column;

			div.info.alternate {
				order: 3;
			}

			div.frame {
				h2,
				p {
					text-align: center;
				}
			}

			div.cta {
				margin: 0 auto;
			}
		}

		div.community {
			flex-direction: column;
		}
	}

	@media @screen-xs, @screen-xxs {
		p {
			font-size: 1.125rem;
		}

		div.hero-content {
			h1 {
				font-size: 2.25rem;
			}

			div.logo {
				height: 4rem;
			}
		}
	}

	@media @screen-xxs {
		div.hero-content h1 {
			font-size: 1.875rem;
		}
	}
</style>
