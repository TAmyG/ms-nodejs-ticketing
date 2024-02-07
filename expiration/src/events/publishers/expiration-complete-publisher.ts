import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@tv-tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
