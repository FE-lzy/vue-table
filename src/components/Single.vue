<template>
    <div>
        <el-col :span="5">
            <div class="grid-content">
                {{ title }}
            </div>
        </el-col>
        <el-col :span="7">
            <div class="grid-content left">
                {{ content }}
            </div>
        </el-col>
    </div>
</template>

<script>
export default {
    name:'Single',
    props:{
        msg: String,
        title:String,
        content:String,
    }
}
</script>
<style>
.Single{
    flex-wrap: wrap
}
</style>

