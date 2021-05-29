<template>
  <div>
    <h1>{{ good.slug }}</h1>
    <img :src="good.picture" alt="picture" />
    <article><nuxt-content :document="good" /></article>
  </div>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import { Good } from "~/types";
export default {
  async asyncData({ $content, params, error, route }: Context) {
    try {
      const good = await $content(params.slug).fetch();
      if (route.path.split("/")[1] !== (good as Good).groupName)
        throw new Error();
      return { good };
    } catch (e) {
      error({ statusCode: 404 });
    }
  }
};
</script>

<style></style>
