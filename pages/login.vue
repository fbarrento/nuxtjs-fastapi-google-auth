<script>

export default {
  name: 'LoginPage',
  head () {
    return {
      script: [
        {
          src: 'https://accounts.google.com/gsi/client',
          async: true,
          defer: true
        }
      ]
    }
  },

  mounted () {
    window.handleGoogleAuthResponse = (response) => {
      this.handleGoogleAuthResponse(response)
    }
  },

  methods: {
    async handleGoogleAuthResponse (response) {
      console.log(response.credential)
      try {
        await this.$auth.loginWith('local', {
          data: {
            token: response.credential
          }
        })
      } catch (e) {

      }
    }

  }

}

</script>

<template>
  <div class="h-screen flex justify-center bg-gray-50">
    <div class="flex flex-col w-full max-w-7xl items-center">
      <h1 class="text-3xl font-semibold py-12">
        NuxtJs - FastApi
      </h1>
      <div class="drop-shadow-lg bg-white w-4/12 py-6 px-12 rounded">
        <p class="text-center text-gray-500 mb-6">
          Log in to continue:
          <span class="font-bold block">
            To your team's site.
          </span>
        </p>

        <form>
          <input
            type="email"
            class="border border-gray-300 w-full rounded py-2 px-2"
            placeholder="Enter email"
          >
          <div class="mt-6">
            <button
              class="rounded w-full bg-blue-700 py-3 text-white text-sm font-semibold"
            >
              Continue
            </button>
          </div>
        </form>

        <div class="text-center text-gray-500 my-4 text-sm">
          OR
        </div>

        <div class="mb-6">
          <button
            id="LoginButton"
            ref="login-button"
            class="rounded w-full shadow-md
                    border border-gray-100
                    py-3 text-gray-500 font-semibold text-sm"
            @click="handleGoogleAuthResponse"
          >
            Continue with Google
          </button>
        </div>

        <div class="mb-6">
          <button class="rounded w-full shadow-md border border-gray-100 py-3 text-gray-500 font-semibold text-sm">
            Continue with Microsoft
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.g_id_signin iframe {
  width: 700px;
}
</style>
