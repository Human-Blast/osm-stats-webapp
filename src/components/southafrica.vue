<template>
  <div style="margin-left: 50px">
    <br />
    <br />
    <div id="all_top_5" v-if="display">
      <div v-for="country in countires" :key="country.index">
        <div v-if="country == 'south africa'">
          <span v-show="false"> {{ (i = 0) }} </span>
          <div class="card-group">
            <div v-for="category in categories" :key="category.index">
              <!-- <h3>{{ category }}</h3> -->
              <div v-if="category != 'advertising'">
                <div v-for="date in southafrica_dates" :key="date.index">
                  <!-- <h4>{{ date }}</h4> -->
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">{{ category }}</h4>
                      <h5 class="card-subtitle mb-2 text-muted">{{ date }}</h5>

                      <table class="table">
                        <thead class="bg-dark text-white">
                          <th>Tag Name</th>
                          <th>Frequency</th>
                        </thead>

                        <tbody v-for="j in limiter" :key="j.index">
                          <tr>
                            <td>
                              {{
                                countires_list[country][i][category][date][
                                  "tag_name"
                                ][j]
                              }}
                            </td>
                            <td>
                              {{
                                countires_list[country][i][category][date][
                                  "frequency"
                                ][j]
                              }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <span v-show="false">{{ i++ }}</span>
              <!-- <span v-show="false"> {{ i++ }} </span> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebaseinit";
// import firebase from "firebase";

export default {
  data() {
    return {
      db_data: {},
      countires: ["south africa"],

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
        "south africa": {},
      },

      count: 0,

      southafrica_dates: [
        "20170101",
        "20180101",
        "20190101",
        "20200101",
        "20210101",
      ],
    };
  },
  created() {
    this.load_db();
  },
  updated() {},
  methods: {
    load_db() {
      this.display = true;
      this.countires.forEach((country) => {
        db.ref("/osm_data/analyzed/" + country + "/top_5/data").once(
          "value",
          (snap) => {
            this.countires_list[country] = snap.val();
          }
        );
      });
    },
  },
};
</script>
