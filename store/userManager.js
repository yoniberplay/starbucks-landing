export const state = () => ({
  drawer: false
  })
  
  
  export const mutations = {  
    setdrawer(state) {
      state.drawer = !state.drawer;
    },
  
  }
  
  export const getters = {
    getdrawer: state => state.drawer
  }