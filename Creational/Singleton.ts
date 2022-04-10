/**
 * Single Instance object
 */
export default class Singleton{
    private static instance: Singleton;
    private Singleton(){}

    /** Returns or creates object */
    public static getInstance(): Singleton{
        if(!Singleton.instance) Singleton.instance = new Singleton();
        
        return Singleton.instance;
    }

    /**
     * Logic & Methods Go Here
     */
}