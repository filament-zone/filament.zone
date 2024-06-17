<div class="partners">
	<h1>Partners</h1>
	<div class="list-container">
		<div class="list">
			<a href="https://www.keplr.app/" title="Keplr Wallet">
				<img src="/img/partners-logo-keplr.png" alt="Keplr Wallet" />
			</a>
			<a href="https://www.leapwallet.io/" title="Leap Wallet">
				<img src="/img/partners-logo-leap.png" alt="Leap Wallet" />
			</a>
			<a href="https://www.stride.zone/" title="Stride">
				<img src="/img/partners-logo-stride.png" alt="Stride" />
			</a>
			<a href="https://nobleassets.xyz/" title="Noble">
				<img src="/img/partners-logo-noble.png" alt="Noble" />
			</a>
			<a href="https://quasar.fi/" title="Quasar Finance">
				<img src="/img/partners-logo-quasar.png" alt="Quasar Finance" />
			</a>
			<a href="https://www.levana.finance/" title="Levana">
				<img src="/img/partners-logo-levana.png" alt="Levana" />
			</a>
			<a href="https://www.sommelier.finance/" title="Sommelier">
				<img src="/img/partners-logo-sommelier.png" alt="Sommelier" />
			</a>
		</div>
	</div>
</div>

<style lang="less">
	@import 'src/styles/responsive.less';

	.partners {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		max-width: 120rem;
		width: 100%;
	}

	h1 {
		text-align: center;
	}

	.list-container {
		height: 50rem;
		width: 100%;

		overflow-y: hidden;
		overflow-x: scroll;

		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		&::-webkit-scrollbar {
			display: none; /* Safari and Chrome */
		}
	}

	div.list {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;

		overflow-y: hidden;
		position: relative;
		height: 50rem;
		width: 125rem;

		&::before {
			content: '';

			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 2;

			pointer-events: none;

			background: var(--partner-gradient);
		}

		-ms-overflow-style: none; /* for Internet Explorer, Edge */
		scrollbar-width: none; /* for Firefox */

		&::-webkit-scrollbar {
			display: none; /* for Chrome, Safari, and Opera */
		}
	}

	a {
		align-items: center;
		display: flex;
		justify-content: center;

		position: absolute;
		height: 20rem;
		width: 60rem;
		z-index: 1;

		margin-left: -4.5rem;

		transform: rotate(-85deg);
		transition: all 0.12s ease-in-out;

		background-color: var(--background-color);
		color: var(--foreground-color);

		& img {
			height: 8rem;
		}

		&::before {
			content: '';
			position: absolute;
			top: -1.25rem;
			left: 0;
			width: 100%;
			height: 1.25rem; /* Adjust height to control how far the shadow fades */
			background: var(--partner-shadow);
			z-index: -1; /* Ensure the shadow appears behind the content */
		}

		&:hover {
			background-color: var(--link-color);
		}

		&:hover + a::before {
			background: linear-gradient(to top, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));
		}

		each(range(1, 7, 1), {
      &:nth-child(@{index}) {
        left: calc(calc(@value * 18rem) - 36rem);

        &:not(:first-child):hover {
          left: calc(calc(@value * 18rem) - 37rem);
        }

        &:hover + a {
          left: calc(calc((@value + 1) * 18rem) - 35rem);
        }
      }
    });

		&:last-child:hover {
			left: calc((7 * 18rem) - 39rem);
		}
	}
</style>
