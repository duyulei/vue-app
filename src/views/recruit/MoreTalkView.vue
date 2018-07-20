<template>
  <div class="mroe-career-talk" v-loading.body="loading">
  	<scroller 
      :on-refresh="refresh"
      :on-infinite="infinite">
      <!-- content goes here -->
  	<div class="select-box">
      <div class="select-input">
        <el-row>
        <el-col :xs="20">
						<el-select
							filterable
							remote
							clearable 
							placeholder="请输入院校关键词"
							:remote-method="remoteMethod"
							v-model="form.school">
							<el-option
								v-for="item in schResourceList"
								:key="item.resourceCode"
								:label="item.resourceName"
								:value="item.resourceName">
							</el-option>
						</el-select>
        </el-col>
        <el-col :xs="4">
          <span class="select-span" @click="search">搜索</span>
        </el-col>
        </el-row>
      </div>
      <div class="select-img" v-if="!isMore">
        <img @click="isMore = true" width="20px" src="../../assets/more.png"/>
  	  </div>
  		<ul  v-if="isMore">
      <el-row>
        <el-col :xs="8">
  			<li class="select-li select-margin">
  				<div class="title-input">
						<el-select v-model="form.city" placeholder="请选择城市" :clearable="true">
                <el-option
                  v-for="item in workplaces"
                  :key="item.cityView"
                  :label="item.cityView"
                  :value="item.cityCode">
                </el-option>
              </el-select>
  				</div>
  			</li>
        </el-col>
        <el-col :xs="8">
  			<li class="select-li select-margin">
  				<div class="title-input">
						<el-select v-model="form.companyId" placeholder="请选择企业" :clearable="true">
                <el-option
                  v-for="item in companyValues"
                  :key="item.companyId"
                  :label="item.companyName"
                  :value="item.companyId">
                </el-option>
              </el-select>
  				</div>
  			</li>
        </el-col>
        <el-col :xs="8">
  			<li class="select-li select-margin">
  				<div class="title-input">
  					<el-date-picker
				      v-model="dateTime"
				      type="date"
				      placeholder="选择宣讲日期">
				    </el-date-picker>
  				</div>
  			</li>
        </el-col>
      </el-row>
  		</ul>
  	</div>
  	<div>
        <el-table 
	      :data="arrangeValues"
	      style="width: 100%;margin-top: 30px;">
	      <el-table-column
	        prop="startTimestamp"
	        label="时间"
	        >
	      </el-table-column>
	      <el-table-column
	        prop="companyName"
	        label="企业"
	       >
	      </el-table-column>
	      <el-table-column
	        prop="city"
	        label="城市"
	        >
	      </el-table-column>
	      <el-table-column
	        prop="school"
	        label="学校">
	      </el-table-column>
	      <el-table-column
	        prop="address"
	        label="地点">
	      </el-table-column>
	    </el-table>
    </div>
    </scroller>
  </div>
</template>

<script>
  export default {
    name: 'mroe-career-talk',
    data () {
      return {
        loading: true,
        isMore: false,
        arrangeValues: [],
        totalPages: '',
        workplaces: '',
        companyValues: '',
        dateTime: '',
        schResourceList: '',
        form: {
          companyId: '',
          city: '',
          school: '',
          time: '',
          more: '01',
          page: '',
          size: '6',
          recruitDiv: '01'
        }
      }
    },
    created () {
      this.init()
    },
    methods: {
      pageChange: function (page) {
        this.form.page = page - 1
        this.init()
      },
      init: function () {
        var dateTime = new Date(this.dateTime);
        if (Math.round(dateTime.getTime())) {
          this.form.time = Math.round(dateTime.getTime());
        } else {
          this.form.time = ''
        }
        this.$store.dispatch('getHoArrList', this.form).then(res => {
          if (res.data.code === '200') {
            this.arrangeValues = this.arrangeValues.concat(res.data.data.arrangeValues)
            this.totalPages = res.data.data.totalPages
            this.workplaces = res.data.data.cityValues
            this.companyValues = res.data.data.companyValues
          } else {
          }
          this.loading = false
        })
      },
      remoteMethod (searchKey) {
        this.$store.dispatch('getSchoolResource', searchKey).then(res => {
          if (res.data.code === '200') {
            this.schResourceList = res.data.data.resources
          } else {

          }
        })
      },
      search: function () {
        this.loading = true
        this.refresh()
      },
      refresh: function (done) {
        console.log('refresh')
        setTimeout(() => {
          this.form.page = 0
          this.arrangeValues = []
          this.init()
          done(true)
        }, 1500)
      },
      infinite: function (done) {
        let _this = this
        console.log('infinite called..')
        if (this.form.page === this.totalPages) {
          setTimeout(() => {
            done(true)
          }, 1500)
          return;
        }
        setTimeout(() => {
          _this.form.page ++
          _this.init()
          done()
        }, 1500)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .mroe-career-talk {
  height: 100%;
 }
 
 .mroe-career-talk .title-content-box {
    margin: 10px;
    font-size: 14px;
 }
 
 .mroe-career-talk .title-text {
 	width: 10px;
    display: block;
    height: 20px;
    float: left;
    background: #D86370;
    margin-right: 5px;
 }
 
 .select-box .select-li {
 	display: block;
    width: auto;
    height: auto;
    font-size: 12px;
 }
 
 .select-box .select-margin {
    margin: 0 10px;
 }
 
 .search-box {
    width: 112px;
    background-color: #D86370;
    text-align: center;
    border-radius: 2px;
    padding: 6px 0px;
    cursor: pointer;
    color: #FFF;
    margin: 0 auto;
    float: none;
    margin-top: 10px!important;
 }
 
 .select-box .select-li .title-input {
 	margin-top: 8px;
 }
 .select-input{
   margin: 10px;
 }
 .select-span{
    width: 100%;
    height: 36px;
    display: inline-block;
    background: #d86372;
    text-align: center;
    line-height: 36px;
    color: #fff;
 }
.select-input .el-select {
  width: 100%;
}
.el-date-editor.el-input{
  width: auto;
}

.select-img{
  text-align: center;
  background: #f8f8f8;
  height: 17px;
}
  .el-table {
    font-size: 10px;
    width: auto !important;
    margin: 10px !important;
  }
</style>

<style>

 .select-input .el-select .el-input__inner{
   border-radius: 4px 0 0 4px !important;
   border-right: none;
 }
  .el-table__body, .el-table__footer, .el-table__header {
      width: auto !important;
  }
  .el-table .cell{
    line-height: 20px!important;
    padding-left: 5px !important;
    padding-right: 5px !important;
  }
 /** 列表 */
.el-table th, td {
	text-align: center;
}

.el-pagination {
    text-align: right;
    margin-top: 30px;
}

.el-pager li.active {
  border-color: #D86370;
  background-color: #D86370;
  cursor: pointer;
}
.el-pager li:hover {
  border-color: #9C1826;
  background-color: #9C1826;
}
/** 修改源码 */
.el-table th, .el-table th .cell {
	background-color: #D86370;
	
}
.el-table th .cell {
	color: #FFF;
}
.el-table tr {
	color: #565656;
}
</style>

