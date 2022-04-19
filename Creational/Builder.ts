interface Builder {
    stepOne(arg?: any): void;
    stepTwo(arg?: any): void;
    stepThree(arg?: any): void;
}

class BuilderResult{
    public ResultPropertyOne: any 
    public ResultPropertyTwo: any 
    public ResultPropertyThree: any 

    public ResultMethod(): void{

    }
}

class ConcreteBuilder implements Builder{
    private BuilderResult: BuilderResult;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.BuilderResult = new BuilderResult();
    }

    public stepOne(arg = null): void { this.BuilderResult.ResultPropertyOne = arg??"Hello" };
    public stepTwo(arg = null): void { this.BuilderResult.ResultPropertyTwo = arg??"Design"};
    public stepThree(arg = null): void { this.BuilderResult.ResultPropertyThree = arg??"Patterns!"};

    public getResult(reset: boolean = false): BuilderResult{
        const Temp = this.BuilderResult;
        if(reset) this.reset(); // optional destruction
        return Temp;
    }
}


/** Optional: Director to build complex objects in order many times */
class Director {
    private Builder: Builder;

    public setBuilder(BuilderType: Builder): void {
        this.Builder = BuilderType;
    }

    public buildMinimalViableProduct(): void {
        this.Builder.stepOne();
    }

    public buildFullFeaturedProduct(): void {
        this.Builder.stepOne();
        this.Builder.stepTwo("world!");
    }
}