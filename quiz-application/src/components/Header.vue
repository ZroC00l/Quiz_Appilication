<template>
    <div>
        <header>
            <h1>Anime Quiz</h1>
            <div id="resetButton">
                <button @click="$store.commit('RESETQUIZ')">Reset</button>
            </div>
        </header>
    </div>
</template>

<script>
//import { mapActions } from 'vuex'
export default {
    name: 'Header'    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap');
header{
    width: 100%;
    display: flex;
    justify-content:space-around;
    background: black;
    margin-top: -5%;
}
h1{
    margin-right: 50%;
    font-family: 'Bungee Inline', cursive;
    font-weight: 40px;
    color:burlywood;
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
#resetButton{
    margin-top: 3%;
}
.correct{
    font-size: 2rem;
    font-weight: 600;
}
</style>


