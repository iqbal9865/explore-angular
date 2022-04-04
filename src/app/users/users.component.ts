import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userId: any = ''
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('user id is : '+ this.route.snapshot.paramMap.get('id'))
    this.userId = this.route.snapshot.paramMap.get('id');
  }

}
