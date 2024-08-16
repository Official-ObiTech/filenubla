<script lang="ts" setup>

const routes =  [
	{
		label: "Home",
		to: "/dashboard",
		icon: "i-ph-house-line-light",
	},
	{
		label: "My Drive",
		to: "/dashboard/my-drive",
		icon: "i-material-symbols-light-hard-drive-2-outline",
		links: [
			{
				to: "/dashboard/my-drive",
				icon: "i-material-symbols-light-folder-open-outline",
			},
			{
				label: "Camera",
				to: "/dashboard/my-drive/camera",
				icon: "i-material-symbols-light-folder-open-outline",
			},
			{
				label: "Photos",
				to: "/dashboard/my-drive/photos",
				icon: "i-material-symbols-light-folder-open-outline",
			},
		]
	},
	{
		label: "Computers",
		to: "/dashboard/inventory",
		icon: "i-cbi-desktop-computer",
		links: [
			{
				label: "Videos",
				to: "#",
				icon: "i-material-symbols-light-folder-open-outline",
			},
			{
				label: "Docs",
				to: "#",
				icon: "i-material-symbols-light-folder-open-outline",
			},
		]
	},


	{
		label: "Shared with me",
		to: "/dashboard/shared",
		icon: "i-material-symbols-light-share-reviews-outline",
	},
	{
		label: "Recent",
		to: "/dashboard/recent",
		icon: "i-carbon-recently-viewed",
	},
	{
		label: "Starred",
		to: "/dashboard/starred",
		icon: "i-solar-star-fall-broken",
	},
	{
		label: "Spam",
		to: "/dashboard/spam",
		icon: "i-pajamas-spam",
	},

	{
		label: "Trash",
		to: "/dashboard/trash",
		icon: "i-material-symbols-delete-outline",
	},
	{
		label: "Storage",
		to: "/dashboard/storage",
		icon: "i-streamline-computer-database-raid-storage-code-disk-programming-database-array-hard-disc",
	},

];

</script>

<template>
	<div class=" ">
		<left-nav-menu :links="routes"></left-nav-menu>
	</div>

</template>



