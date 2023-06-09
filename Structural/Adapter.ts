/** ClientTarget, The target client class or calling code */
class FooEngine {
    public RunMessage(): string {
        return "Foo";
    } 
}

//** Adaptee: bar is new and cool, we need bar! */
class BarService {
    public RunBar(): string {
        return "Bar!";
    } 
}

/** Execs say foo is old and is making our company looks weak and outdated but our whole Foo engine and other code runs on it!
 * they want it to work with Bar because its trendy!
 */
class Adapter extends FooEngine {
    private adaptee: BarService;

    constructor(adaptee: BarService) {
        super();
        this.adaptee = adaptee;
    }

    public RunMessage(): string {
        return this.adaptee.RunBar();
    } 
}


// test
function StartApp(Engine: FooEngine){
    return Engine.RunMessage();
}

// old
// var foo =  new FooEngine();

var bar = new BarService();
var engine2 = new Adapter(bar);

StartApp(engine2);