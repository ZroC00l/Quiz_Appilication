import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'


Vue.use(vue)
export default new  Vuex.store({

    state:{
        difficultyLevel: null
    },

    mutations:{
        SET_DIFFICULTY(state,difficulty){
            state.difficultyLevel = difficulty
        }
    },
    
    actions:{
        beginQuiz:({commit},difficulty) => {
            commit('SET_DIFFICULTY',difficulty)
        }
    },       
})
