<template>
<div>
    <div>
        <div>
            <h3>SOA服务</h3>
        </div>
        <div>
            <el-table border style="width: 100%">
                <el-table-column prop="appId" label="AppID" width="100"></el-table-column>
                <el-table-column prop="appName" label="应用名称" width="100"></el-table-column>
                <el-table-column prop="remark" label="应用描述" width="100"></el-table-column>
            </el-table>
        </div>
    </div>
    <div>
        <div>
            <h3>Jobs</h3>
        </div>
        <div>

        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            soaList: [
                {
                    appId: 100012312,
                    appName: "ScheduleCoreApi",
                    remark: "旅行日程核心应用",
                    operationList: [
                        {
                            opName: "hickwall",
                            url: ""
                        },
                        {
                            opName: "vi",
                            url: ""
                        },
                    ]
                },
                {
                    appId: 100012312,
                    appName: "ScheduleCoreApi",
                    remark: "旅行日程核心应用",
                    operationList: [
                        {
                            opName: "hickwall",
                            url: ""
                        }
                    ]
                }
            ]
        }
    }
}
</script>
