<template>
  <div>
    <b-row>
      <b-col>
        <h3>Select country</h3>
        <b-form-select
          v-model="country_sel"
          :options="countires_list"
        ></b-form-select>
        
      </b-col>
      <b-col><h3>Select Category</h3>
        <b-form-select
          v-model="category_sel"
          :options="category_opt"
        ></b-form-select>
        </b-col>
      <b-col><b-button class="ml-1" v-on:click="display()">Get Graph</b-button></b-col>
    </b-row>
    <div class="center" style="height: 350px; overflow: auto" v-show="load">
      <radar-spinner :size="60" color="#000000" />
      <h2>Loading</h2>
    </div>

    <div v-show="show">
      <img :src="data" width="100%" height="80%" />
    </div>

    <!-- <img src="../assets/test.png" width="100%" height="80%">  -->
  </div>
  <!-- <button type="button" class="btn btn-danger" v-on:click="onDownload()">
    Download CSV File
  </button> -->
</template>


<script>
import Vue from "vue";
import db from "../firebaseinit";
import "firebase/storage";
import firebase from "firebase/app";
import axios from "axios";
import { RadarSpinner } from "epic-spinners";

// 'building','leisure','amenity','office','man_made','advertising','shop','craft','historic','landuse','tourism','boundary'
export default {
   components: {
     RadarSpinner
   },
  data() {
    return {
      show:false,
      api_url: "https://osm-stats-server.herokuapp.com",
      local_url: "http://127.0.0.1:5000",
      data: "",
      country_sel: "",
      category_sel: "",
      category_opt: [
        { value: "building", text: "Building" },
        { value: "leisure", text: "Leisure" },
        { value: "amenity", text: "Amenity" },
        { value: "office", text: "Office" },
        { value: "man_made", text: "Man Made" },
        { value: "shop", text: "Shop" },
        { value: "craft", text: "Craft" },
        { value: "historic", text: "Historic" },
        { value: "landuse", text: "Landuse" },
        { value: "tourism", text: "Tourism" },
        { value: "boundary", text: "Boundary" },
      ],
      countires_list: [
        { value: "india", text: "India" },
        { value: "brazil", text: "Brazil" },
        { value: "china", text: "China" },
        { value: "russia", text: "Russia" },
        { value: "southafrica", text: "South Africa" },
      ],
      countires: ["india", "brazil", "china", "russia", "south africa"],
      load:false
      // store:firebase.storage(),
    };
  },
  created() {},
  methods: {
    display() {
      if(this.country_sel!=""&&this.category_sel!=""){
        this.load=true
        this.show=false
      axios
        .get(this.api_url + "/osmapi/pygraph/"+this.country_sel+"/" + this.category_sel)
        .then((res) => {
          // console.log(res);
          // this.countires_list[country]["img"] = "data:image/png;base64, " + res.data;
          // console.log(this.countires_list);
          this.data = "data:image/png;base64, " + res.data;
          this.load=false
          this.show=true
        });
      }
      else{
        alert("Please select the options")
      }
    },
  },
};
</script>

<style>
  .radar-spinner {
  align-items: center !important;
  display: inline-table;
}
</style>
