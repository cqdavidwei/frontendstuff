<template>
<div>
    <el-container style="height: 100%">
        <el-aside width="160px" style="height: 100%" class="aside">
            <el-container>
                <el-header height="100px" class="aside-head">
                    <el-row>
                        <el-col :span="24" class="aside-head-content">
                            <div>
                                <img src="~assets/logo.png" />
                            </div>
                            <div>旅行日程</div>
                        </el-col>
                    </el-row>
                </el-header>
                <el-main class="aside-navi">
                    <el-menu :unique-opened="true"   
                    :default-active="$nuxt.$route.path" 
                    background-color="#2f4050" 
                    text-color="#a7b1c2" 
                    active-text-color="#fff" 
                    router 
                    class="aside-navi-menu">
                        <el-menu-item v-for="item in menuItems" :key="item.router" :index="item.router" style="font-weight: 600" :class="{'aside-navi-menu-item-selected': $nuxt.$route.path == item.router}">
                          {{item.text}}
                        </el-menu-item>
                    </el-menu>
                </el-main>
            </el-container>
        </el-aside>
        <el-main class="main">
            <el-container>
                <el-header class="main-navi">
                    <el-row type="flex" align="middle">
                        <el-col :span="5" style="height: auto">
                            <el-breadcrumb separator-class="el-icon-arrow-right" class="main-navi-content">
                            <el-breadcrumb-item>{{getHomePage()}}</el-breadcrumb-item>
                            <el-breadcrumb-item v-if="!isHomePage()">{{getCurrentPage()}}</el-breadcrumb-item>
                        </el-breadcrumb>
                        </el-col>
                    </el-row>
                </el-header>
                <el-main>
                    <div>
                        <nuxt />
                    </div>
                </el-main>
            </el-container>
        </el-main>
    </el-container>
</div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          text: "首页",
          router: "/",
          isHomePage: true
        },
        {
          text: "SOA服务列表",
          router: "/soa",
          isHomePage: false
        },
        {
          text: "应用列表",
          router: "/app",
          isHomePage: false
        },
        {
          text: "关于",
          router: "/about",
          isHomePage: false
        }
      ]
    };
  },
  methods: {
    getHomePage() {
      for (const item of this.menuItems) {
        if (item.isHomePage) {
          return item.text;
        }
      }

      return "";
    },

    isHomePage() {
      let path = this.$nuxt.$route.path;
      console.log(path);
      for (const item of this.menuItems) {
        if (item.router === path) {
          return item.isHomePage;
        }
      }

      return false;
    },

    getCurrentPage() {
      let path = this.$nuxt.$route.path;
      for (const item of this.menuItems) {
        if (item.router === path) {
          return item.text;
        }
      }

      return "";
    }
  }
};
</script>

<style scoped>
.aside {
  background-color: #2f4050;
}

.aside-head {
  background-color: #2f4050;
  color: #ffffff;
  padding: 0;
}

.aside-head-content {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.aside-head-content div {
  text-align: center;
}

.aside-head-content img {
  margin-top: 20px;
}

.aside-navi {
  padding: 0;
}

.aside-navi-menu {
  border: 0;
}

.aside-navi-menu-item-selected {
  border-right: 5px solid #18a689;
}

.main {
  padding: 0;
}

.main-navi {
  border-bottom: 1px solid #e7eaec;
}

.main-navi-content {
  display: flex;
  flex-direction: row;
  align-content: center;
}
</style>
