import { Publisher, Subjects, TicketUpdatedEvent } from '@tv-tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
