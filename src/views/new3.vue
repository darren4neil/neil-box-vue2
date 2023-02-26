<template>
	<div class="main-container">
        <el-calendar class="calendarSty">
            <template
                slot="dateCell"
                slot-scope="{data}">
                <div v-for="item in calendarData" :key="item.id">
                    <div v-if="data.day==item.workdate" class="height">
                        <div :class="item.status==1?'li-01':item.status==2?'li-02':item.status==3?'li-03':item.status==4?'li-04':item.status==5?'li-05':''">
                        {{ data.day.split('-').slice(2)[0]}}
                        </div>
                    </div>
                </div> 
            </template>
        </el-calendar>  
    </div>
</template>

<script>
import {calendarData} from '../data/calendar'
 export default {
    data() {
      return {
        calendarData:calendarData
      }
    }
  }
</script>

<style>

.calendarSty{
    width: 60%;
    margin-left: 20%;
}
.height{
    height: 65px;
}
.li-01{
    background-color: #5aad36;
    height: 100%;
}
.li-02{
    background-color: #f08522;
    height: 100%;
}
.li-03{
    background-color: #de77a4;
    height: 100%;
}
.li-04{
    background-color: #ef3232;
    height: 100%;
}
.li-05{
    background-color: #b34066;
    height: 100%;
}
</style>
