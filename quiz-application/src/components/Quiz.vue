<template>
    <div>
        <div class="container">
            <div v-if="Question.length">
                <h1><span>Question:{{current + 1}}</span></h1>
                <h2>{{Question[current].question}}</h2>
            <div class="nav">
                <button>Submit</button>
                <button>Next</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    methods:{
        ...mapActions(['next'])
    },
    computed:{
        ...mapState(['Question','current']),
    },
}
</script>