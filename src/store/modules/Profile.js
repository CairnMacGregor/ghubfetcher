import axios from 'axios'



const state = {
    User: {},
    UserSearch:""
};

const getters = {
    User: state => state.User,
};
const actions = {
    async fetchUser({ commit }){
        


        const res = await  axios.get(`https://api.github.com/users/${state.UserSearch}?client_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.VUE_APP_GITHUB_CLIENT_SECRET}`);
        // commit('clearUser')
        commit('setUser', res.data);

       
    },


};
const mutations = {
    clearUser: ( state) => (state.User = ""),
    setUser: (state, User) => (state.User = (User)),
    updateUserName: (state, UserSearch) => (state.UserSearch =  (UserSearch))
};

export default{
    state,
    getters,
    actions,
    mutations
};