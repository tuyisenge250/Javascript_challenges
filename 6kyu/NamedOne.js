function NamedOne(first, last) {
// -- SHOULD be changed --
    this.firstName = first;
    this.lastName = last;
     
   Object.defineProperty(this, "fullName", {
     get: function(){
       return `${this.firstName} ${this.lastName}`
     },
     set: function(name){
       if(name.split(" ").length !== 2){
         return
       }
       this.firstName = name.split(" ")[0]
       this.lastName = name.split(" ")[1]
     }
   })
}