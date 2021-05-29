<template>
  <div>
    <h1 class="mb-4"><span class="grey--text">Group:</span> {{ groupName }}</h1>
    <v-card
      :to="`${good.groupName}/${good.slug}`"
      class="mb-2"
      v-for="(good, index) in goods"
      :key="index"
    >
      <v-card-title>{{ good.slug }}</v-card-title>
      <v-card-text class="d-flex">
        <img class=" mr-2" :src="good.smallPicture" alt="smallPicture" />
        {{ good.description }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
export default {
  async asyncData({ $content, params, error }: Context) {
    const groupName = params.group;
    const goods = await $content("")
      .where({ groupName })
      .fetch();

    if (!goods.length) return error({ statusCode: 404 });

    return { groupName, goods };
  }
};
</script>

<style></style>
