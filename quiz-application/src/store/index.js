import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'


Vue.use(vue)
export default new  Vuex.store({

    state:{
        Question:[],
        current:0,
        difficultyLevel: null
    },

    mutations:{
        SET_DIFFICULTY(state,difficulty){
            state.difficultyLevel = difficulty
        },
        SET_QUESTION(state,data){
            state.Question = data
        }

    },
    
    actions:{
        beginQuiz:({commit},difficulty) => {
            commit('SET_DIFFICULTY',difficulty)
            fetch(`https://opentdb.com/api.php?amount=10&category=31&difficulty=${state.difficultyLevel}&type=multiple`)
                .then(response => response.json())
                .then(data=>{
                    commit('SET_QUESTION',data.results)
                    console.log(state.Question)
                })
                .catch(error => console.log(error)) 
                 
        }
    },       
})
