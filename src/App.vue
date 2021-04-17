<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- <router-view/> -->
    <div class="container">
      <!-- {{db_data}} -->
      <button v-on:click="load_db()">Load</button>

      <div id="india" v-if="display">
        <div v-for="country in countires" :key="country.index">
          <div v-if="country == 'india'">
            <h2>{{ country }}</h2>
            <span v-show="false"> {{ (i = 0) }} </span>
            <div v-for="category in categories" :key="category.index">
              <h3>{{ category }}</h3>
              <div v-if="category != 'advertising'">
                <!-- <h4>{{ date }}</h4> -->
                <!-- <li>
                  {{ countires_list[country][i][category][date] }}
                </li> -->
                <div v-for="date in india_dates" :key="date.index">
                  <h4>{{ date }}</h4>
                   {{countires_list[country][i][category][date]['frequency']}}
                  <!-- <table border="true">
                  <tr>
                    <td>Date</td>
                    <td>Tag_Name</td>
                    <td>Frequency</td>
                  </tr>
                  
                  <tr>
                    <td>
                      {{date}}
                    </td>
                    
                    <td>
                      {{countires_list[country][i][category][date]['frequency']}}
                    </td>
                    <td>
                      {{countires_list[country][i][category][date]['tag_name']}}
                    </td>

                  </tr>
                  
                </table> -->
                  
                  <!-- <table border="true">
                    <thead>
                      <td>Tag Name</td>
                      <td>Frequency</td>
                    </thead> -->
                    <!-- <tbody>
                    <tr>
                      <td>
                        {{
                              countires_list[country][i][category][date][
                                "frequency"
                              ][0]
                            }}
                      </td>
                      <td>
                        {{
                              countires_list[country][i][category][date][
                                "tag_name"
                              ][0]
                            }}
                      </td>
                    </tr>
                    </tbody> -->
                    <!-- <div v-for="i in limiter" :key="i.index"> -->
                      <!-- <tbody>
                        <tr>
                          <td>
                            
                            
                            {{
                              countires_list[country][i][category][date][
                                "frequency"
                              ][0]
                            }}
                          </td>
                          <td>
                            {{
                              countires_list[country][i][category][date][
                                "tag_name"
                              ][0]
                            }}
                          </td>
                        </tr>
                      </tbody> -->
                    <!-- </div> -->
                  <!-- </table> -->
                </div>
              </div>
              <!-- <span v-show="false"> {{ i++ }} </span> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import db from "./firebaseinit";
import firebase from "firebase";
import About from "./views/About.vue";
export default {
  components: { About },
  data() {
    return {
      db_data: {},
      countires: ["india", "brazil", "china", "russia", "south africa"],
      list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      limiter: [0, 1, 2, 3, 4],
      upper_limit: 11,
      lower_limit: 0,
      display: false,
      categories: [
        "building",
        "leisure",
        "amenity",
        "office",
        "man_made",
        "advertising",
        "shop",
        "craft",
        "historic",
        "landuse",
        "tourism",
        "boundary",
      ],
      countires_list: {
        india: {},
        brazil: {},
        china: {},
        russia: {},
        "south africa": {},
      },
      countires_list_updated: {
        india: {},
        brazil: {},
        china: {},
        russia: {},
        "south africa": {},
      },
      count: 0,
      india_dates: [
        "20140101",
        "20150101",
        "20160101",
        "20170101",
        "20180101",
        "20190101",
        "20200101",
        "20210101",
      ],
      brazil_dates: [
        "20140101",
        "20150101",
        "20160101",
        "20170101",
        "20180101",
        "20190101",
        "20200101",
        "20210101",
      ],
      china_dates: [
        "20140101",
        "20150101",
        "20160101",
        "20170101",
        "20180101",
        "20190101",
        "20200101",
        "20210101",
      ],
      russia_dates: ["20160101", "20170101", "20180101", "20190101"],
      southafrica_dates: [
        "20170101",
        "20180101",
        "20190101",
        "20200101",
        "20210101",
      ],
    };
  },
  created() {},
  updated() {},
  methods: {
    load_db() {
      this.display = true;
      this.countires.forEach((country) => {
        db.ref("/osm_data/analyzed/" + country + "/top_5/data")
          .once("value", (snap) => {
            // console.log(country);
            this.countires_list[country] = snap.val();
            // console.log(this.countires_list[country]);
            // snap.val().forEach(snap_val=>{
            //   // this.categories.forEach(category=>{
            //   //   console.log(snap_val[category]);

            //   // })
            //   console.log(snap_val['office']);
            // })
          })
          .then((res) => {
            this.count++;
            this.update_status();
            // console.log("this is done");
          });
      });
    },
    update_status() {
      if (this.count == 5) {
        console.log("Update Done");
        this.countires.forEach((country, index) => {
          // console.log(ele+' '+index  );
          let i = 0;
          this.categories.forEach((category, _index) => {
            // console.log(country+' '+category);

            // console.log(this.countires_list[country][i][category]);
            if (country == "india" && category != "advertising") {
              this.india_dates.forEach((date, index) => {
                console.log(country + " " + category + " " + date);
                // console.log(this.countires_list[country][i][category]);
                console.log(
                  this.countires_list[country][i][category][date]["frequency"]
                );
                console.log(
                  this.countires_list[country][i][category][date]["tag_name"]
                );
              });
            }
            i++;
          });
        });

        // this.countires_list.forEach((element,index) => {
        //   let i = 0;
        //   console.log(index);
        //   // this.categories.forEach((category,_index) => {
        //   //   console.log(element[i][category]);
        //   //   i++;
        //   // });
        // });
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
