import { Rental } from '../../rental/shared/rental.model';
export class Booking {
  static readonly DATE_FORMAT = 'Y/MM/DD';

  _id: string;
  startAt: string;
  endAt: string;
  totalPrice: number;
  guest: number;
  days: number;
  dailyRate: number;
  paymentToken: any;
  createdAt: string;
  rental: Rental;
}
