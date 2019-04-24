interface TicketPlacement {
  row: number;
  column: number;
}

export class Ticket {

  constructor(
    public placement: TicketPlacement,
    public boughtStatus: boolean,
    public movieName: string
  ) {}

}
