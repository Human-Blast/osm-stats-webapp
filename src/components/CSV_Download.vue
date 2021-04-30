<template>
 <div>
   <img :src="data">


 </div>
  <!-- <button type="button" class="btn btn-danger" v-on:click="onDownload()">
    Download CSV File
  </button> -->
</template>


<script>
import db from "../firebaseinit";
import "firebase/storage";
import firebase from 'firebase/app'
import axios from 'axios'

export default {
  data() {
    return {
      data:""
      // store:firebase.storage(),
    };
  },
  created(){
    axios.get(`http://127.0.0.1:5000/api/pygraph/russia/craft`).then((res)=>{
      console.log(res.data)
      this.data="data:image/png;base64, "+res.data
    })
    
  },
  methods: {
   
  },
};
</script>