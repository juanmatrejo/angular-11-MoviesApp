import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/nowPlaying.response';
import { MovieService } from 'src/app/services/movie.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styles: [
	]
})
export class SearchComponent implements OnInit, OnDestroy {

	_searchValue: string = '';
	_movies: Movie[] = [];
	_moviesSlide: Movie[] = [];

	@HostListener('window: scroll', ['$event'])
	onScroll() {

		const position = (document.documentElement.scrollTop || document.body.scrollTop) + 1525;
		const maxHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

		if (position >= maxHeight) {

			if (!this._movieService._isLoading) {

				this._movieService.search(this._searchValue).subscribe(response => {

					this._movies.push(...response);
					this._moviesSlide = response;
				});
			}
		}
	}

	constructor(private _activatedRoute: ActivatedRoute, private _movieService: MovieService) { }

	ngOnInit(): void {

		this._activatedRoute.params.subscribe((params: any) => {

			this._movieService.resetPage();
			this._searchValue = params.value;

			this._movieService.search(this._searchValue).subscribe(response => {

				this._movies = response;
				this._moviesSlide = response;
			})
		});
	}

	ngOnDestroy(): void {

		this._movieService.resetPage();
	}
}
