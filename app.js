const millerInfo = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
 console.log(millerInfo.calcBMI());

const smithInfo = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};


console.log(smithInfo.calcBMI());

let  message;
if (millerInfo.bmi > smithInfo.bmi) {
    message = `${millerInfo.fullName}is BMI ${millerInfo.calcBMI}is higher than ${smithInfo.fullName}'s ${smithInfo.calcBMI}`;
} else if (smithInfo.bmi > millerInfo.bmi) {
    message = `${smithInfo.fullName}is BMI ${smithInfo.calcBMI} is higher than ${millerInfo.fullName}'s ${millerInfo.calcBMI}`;
} else {
    message = `${millerInfo.fullName} and ${smithInfo.fullName} have the same BMI ${millerInfo.calcBMI}`;
}

console.log(message);



