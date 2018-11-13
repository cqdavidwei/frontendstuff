<template>
<div>
    <el-table border style="width: 100%" :data="soaList">
        <el-table-column prop="bu" label="部门" width="100">
        </el-table-column>
        <el-table-column prop="business" label="业务线" width="100">
        </el-table-column>
        <el-table-column prop="serviceCode" label="服务号" width="100">
        </el-table-column>
        <el-table-column prop="serviceName" label="服务名" width="150">
        </el-table-column>
        <el-table-column prop="opName" label="方法名" width="150">
        </el-table-column>
        <el-table-column prop="techOwner" label="技术负责人" width="200">
        </el-table-column>
        <el-table-column prop="bizOwner" label="业务负责人" width="200">
        </el-table-column>
        <el-table-column prop="documentUrl" label="文档地址">
        </el-table-column>
    </el-table>
</div>
</template>

<script>
import axios from "axios";

export default {
  asyncData() {
    return axios.get(process.env.serviceBaseUrl + "/soa").then(res => {
      return { soaList: res.data.soaList };
    });
  },
  data() {
    return {
      soaList: null
    };
  }
};
</script>
