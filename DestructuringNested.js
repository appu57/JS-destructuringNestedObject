
let employee={
    id:1,
    name:'Javascript',
    language:{
        type:['Client-side','Server-side'],
        hobby:['hobby1','hobby2']

    }
}

let {empId , name , language:{type,hobby}}=employee;
console.log(name);

"###############################################################################################################################################################"

const obj = {x:1,y:2};
let {x:a,y:b}=obj;//x as a y as b

console.log("A",a);
a=2;
console.log(obj.x,obj.y);//1,2
//let {x:a, y:b} = obj;: Object destructuring is used to extract properties x and y from obj and assign them to variables a and b, respectively. 
//So, a will have the value of x (which is 1), and b will have the value of y (which is 2).



//a = 2  The variable a is reassigned the value 2. This change does not affect the original object obj because a is a separate variable
//with its own value, and it is not a reference to the property x in obj.

"###############################################################################################################################################################"

let {i , i:j}={i:2};
console.log("i" , i);//2
console.log("j" , j);//2


//{i, i:j}: This syntax is object destructuring, which extracts properties i and j from the object {i: 2}.
//i is assigned the value 2.
//i:j means that the value of i is also assigned to j. It's like aliasing i as j.

//So, both i and j will have the value 2.

let {x , y}={x:2};
console.log("i" , x);//2
console.log("j" , y);//undefined
"###############################################################################################################################################################"