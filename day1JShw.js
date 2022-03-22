//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

//python code:
// dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// dog_names = ["Max","HAS","PuRple","dog"]
//
// def array(string1,list):
// 	    matched_dog_name = []
// 	    for x in list:
// 	        if x in string1:
// 	            matched_dog_name.append(x)
// 	    print (matched_dog_name)
// 	    
// 	array(dog_string,dog_names)

function findWords(string,list){
    //Your code goes here
}

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

//python code:
//for x in range(len(arr1)):
    //if x % 2 == 0 :
        // arr[x] = 'even index'
//print (arr)

let arr1 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
function replaceEvens(arr){
    for (let i = 0; i < arr1.length; i++) {
        if (i%2===0) {
            arr[i] = "even index";
        }
    }
}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]