import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css']
})
export class UsComponent implements OnInit {

  description:string

  constructor(private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe((params)=> { 
      this.description = params.get('description')
    })
  }

}
