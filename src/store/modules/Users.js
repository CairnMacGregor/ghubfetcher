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
        commit('clearUsers', 'updateInput')
        console.log("This is before the axios get request " + state.SearchInput) 
        const res = await  axios.get(`https://api.github.com/search/users?q=${state.SearchInput}&?client_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.VUE_APP_GITHUB_CLIENT_SECRET}`);
        console.log("This is after the axios get request " + state.SearchInput)
        commit('setUsers' , res.data);
       
    },

};
const mutations = {
    clearUsers: ( state) => (state.Users.length = 0),
    clearInput: ( state) => (state.SearchInput = ""),
    setUsers: (state, Users) => (state.Users.push (Users)),
    updateInput: (state, Search) => (state.SearchInput = Search, console.log("Mutation updateInput = " + Search))
    
};

export default{
    state,
    getters,
    actions,
    mutations
};