<template>
    <div>
        <el-row>
            <el-col :span="5">
                <div class="grid-content">
                    {{ title }}
                </div>
            </el-col>
            <el-col :span="19">
                <div class="grid-content left">
                    {{ content }}
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:'Double',
    props:{
        msg: String,
        title:String,
        content:String,
    }
}
</script>

