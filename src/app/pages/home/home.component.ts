import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/nowPlaying.response';
import { MovieService } from 'src/app/services/movie.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styles: [
	]
})
export class HomeComponent implements OnInit, OnDestroy {

	_movies: Movie[] = [];
	_moviesSlide: Movie[] = [];

	@HostListener('window: scroll', ['$event'])
	onScroll() {

		const position = (document.documentElement.scrollTop || document.body.scrollTop) + 1525;
		const maxHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

		if (position >= maxHeight) {

			if (!this._movieService._isLoading) {

				this._movieService.getNowPlaying().subscribe(response => {

					this._movies.push(...response);
					this._moviesSlide = response;
				});
			}
		}
	}

	constructor(private _movieService: MovieService) { }

	ngOnInit(): void {

		this._movieService.getNowPlaying().subscribe(response => {

			this._movies = response;
			this._moviesSlide = response;
		});
	}

	ngOnDestroy(): void {

		this._movieService.resetPage();
	}
}
