<template>
    <div>
        <el-col :span="5">
            <div class="grid-content">
                {{ title }}
            </div>
        </el-col>
        <el-col :span="7">
            <div class="grid-content left">
                <a v-bind:href="url" style="color:#67C23A;text-decoration:none;">点击查看</a>
            </div>
        </el-col>
    </div>
</template>

<script>
export default {
    name:'Btn',
    props:{
        title:String,
        url:String,
    }
}
</script>

