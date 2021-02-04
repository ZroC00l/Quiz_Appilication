import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'


Vue.use(Vuex)
export default new Vuex.Store({

    state:{
        loading: false,
        selectedIndex: null,
        correctIndex: null,
        correctAnswers: 0,
        answered: false,
        shuffledAnswers:[],
        Question:[],
        current:0,
        difficultyLevel: null,
        amountOFQuestions: 0
       
    },

    mutations:{
        START_LOADING(state){
            state.loading = true
        },
        STOP_LOADING(state){
            state.loading = false
        },
        RESETQUIZ(state){
            state.current = 0
            state.correctAnswers = 0
        },
        RESET(state){
            state.selectedIndex = null
            state.answered = false
        },
        SUBMIT(state, iscorrect){
            if(iscorrect){
                state.correctAnswers++
            }
            state.answered = true
        },
        SELECTED_ANSWER(state,index){
            console.log(index)
            state.selectedIndex = index
        },
        SHUFFLE_ANSWER(state){
            var Options
            Options =  _.concat(state.Question[state.current].incorrect_answers,state.Question[state.current].correct_answer)
            state.shuffledAnswers =  _.shuffle(Options)
            state.correctIndex = state.shuffledAnswers.indexOf(state.Question[state.current].correct_answer)
        },
        NEXT(state){
            state.current++
        },
        SET_DIFFICULTY(state,difficulty){
            state.difficultyLevel = difficulty
        },
        SET_AMOUNT(state,amount){
            state.amountOFQuestions = amount
        },
        SET_QUESTION(state,data){
            state.Question = data
        }

    },
    
    actions:{
        resetQuiz:({commit}) => {
            commit('RESTQUIZ')
        },
        submit:({commit,state}) =>{
            let iscorrect= false
            if(state.selectedIndex === state.correctIndex){
                iscorrect = true
            }
            commit('SUBMIT',iscorrect)
        },

        selectedAnswer:({commit},index)=>{
            commit('SELECTED_ANSWER',index)
        },

        next:({commit}) =>{
            commit('NEXT')
        },  

        beginQuiz:({commit,state},difficulty,amount) => {
            commit('SET_DIFFICULTY',difficulty)
            commit('SET_AMOUNT',amount)
            commit('START_LOADING')
            fetch(`https://opentdb.com/api.php?amount=${state.amountOFQuestions}&category=31&difficulty=${state.difficultyLevel}&type=multiple`)
                .then(response => response.json())
                .then(data=>{
                    commit('SET_QUESTION',data.results)
                    commit('STOP_LOADING')
                    commit("SHUFFLE_ANSWER")
                    commit('RESETQUIZ')
                })
                .catch(error => console.log(error)) 

        }
    },  
    modules:{
        
    }     
})
