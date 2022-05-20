let tags=[
    "web dev", //0
    "vue js",  //1
    "vue js",  //2
    "laravel", //3
    "news"  ,   //4
    "laravel"
];
 let uniqueArray = tags.filter((tag, index, array)=>{
     return tags.indexOf(tag)===index;
 })

 console.log(uniqueArray);