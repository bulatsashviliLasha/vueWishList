Vue.createApp({
    data(){
        return{
            plText: "add wish",
            title: "Gvantsa's wishes",
            inputValue: '',
            notes: ['Scuba diving','Go on a safari in africa','Swim with dolphins'],
        }
    },
    methods: {
        addNewNote(){
            if(this.inputValue !== ''){
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }

        },
        toUpperCase(item) {
            return item.toUpperCase()
        }
        ,
        removeNote(index){
         this.notes.splice(index,1)
        },
    },

    computed:{
      doubleCount(){
          return  this.notes.length * 2
      },

    },
    watch:{
      inputValue(value){
          if(value.length>20){
              this.inputValue = ''
          }

      }
    }
}).mount('#app')
