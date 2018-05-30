import appService from '../app.service';

/* eslint-disable no-param-reassign */

const state = {
  posts: [],
  categoryId: 0,
};

const getters = {
  posts: s => s.posts,
};

const actions = {
  updateCategory(context, categoryId) {
    appService.getPosts(categoryId)
      .then((data) => {
        context.commit('updateCategory', { categoryId, posts: data });
      });
  },
};

const mutations = {
  updateCategory(s, category) {
    s.categoryId = category.categoryId;
    s.posts = category.posts;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
