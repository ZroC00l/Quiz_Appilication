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
                <button @click.prevent="startQuiz()">Start Quiz</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            difficulty:''
        }
    },
    methods:{
        startQuiz(){
            this.$store.dispatch('beginQuiz', this.difficulty)
        }
    }
}
</script>