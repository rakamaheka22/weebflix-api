<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <button @click="doRegisterAccount">
      Register
    </button>

    <button @click="doLogin">
      Login
    </button>

    <button @click="doLogout">
      Logout
    </button>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  mounted() {
    // this.fetchListFilms();
    // this.fetchData();
    // this.asinkronKode();
    // this.hitApi();
    firebase.auth().onAuthStateChanged((res) => {
      if (res) console.log(true);
      else console.log(false);
    });
  },
  methods: {
    async fetchListFilms() {
      try {
        const { data } = await this.axios.get('https://ghibliapi.herokuapp.com/films');
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchData() {
      try {
        const response = await fetch('https://ghibliapi.herokuapp.com/people');
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    },
    inputData() {
      setTimeout(() => {
      }, 1000);
      const input = 'INPUT DATA';
      return input;
    },
    async asinkronKode() {
      console.log('Contoh Syncrounous');
      console.log('START');
      const input = await this.inputData();
      console.log(input);
      console.log('END');

      console.log('Contoh Asyncrounous');
      console.log('START');
      setTimeout(() => {
        console.log('INPUT DATA');
      }, 1000);
      console.log('END');
    },
    hitApi() {
      const data = [1, 2, 3, 4, 5];

      const api = new Promise((resolve, reject) => {
        // janji untuk memberikan data
        if (data && data.length > 0) {
          resolve(data);
        }
        reject(new Error('tidak ada data'));
      });

      api.then((response) => {
        console.log(response);
      }).catch((error) => console.error(error));
    },
    doRegisterAccount() {
      firebase
        .auth()
        .createUserWithEmailAndPassword('fulan2@gmail.com', 'rahasia')
        .then((res) => {
          console.log(res);
        }).catch((err) => console.error(err));
    },
    doLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword('fulan2@gmail.com', 'rahasia')
        .then((res) => {
          console.log(res);
        }).catch((err) => console.error(err));
    },
    doLogout() {
      firebase
        .auth()
        .signOut()
        .then((res) => {
          console.log(res);
        }).catch((err) => console.error(err));
    },
  },
};
</script>
