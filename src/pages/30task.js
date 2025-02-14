export default function Task30(){
    function sumPositiveNumbers(...numbers) {
        return numbers.filter(num => num > 0).reduce((acc, num) => acc + num, 0);
    }

    console.log(sumPositiveNumbers(1, -2, 3, -4, 5));
    console.log(sumPositiveNumbers(-10, -20, -30));
}