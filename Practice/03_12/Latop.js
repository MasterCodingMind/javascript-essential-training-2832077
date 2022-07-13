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