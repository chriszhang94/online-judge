<template>
  <div class="wrapper">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">Online Judge</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
          <b-nav-item href="/add">
            Add Problem
          </b-nav-item>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-pie-chart"></i>Problems
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content-box">
      <div class="content">
        <div class="block">
          <el-card>
          <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <el-image
                  :src="url"
                  :fit="'fill'"></el-image>
            </el-carousel-item>
          </el-carousel>
          </el-card>
        </div>
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Home",
  mounted() {
    // this.$router.push('/problems');
  },
  data(){
    return {
      search_input: '',
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: require('../assets/logo.png')
    }
  }
}
</script>

<style scoped>

.bg-info {

}
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
  background: #161616;
}

.header .logo {
  float: left;
  width: 250px;
  padding: 10px 10px;
}

.header-right {
  float: right;
  padding-right: 50px;
}

.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
</style>