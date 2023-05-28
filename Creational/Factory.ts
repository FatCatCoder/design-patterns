// Interfaces //

/** Very generic model which provides a great way to view how helpful a factory can be */
interface IVehicle {
    type: string;
    color: string;
    make: string;
    model: string;
    year: number;
    isManual: boolean;
}

/** This class handles business logic and object creation */
interface IVehicleFactory{
    create(): IVehicle;
    changeFactoryDefaultColor(color: string): void;
    defaultColor: string;
}

/** 
 * helper class for demonstration how a factor would be used in your code such as 
 * an api service or FE UI component.
 */
interface IClient {
    printVehicleInProduction(vehicle: IVehicle): void;
}

/////////////////////
// Implementations //
////////////////////

class Car implements IVehicle {
    car(){}
    type: string = "car";
    color: string = "";
    make: string = "";
    model: string = "";
    year: number = 0;
    wheelCount: number = 0;
    isManual: boolean = false;
}
class Motorcycle implements IVehicle {
    Motorcycle(){}
    type: string = "motorcycle";
    color: string = "";
    make: string = "";
    model: string = "";
    year: number = 0;
    wheelCount: number = 0;
    isManual: boolean = false;
}

/** 
 * you can even be as specific as "HondaCivic" factory
 * you can imagine in real life a popular car such as the honda civic 
 * requires its own factory to keep up with the number of units in production every year
 * this class simplifies this process and maintains a single source of truth
 * to create the car.
*/
class CarFactory implements IVehicleFactory {
    create(): IVehicle {
        let vehicle: Car = new Car();
            vehicle.color = this.defaultColor;
            vehicle.wheelCount = 4;

        return vehicle;
    }
    changeFactoryDefaultColor(color: string): void {
        this.defaultColor = color;
    }

    defaultColor: string = "steel";
}

class MotorcycleFactory implements IVehicleFactory {
    create(): IVehicle {
        let vehicle: Motorcycle = new Motorcycle();
            vehicle.color = this.defaultColor;
            vehicle.wheelCount = 2;

        return vehicle;
    }
    changeFactoryDefaultColor(color: string): void {
        this.defaultColor = color;
    }

    defaultColor: string = "steel";
}

class ClientCode implements IClient {
    printVehicleInProduction(vehicle: IVehicle): void {
        console.log(vehicle);
    }
}



// quick tests
const carFactory = new CarFactory();

const clientCode = new ClientCode();
      clientCode.printVehicleInProduction(carFactory.create());

console.log("")