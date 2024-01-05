import nats, { Message } from 'node-nats-streaming';
import { randomBytes } from 'crypto';

console.clear();

const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
    url: 'http://localhost:4222'
});


stan.on('connect', () => {
    console.log('Listener connected to NATS');

    stan.on('close', () => {
        console.log('NATS connnection close');
        process.exit();
    });

    const options = stan
        .subscriptionOptions()
        .setManualAckMode(true)
        .setDeliverAllAvailable()
        .setDurableName('accounting-service');

    // Queue groups is used to round robin between 2+ listeners of same type
    const subscription = stan.subscribe(
        'ticket:created',
        'orders-service-queue-group',
        options
    );

    subscription.on('message', (msg: Message) => {

        const data = msg.getData();

        if (typeof data === 'string') {

            console.log(`Received event #${msg.getSequence()}, with data: ${data}`);
        }
        //ack only when you are sure that the message was properly processed
        msg.ack();
    });
});

process.on('SIGINT', () => stan.close());
process.on('SIGTERM', () => stan.close());