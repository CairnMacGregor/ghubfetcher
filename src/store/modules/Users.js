import axios from 'axios'


const state = {
    Users: [
      ],
    SearchInput: ""
};
const getters = {
    allUsers: state => state.Users,
    newInput(state){
        return state.SearchInput
    }

};
const actions = {
    async fetchUsers({ commit }){
        const res = await  axios.get(`https://api.github.com/search/users?q=${state.SearchInput}&?client_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.VUE_APP_GITHUB_CLIENT_SECRET}`);

        commit('clearUsers')
        commit('setUsers' , res.data);
    },

};
const mutations = {
    clearUsers: ( state) => (state.Users = []),
    setUsers: (state, Users) => (state.Users.push (Users)),
    updateInput: (state, input) => (state.SearchInput = (input))
    
};

export default{
    state,
    getters,
    actions,
    mutations
};