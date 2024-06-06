//Q14 guest list:if you would invite anyone ,living or deceased,
//to diner, who would youinvite?Make a list that include atleast 
//three people you wouldlike to dinner.Then use your list to print 
//a message to each person invintng them to dinner. 


let guestList=["sumaya","kiran","hina","farah"];
let message ="I would like to invite you for a dinner please join us at my home"
  
 guestList.forEach(oneGuest => console.log(`hello ${oneGuest} ${message}`));