import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { StateModel } from '../../../shared/models/state.model';
import { Ticket } from '../../../shared/models/ticket.model';
import { TicketService } from '../../../shared/services/ticket.service';


@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.scss']
})
export class BuyTicketComponent implements OnInit {

  tickets: Array<Ticket[]> = [];
  selectedTicket: Ticket;

  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private store: Store<StateModel>
  ) {
  }

  ngOnInit() {
    this.ticketService.setBoughtTicketsFromLocalStorage();
    this.generateTickets(5, 8);
  }

  generateTickets(rowsAmount: number, colsAmount: number) {
    const movieName = this.route.snapshot.params['movie'];
    for (let i = 0; i < rowsAmount; i++) {
      const ticketsInRow = [];

      for (let j = 0; j < colsAmount; j++) {
        ticketsInRow.push(new Ticket(
          {row: i, column: j},
          false,
          movieName
        ));
      }

      this.tickets.push(ticketsInRow);
    }

    this.store.select('boughtTickets').subscribe((boughtTickets: Ticket[]) => {
      boughtTickets
        .filter((boughtTicket: Ticket) => boughtTicket.movieName === movieName)
        .forEach((boughtTicket: Ticket) => {
          this.tickets[boughtTicket.placement.row][boughtTicket.placement.column].boughtStatus = true;
        });
    });
  }

  selectTicket(ticket: Ticket) {
    if (ticket.boughtStatus) {
      return;
    }
    this.selectedTicket = ticket;
  }

  buyTicket(ticket: Ticket) {
    if (!ticket) {
      alert('Ticket is not Selected');
      return;
    }

    this.ticketService.buyTicket(ticket);

    alert('Ticket has successfully bought!');
    alert(`Row: ${ ticket.placement.row + 1 }, Column: ${ ticket.placement.column + 1 }`);
  }

}
