<script lang="ts" setup>

const routes = [
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
	<div class="fixed z-1 top-0 left-0 h-full w-[270px] bg-[#A2A1A80D]  ">
		<UButton
				icon="i-material-symbols-add"
				class="shadow-lg p-4 my-4 mx-2 text-gray-700 dark:text-white font-semibold text-sm rounded-2xl"
				label="New"
				color="white"
				:trailing="false"
			/>
		<div class="flex flex-col lg:items-center text-center ">
			

			<div class="w-full space-y ">
				<left-nav-menu :links="routes"></left-nav-menu>

				<!-- <li
					v-for="(lnk, i) in permittedMenus"
					:class="`cursor-pointer list-none flex items-center gap-2 ${
						(route.path == lnk.path && lnk.path === '/dashboard')
							? 'font-bold text-white border-l-primary bg-teal-500'
							: ''
					} p-4 border-l-transparent border-l-2  text-sm pl-10`"
					:key="i"
					@click="navigate(lnk.path)"
				>
					<UIcon class="text-lg" :name="lnk.icon" />
					{{ lnk.name }}
				</li> -->
			</div>
		</div>
	</div>
</template>



