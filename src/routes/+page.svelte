<script lang="ts">
	import { json } from '@sveltejs/kit';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import 'iconify-icon';
	import { formatNumber } from '../utils.js';
	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	export let data;
	let amount = null;
	let selectedDolar = 'Dólar blue';
	$: chipStateClass = true ? 'variant-filled-primary' : 'variant-soft-primary';

	let typeSelected = 'Dólar blue';
	let tabSet: string = 'Dólar blue';
	const section = (c) => {
		typeSelected = c;
	};
	onMount(() => {
		setInterval(() => {
			invalidateAll();
		}, 1000);
	});
</script>

<div class="container h-full mx-auto flex justify-center items-center px-4">
	<TabGroup>
		<div class="w-full hidden md:flex flex-wrap">
			{#each Object.keys(data) as dolarType, index}
				<Tab bind:group={tabSet} name={dolarType} class="capitalize" value={dolarType}
					>{dolarType}</Tab
				>
			{/each}
		</div>

		<label
			class="label w-full
		 md:hidden"
		>
			<span>Dolar</span>
			<select class="select capitalize w-full" bind:value={tabSet}>
				{#each Object.keys(data) as dolarType, index}
					<option value={dolarType} class="p-8 capitalize">{dolarType.replace('Dólar', '')}</option>
				{/each}
			</select>
		</label>

		<svelte:fragment slot="panel">
			<div>
				<div class="grid gap-4 grid-cols-1 md:grid-cols-2">
					{#each Object.keys(data[tabSet]) as dolarType}
						<label class="label grow flex-wrap">
							<span class="capitalize text-lg">{dolarType}</span>
							<input
								readonly
								class="input bg-primary-200 hover:cursor-pointer"
								type="text"
								style="cursor: default !important;"
								placeholder="$ 100"
								value={`$ ${formatNumber(data[tabSet][dolarType] * (amount ? amount : 1))}`}
							/>
						</label>
					{/each}
				</div>

				<label class="label my-4">
					<span class="text-xl">Calcular</span>
					<input class="input" type="number" placeholder="$ 100" bind:value={amount} />
				</label>
			</div></svelte:fragment
		>
	</TabGroup>

	<!-- <div class="space-y-5 space-x-5">
		{#each Object.keys(data) as dolarType}
			<span
				class="chip text-xl {typeSelected === dolarType ? 'variant-filled' : 'variant-soft'}"
				on:click={() => {
					section(dolarType);
				}}
				on:keypress
			>
				{#if typeSelected === dolarType}
					<iconify-icon icon="line-md:circle-to-confirm-circle-transition" width="24" />
				{/if}
				<span>{dolarType}</span>
			</span>
		{/each}
		<p>Start by exploring:</p>

		<div>
			<label class="label">
				<span>Blue</span>
				<input class="input" type="text" placeholder="Input" />
			</label>
		</div>
		<ul>
			<li>
				<code class="code">/src/routes/+layout.svelte</code> - barebones layout, the CSS import order
				is critical!
			</li>
			<li>
				<code class="code">/src/app.postcss</code> - minimal css to make the page full screen, may not
				be relevant for your project
			</li>
			<li>
				<code class="code">/src/routes/+page.svelte</code> - this page, you can replace the contents
			</li>
		</ul>
	</div> -->
</div>
