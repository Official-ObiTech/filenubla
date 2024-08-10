<script lang="ts" setup>

const routes =  [
	{
		label: "Home",
		to: "/dashboard",
		icon: "i-ph-house-line-light",
	},
	{
		label: "My Drive",
		to: "/dashboard/users",
		// root: "dashboard/users",
		icon: "i-material-symbols-light-hard-drive-2-outline",
		links: [
			{
				label: "Camera",
				to: "#",
				// root: "dashboard/procurement",
				icon: "i-material-symbols-light-folder-open-outline",
			},
			{
				label: "Photos",
				to: "#",
				// root: "dashboard/procurement",
				icon: "i-material-symbols-light-folder-open-outline",
			},
		]
	},
	{
		label: "Computers",
		to: "/dashboard/inventory",
		// root: "dashboard/inventory",
		icon: "i-cbi-desktop-computer",
		links: [
			{
				label: "Purchase Orders",
				to: "/dashboard/procurement/orders",
				// root: "dashboard/procurement",
				icon: "i-material-symbols-light-folder-open-outline",
			},
			{
				label: "Invoices",
				to: "/dashboard/procurement/invoice",
				// root: "dashboard/procurement",
				icon: "i-material-symbols-light-folder-open-outline",
			},
		]
	},


	{
		label: "Shared with me",
		to: "/dashboard/suppliers",
		// root: "dashboard/suppliers",
		icon: "i-material-symbols-light-share-reviews-outline",
	},
	{
		label: "Recent",
		to: "/dashboard/roles-permissions",
		// root: "dashboard/roles-permissions",
		icon: "i-carbon-recently-viewed",
	},
	{
		label: "Starred",
		to: "/dashboard/settings",
		// root: "dashboard/settings",
		icon: "i-solar-star-fall-broken",
	},
	{
		label: "Spam",
		to: "/dashboard/inventory",
		// root: "dashboard/inventory",
		icon: "i-pajamas-spam",
	},

	{
		label: "Trash",
		to: "/dashboard/suppliers",
		// root: "dashboard/suppliers",
		icon: "i-material-symbols-delete-outline",
	},
	{
		label: "Storage",
		to: "/dashboard/roles-permissions",
		// root: "dashboard/roles-permissions",
		icon: "i-streamline-computer-database-raid-storage-code-disk-programming-database-array-hard-disc",
	},

];

</script>

<template>
	<div class=" ">
		<left-nav-menu :links="routes"></left-nav-menu>
	</div>

</template>



