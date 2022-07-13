/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const cabinet = {
    color: "black;",
    height: 120,
    width: 100,
    motherboard: {
        cpu: {
            model: "i5 10400f",
            brand: "intel",
            coolingfan: "available"
        },
        ram: {
            size: "8GB",
            frequency: "2666Mhz",
            brand:"Crucial"
        },
    },
    harddisk: {
        capacity: "1TB",
        brand: "Seagate",
        price: "2000"
    },
    sdd: {
        capacity: "250GB",
        brand: "Samsung",
        price: "4000"
    },
    powersupply: {
        capacity: "450w",
        brand: "antec",
        price: "3000"
    },
};
console.log(cabinet);