export interface Event {
  id: string;
  name: string;
  description: string;
  date: Date;
  location: string;
  imageUrl?: string;
}

export interface TicketCategory {
  id: string;
  eventId: string;
  name: string;
  price: number;
  totalStock: number;
  availableStock: number;
}

export interface UserTicket {
  id: string;
  userId: string;
  ticketCategoryId: string;
  status: 'PENDING' | 'PAID' | 'CANCELED';
  purchasedAt: Date;
}