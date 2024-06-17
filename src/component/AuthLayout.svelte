<div class="container">
	<div class="auth-container">
		<div class="left-slot"><slot name="left" /></div>
		<div class="right-slot"><slot name="right" /></div>
	</div>
</div>

<style lang="less">
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh; /* Assuming dvh is 100vh */
	}

	.auth-container {
		display: flex;
		flex-direction: row;
		width: 968px;
		min-height: 600px;
		height: fit-content;
		background: var(--darkNet);
		box-shadow: 0px 0px 36.336px 9.084px rgba(255, 255, 255, 0.2);
	}

	.left-slot,
	.right-slot {
		width: 50%;
	}
</style>
