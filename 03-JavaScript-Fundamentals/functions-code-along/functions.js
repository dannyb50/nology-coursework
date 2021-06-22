// 1. Function to find perimeter of a rectangle
const calculatePerimeter = (width, height) => {
    return width + width + height + height
}

console.log(calculatePerimeter(10, 20));

// 2. Function to find the area of a circle. when given a radius, print area to console.
const calculateArea = (radius) => {
    const area = radius * radius * Math.PI;
    console.log(area)
}

calculateArea(5);

// 3. Same to find the circumference.
const calculateCircumference = (radius) => {
    return 2 * Math.PI * radius
}

console.log(calculateCircumference(5));

