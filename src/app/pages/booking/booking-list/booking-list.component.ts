import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Book } from '../model/guest-book.model';
import { HotelService } from '../service/hotel.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { IBookListComponent } from '../interface/guest-book.interface';
import { SessionService } from 'src/app/shared/services/session.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit, IBookListComponent {
  books: Book[] = [];
  fee = environment.nightlyFee;
  bookingId?: number;
  subscriber?: Observer<any>

  constructor(
    private readonly hotelService: HotelService,
    private readonly sessionService: SessionService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.loadHotel();
  }

  loadHotel(): void {
    this.hotelService.list().subscribe({
      next: (result) => (this.books = result)
    })
  }

  onDeleteReservation(bookingId: number): void {
    this.hotelService.get(bookingId).subscribe(result => {
      if(result.status === 'checked-out'){
        Swal.fire({
          title: `Beneran ${result.reservee.name} mau dihapus?`,
          text: 'Kamu ngga bisa membatalkan ini!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ya, hapus aja!',
        }).then((result) => {
          if (result.isConfirmed) {
            this.hotelService.remove(bookingId).subscribe();
            Swal.fire('Dihapus!', `Data sudah dihapus`, 'success');
            this.loadHotel()
          }
        });
      } else if(result.status === 'checked-in' || result.status === 'reserved'){
        Swal.fire({
          icon: 'error',
          title: 'Eh...',
          text: `Data pemesanan tidak bisa dihapus karena tamu ${result.reservee.name} belum checkout`,
          footer: '<a href="">Kenapa ini?</a>',
        });
      }
    })
    this.router.navigateByUrl('/booking/list')
  }

  onCheckIn(bookingId: number): void {
    this.hotelService.checkIn(bookingId).subscribe();
  }

  onCheckOut(bookingId: number): void {
    this.hotelService.checkOut(bookingId).subscribe();
  }

  onReserve(book: Book): void {
    this.hotelService.reserve(book).subscribe();
  }
}
