<script lang="ts">
	import { route } from '../../router'

	// Typed as { id: string, postId: string }
	route.getParams('/posts/:id')

	// Typed as { id?: string, postId?: string, ... }
	// route.params
</script>
