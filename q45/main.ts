// Q45 :Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
//  It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs,
//   such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


function car_feature(manufacturer:string,model:string,...options:any[]){
      let car={ manufacturer:manufacturer,
                       model     :model};
       //addtional option 
        options.forEach(option=>{
            let [key,value]=option.split(":");
            car[key]
        });
        return car;
      }

    console.log(car_feature("kia","picanto","color:silver","year:2020"));
    console.log(car_feature("honda","city","color:red","year:2018"));