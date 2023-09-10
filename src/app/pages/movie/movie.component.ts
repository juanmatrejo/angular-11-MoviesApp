import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Cast } from 'src/app/interfaces/credits.response';
import { MovieResponse } from 'src/app/interfaces/movie.response';
import { MovieService } from 'src/app/services/movie.service';

@Component({
	selector: 'app-movie',
	templateUrl: './movie.component.html',
	styles: [
	]
})
export class MovieComponent implements OnInit {

	_movie!: MovieResponse;
	_cast: Cast[] = [];

	constructor(private _activatedRoute: ActivatedRoute, private _movieService: MovieService, private _location: Location, private _router: Router) { }

	ngOnInit(): void {

		const id = this._activatedRoute.snapshot.params['id'];

		combineLatest({

			movie: this._movieService.getDetails(id),
			cast: this._movieService.getCredits(id)

		}).subscribe(response => {

			console.log(response);

			if (!response) {

				this._router.navigateByUrl('/home');
				return;
			}

			this._movie = response.movie as MovieResponse;
			this._cast = response.cast.filter(actor => actor.profile_path !== null);
		},
			err => console.log(err));
	}

	back(): void {

		this._location.back();
	}
}
