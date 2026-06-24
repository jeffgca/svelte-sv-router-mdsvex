<script>
	const { data } = $props()
</script>

<h2>{data.title}</h2>

<article class="prose">
	<h1>{data.title}</h1>
	<data.content />
	<p>Published {new Date(data.date).toDateString()}</p>
</article>

<style>
	article {
		margin: 1rem 0;
		text-align: left;
		padding: 0 1rem;
	}
</style>
