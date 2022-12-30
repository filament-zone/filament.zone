<script lang="ts">
	import { Color } from '$lib/ui';

	import Card from 'component/CommunityCard.svelte';
	import Container from 'component/Container.svelte';
	import Divider from 'component/Divider.svelte';
	import Icon from 'component/Icon.svelte';
	import Page from 'component/Page.svelte';
	import Segment from 'component/Segment.svelte';

	import IconDiscord from 'icon/Discord.svelte';
	import IconGithub from 'icon/Github.svelte';
	import IconMail from 'icon/Mail.svelte';
	import IconTwitter from 'icon/Twitter.svelte';
</script>

<Page title="Pulzaar Community" footerDividerColor={Color.White}>
	<Segment slot="hero">
		<Container>
			<h1>Join the Pulzaar Community</h1>
		</Container>
	</Segment>

	<Segment color={Color.White} slot="content">
		<Divider />

		<Container>
			<div class="content">
				<div>
					<p>
						Etiam maximus erat massa, sed ornare mi auctor id. Cras at felis sem. Quisque vestibulum
						lacus eu dapibus lacinia. Curabitur viverra tristique sem vitae consectetur.
					</p>
				</div>
				<ul>
					<li>
						<Card href="https://github.com/pulzaar-zone" title="Pulzaar Github">
							Github
							<IconGithub slot="icon" />
						</Card>
					</li>
					<li>
						<Card href="https://discord.gg/9dSbJpZG6C" title="Pulzaar Discord">
							Discord
							<IconDiscord slot="icon" />
						</Card>
					</li>
					<li>
						<Card href="https://twitter.com/pulzaar-zone" title="Pulzaar Twitter">
							Twitter
							<IconTwitter slot="icon" />
						</Card>
					</li>
					<li>
						<Card href="mailto:connect@pulzaar.zone" title="Pulzaar Mail">
							Email
							<IconMail slot="icon" />
						</Card>
					</li>
				</ul>
			</div>
		</Container>
	</Segment>
</Page>

<style lang="less">
	@import 'src/styles/colors.less';
	@import 'src/styles/responsive.less';

	h1 {
		padding-bottom: 50px;
	}

	div.content {
		display: flex;
		flex: 1;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 3rem;

		width: 100%;

		padding: 40px 0px 50px 0px;

		div {
			flex: 1;

			& p {
				color: @color-primary-black;
				font-family: 'Satoshi-Medium';
				font-size: 1.5rem;
				font-weight: 500;
				line-height: 180%;
				text-decoration: none;
			}
		}

		ul {
			display: flex;
			flex: 1;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 0.75rem;

			& li {
				flex: 1;
			}
		}
	}

	@media @screen-s, @screen-xs, @screen-xxs {
		h1 {
			width: 100%;

			text-align: center;
		}

		div.content {
			flex-direction: column;

			& ul {
				width: 100%;

				& li {
					flex: 0 0 calc(50% - 0.75rem);
				}
			}
		}
	}

	@media @screen-xs, @screen-xxs {
		div.content ul li {
			flex: 100%;
		}
	}

	@media @screen-xs {
		h1 {
			font-size: 2rem;
		}
	}

	@media @screen-xxs {
		h1 {
			font-size: 1.75rem;
		}
	}
</style>
