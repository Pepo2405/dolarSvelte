<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<svelte:fragment slot="header">
		<div class="bg-slate-900 px-4 py-2">
			<h1 class="h1"><span class="gradient-heading">CalcuDolar</span></h1>
		</div>
	</svelte:fragment>

	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		<div class="flex p-4 bg-slate-900">
			<span> Datos obtenidos de dolarHoy</span>
		</div>
	</svelte:fragment>
	<!-- (footer) -->
</AppShell>
