<template>
    <div class="container">
      <!-- {{db_data}} -->
      <!-- <button type="button" class="btn btn-primary" v-on:click="load_db()">
        Load
      </button> -->
      <br />
      <br />
      <div id="all_top_5" v-if="display">
        <!-- <div id="accordion"> -->
          <div v-for="country in countires" :key="country.index">
           

            <div v-if="country == 'russia'">
              <!-- <h2>{{ country }}</h2> -->

              <!-- <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link"
                      data-toggle="collapse"
                      data-target="#russia"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Russia
                    </button>
                  </h5> -->

                  <span v-show="false"> {{ (i = 0) }} </span>

                  <!-- <div
                    id="russia"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div class="card-body"> -->
                      <div v-for="category in categories" :key="category.index">
                        <h3>{{ category }}</h3>
                        <div v-if="category != 'advertising'">
                          <div v-for="date in russia_dates" :key="date.index">
                            <h4>{{ date }}</h4>

                            <table class="table">
                              <thead>
                                <th>Tag Name</th>
                                <th>Frequency</th>
                              </thead>

                              <tbody v-for="j in limiter" :key="j.index">
                                <tr>
                                  <td>
                                    {{
                                      countires_list[country][i][category][
                                        date
                                      ]["tag_name"][j]
                                    }}
                                  </td>
                                  <td>
                                    {{
                                      countires_list[country][i][category][
                                        date
                                      ]["frequency"][j]
                                    }}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <span v-show="false">{{ i++ }}</span>
                        <!-- <span v-show="false"> {{ i++ }} </span> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <!-- </div>

            
          </div>
        </div>
      </div> -->
    <!-- </div> -->
</template>

<script>
import db from "../firebaseinit";
import firebase from "firebase";

export default {
  
  data() {
    return {
      db_data: {},
      countires: ["russia"],
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

        russia: {},

      },

      count: 0,

      russia_dates: ["20160101", "20170101", "20180101", "20190101"],

    };
  },
  created() {
      this.load_db()
  },
  updated() {},
  methods: {
    load_db() {
      this.display = true;
      this.countires.forEach((country) => {
        db.ref("/osm_data/analyzed/" + country + "/top_5/data")
          .once("value", (snap) => {
            this.countires_list[country] = snap.val();

          })
         
      });
    },
    
  },
};
</script>
