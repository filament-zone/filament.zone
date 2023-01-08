<script lang="ts">
	import { Color } from '$lib/ui';

	import Button from 'component/Button.svelte';
	import Frame from 'component/Frame.svelte';
	import Container from 'component/Container.svelte';
	import Divider from 'component/Divider.svelte';
	import Page from 'component/Page.svelte';
	import Segment from 'component/Segment.svelte';
</script>

<Page>
	<div slot="hero">
		<Segment backgroundImage="/img/hero-landscape.png">
			<Divider />

			<Container>
				<div class="hero">
					<h1>Pulzaar coördinates decentralized blockspace for the Interchain</h1>
					<p>
						* solution * ibc connected, cosmos-sdk chains, cosmwasm chains * enables outsourcing of
						segmented block construction * to a govnernance-algined, efficient market * to maximize
						the aggregated value for the entire community
					</p>
					<Button
						href="/research/lite-paper-pulzaar---trustless-block-segment-auctions-for-the-interchain"
						label="Read the Lite Paper"
						title="Lite Paper: Pulzaar - Trustless blockspace segment auctions for the Interchain" />
				</div>
			</Container>

			<Divider color={Color.White} inverted />
		</Segment>
	</div>

	<div class="content" slot="content">
		<Segment color={Color.White}>
			<Container>
				<div class="value">
					<h2>Value for the community</h2>
					<p>Pulzaar creates commitments which enable and incentivize payments to the community.</p>
				</div>
			</Container>
		</Segment>
		<Segment>
			<Divider color={Color.White} />
			<Container>
				<div class="chain">
					<section>
						<div class="frame">
							<Frame img="/img/searcher.png" />
						</div>
						<div class="info alternate">
							<h2>Searchers</h2>
							<p>
								Proin et dui fringilla, luctus dui quis, placerat diam. Phasellus mollis eget mi sit
								amet pretium. Fusce ligula dolor, tincidunt quis pharetra vel, interdum id felis.
								Nunc aliquam pulvinar turpis in bibendum.
							</p>
						</div>
					</section>
					<section>
						<div class="frame">
							<Frame img="/img/builder.png" />
						</div>
						<div class="info">
							<h2>Builders</h2>
							<p>
								Aenean aliquam neque fermentum odio condimentum ullamcorper. Maecenas sed elementum
								ipsum, in pulvinar orci. Proin consectetur velit sed vulputate laoreet. Duis ut
								condimentum nibh. Suspendisse dictum consequat tincidunt.
							</p>
							.
						</div>
					</section>
					<section>
						<div class="frame">
							<Frame img="/img/validator.png" />
						</div>
						<div class="info alternate">
							<h2>Validators</h2>
							<p>
								Suspendisse auctor urna vitae risus volutpat consequat. Phasellus fringilla lectus
								diam, in ultrices turpis sagittis eget. Mauris vitae neque a ipsum cursus gravida
								sit amet eu arcu. Vestibulum commodo metus in cursus aliquam.
							</p>
						</div>
					</section>
				</div>
			</Container>
			<Divider color={Color.Cyan} inverted />
		</Segment>
		<Segment color={Color.Cyan}>
			<Container>
				<div class="community">
					<div class="frame">
						<Frame img="/img/community.png" color={Color.Blue} />
					</div>
					<div class="info">
						<h2>Reach for the Stars</h2>
						<p>
							Etiam maximus erat massa, sed ornare mi auctor id. Cras at felis sem. Quisque
							vestibulum lacus eu dapibus lacinia. Curabitur viverra tristique sem vitae
							consectetur.
						</p>
						<Button href="/community" label="Join the Community" title="Join the Community" />
					</div>
				</div>
			</Container>
		</Segment>
	</div>
</Page>

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

	div.hero {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 2.5rem;

		max-width: 38rem;

		padding: 3.5rem 0 13.75rem;

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

	div.chain {
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

				h2 {
					color: @color-primary-cyan;
				}

				p {
					color: @color-primary-white;
				}
			}
		}
	}

	div.community {
		display: flex;
		flex: 1;
		flex-direction: row;
		align-items: stretch;
		justify-content: center;
		gap: 6.25rem;

		padding: 2.5rem 0;

		div.info {
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			gap: 2.5rem;
			justify-content: center;

			padding: 0.5rem 0;
		}
	}

	@media @screen-s, @screen-xs, @screen-xxs {
		div.hero {
			justify-content: flex-end;

			max-width: inherit;
			padding: 18rem 2rem 3rem;

			h1 {
				font-size: 2.5rem;
				text-align: center;
			}

			p {
				text-align: center;
			}
		}

		div.chain section {
			flex-direction: column;

			div.info.alternate {
				order: 3;
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

		div.hero {
			h1 {
				font-size: 2.25rem;
			}
		}
	}

	@media @screen-xxs {
		div.hero h1 {
			font-size: 1.875rem;
		}
	}
</style>
