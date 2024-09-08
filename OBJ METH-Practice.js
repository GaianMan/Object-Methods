const payments = [
    {
        studentId: 1, // Unique identifier for each student
        studentName: "John Doe", // Name of the student
        payedAmount: 1600, // Amount payed with this transaction
        year: 2020, // The payment year
    },
    {
        studentId: 1, // Unique for each student
        studentName: "John Doe",
        payedAmount: 1500,
        year: 2021
    },
    {
        studentId: 1, // Unique for each student
        studentName: "John Doe",
        payedAmount: 1400,
        year: 2022
    },
    {
        studentId: 1, // Unique for each student
        studentName: "John Doe",
        payedAmount: 1300,
        year: 2023
    },
    {
        studentId: 2, // Unique for each student
        studentName: "Lu Kang",
        payedAmount: 1500,

        year: 2020
    },
    {
        studentId: 2, // Unique for each student
        studentName: "Lu Kang",
        payedAmount: 1400,
        year: 2021
    },
    {
        studentId: 2, // Unique for each student
        studentName: "Lu Kang",
        payedAmount: 1300,
        year: 2023
    },
    {
        studentId: 2, // Unique for each student
        studentName: "Lu Kang",
        payedAmount: 1200,
        year: 2023
    }
];

//Find the max payment

function maxPaied(arr){
    let maxOBJ=arr[0].payedAmount;
    for (let item of arr){
        if(maxOBJ<item.payedAmount){
            maxobj=item.payedAmount;
        }
    }
    return maxOBJ;
}
console.log(maxPaied(payments));

//Find the count of all payments that are more than 1500
function isBiggerThan(arr){
    let isBigger=arr.filter(item=>item.payedAmount>1500);
    return isBigger;
}

console.log(sumOfPayments(payments));

//Find the count of all payments that are more than 1500

function isBiggerThan(arr){
    let isBigger=arr.filter(item=>item.payedAmount>1500);
    return isBigger;
}

console.log(isBiggerThan(payments));

//Calculate the average of all payments
function averagePayment(arr){
    let average=arr.reduce((av,item) => (av += item.payedAmount),0)/arr.length;
    return average;
}
console.log(averagePayment(payments));



