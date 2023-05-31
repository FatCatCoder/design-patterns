interface PizzaBuilder {
    addCrust(arg?: any): void;
    addSauce(arg?: any): void;
    addTopping(arg?: any): void;

    getPizza(reset: boolean): PizzaBuilderResult;
}

class PizzaBuilderResult { // better name would be just "Pizza" but this shows the pattern better
    public Crust: any 
    public Sauce: any 
    public Toppings: any[] = []; 

    public ResultMethod(): void{}
}

class PizzaMenu implements PizzaBuilder {
    private PizzaBuilderResult: PizzaBuilderResult = new PizzaBuilderResult();

    constructor() {
        this.PizzaBuilderResult = new PizzaBuilderResult();
    }

    public reset(): void {
        this.PizzaBuilderResult = new PizzaBuilderResult();
    }

    public addCrust(arg = null): void { this.PizzaBuilderResult.Crust = arg};
    public addSauce(arg = null): void { this.PizzaBuilderResult.Sauce = arg };
    public addTopping(arg = null): void { this.PizzaBuilderResult.Toppings.push(arg) };

    public getPizza(reset: boolean = false): PizzaBuilderResult{
        const Temp = this.PizzaBuilderResult;
        if(reset) this.reset(); // optional destruction
        return Temp;
    }
}


/** Optional: Director to build complex objects in order many times */
class Director {
    private Builder!: PizzaBuilder;

    public setBuilder(BuilderType: PizzaBuilder): void {
        this.Builder = BuilderType;
    }

    // buildMinimalViableProduct
    public buildItalianStyle(): void {
        this.Builder.addCrust("italian style");
        this.Builder.addTopping("parmesan");
    }

    //buildFullFeaturedProduct
    public buildHousePizza(): void {
        this.Builder.addCrust("deep dish");
        this.Builder.addSauce("red");
        this.Builder.addTopping("mushrooms");
        this.Builder.addTopping("cheese!");
    }
}