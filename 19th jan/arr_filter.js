const grades = [10, 2, 21, 35, 50, -10, 0, 1];

// get all grades > 20
const result = grades.filter(grade => grade > 20); // [21, 35, 50];

// get all grades > 30
grades.filter(grade => grade > 30); // [35, 50]


/**
 * @param {number[]} numbers
 */
function getPositiveNumbers(numbers) {
    const positiveNumbers = numbers.filter(number => number > 0)

    return positiveNumbers

}

// sample usage (do not modify)
console.log(getPositiveNumbers([10, -5, 2, -4]));


// Complete the function getPassingTests such that it returns all the test resu
// lts that have a passing grade(10 and above).

/**
 * @param {object[]} results
 */
function getPassingTests(results) {
    const value = results.filter(result => result.grade >= 10)
    return value

}

// sample usage (do not modify)
const data = [{
    id: 1,
    grade: 10
}, {
    id: 2,
    grade: 4
}, {
    id: 3,
    grade: 18
}]
console.log(getPassingTests(data))
