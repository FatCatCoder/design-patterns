/**
 * Subject (Publisher) - state to be shared and watched 
 * Observer (Subscriber) - object which watches the publisher's state
 * 
 * When a change happens to the globally shared state in the publisher
 * the subscribers need to be notified to update their own views or data layers
 */

interface IPublisher{
    Subscribers: ISubscriber[]

    notify(): void
    attach(sub: ISubscriber): void
    remove(sub: ISubscriber): void
}

interface ISubscriber{
    Update(): void
}


class Publisher implements IPublisher{
    Subscribers: ISubscriber[] = []

    public Publisher(subs: ISubscriber[] | null){
        this.Subscribers = subs ?? []
    }
    
    notify = () => this.Subscribers.forEach(element => {
        element.Update()
    });

    attach = (sub: ISubscriber) => this.Subscribers.push(sub)
    remove = (sub: ISubscriber) => this.Subscribers = this.Subscribers.filter(x => x != sub)
}


class Subscriber implements ISubscriber{
    Update = () => console.log('Updated Subscriber from Sub')
}

class SubscriberOther implements ISubscriber{
    Update = () => console.log('Updated SubscriberOther from Sub');
}




const pub = new Publisher()

const sub1 = new Subscriber()
const sub2 = new SubscriberOther()
pub.attach(sub1)
pub.attach(sub2)

pub.notify()
pub.remove(sub2)
pub.notify()