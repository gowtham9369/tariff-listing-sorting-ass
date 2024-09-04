import { Component,OnInit,ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'my-angular-app-18';
  tariffs: any[] = [];
  filteredTariffs: any[] = [];
  filterType: string = 'price'; // default filter
  loading: boolean = false; 

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getTariffs().subscribe((data) => {
      this.tariffs = data;
      this.sortTariffs();
    });
  }

  onFilterChange(event: Event): void {
    const filterValue = (event.target as HTMLSelectElement).value;
    this.filterType = filterValue;
    this.sortTariffs();
    this.loading = true;  // show the loader
    setTimeout(() => {
      this.sortTariffs(); // sort after 2 seconds
      this.loading = false;  // hide the loader
    }, 300);  // 0.3 second delay
  }
  
  sortTariffs(): void {
    this.filteredTariffs = [...this.tariffs].sort((a,b) => {
      if (this.filterType === 'price') {
        return a.price - b.price;
      } else if (this.filterType === 'download') {
        return a.download - b.download;
      } else if (this.filterType === 'upload') {
        return a.upload - b.upload;
      }
      return 0;
    });
  }
  
}
