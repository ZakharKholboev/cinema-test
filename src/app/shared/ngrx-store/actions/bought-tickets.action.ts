import { Ticket } from '../../models/ticket.model';


export const BOUGHT_TICKETS_ACTION = {
  SET: 'SET_BOUGHT_TICKETS'
};


export class SetBoughtTicketsAction {
  readonly type = BOUGHT_TICKETS_ACTION.SET;
  payload: {
    boughtTickets: Ticket[]
  };

  constructor(boughtTickets: Ticket[]) {
    this.payload = {
      boughtTickets
    };
  }
}
