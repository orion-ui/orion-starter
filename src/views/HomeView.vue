<template>
	<div class="orion-starter-home">
		<div class="orion-starter-home__wrapper">
			<img
				alt="Orion logo"
				class="orion-starter-home__logo"
				src="@/assets/orion-logo-brand.svg">

			<div class="orion-starter-home__actions">
				<h1>Thank you for using <span class="text--brand">Orion UI</span></h1>

				<o-sticker title="Read documentation">
					<p>
						We care about DX and we know
						<strong>how important a good documentation is</strong>.<br>
						So we did our best to provide a beautiful and complete documentation
						with <strong>demos and playgrounds</strong> to quickly learn how to
						use <strong class="text--brand">Orion</strong>.
					</p>
					<a
						href="https://orion-ui.org"
						target="_blank"
						rel="noopener noreferrer">Documentation on orion-ui.org</a>
				</o-sticker>

				<o-sticker title="Experiment layout component">
					<p>
						Using a framework's layout can be tricky the fisrt time.<br>
						With this example you can quickly experiment how it works and
						<strong>kickstart a new project</strong> before customizing it more
						deeply.
					</p>
					<a href="/layout">Experiment OrionLayout</a>
				</o-sticker>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="less">
@import "@orion.ui/orion/dist/styles/mixins.less";

.orion-starter-home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  max-width: 60rem;
  margin: auto;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  &__logo {
    .square(12rem);
    margin: 2rem;
    display: block;
  }

  &__actions {
    border-left: 1px solid var(--grey-light);
    padding: 2rem 3rem;

    h1 {
      margin-left: 0.5rem;
      margin-bottom: 2rem;
    }

    a {
      color: var(--brand);
    }
  }
}
</style>
