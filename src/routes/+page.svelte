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
                    Pulzaar is sovereign zone  that enables IBC connected chains to outsource segments of block construction  to a market of block builders which compete to maximize value accrual. Built on open interfaces, Pulzaar unlocks a new era of synchronous composability for the interchain.
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
					<h2>A new era of composability</h2>
                    <p>
                    * The internet of blockchains has exploded x chains secured by y value
                    * Each community provides unique value that  accessible for asynchronous composability over IBC
                    * What's missing is a way to synchronize functionality provided by sovereign zones the way smart contracts compose on Ethereum
                    * Pulzaar provides a set of open interfaces to accelerate synchronous composability of all IBC connected chains.
					</p>
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
                            * Searchers find opportunities from transaction order flow
                            * Searcher buy blockspace from builders who provide execution guarantees
                            * Pulzaar helps discover which builders have execution guarantees needed to execute cross chain strategies
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
                            * Builders optimize construction of block segments
                            * Builders use pulzaar to buy the right to build block segments ahead of time, and work with searchers to maximize the block value
							</p>
						</div>
					</section>
					<section>
						<div class="frame">
							<Frame img="/img/validator.png" />
						</div>
						<div class="info alternate">
							<h2>Validators</h2>
							<p>
                            * Validators propose entire blocks to the network
                            * Proposer build segments blocks and outsource the rest to builders through pulzaar
                            * Partial block construction with pulzaar provides optimal block construction while maintaining censorship resistance
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
                        * Pulzaar is initiated by Mekatek
                        * It will grow to become community owned and governed
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
