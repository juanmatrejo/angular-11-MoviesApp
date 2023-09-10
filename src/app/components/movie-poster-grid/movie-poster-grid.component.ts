import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/nowPlaying.response';

@Component({
	selector: 'app-movie-poster-grid',
	templateUrl: './movie-poster-grid.component.html',
	styleUrls: ['./movie-poster-grid.component.css']
})
export class MoviePosterGridComponent implements OnInit {

	@Input() _movies: Movie[] = [];

	constructor(private _router: Router) { }

	ngOnInit(): void { }

	getDetails(movie: Movie) {

		this._router.navigate(['movie', movie.id]);
	}
}
