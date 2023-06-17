/**
 * prompt data collection
 */

let bloodGroupSearch = prompt("Available blood group :- A+, A-, B-, B+, O-, O+");

/**
 * All donor data filtering
 */
const result = members.filter(
  (data) =>
    (data.bloodGroup === bloodGroupSearch && data.lastDonate >= 100 ) 
    
);

/**
 * Callback function
 * map loop
 * return donor Availability
 */
members.map((item) => {
  if (item.lastDonate >= 120) {
    item.donorAvailable = "Available";
  } else if (item.lastDonate >= 100 && item.lastDonate <= 119) {
    item.donorAvailable = `available hobe ${120 - item.lastDonate} din pore`;
  }
});


/**
 * Get All Donor
 */

const finalResult = [];
result.map((item) => {
    finalResult.push(item);
});

console.table(finalResult);





/**
 * Search from phone number
 */

let numberConformation = confirm("Do you want to know the member's donation history by searching through the number?")

if(numberConformation){
    let numberSearch = prompt("Available Number:- 01903211029, 01903211028, 01903211027, 01903211028, 01903211026, 01903211025, 01903211023, 01903211022, 01903211021, 01903211001, 01903211002, 01903211003, 01903211004, 01903211704, 01903211005, 01903211006, 01903211009, 01903211209, 01903211509, 01943211509");

    /**
     * All donor data filtering
     */
    const SearchResult = members.filter(
      (data) =>
        (data.call === numberSearch) 
        
    );
    
    /**
     * Get All Number
     */
    
    const finalSearchResult = [];
    SearchResult.map((item) => {
      finalSearchResult.push(item);
    });
    
    console.table(finalSearchResult);
}




