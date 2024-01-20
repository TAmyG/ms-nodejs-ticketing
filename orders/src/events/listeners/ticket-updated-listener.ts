import { Listener, Subjects, TicketUpdatedEvent } from "@tv-tickets/common";
import { queueGroupName } from "./queue-group-name";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../models/ticket";


export class TicketUpdatedListener extends Listener<TicketUpdatedEvent>{
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
    queueGroupName: string = queueGroupName;


    async onMessage(data: TicketUpdatedEvent['data'], msg: Message) {
        const ticket = await Ticket.findByEvent(data);

        if (!ticket) {
            throw new Error('Ticket not found');
        }
        // add version to remove mongoose-update-if-current
        const { title, price, version } = data;

        // add version to remove mongoose-update-if-current
        ticket.set({ title, price, version });

        await ticket.save();
        console.log('Ticket Updated: ', data.id);
        msg.ack();
    }
}