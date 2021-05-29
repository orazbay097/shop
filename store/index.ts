import { Context } from "@nuxt/types";
import { ActionTree, MutationTree } from "vuex";
import { Good } from "~/types";
export const state = () => ({
  groupNames: [] as string[]
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  setGroupNames: (state, groupNames: string[]) =>
    (state.groupNames = groupNames)
};

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, { $content }: Context) {
    const groupNames = (
      await $content("")
        .only(["groupName"])
        .sortBy("createdAt", "asc")
        .fetch()
    ).map((item: Good) => item.groupName);
    commit("setGroupNames", Array.from(new Set(groupNames)));
  }
};
