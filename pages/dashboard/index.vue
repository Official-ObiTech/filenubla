<script setup lang="ts">
definePageMeta({
  // middleware: function (to, from) {
  //   const auth = useAuth();
  //   console.log({ auth });
  //   if (!auth.loggedIn) {
  //     return navigateTo("/");
  //   }
  // },
});


const route = useRoute();
const router = useRouter();
</script>


<template>
  <div class="h-screen bg-slate-100/50 container mx-auto lg:px-4 dark:bg-slate-800">
    <div class="top-0 left-0 right-0 sticky bg-background/75 backdrop-blur z-50 ">
      <dashborad-topnavbar />
    </div>      

    <div class="lg:grid grid-cols-6 grid-flow-col gap-4  px-3 md:px-5">
      <div id="first-div" class=" "  >
        
        <add-button />
      
          <div class="no-scrollbar overflow-y-auto h-96 lg:block hidden ">
            <dashborad-side-bar  />
          </div>
      </div>

      <div id="second-div " class="col-span-5 mt-2 rounded-xl  lg:pb-0 pb-6  ">
        <UCard class=" no-scrollbar overflow-y-auto " :ui="{ header : {padding: 'pb-2'}}" >

          <template #header >
            <div class="h-16 ">
              <h1 class="text-lg lg:text-3xl font-light">Welcome to FileNubla </h1>
            </div>

            <div class="hidden lg:grid grid-cols-5 gap-6 px-4 ">
              <p class="text-sm font-bold ">Image</p>
              <p class="text-sm font-bold ">Name</p>
              <p class="text-sm font-bold ">Reason Suggested</p>
              <p class="text-sm font-bold justify-center flex">Owner</p>
              <p class="text-sm font-bold justify-center flex">Action</p>
            </div>

            <div class="lg:hidden grid grid-cols-2 gap-6 px-6 ">
              <p class="text-sm font-bold justify-center ">Suggested</p>
              <p class="text-sm font-bold justify-end flex "> Activity</p>
            </div>

          </template>

          <div class="lg:h-80  h-64 text-sm ">

            <div class="lg:hidden grid grid-cols-4 px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
              <img src="../../assets/cloud.png" alt="" class="size-8" />
              <div class="col-span-2">
                <p class="">IMG_753.JPG</p>
                <p class="text-xs">You opened Jun 30, 2023</p>
              </div>
                <p class="justify-end flex items-center">Action</p>
            </div>
            
            <div class="lg:hidden grid grid-cols-4 px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
              <img src="../../assets/cloud.png" alt="" class="size-8" />
              <div class="col-span-2">
                <p class="">IMG_753.JPG</p>
                <p class="text-xs">You opened Jun 30, 2023</p>
              </div>
                <p class="justify-end flex items-center">Action</p>
            </div>

            <div class="lg:hidden grid grid-cols-4 px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
              <img src="../../assets/cloud.png" alt="" class="size-8" />
              <div class="col-span-2">
                <p class="">IMG_753.JPG</p>
                <p class="text-xs">You opened Jun 30, 2023</p>
              </div>
                <p class="justify-end flex items-center">Action</p>
            </div>

            <div class="lg:hidden grid grid-cols-4 px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
              <img src="../../assets/cloud.png" alt="" class="size-8" />
              <div class="col-span-2">
                <p class="">IMG_753.JPG</p>
                <p class="text-xs">You opened Jun 30, 2023</p>
              </div>
                <p class="justify-end flex items-center">Action</p>
            </div>

            <div class="lg:hidden grid grid-cols-4 px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
              <img src="../../assets/cloud.png" alt="" class="size-8" />
              <div class="col-span-2">
                <p class="">IMG_753.JPG</p>
                <p class="text-xs">You opened Jun 30, 2023</p>
              </div>
                <p class="justify-end flex items-center">Action</p>
            </div>

            <div class="lg:hidden grid grid-cols-4 px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
              <img src="../../assets/cloud.png" alt="" class="size-8" />
              <div class="col-span-2">
                <p class="">IMG_753.JPG</p>
                <p class="text-xs">You opened Jun 30, 2023</p>
              </div>
                <p class="justify-end flex items-center">Action</p>
            </div>

            <div class="hidden lg:grid grid-cols-5 gap-6  px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md m-auto">
              <img src="../../assets/cloud.png" alt="" class="size-8" />
              <p class="">IMG_753.JPG</p>
              <p class="">You opened Jun 30, 2023</p>
              <p class="justify-center flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me1
              </p>
              <p class="justify-center flex items-center">Action</p>
            </div>



            <div class="hidden lg:grid grid-cols-5 gap-6  px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
              <img src="../../assets/cloud.png" alt="" class="size-8" />
              <p class="">GSIB628.MP4</p>
              <p class="">You opened Jun 19, 2023</p>
              <p class="justify-center flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
              </p>
              <p class="justify-center flex items-center">Action</p>
            </div>

            <div class="hidden lg:grid grid-cols-5 gap-6  px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
              <img src="../../assets/cloud.png" alt="" class="size-8" />
              <p class="">CVXW4913.MP$</p>
              <p class="">You created Jun 18, 2023</p>
              <p class="justify-center flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
              </p>
              <p class="justify-center flex items-center">Action</p>
            </div>

            <div class="hidden lg:grid grid-cols-5 gap-6  px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
              <img src="../../assets/cloud.png" alt="" class="size-8" />
              <p class="">IMG_1304.HEIC</p>
              <p class="">You created Jun 18, 2023</p>
              <p class="justify-center flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
              </p>
              <p class="justify-center flex items-center">Action</p>
            </div>

            <div class="hidden lg:grid grid-cols-5 gap-6  px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
              <img src="../../assets/cloud.png" alt="" class="size-8" />
              <p class="">IMG_3040.HEIC</p>
              <p class="">You created Jun 18, 2023</p>
              <p class="justify-center flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
              </p>
              <p class="justify-center flex items-center">Action</p>
            </div>           
            <div class="hidden lg:grid grid-cols-5 gap-6  px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
              <img src="../../assets/cloud.png" alt="" class="size-8" />
              <p class="">IMG_1304.HEIC</p>
              <p class="">You created Jun 18, 2023</p>
              <p class="justify-center flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
              </p>
              <p class="justify-center flex items-center">Action</p>
            </div>

            <div class="hidden lg:grid grid-cols-5 gap-6  px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
              <img src="../../assets/cloud.png" alt="" class="size-8" />
              <p class="">IMG_3040.HEIC</p>
              <p class="">You created Jun 18, 2023</p>
              <p class="justify-center flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
              </p>
              <p class="justify-center flex items-center">Action</p>
            </div>   

            <div class="hidden lg:grid grid-cols-5 gap-6  px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
              <img src="../../assets/cloud.png" alt="" class="size-8" />
              <p class="">IMG_1304.HEIC</p>
              <p class="">You created Jun 18, 2023</p>
              <p class="justify-center flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
              </p>
              <p class="justify-center flex items-center">Action</p>
            </div>

            <div class="hidden lg:grid grid-cols-5 gap-6  px-4 py-2 my-2 border border-slate-800/50 dark:border-slate-100/50 rounded-lg shadow-md ">
              <img src="../../assets/cloud.png" alt="" class="size-8" />
              <p class="">IMG_3040.HEIC</p>
              <p class="">You created Jun 18, 2023</p>
              <p class="justify-center flex items-center gap-2">
                <UAvatar icon="i-heroicons-photo" size="sm" />me
              </p>
              <p class="justify-center flex items-center">Action</p>
            </div>           
          
          </div>

        </UCard>
      </div>
    
   </div>
</div>
</template>

<style>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .no-scrollbar::-webkit-scrollbar {
      display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .no-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
  }
</style>

