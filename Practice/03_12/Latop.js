const Latop = class {
    constructor(cpu,ram,brand,cameramp,batterycapacity){
        this.cpu=cpu,
        this.ram=ram,
        this.brand=brand,
        this.cameramp =cameramp,
        this.batterycapacity=batterycapacity
    }
    backLigthPresent=true
    displayResolution="1080p"
    upgradeRam = function(newRam){
        this.ram=newRam
    }
};
export default Latop;

// A module in JavaScript is just a file containing related code. In JavaScript, we use the import
//  and export keywords to share and receive functionalities respectively across different modules
// . The export keyword is used to make a variable, function, class or object accessible to other modules.