import { Component, OnInit } from '@angular/core';
import { Discussions } from '../top-discussions.model';

@Component({
  selector: 'app-discussion-list',
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.css']
})
export class DiscussionListComponent implements OnInit {
  discussions: Discussions[]=[
    new Discussions('Discussion1', 'Test Discussion 1 hv ybuvgvvy fctfc ftcf cfhcf chfffhcffgf','https://m.media-amazon.com/images/I/61aG6EicTIL._AC_SY741_.jpg' ),
    new Discussions('Discussion2', 'Test Discussion 1 hv ybuvgvvy fctfc ftcf cfhcf chfffhcffgf','https://m.media-amazon.com/images/I/61aG6EicTIL._AC_SY741_.jpg' ),
    new Discussions('Discussion3', 'Test Discussion 1 hv ybuvgvvy fctfc ftcf cfhcf chfffhcffgf','https://m.media-amazon.com/images/I/61aG6EicTIL._AC_SY741_.jpg' ),
    new Discussions('Discussion4', 'Test Discussion 1 hv ybuvgvvy fctfc ftcf cfhcf chfffhcffgf','https://m.media-amazon.com/images/I/61aG6EicTIL._AC_SY741_.jpg' ),
    new Discussions('Discussion1', 'Test Discussion 1 hv ybuvgvvy fctfc ftcf cfhcf chfffhcffgf','https://m.media-amazon.com/images/I/61aG6EicTIL._AC_SY741_.jpg' )
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
