import { Controller, Get, Post, Body, Patch, Param, Delete ,Req,Res} from '@nestjs/common';
import {Request, Response}  from 'express'

const stripe = require('stripe')('sk_test_51Jr2k6HXpALkWPl9A8k9ssiO4J7Pz2pq7Rp9CDpIK75VDUMRkHeBY2DI8isnzNgB3hBoSmRuRc79bvTs1TonYCuN004jue5BZz')


@Controller('/payments')
export class PaymentController {
 
  async createSession (@Body() product : any, @Req() request: Request, @Res() res : Response) {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
          price: product.amount,
        },
      ],
      payment_method_types: [
        'card',
      ],
      mode: 'payment',
      success_url: `http://localhost:5000//success.html`,
      cancel_url: `http://localhost:5000//cancel.html`,
    });
  
    res.redirect(303, session.url)
  };
  }
  
  // ... other routes

