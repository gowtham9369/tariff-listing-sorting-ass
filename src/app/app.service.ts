import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getTariffs(): Observable<any[]> {
    // Extended mocked data with 10 records
    const tariffs = [
      {
        "name": "Freelancer Plan",
        "download": 150,
        "upload": 30,
        "price": 35,
        "benefits": ["24/7 Support", "Flexible Contract", "Free Router"]
      },
      {
        "name": "Gamer Plan",
        "download": 600,
        "upload": 150,
        "price": 90,
        "benefits": ["Low Latency", "Free Installation", "Free Router", "24/7 Support"]
      },
      {
        "name": "Student Plan",
        "download": 80,
        "upload": 15,
        "price": 15,
        "benefits": ["Discount for Students", "24/7 Support", "No Contract"]
      },
      {
        "name": "Ultra Plan",
        "download": 500,
        "upload": 100,
        "price": 75,
        "benefits": ["24/7 Support", "Free Installation", "Free Router", "Extended Warranty"]
      },
      {
        "name": "Business Plan",
        "download": 1000,
        "upload": 500,
        "price": 120,
        "benefits": ["Priority Customer Support", "Free Installation", "Dedicated Line"]
      },
      {
        "name": "Basic Plan",
        "download": 50,
        "upload": 10,
        "price": 20,
        "benefits": ["24/7 Support", "Free Installation"]
      },
      {
        "name": "Family Plan",
        "download": 300,
        "upload": 60,
        "price": 60,
        "benefits": ["24/7 Support", "Parental Controls", "Free Installation"]
      },
      {
        "name": "Premium Plan",
        "download": 200,
        "upload": 50,
        "price": 50,
        "benefits": ["24/7 Support", "Free Installation", "Free Router", "Priority Customer Service"]
      },
      {
        "name": "Streaming Plan",
        "download": 400,
        "upload": 80,
        "price": 65,
        "benefits": ["Unlimited Streaming", "Free Installation", "24/7 Support"]
      },
      {
        "name": "Standard Plan",
        "download": 100,
        "upload": 20,
        "price": 30,
        "benefits": ["24/7 Support", "Free Installation", "Free Router"]
      }
    ];
    return of(tariffs);
  }
  
}
