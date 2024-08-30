<script setup lang="ts">
import { DoughnutChart, LineChart, BarChart, PieChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);



const testData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    
    datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
        ],
    }]
    };

const PieConfig = {
	datasets: [{
    label: 'My First Dataset',
    data: [200, 50, 100, 150],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(255, 20, 186)'
    ],
    hoverOffset: 4
  }]
};


</script>

<template>
   <div>       
        
        <UCard class=" " :ui="{ header : {padding: 'pb-2'}}" >

            <!-- <template #header >
            <div class="h-16 pb-10 ">
                <h1 class="text-xl lg:text-2xl font-medium text-gray-500 dark:text-gray-100">Welcome to FileNubla </h1>
            </div>

            <div class="text-sm font-semibold hidden lg:grid grid-cols-4 gap-6 px-6 ">
                <p class="pl-12 ">Name</p>
                <p class=" ">Reason Suggested</p>
                <p class="justify-end flex">Owner</p>
                <p class="justify-end flex">Action</p>
            </div>

            <div class="lg:hidden grid grid-cols-2 gap-6 px-6 text-sm font-semibold">
                <p class="justify-center ">Suggested</p>
                <p class="justify-end flex "> Activity</p>
            </div>

            </template> -->

            <!-- <div class="lg:h-80  h-64 text-sm ">

            <div class="lg:hidden grid grid-cols-3 items-center px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex col-span-2 items-center gap-4">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <div class="">
                    <p class="">IMG_753.JPG</p>
                    <p class="text-xs">You opened Jun 30, 2023</p>
                </div>
                </div>

                <p class="justify-end flex ">
                    <UButton
                    icon="i-carbon-overflow-menu-horizontal"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div>

            <div class="lg:hidden grid grid-cols-3 items-center px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex col-span-2 items-center gap-4">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <div class="">
                    <p class="">IMG_753.JPG</p>
                    <p class="text-xs">You opened Jun 30, 2023</p>
                </div>
                </div>

                <p class="justify-end flex ">
                    <UButton
                    icon="i-carbon-overflow-menu-horizontal"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div>

            <div class="lg:hidden grid grid-cols-3 items-center px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex col-span-2 items-center gap-4">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <div class="">
                    <p class="">IMG_753.JPG</p>
                    <p class="text-xs">You opened Jun 30, 2023</p>
                </div>
                </div>

                <p class="justify-end flex ">
                    <UButton
                    icon="i-carbon-overflow-menu-horizontal"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div>

            <div class="lg:hidden grid grid-cols-3 items-center px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex col-span-2 items-center gap-4">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <div class="">
                    <p class="">IMG_753.JPG</p>
                    <p class="text-xs">You opened Jun 30, 2023</p>
                </div>
                </div>

                <p class="justify-end flex ">
                    <UButton
                    icon="i-carbon-overflow-menu-horizontal"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div>

            <div class="lg:hidden grid grid-cols-3 items-center px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex col-span-2 items-center gap-4">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <div class="">
                    <p class="">IMG_753.JPG</p>
                    <p class="text-xs">You opened Jun 30, 2023</p>
                </div>
                </div>

                <p class="justify-end flex ">
                    <UButton
                    icon="i-carbon-overflow-menu-horizontal"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div>

            <div class="lg:hidden grid grid-cols-3 items-center px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex col-span-2 items-center gap-4">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <div class="">
                    <p class="">IMG_753.JPG</p>
                    <p class="text-xs">You opened Jun 30, 2023</p>
                </div>
                </div>

                <p class="justify-end flex ">
                    <UButton
                    icon="i-carbon-overflow-menu-horizontal"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div>

            <div class="lg:hidden grid grid-cols-3 items-center px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex col-span-2 items-center gap-4">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <div class="">
                    <p class="">IMG_753.JPG</p>
                    <p class="text-xs">You opened Jun 30, 2023</p>
                </div>
                </div>

                <p class="justify-end flex ">
                    <UButton
                    icon="i-carbon-overflow-menu-horizontal"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div>

            <div class="lg:hidden grid grid-cols-3 items-center px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex col-span-2 items-center gap-4">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <div class="">
                    <p class="">IMG_753.JPG</p>
                    <p class="text-xs">You opened Jun 30, 2023</p>
                </div>
                </div>

                <p class="justify-end flex ">
                    <UButton
                    icon="i-carbon-overflow-menu-horizontal"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div>

            <div class="lg:hidden grid grid-cols-3 items-center px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex col-span-2 items-center gap-4">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <div class="">
                    <p class="">IMG_753.JPG</p>
                    <p class="text-xs">You opened Jun 30, 2023</p>
                </div>
                </div>

                <p class="justify-end flex ">
                    <UButton
                    icon="i-carbon-overflow-menu-horizontal"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div>

            <div class="lg:hidden grid grid-cols-3 items-center px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex col-span-2 items-center gap-4">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <div class="">
                    <p class="">IMG_753.JPG</p>
                    <p class="text-xs">You opened Jun 30, 2023</p>
                </div>
                </div>

                <p class="justify-end flex ">
                    <UButton
                    icon="i-carbon-overflow-menu-horizontal"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div>




            <div class="hidden lg:grid grid-cols-4 items-center px-6 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex items-center gap-6">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <p class="">IMG_3040.HEIC</p>
                </div>
                <p class="">You created Jun 18, 2023</p>
                <p class="justify-end flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
                </p>
                <p class="justify-end flex items-center">
                    <UButton
                    icon="i-carbon-overflow-menu-vertical"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div> 

            <div class="hidden lg:grid grid-cols-4 items-center px-6 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex items-center gap-6">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <p class="">IMG_3040.HEIC</p>
                </div>
                <p class="">You created Jun 18, 2023</p>
                <p class="justify-end flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
                </p>
                <p class="justify-end flex items-center">
                    <UButton
                    icon="i-carbon-overflow-menu-vertical"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div> 

            <div class="hidden lg:grid grid-cols-4 items-center px-6 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex items-center gap-6">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <p class="">IMG_3040.HEIC</p>
                </div>
                <p class="">You created Jun 18, 2023</p>
                <p class="justify-end flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
                </p>
                <p class="justify-end flex items-center">
                    <UButton
                    icon="i-carbon-overflow-menu-vertical"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div> 

            <div class="hidden lg:grid grid-cols-4 items-center px-6 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex items-center gap-6">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <p class="">IMG_3040.HEIC</p>
                </div>
                <p class="">You created Jun 18, 2023</p>
                <p class="justify-end flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
                </p>
                <p class="justify-end flex items-center">
                    <UButton
                    icon="i-carbon-overflow-menu-vertical"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div> 

            <div class="hidden lg:grid grid-cols-4 items-center px-6 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex items-center gap-6">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <p class="">IMG_3040.HEIC</p>
                </div>
                <p class="">You created Jun 18, 2023</p>
                <p class="justify-end flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
                </p>
                <p class="justify-end flex items-center">
                    <UButton
                    icon="i-carbon-overflow-menu-vertical"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div>

            <div class="hidden lg:grid grid-cols-4 items-center px-6 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex items-center gap-6">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <p class="">IMG_3040.HEIC</p>
                </div>
                <p class="">You created Jun 18, 2023</p>
                <p class="justify-end flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
                </p>
                <p class="justify-end flex items-center">
                    <UButton
                    icon="i-carbon-overflow-menu-vertical"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div> 

            <div class="hidden lg:grid grid-cols-4 items-center px-6 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex items-center gap-6">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <p class="">IMG_3040.HEIC</p>
                </div>
                <p class="">You created Jun 18, 2023</p>
                <p class="justify-end flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
                </p>
                <p class="justify-end flex items-center">
                    <UButton
                    icon="i-carbon-overflow-menu-vertical"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div> 

            <div class="hidden lg:grid grid-cols-4 items-center px-6 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex items-center gap-6">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <p class="">IMG_3040.HEIC</p>
                </div>
                <p class="">You created Jun 18, 2023</p>
                <p class="justify-end flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
                </p>
                <p class="justify-end flex items-center">
                    <UButton
                    icon="i-carbon-overflow-menu-vertical"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div> 

            <div class="hidden lg:grid grid-cols-4 items-center px-6 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex items-center gap-6">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <p class="">IMG_3040.HEIC</p>
                </div>
                <p class="">You created Jun 18, 2023</p>
                <p class="justify-end flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
                </p>
                <p class="justify-end flex items-center">
                    <UButton
                    icon="i-carbon-overflow-menu-vertical"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div> 

            <div class="hidden lg:grid grid-cols-4 items-center px-6 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex items-center gap-6">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <p class="">IMG_3040.HEIC</p>
                </div>
                <p class="">You created Jun 18, 2023</p>
                <p class="justify-end flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
                </p>
                <p class="justify-end flex items-center">
                    <UButton
                    icon="i-carbon-overflow-menu-vertical"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div>

            <div class="hidden lg:grid grid-cols-4 items-center px-6 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex items-center gap-6">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <p class="">IMG_3040.HEIC</p>
                </div>
                <p class="">You created Jun 18, 2023</p>
                <p class="justify-end flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
                </p>
                <p class="justify-end flex items-center">
                    <UButton
                    icon="i-carbon-overflow-menu-vertical"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div> 

            <div class="hidden lg:grid grid-cols-4 items-center px-6 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex items-center gap-6">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <p class="">IMG_3040.HEIC</p>
                </div>
                <p class="">You created Jun 18, 2023</p>
                <p class="justify-end flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
                </p>
                <p class="justify-end flex items-center">
                    <UButton
                    icon="i-carbon-overflow-menu-vertical"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div> 

            <div class="hidden lg:grid grid-cols-4 items-center px-6 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex items-center gap-6">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <p class="">IMG_3040.HEIC</p>
                </div>
                <p class="">You created Jun 18, 2023</p>
                <p class="justify-end flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
                </p>
                <p class="justify-end flex items-center">
                    <UButton
                    icon="i-carbon-overflow-menu-vertical"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div> 

            <div class="hidden lg:grid grid-cols-4 items-center px-6 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex items-center gap-6">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <p class="">IMG_3040.HEIC</p>
                </div>
                <p class="">You created Jun 18, 2023</p>
                <p class="justify-end flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
                </p>
                <p class="justify-end flex items-center">
                    <UButton
                    icon="i-carbon-overflow-menu-vertical"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div> 

            <div class="hidden lg:grid grid-cols-4 items-center px-6 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex items-center gap-6">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <p class="">IMG_3040.HEIC</p>
                </div>
                <p class="">You created Jun 18, 2023</p>
                <p class="justify-end flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
                </p>
                <p class="justify-end flex items-center">
                    <UButton
                    icon="i-carbon-overflow-menu-vertical"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div> 

            <div class="hidden lg:grid grid-cols-4 items-center px-6 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex items-center gap-6">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <p class="">IMG_3040.HEIC</p>
                </div>
                <p class="">You created Jun 18, 2023</p>
                <p class="justify-end flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
                </p>
                <p class="justify-end flex items-center">
                    <UButton
                    icon="i-carbon-overflow-menu-vertical"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div> 

            <div class="hidden lg:grid grid-cols-4 items-center px-6 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex items-center gap-6">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <p class="">IMG_3040.HEIC</p>
                </div>
                <p class="">You created Jun 18, 2023</p>
                <p class="justify-end flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
                </p>
                <p class="justify-end flex items-center">
                    <UButton
                    icon="i-carbon-overflow-menu-vertical"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div> 

            <div class="hidden lg:grid grid-cols-4 items-center px-6 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex items-center gap-6">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <p class="">IMG_3040.HEIC</p>
                </div>
                <p class="">You created Jun 18, 2023</p>
                <p class="justify-end flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
                </p>
                <p class="justify-end flex items-center">
                    <UButton
                    icon="i-carbon-overflow-menu-vertical"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div> 

            <div class="hidden lg:grid grid-cols-4 items-center px-6 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex items-center gap-6">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <p class="">IMG_3040.HEIC</p>
                </div>
                <p class="">You created Jun 18, 2023</p>
                <p class="justify-end flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
                </p>
                <p class="justify-end flex items-center">
                    <UButton
                    icon="i-carbon-overflow-menu-vertical"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div> 

            <div class="hidden lg:grid grid-cols-4 items-center px-6 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
                <div class="flex items-center gap-6">
                <img src="../../../assets/cloud.png" alt="" class="size-8" />
                <p class="">IMG_3040.HEIC</p>
                </div>
                <p class="">You created Jun 18, 2023</p>
                <p class="justify-end flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
                </p>
                <p class="justify-end flex items-center">
                    <UButton
                    icon="i-carbon-overflow-menu-vertical"
                    size="sm"
                    square
                    variant="ghost"
                    />
                </p>
            </div> 
            
            </div>  -->
               

               <div class="lg:h-[28rem] space-y-4">
                <div class="grid grid-cols-4 gap-4 ">
                    <div class="col-span-2 ">
                        <UCard class="">
                            <div class="h-12">
                                <UMeterGroup :max="128" size="sm" :ui="{list : 'lg:flex gap-2'}">
                                    <template #indicator>
                                    <div class="flex gap-1.5 justify-between text-sm">
                                        <p>86GB used</p>
                                        <p class="text-gray-500 dark:text-gray-400">
                                        42GB remaining
                                        </p>
                                    </div>
                                    </template>

                                    <UMeter :value="24" color="gray" label="System"  />
                                    <UMeter :value="8" color="red" label="Apps"  />
                                    <UMeter :value="12" color="yellow" label="Documents" />
                                    <UMeter :value="42" color="green" label="Multimedia" />
                                </UMeterGroup>
                            </div>
                            
                        </UCard>
                    </div>

                    <div>
                        <UCard class="">
                            <div class="h-12">
                                <div class="flex justify-between gap-2" orientation="horizontal">
                                    <p class="text-sm text-gray-600 dark:text-gray-100 ">Number of Folders: </p>
                                    <span class="items-center p-2 flex rounded dark:bg-gray-700 bg-gray-100">
                                        <UIcon class="text-primary" name="i-carbon-folders" />
                                    </span>
                                </div>
                                <strong class="text-xl">10</strong>
                            </div>
                           
                        </UCard>
                    </div>

                    <div>
                        <UCard class="">
                            <div class="h-12">
                                <div class="flex justify-between gap-2" orientation="horizontal">
                                    <p class="text-sm text-gray-600 dark:text-gray-100">Number of Files: </p>
                                    <span class="items-cente flex p-2 rounded dark:bg-gray-700 bg-gray-100">
                                        <UIcon class="text-primary" name="i-carbon-document-multiple-01" />
                                    </span>
                                </div>
                                <strong class="text-xl">210</strong>
                            </div>
                           
                        </UCard>
                    </div>
                   
                </div>

                <div class="grid grid-cols-3 gap-4">

                    <div class="col-span-2">
                        <UCard class="h-56" >
                            <template #header >
                                <div class="h-8">
                                    <h1 class="text-sm font-semibold " >Recent Actions</h1>

                                    <div class="font-medium grid grid-cols-2 gap-6 px-6 text-xs  py-4">
                                        <p class="pl-10 ">Name</p>
                                        <div class="grid grid-cols-5 gap-4">
                                            <p class="col-span-3 ">Reason Suggested</p>
                                            <p class="justify-end flex">Owner</p>
                                            <p class="justify-end flex">Action</p>
                                        </div>
                                    </div>
                                </div>
                            </template>

                            <div class="h-48">
                                <div class="hidden lg:grid grid-cols-2 text-xs items-center px-6 py-1 my-1 border border-slate-800/50 dark:border-slate-100/50 rounded-md shadow-md ">
                                    <div class="flex items-center gap-4">
                                    <img src="../../../assets/cloud.png" alt="" class="size-8" />
                                    <p class="">IMG_3040.HEIC</p>
                                    </div>
                                    <div class="grid grid-cols-5 items-center">
                                        <p class="col-span-3">You created Jun 18, 2023</p>
                                        <p class="justify-end flex items-center gap-2">
                                        <UAvatar icon="i-heroicons-photo" size="xs" />me
                                        </p>
                                        <p class="justify-end flex items-center">
                                            <UButton
                                            icon="i-carbon-overflow-menu-vertical"
                                            size="sm"
                                            square
                                            variant="ghost"
                                            />
                                        </p>
                                    </div>
                                    
                                </div> 

                                <div class="hidden lg:grid grid-cols-2 text-xs items-center px-6 py-1 my-1 border border-slate-800/50 dark:border-slate-100/50 rounded-md shadow-md ">
                                    <div class="flex items-center gap-4">
                                    <img src="../../../assets/cloud.png" alt="" class="size-8" />
                                    <p class="">IMG_3040.HEIC</p>
                                    </div>
                                    <div class="grid grid-cols-5 items-center">
                                        <p class="col-span-3">You created Jun 18, 2023</p>
                                        <p class="justify-end flex items-center gap-2">
                                        <UAvatar icon="i-heroicons-photo" size="xs" />me
                                        </p>
                                        <p class="justify-end flex items-center">
                                            <UButton
                                            icon="i-carbon-overflow-menu-vertical"
                                            size="sm"
                                            square
                                            variant="ghost"
                                            />
                                        </p>
                                    </div>
                                    
                                </div> 

                            </div>
                        </UCard>
                    </div>

                    <div>
                        <UCard class="h-56">
                            <PieChart :chart-data="PieConfig" :height="250"/>
                        </UCard>
                    </div>
                   
                </div>

                <div class="h-28 rounded-md border dark:border-none shadow-lg px-4 py-2 " >
                    <BarChart :chartData="testData" :height="150"  />
                    <Graph />
                </div>

            </div>
        </UCard>
    </div>
  
</template>


<style>

</style>