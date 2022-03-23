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
// 	    if matched_dog_name:
//          print (matched_dog_name)
//      else:
//          print ('no matches')
// 	    
// 	array(dog_string,dog_names)

function findWords(string,names){
    for (let i = 0; i<dog_names.length; i++) { // 
        if(string.includes(names[i])){ // .includes is how to check for string in string in JS
            return 'matched dog_name'
        }
    }
    return 'no matches'
};
//Call method here with parameters
console.log(findWords(dog_string, dog_names))

/* in class review:
python:
match = false
def nameinstring(s,n):
    for name in n:
        if name in s:
            print (f'Matched dog_name: {name}')
    if not match:
        print ('no matches')

nameinstring(dog_string,dog_names)

function complexfindWords(str, names){
    match=false
    for (let i =0; i<names.length; i++){
        //conditional
        if(str.includes(names[i])){ // .includes is the JS version of checking for string in a string
            console.log(`Matched dog_name ${names[i]}`) // JS version of the fstring `${}`
            match = true;
        }
    };
    ! match ? console.log('No Matches.') : null; // ternary operator just for fun
};

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
    for (let i=0; i<arr.length; i+=2) {
        arr[i]='even index';
    }
}
replaceEvens(arr1)
console.log(arr1)


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//in-class review
//using splicing
let arr2=["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
function replacement(arr){
    // write a for loop that loops through just my even indeces
    for (let i=0; i<arr.length; i+=2){
        // at each index, do a splice
        arr.splice(i,1, 'even index'); //- index i, removing 1 item, and replacing it with 'even index'
        // alternative - just redefine
        // arr[i] = 'even index'
    }
}

replacement(arr2)
console.log(arr2)