<template>
  <div class="container">
    <!-- {{db_data}} -->

    <br />
    <br />
    <div id="all_top_5" v-if="display">
      <div id="accordion">
        <div v-for="country in countires" :key="country.index">
          <div v-if="country == 'india'">
            <!-- <h2>{{ country }}</h2> -->

            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
                    data-toggle="collapse"
                    data-target="#india"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    India
                  </button>
                </h5>

                <span v-show="false"> {{ (i = 0) }} </span>

                <div
                  id="india"
                  class="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <div class="card-group" style="margin-left: 100px">
                      <div v-for="category in categories" :key="category.index">
                        <!-- <h3>{{ category }}</h3> -->
                        <div v-if="category != 'advertising'">
                          <div v-for="date in india_dates" :key="date.index">
                            <!-- <h4>{{ date }}</h4> -->
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">{{ category }}</h4>
                                <h5 class="card-subtitle mb-2 text-muted">
                                  {{ date }}
                                </h5>

                                <table class="table">
                                  <thead class="bg-dark text-white">
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
          </div>

          <div v-if="country == 'russia'">
            <!-- <h2>{{ country }}</h2> -->

            <div class="card">
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
                </h5>

                <span v-show="false"> {{ (i = 0) }} </span>

                <div
                  id="russia"
                  class="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <div class="card-group" style="margin-left: 100px">
                      <div v-for="category in categories" :key="category.index">
                        <!-- <h3>{{ category }}</h3> -->
                        <div v-if="category != 'advertising'">
                          <div v-for="date in russia_dates" :key="date.index">
                            <!-- <h4>{{ date }}</h4> -->
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">{{ category }}</h4>
                                <h5 class="card-subtitle mb-2 text-muted">
                                  {{ date }}
                                </h5>
                                <table class="table">
                                  <thead class="bg-dark text-white">
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
          </div>

          <div v-if="country == 'brazil'">
            <!-- <h2>{{ country }}</h2> -->

            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
                    data-toggle="collapse"
                    data-target="#brazil"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Brazil
                  </button>
                </h5>

                <span v-show="false"> {{ (i = 0) }} </span>

                <div
                  id="brazil"
                  class="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <div class="card-group" style="margin-left: 100px">
                      <div v-for="category in categories" :key="category.index">
                        <!-- <h3>{{ category }}</h3> -->
                        <div v-if="category != 'advertising'">
                          <div v-for="date in brazil_dates" :key="date.index">
                            <!-- <h4>{{ date }}</h4> -->
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">{{ category }}</h4>
                                <h5 class="card-subtitle mb-2 text-muted">
                                  {{ date }}
                                </h5>
                                <table class="table">
                                  <thead class="bg-dark text-white">
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
          </div>

          <div v-if="country == 'china'">
            <!-- <h2>{{ country }}</h2> -->

            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
                    data-toggle="collapse"
                    data-target="#china"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    China
                  </button>
                </h5>

                <span v-show="false"> {{ (i = 0) }} </span>

                <div
                  id="china"
                  class="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <div class="card-group" style="margin-left: 100px">
                      <div v-for="category in categories" :key="category.index">
                        <!-- <h3>{{ category }}</h3> -->
                        <div v-if="category != 'advertising'">
                          <div v-for="date in china_dates" :key="date.index">
                            <!-- <h4>{{ date }}</h4> -->
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">{{ category }}</h4>
                                <h5 class="card-subtitle mb-2 text-muted">
                                  {{ date }}
                                </h5>
                                <table class="table">
                                  <thead class="bg-dark text-white">
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
          </div>

          <div v-if="country == 'south africa'">
            <!-- <h2>{{ country }}</h2> -->

            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
                    data-toggle="collapse"
                    data-target="#southafrica"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    South Africa
                  </button>
                </h5>

                <span v-show="false"> {{ (i = 0) }} </span>

                <div
                  id="southafrica"
                  class="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <div class="card-group" style="margin-left: 100px">
                      <div v-for="category in categories" :key="category.index">
                        <!-- <h3>{{ category }}</h3> -->
                        <div v-if="category != 'advertising'">
                          <div
                            v-for="date in southafrica_dates"
                            :key="date.index"
                          >
                            <!-- <h4>{{ date }}</h4> -->
                            <div class="card">
                              <div class="card-body">
                                <h4 class="card-title">{{ category }}</h4>
                                <h5 class="card-subtitle mb-2 text-muted">
                                  {{ date }}
                                </h5>
                                <table class="table">
                                  <thead class="bg-dark text-white">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebaseinit";
import firebase from "firebase";
// import About from "./views/About.vue";
export default {
  data() {
    return {
      countires: ["india", "brazil", "china", "russia", "south africa"],

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
        // .then((res) => {
        //   this.count++;
        //   this.update_status();
        //   // console.log("this is done");
        // });
      });
    },
    // update_status() {
    //   if (this.count == 5) {
    //     console.log("Update Done");
    //     this.countires.forEach((country, index) => {
    //       // console.log(ele+' '+index  );
    //       let i = 0;
    //       this.categories.forEach((category, _index) => {
    //         // console.log(country+' '+category);

    //         // console.log(this.countires_list[country][i][category]);
    //         if (country == "brazil" && category != "advertising") {
    //           this.india_dates.forEach((date, index) => {
    //             console.log(country + " " + category + " " + date);
    //             // console.log(this.countires_list[country][i][category]);
    //             console.log(
    //               this.countires_list[country][i][category][date]["frequency"]
    //             );
    //             console.log(
    //               this.countires_list[country][i][category][date]["tag_name"]
    //             );
    //           });
    //         }
    //         i++;
    //       });
    //     });

    //     // this.countires_list.forEach((element,index) => {
    //     //   let i = 0;
    //     //   console.log(index);
    //     //   // this.categories.forEach((category,_index) => {
    //     //   //   console.log(element[i][category]);
    //     //   //   i++;
    //     //   // });
    //     // });
    //   }
    // },
  },
};
</script>
