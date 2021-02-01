import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'


Vue.use(vue)
export default new  Vuex.store({

    state:{
        selectIndex: null,
        correcIndex: null,
        correctAnswers: 0,
        answered: false,
        shuffledAnswers:[],
        Question:[],
        current:0,
        difficultyLevel: null
    },

    mutations:{

        SUBMIT(state, iscorrect){
            if(iscorrect){
                state.correctAnswers++
            }
            state.answered = true
        },
        SELECTED_ANSWER(state,index){
            console.log(index)
            state.selectIndex = index
        },
        SHUFFLE_ANSWER(state){
            var options;
            Options =  _.concat(state.Question[state.current].incorrect_answers,state.Question[state.current].correct_answer)
            state.shuffledAnswers =  _.shuffle(Options)
            state.correcIndex = state.shuffledAnswers.indexOf(state.Question[state.current].correct_answer)
        },
        NEXT(state){
            state.current++
        },
        SET_DIFFICULTY(state,difficulty){
            state.difficultyLevel = difficulty
        },
        SET_QUESTION(state,data){
            state.Question = data
        }

    },
    
    actions:{
        
        submit:({commit,state}) =>{
            let iscorrect= false
            if(state.selectedAnswer === state.correcIndex){
                iscorrect = true
            }
            commit('SUBMIT',iscorrect)
        },

        selectedAnswer:({commit},index)=>{
            commit('SELECTED_ANSWER',index)
        },

        next:({commit}) = >{
            commit('NEXT')
        },  

        beginQuiz:({commit,state},difficulty) => {
            commit('SET_DIFFICULTY',difficulty)
            fetch(`https://opentdb.com/api.php?amount=10&category=31&difficulty=${state.difficultyLevel}&type=multiple`)
                .then(response => response.json())
                .then(data=>{
                    commit('SET_QUESTION',data.results)
                    commit("SHUFFLE_ANSWER")
                })
                .catch(error => console.log(error)) 

        }
    },       
})
