/** provides a way to shallow or deep copy this object to a new object */
interface Cloneable<T> {
    clone(): T;
}

class Robot implements Cloneable<Robot> {
    name?: string;
    age?: number;
    functionUse?: string;

    /** Deep copy the robot! */
    clone(): Robot {
        let copy: Robot = JSON.parse(JSON.stringify(this));

        return copy;
    }
}


// Test
let robotChef = new Robot();
robotChef.name =  "Chef Robot";
robotChef.age= 35;
robotChef.functionUse = "he cooks!";

let robotSousChef = robotChef.clone();
robotSousChef.name = "Sous Chef Robot!";
