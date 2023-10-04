import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  private stripePromise = loadStripe('YOUR_STRIPE_SECRET_KEY');

  constructor() { }


  // ngOnInit(): void {
    
  // }

  async ngOnInit() {
    const stripe = await this.stripePromise;
  }


  }

