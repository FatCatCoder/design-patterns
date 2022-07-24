/** Makes working with one or many subsystems simple */

class Facade {
    protected subSystem: SubSystem;
    protected subSystemOther: SubSystemOther;

    constructor(subSystem: SubSystem = null, SubSystemOther: SubSystemOther = null) {
        this.subSystem = SubSystem || new SubSystem();
        this.subSystemOther = SubSystemOther || new SubSystemOther();
    }

    public NewLogicOperation(): void{
        console.log("Starting new logic before subsytems....")
        console.log(this.subSystem.doSomething());
        console.log(this.subSystemOther.doSomething());
        console.log("Now doing new logic....")
    }
}

// Old/Complex subsystems used with our new logic
class SubSystem {
    public doSomething(): string{
        return "doing something in subsystem class...";
    }
}
class SubSystemOther {
    public doSomething(): string{
        return "doing something in SubSystemOther class...";
    }
}

/** 
 * Suppose you are required to reuse old business logic for calculating
 * insurance premiums on a new project, those systems are trouble some to handle
 * and need to be intergated with the new business logic in a simplifed API called 
 * in the client code. A Facade brings a new "face" to interact with that handles ugly bellow
 * 
 * Or a more fun example is making a meal...
 */


class Kitchen{
    protected Bartender;
    protected Grill;
    protected PastaMaker;
    protected PastaSauce;

    constructor(
        Bartender: Bartender,
        Grill: Grill,
        PastaMaker: PastaMaker,
        PastaSauce: PastaSauce)
        {
            this.Bartender = Bartender,
            this.Grill = Grill,
            this.PastaMaker = PastaMaker,
            this.PastaSauce = PastaSauce
        }

    public MakeHouseSpecial(): string{
        return `The house special is 
        ${
            this.PastaMaker.makeRavioli(this.PastaMaker.makeRavioliDough(), this.PastaMaker.makeFilling())
        }, with a ${this.PastaSauce.makeSauce()} sauce
        served with a side of ${this.Grill.makedGrilledCarrots()}
        and a refreshing ${this.Bartender()} to drink :) enjoy`;
    }
    public TheDepressionMeal(): string{
        return `Here is your `
        + this.Bartender().makeMixedDrink() 
        + this.Bartender().makeMixedDrink() 
        + this.Bartender().makeMixedDrink() 
        + this.Bartender().makeMixedDrink();
    }
}

// Subclasses which would very quickly dirty up client code
// when usually used very often together in certain orders
class Bartender{
    public makeMixedDrink(): string{
        return "Mule";
    }
}

class Grill{
    public makedGrilledCarrots(): string{
        return "mmm grilled carrots";
    }
}

class PastaMaker{
    public makeRavioli(hasDough: string, hasFilling: string): string{
        if(hasDough=="RavioliDough" && hasFilling=="Spinach&Mushrooms")
            return "Delicious stuffed ravioli!";
        return "I need my dough and filling to make ravioli!"
    }
    public makeRavioliDough(): string{
        return "RavioliDough";
    }
    public makeFilling(): string{
        return "Spinach&Mushrooms";
    }
}

class PastaSauce{
    public makeSauce(): string{
        return "garlic e olio";
    }
}