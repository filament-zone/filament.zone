<div class="content-container">
	<slot name="header" />
	<slot name="content" />
	<slot name="footer" />
</div>

<style lang="less">
	.content-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding-top: 1rem; /* 4 x 0.25rem */
		padding-bottom: 1rem; /* 4 x 0.25rem */
		height: 100%;
		gap: 1rem; /* 4 x 0.25rem */
	}
</style>
