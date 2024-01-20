import { Publisher, Subjects, TicketCreatedEvent } from '@tv-tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}