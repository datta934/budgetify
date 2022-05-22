import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { InterfaceTransactionRecords } from 'src/components/shared/transaction.interface';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-get-transactions',
  templateUrl: './get-transactions.component.html',
  styleUrls: ['./get-transactions.component.scss']
})
export class GetTransactionsComponent implements OnInit {
  public displayedColumns = ['date', 'type', 'payment', 'amount'];
  public dataSource = new MatTableDataSource<InterfaceTransactionRecords>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((data) => {
      this.dataSource.data = data as InterfaceTransactionRecords[];
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
