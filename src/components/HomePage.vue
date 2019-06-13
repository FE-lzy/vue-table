
<template>
    <div id="HomePage">
        <div style="margin:30px;">
            <div class="title" v-html="title"></div>
            <div style="border: 2px solid #83ADD6;height:auto;">
                <el-row>
                    <div v-for="item in tableData">
                        <div v-if="(item.button)!== undefined">
                            <Btn v-bind:title="item.title" v-bind:url="item.button.url" />
                        </div>
                        <div v-else-if="(item.value == null) || (item.value).length < 15 || item.title == null">
                            <Single v-bind:title="item.title"   v-bind:content="item.value" />   
                        </div>
                        <div v-else>
                            <Double v-bind:title="item.title"  v-bind:content="item.value" />   
                        </div>
                        <!-- <Single v-if=" (item.value == null && (item.button)!== undefined ) || ((item.value)!== undefined && (item.button)== undefined && (item.value).length < 15)" v-bind:title="item.title"   v-bind:content="item.value" /> -->
                        <!-- <Double v-if="(item.value)!== undefined && (item.button) == undefined && (item.value).length >= 15 "  v-bind:title="item.title"   v-bind:content="item.value" /> -->
                        
                    </div>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
import Single from './Single';
import Double from './Double';
import Btn    from './Btn';
export default {
    name:'HomePage',
    methods:{
        getData(){
                // 请求地址 -修改处
                var _url = 'http://192.168.0.253:8080/action/speakData/essentialInformation';
               
                var objStr = JSON.stringify(this.$route.query);
                console.log(objStr);
                 var _this = this;
                if(objStr !== '{}'){
                        if(objStr.indexOf('code') == -1 || objStr.indexOf('skillsId') == -1 || objStr.indexOf('optionName') == -1){
                                console.log('缺少参数');
                                return;
                        }
                        var _code = this.$route.query.code;
                        var _skillsId = this.$route.query.skillsId;
                        var _optionName = this.$route.query.optionName;

                GET(_url,
                        {
                                code:_code,
                                skillsId:_skillsId,
                                optionName:_optionName
                        },
                        function(json){
                            console.log(json); 
                            if(json.flag == 0 && json.optionList !== null){
                                    _this.title = json.itemName
                                    _this.tableData = json.optionList;
                                    console.log(json);
                            } else {
                                    console.log('服务器错误');
                            }
                        },
                        function(err){
                            console.log(err);
                        }
                )  
        } else {
                console.log('缺少get参数');
        }
        
}
    },
    created:function(){
        this.getData();
    },
    components:{
        Single,
        Double,
        Btn
    },
    data(){
        return {
                title:'',
                tableData:[],
        }
    }
}
</script>

<style>
.title{
    text-align: center;
    color: #222;
    font-size: 40px;
    margin-bottom: 50px;
    font-weight: 400;
}
#HomePage{
    width: 100%;
    height:auto;
    margin: 0;
    padding: 0;
}
.el-row{
    color: #757575;
    font-size: 24px;
    width: 100%;
    overflow: hidden;
    
}
.el-col{
     height:80px;
} 
  .grid-content {
    background-color:#F4F9FD ;
    line-height: 80px;
    text-align: center;
    border: 1px solid #ABC8E4;
  }
  .left{
      text-align: left;
      padding-left: 30px;
      background-color:#fff ;
  }
</style>