Vue.createApp({
  data() {
    return {
      inputClass: "",
      show:'visible',
      inputColor: ''
    };
  },
  watch: {
   
  },
  methods: {
   visibility()
   {
    if(this.show == 'visible')
    {
      this.show = "hidden";
    }
    else if(this.show == 'hidden')
    {
      this.show = 'visible';
    }
   }
  },
}).mount("#assignment");
