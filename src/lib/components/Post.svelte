<script>
	const { data } = $props()
</script>

<article class="prose">
	<h2>{data.title}</h2>
	<data.content />
	<p>Published {new Date(data.date).toDateString()}</p>
</article>

<style>
	article {
		margin: 1rem 0;
		text-align: left;
	}
</style>
