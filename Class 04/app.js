// const numbers_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const check_even_numbers = numbers_array.filter(
//     (current_numbers)=> current_numbers % 2 === 0
// )

// console.log(check_even_numbers);


// const arr =               


// const filtered_array = students_array.filter(
//     (current_object, current_index) => {
//         if (current_object.score >= 60) {
//             return current_object;
//         }
//     }
// );


// const check_passed_students = students_array.filter(
//     (current_object) => current_object.status === "pass"
// );

// console.log(check_passed_students);



// ......... Laxcial Scopind and Closures

function parent_function() {
    const value = "function value";
    
    function inner_function() {
        const inner_function_var = "new value";
    }

    console.log(value);
}

parent_function() 








