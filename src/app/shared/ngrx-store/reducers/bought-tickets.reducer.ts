import { Ticket } from '../../models/ticket.model';
import { BOUGHT_TICKETS_ACTION } from '../actions/bought-tickets.action';


export function boughtTicketsReducer(bouthgtTickets: Ticket[] = [], action) {
  switch (action.type) {
    case BOUGHT_TICKETS_ACTION.SET:
      return action.payload.boughtTickets;

    default: return bouthgtTickets;
  }
}
