import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateModel } from '../models/state.model';
import { Ticket } from '../models/ticket.model';
import { SetBoughtTicketsAction } from '../ngrx-store/actions/bought-tickets.action';


@Injectable()
export class TicketService {

  constructor(
    private store: Store<StateModel>
  ) {}

  setBoughtTicketsFromLocalStorage() {
    let boughtTickets: any = localStorage.getItem('boughtTickets');
    if (!boughtTickets) {
      localStorage.setItem('boughtTickets', '[]');
      boughtTickets = '[]';
    }

    this.store.dispatch(
      new SetBoughtTicketsAction(JSON.parse(boughtTickets))
    );
  }

  buyTicket(ticket: Ticket) {
    this.store.select('boughtTickets').subscribe((boughtTickets: Ticket[]) => {
      if (boughtTickets.includes(ticket)) return;
      const newBoughtTickets = [...boughtTickets, ticket];

      this.store.dispatch(
        new SetBoughtTicketsAction(newBoughtTickets)
      );

      localStorage.setItem('boughtTickets', JSON.stringify(
        newBoughtTickets
      ));
    });
  }

}
