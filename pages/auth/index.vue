<script setup lang="ts">
const signIn = async (type: string) => {
  console.log("here tho");
  const res = await $fetch("/api/auth/login/google");
  console.log({ res });
};
</script>

<template>
  <div class="flex items-center flex-col">
    <div class="text-5xl mt-16 font-bold mb-9 items-center max-w-xs">
      Sign up
    </div>

    <div class="w-full flex flex-col items-center max-w-sm mb-20">
      <div class="flex w-full flex-col">
        <div class="space-y-4">
          <NuxtLink to="/api/login" external> Sign in </NuxtLink> <br />
          <NuxtLink to="/api/register" external> Sign up </NuxtLink>
          <UButton
            @click="signIn('google')"
            block
            color="gray"
            variant="ghost"
            class="border flex items-center py-2.5"
            label=" Continue with Google"
          />
          <UButton
            block
            color="gray"
            variant="ghost"
            class="border flex items-center py-2.5"
            label="Continue with GitHub"
          />
        </div>

        <div
          class="flex items-center justify-center w-full h-11 pointer-events-none flex-inital"
        >
          <div
            class="w-full h-pv border-b border-gray-500 dark:border-gray-300 visible"
          ></div>
        </div>

        <div class="">
          <UForm>
            <UFormGroup
              label="Email"
              help="Use an organization email to easily collaborate with teammates."
            >
              <UInput
                placeholder="Enter your email address...."
                icon="i-heroicons-envelope"
              />
            </UFormGroup>

            <UButton
              block
              type="submit"
              class="py-2.5 mt-8 dark:text-white dark:hover:bg-blue-500 dark:bg-blue-600"
              >Continue with Email</UButton
            >
          </UForm>
        </div>
      </div>

      <div
        class="w-full mt-16 mb-0 text-xs text-gray-500 dark:gray-200 text-balance text-center"
      >
        <p class="mb-0">
          By continuing, you acknowledge that you understand and agree to the
          <NuxtLink
            class="text-gray-400 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 text-xs"
            >Terms & Conditions</NuxtLink
          >
          and
          <NuxtLink
            class="text-gray-400 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 text-xs"
            >Privacy Policy</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
</template>
