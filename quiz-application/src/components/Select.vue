<template>
    <div>
        <div>
            <form>
                <label for="difficulty">Select Level of Difficulty</label>
                <select v-model="difficulty" name="difficulty" id="difficulty">
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
                </select>
                <br /><br/>
                <label for="amount">Select Number of Questions</label>
                <input v-model.number="amount" type="number" name="amount" id="amount">
                <br /><br/>
                <button @click.prevent="startQuiz()">Start Quiz</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            difficulty:'',
            amount:''
        }
    },
    methods:{
        startQuiz(){
            this.$store.dispatch('beginQuiz', this.difficulty,this.amount)
        
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');
label{
    font-family: 'Yusei Magic', sans-serif;
    font-size:15px;
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
#difficulty option{
    font-family: 'Yusei Magic', sans-serif;
    font-size:15px;
}
form{
    margin-top: 2%;
}
#difficulty, #amount{
    margin-left: 1%;
}
</style>