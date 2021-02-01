<template>
    <div>
        <div class="container">
            <div v-if="Question.length">
                <h1><span>Question:{{current + 1}}</span></h1>
                <h2>{{Question[current].question}}</h2>
            <div class="options">
                <ul v-for="(options, index) in shuffledAnswers" :key="index">
                    <li @click="selectedAnswer(index)">{{options}}</li>
                </ul> 
            </div>   
            <div class="nav">
                <button @click="submit">Submit</button>
                <button>Next</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions(['next','selectedAnswer','submit'])
    },
    computed:{
        ...mapState(['Question','current','shuffledAnswers']),
    },
    watch:{
        current:{
            handler(){
                this.$store.commit('SHUFFLE_ANSWER')
            }
        }
    },
}
</script>

<style scoped>
ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
}
ul li{
    border: 1px solid #ddd;
    margin-top:-1px;
    background-color: #f6f6f6;
    padding: 12px;
}
li:hover{
    background:#FFFF;
    cursor:pointer;
}

</style>