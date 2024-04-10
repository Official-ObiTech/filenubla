<script setup lang="ts"></script>

<template>
  <div>
    <div class="top-0 left-0 right-0 sticky bg-background/75 backdrop-blur">
      <DashboradNavTop />
    </div>

    <div class="flex items-center flex-col h-4/5">
      <div class="text-5xl mt-16 font-bold mb-9 items-center max-w-xs">
        Sign up
      </div>

      <LoginLink to="/api/login" external> Sign in </LoginLink>

      <RegisterLink to="/api/register" external> Sign up </RegisterLink>

      <div class="w-full flex flex-col items-center max-w-sm mb-20">
        <div class="flex w-full flex-col">
          <div class="space-y-4">
            <UButton
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
                class="py-2.5 mt-8 dark:text-white bg-primary dark:bg-primary"
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
    <div
      class="border-t border-gray-200 dark:border-gray-800 left-0 right-0 bottom-0"
    >
      <DashboradFooter />
    </div>
  </div>
</template>
