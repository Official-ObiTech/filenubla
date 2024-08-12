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
        <UCard class=" no-scrollbar overflow-y-auto" >

          <template #header >
            <div class="h-16 ">
              <h1 class="text-lg lg:text-3xl font-light">Welcome to FileNubla </h1>
            </div>
          </template>

          <div class="lg:h-80  h-64">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam ea dolorum.
              Rerum quo dignissimos accusamus sed eveniet, eligendi earum alias fugiat temporibus 
              autem magni perspiciatis sapiente provident, eum possimus? Dolore numquam excepturi 
              animi aspernatur praesentium quisquam earum maxime ducimus repellendus cum! Placeat 
              porro natus, maiores excepturi iure omnis quod error magni. Quas in a consequuntur rerum
              nihil. Magni iste laboriosam porro repudiandae earum doloribus natus ab cumque dicta quo
              cum consequatur ullam ratione facere assumenda tempora odio voluptate aliquid, quas autem 
              culpa aspernatur iure ducimus accusantium! Aut et, nesciunt illo quas, amet eaque minus eum
              , ex beatae eveniet saepe?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam ea dolorum.
              Rerum quo dignissimos accusamus sed eveniet, eligendi earum alias fugiat temporibus 
              autem magni perspiciatis sapiente provident, eum possimus? Dolore numquam excepturi 
              animi aspernatur praesentium quisquam earum maxime ducimus repellendus cum! Placeat 
              porro natus, maiores excepturi iure omnis quod error magni. Quas in a consequuntur rerum
              nihil. Magni iste laboriosam porro repudiandae earum doloribus natus ab cumque dicta quo
              cum consequatur ullam ratione facere assumenda tempora odio voluptate aliquid, quas autem 
              culpa aspernatur iure ducimus accusantium! Aut et, nesciunt illo quas, amet eaque minus eum
              , ex beatae eveniet saepe?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam ea dolorum.
              Rerum quo dignissimos accusamus sed eveniet, eligendi earum alias fugiat temporibus 
              autem magni perspiciatis sapiente provident, eum possimus? Dolore numquam excepturi 
              animi aspernatur praesentium quisquam earum maxime ducimus repellendus cum! Placeat 
              porro natus, maiores excepturi iure omnis quod error magni. Quas in a consequuntur rerum
              nihil. Magni iste laboriosam porro repudiandae earum doloribus natus ab cumque dicta quo
              cum consequatur ullam ratione facere assumenda tempora odio voluptate aliquid, quas autem 
              culpa aspernatur iure ducimus accusantium! Aut et, nesciunt illo quas, amet eaque minus eum
              , ex beatae eveniet saepe?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam ea dolorum.
              Rerum quo dignissimos accusamus sed eveniet, eligendi earum alias fugiat temporibus 
              autem magni perspiciatis sapiente provident, eum possimus? Dolore numquam excepturi 
              animi aspernatur praesentium quisquam earum maxime ducimus repellendus cum! Placeat 
              porro natus, maiores excepturi iure omnis quod error magni. Quas in a consequuntur rerum
              nihil. Magni iste laboriosam porro repudiandae earum doloribus natus ab cumque dicta quo
              cum consequatur ullam ratione facere assumenda tempora odio voluptate aliquid, quas autem 
              culpa aspernatur iure ducimus accusantium! Aut et, nesciunt illo quas, amet eaque minus eum
              , ex beatae eveniet saepe?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam ea dolorum.
              Rerum quo dignissimos accusamus sed eveniet, eligendi earum alias fugiat temporibus 
              autem magni perspiciatis sapiente provident, eum possimus? Dolore numquam excepturi 
              animi aspernatur praesentium quisquam earum maxime ducimus repellendus cum! Placeat 
              porro natus, maiores excepturi iure omnis quod error magni. Quas in a consequuntur rerum
              nihil. Magni iste laboriosam porro repudiandae earum doloribus natus ab cumque dicta quo
              cum consequatur ullam ratione facere assumenda tempora odio voluptate aliquid, quas autem 
              culpa aspernatur iure ducimus accusantium! Aut et, nesciunt illo quas, amet eaque minus eum
              , ex beatae eveniet saepe?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam ea dolorum.
              Rerum quo dignissimos accusamus sed eveniet, eligendi earum alias fugiat temporibus 
              autem magni perspiciatis sapiente provident, eum possimus? Dolore numquam excepturi 
              animi aspernatur praesentium quisquam earum maxime ducimus repellendus cum! Placeat 
              porro natus, maiores excepturi iure omnis quod error magni. Quas in a consequuntur rerum
              nihil. Magni iste laboriosam porro repudiandae earum doloribus natus ab cumque dicta quo
              cum consequatur ullam ratione facere assumenda tempora odio voluptate aliquid, quas autem 
              culpa aspernatur iure ducimus accusantium! Aut et, nesciunt illo quas, amet eaque minus eum
              , ex beatae eveniet saepe?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam ea dolorum.
              Rerum quo dignissimos accusamus sed eveniet, eligendi earum alias fugiat temporibus 
              autem magni perspiciatis sapiente provident, eum possimus? Dolore numquam excepturi 
              animi aspernatur praesentium quisquam earum maxime ducimus repellendus cum! Placeat 
              porro natus, maiores excepturi iure omnis quod error magni. Quas in a consequuntur rerum
              nihil. Magni iste laboriosam porro repudiandae earum doloribus natus ab cumque dicta quo
              cum consequatur ullam ratione facere assumenda tempora odio voluptate aliquid, quas autem 
              culpa aspernatur iure ducimus accusantium! Aut et, nesciunt illo quas, amet eaque minus eum
              , ex beatae eveniet saepe?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam ea dolorum.
              Rerum quo dignissimos accusamus sed eveniet, eligendi earum alias fugiat temporibus 
              autem magni perspiciatis sapiente provident, eum possimus? Dolore numquam excepturi 
              animi aspernatur praesentium quisquam earum maxime ducimus repellendus cum! Placeat 
              porro natus, maiores excepturi iure omnis quod error magni. Quas in a consequuntur rerum
              nihil. Magni iste laboriosam porro repudiandae earum doloribus natus ab cumque dicta quo
              cum consequatur ullam ratione facere assumenda tempora odio voluptate aliquid, quas autem 
              culpa aspernatur iure ducimus accusantium! Aut et, nesciunt illo quas, amet eaque minus eum
              , ex beatae eveniet saepe?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam ea dolorum.
              Rerum quo dignissimos accusamus sed eveniet, eligendi earum alias fugiat temporibus 
              autem magni perspiciatis sapiente provident, eum possimus? Dolore numquam excepturi 
              animi aspernatur praesentium quisquam earum maxime ducimus repellendus cum! Placeat 
              porro natus, maiores excepturi iure omnis quod error magni. Quas in a consequuntur rerum
              nihil. Magni iste laboriosam porro repudiandae earum doloribus natus ab cumque dicta quo
              cum consequatur ullam ratione facere assumenda tempora odio voluptate aliquid, quas autem 
              culpa aspernatur iure ducimus accusantium! Aut et, nesciunt illo quas, amet eaque minus eum
              , ex beatae eveniet saepe?
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

