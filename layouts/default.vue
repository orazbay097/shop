<template>
  <v-app>
    <v-navigation-drawer fixed app permanent>
      <v-list>
        <v-list-item
          v-for="(groupName, i) in $store.state.groupNames"
          :key="i"
          :to="'/' + groupName"
          router
        >
          <v-list-item-content>
            <v-list-item-title v-text="groupName" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-toolbar-title>Shop</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
export default {};
</script>
