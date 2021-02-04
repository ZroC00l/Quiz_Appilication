    <template>
    <div>
        <div class="container">
            <h1 v-if="loading">Loading...</h1>
            <div v-if="Question.length">
                <h1><span>Question:{{current + 1}}</span></h1>
                <h2>{{Question[current].question | replace | apostroph}}</h2>
            <div class="options">
                <ul v-for="(options, index) in shuffledAnswers" :key="index">
                    <li @click="selectedAnswer(index)" :class="checkAnswerClass(index)">{{options}}</li>
                </ul> 
            </div>   
            <div class="nav">
                <button @click="submit" :disabled="selectedIndex == null || answered">Submit</button>
                <button @click="next" :disabled="answered == false">Next</button>
            </div>
            </div>
            <div id="scoreBoard">
                <h1>Score:<span>{{correctAnswers}}/{{Question.length}}</span></h1>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions(['next','selectedAnswer','submit']),
        checkAnswerClass(index){
            let answerClass = ''
            if(!this.answered && this.selectedIndex === index){
                answerClass = 'selected'
            }
            else if(this.answered && this.correctIndex === index){
                answerClass = 'correctanswer'
            }
            else if(this.answered && this.selectedIndex === index && this.correctIndex !== index){
                answerClass = 'incorrectanswer'
            }
            return answerClass
        }
    },
    computed:{
        ...mapState(['loading','Question','current','selectedIndex','shuffledAnswers','correctIndex','answered','correctAnswers']),
    },
    filters:{
        replace: function(value){
            return value.replace(/&quot;/g,'"')
        },
        apostroph:function(value){
            return value.replace(/&#039;/g,"'")
        }
    },
    watch:{
        current:{
            handler(){
                this.$store.commit('RESET')
                this.$store.commit('SHUFFLE_ANSWER')
            }
        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');
#scoreBoard h1{
    margin-top: 50%;
    font-family: 'Yusei Magic', sans-serif;
    font-size:30px;
}
button {
  background-color:burlywood;
  font-family: 'Bungee Inline', cursive;
  border: none;
  color: black;
  margin-top: -10%;
  padding: 5px 30px ;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5%;

}
.container{
    display: flex;
    flex-direction: column;
    max-width: 700px;
    margin:auto;
    background:transparent;
}
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
.selected{
    background: skyblue;
}
.correctAnswer{
    background: springgreen;
}
.incorrectAnswer{
    background: tomato;
}

</style>