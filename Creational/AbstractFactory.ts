/** 
 * This is an abstract factory for creating three course meals 
 * for each type of daily food service offering 
 */
interface IMenu {
    createAppetizer(): string;
    createEntree(): string;
    createDessert(): string;
}

class BrunchMenu implements IMenu {
    createAppetizer(): string {
        return "toast";
    }
    createEntree(): string {
        return "hamburger with eggs";
    }
    createDessert(): string {
        return "milkshake";
    }
}

class DinnerMenu implements IMenu {
    createAppetizer(): string {
        return "oil and bread";
    }
    createEntree(): string {
        return "ravioli";
    }
    createDessert(): string {
        return "biscotti and espresso";
    }
}


// here we don't care about the details, we just need to serve our
// customers food accurate to the offerings provided at certain times.
class RestaurantService {
    serveMenu(timeOfDayIn24Hr: number): IMenu {
        if(timeOfDayIn24Hr > 16){
            return new DinnerMenu();
        }

        else return new BrunchMenu();
    }
}