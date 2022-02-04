import { Component, OnInit } from '@angular/core';
import { Discussions } from '../top-discussions.model';

@Component({
  selector: 'app-discussion-list',
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.css']
})
export class DiscussionListComponent implements OnInit {
  discussions: Discussions[]=[
    new Discussions('Discussion1', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum','https://m.media-amazon.com/images/I/61aG6EicTIL._AC_SY741_.jpg' ),
    new Discussions('Discussion2', 'Test Discussion 1 hv ybuvgvvy fctfc ftcf cfhcf chfffhcffgf','https://m.media-amazon.com/images/I/61aG6EicTIL._AC_SY741_.jpg' ),
    new Discussions('Discussion3', 'Test Discussion 1 hv ybuvgvvy fctfc ftcf cfhcf chfffhcffgf','https://m.media-amazon.com/images/I/61aG6EicTIL._AC_SY741_.jpg' ),
    new Discussions('Discussion4', 'Test Discussion 1 hv ybuvgvvy fctfc ftcf cfhcf chfffhcffgf','https://m.media-amazon.com/images/I/61aG6EicTIL._AC_SY741_.jpg' ),
    new Discussions('Discussion1', 'Test Discussion 1 hv ybuvgvvy fctfc ftcf cfhcf chfffhcffgf','https://m.media-amazon.com/images/I/61aG6EicTIL._AC_SY741_.jpg' )
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
