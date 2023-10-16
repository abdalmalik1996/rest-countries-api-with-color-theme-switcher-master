<template>
 <v-sheet>
<Serach/>
<Countries/>
 </v-sheet>


</template>

<script >
import Serach from '@/components/Serach.vue';
import Countries from '@/components/Countries.vue';


export default {
  components:{
    Serach,
    Countries,
  },
  methods:{
    
  }
}

</script>
