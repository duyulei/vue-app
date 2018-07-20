<template>
  <div class="mroe-co" v-loading.body="loading">
    <scroller 
      :on-refresh="refresh"
      :on-infinite="infinite">
      <el-row>
        <ul class="logo-ul">
          <el-row>
            <el-col :xs="24" :sm="6" v-for="(companyRecruitValue, index) in companyRecruitValues" :key="index">
              <li class="cover-li" @click="gotoCompany(index)"><img :src="companyRecruitValue.miniCover"></li>
            </el-col>
          </el-row>
        </ul>
      </el-row>
    </scroller>
  </div>
</template>

<script>
  export default {
    name: 'campus-view',
    data () {
      return {
        loading: true,
        companyRecruitValues: [],
        totalPages: '',
        form: {
          compyId: '',
          page: 0,
          size: '6',
          recruitDiv: '01'
        }
      }
    },
    created () {
      this.init()
    },
    methods: {
      gotoCompany: function (index) {
        this.form.compyId = this.companyRecruitValues[index].compyId
        this.$router.push({
          path: '/recruit/company',
          query: {compyId: this.companyRecruitValues[index].compyId}
        })
      },
      pageChange: function (page) {
        this.form.page = page - 1
        this.init()
      },
      init: function () {
        this.$store.dispatch('getCompanyList', this.form).then(res => {
          console.log(res)
          if (res.data.code === '200') {
            this.companyRecruitValues = this.companyRecruitValues.concat(res.data.data.companyRecruitValues)
            this.totalPages = res.data.data.totalPages
          } else {
          }
          this.loading = false
        })
      },
      refresh: function (done) {
        console.log('refresh')
        setTimeout(() => {
          this.form.page = 0
          this.companyRecruitValues = []
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
	.mroe-co {
		height: 100%;
	}
	
 .mroe-co .title-content-box {
 	 margin:20px 0px;
 }
	
 .mroe-co .title-text {
 	width: 10px;
    display: block;
    height: 20px;
    float: left;
    background: #D86370;
    margin-right: 5px;
 }

 .logo-ul{
   background: #fff;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 12px;
  list-style: none;
 }
 .cover-li{
   padding: 10px;
   cursor: pointer;
 }
 .cover-li:hover{
   -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
 }
 .cover-li img {
    width: 100%;
    height: 130px;
}
@media screen and (max-width: 768px) {
  .logo-ul{
    padding: 0;
  }
  .cover-li img {
      width: 100%;
      height: 100px;
  }
}
</style>

<style>
	.el-pagination {
		text-align: right;
    padding: 20px 5px;
	}

	.el-pager li.active {
		border-color: #d86370 !important;
    background-color: #d86370 !important;
	}
</style>
