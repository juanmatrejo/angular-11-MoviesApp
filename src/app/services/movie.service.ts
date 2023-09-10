import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Movie } from '../interfaces/nowPlaying.response';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { MovieResponse } from '../interfaces/movie.response';
import { Cast, CreditsResponse } from '../interfaces/credits.response';

@Injectable({
	providedIn: 'root'
})
export class MovieService {

	private _baseUrl: string = 'https://api.themoviedb.org/3';
	private _pageNumber: number = 1;
	public _isLoading: boolean = false;

	constructor(private _httpClient: HttpClient) { }

	getNowPlaying(): Observable<Movie[]> {

		// GET /3/movie/now_playing?language=en-US&page=1 HTTP/1.1
		// Accept: application/json
		// Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzAzYTA4YWJkODJhY2NhZTRlZDdiZTdmOWU2NGY3NiIsInN1YiI6IjY0YWRlYWQ2MWNmZTNhMDEwMTg0NWIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g0B8LMyi5quGK2N7jSkc4UTw8j45Urs_gvbHPntJaAU
		// Host: api.themoviedb.org

		this._isLoading = true;

		const headers: HttpHeaders = new HttpHeaders()
			.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzAzYTA4YWJkODJhY2NhZTRlZDdiZTdmOWU2NGY3NiIsInN1YiI6IjY0YWRlYWQ2MWNmZTNhMDEwMTg0NWIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g0B8LMyi5quGK2N7jSkc4UTw8j45Urs_gvbHPntJaAU');

		const params: HttpParams = new HttpParams()
			.set('language', 'en-US')
			.set('page', this._pageNumber);

		return this._httpClient.get<Movie[]>(`${this._baseUrl}/movie/now_playing`,
			{ headers, params })
			.pipe(
				map((response: any) => response.results),
				tap(() => {

					this._pageNumber++;
					this._isLoading = false;
				})
			);
	}

	search(film: string): Observable<Movie[]> {

		this._isLoading = true;

		const headers: HttpHeaders = new HttpHeaders()
			.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzAzYTA4YWJkODJhY2NhZTRlZDdiZTdmOWU2NGY3NiIsInN1YiI6IjY0YWRlYWQ2MWNmZTNhMDEwMTg0NWIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g0B8LMyi5quGK2N7jSkc4UTw8j45Urs_gvbHPntJaAU');

		const params: HttpParams = new HttpParams()
			.set('query', film)
			.set('language', 'en-US')
			.set('include_adult', false)
			.set('page', this._pageNumber);

		return this._httpClient.get<Movie[]>(`${this._baseUrl}/search/movie`,
			{ headers, params })
			.pipe(
				map((response: any) => response.results),
				tap(() => {

					this._pageNumber++;
					this._isLoading = false;
				})
			);
	}

	getDetails(id: number): Observable<MovieResponse> | any {

		const headers: HttpHeaders = new HttpHeaders()
			.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzAzYTA4YWJkODJhY2NhZTRlZDdiZTdmOWU2NGY3NiIsInN1YiI6IjY0YWRlYWQ2MWNmZTNhMDEwMTg0NWIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g0B8LMyi5quGK2N7jSkc4UTw8j45Urs_gvbHPntJaAU');

		const params: HttpParams = new HttpParams()
			.set('language', 'en-US')

		return this._httpClient.get<MovieResponse>(`${this._baseUrl}/movie/${id}`,
			{ headers })
			.pipe(
				map(response => response),
				catchError(() => of(null))
			);
	}

	resetPage() {

		this._pageNumber = 1;
	}

	getCredits(id: number): Observable<Cast[]> {

		const headers: HttpHeaders = new HttpHeaders()
			.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzAzYTA4YWJkODJhY2NhZTRlZDdiZTdmOWU2NGY3NiIsInN1YiI6IjY0YWRlYWQ2MWNmZTNhMDEwMTg0NWIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g0B8LMyi5quGK2N7jSkc4UTw8j45Urs_gvbHPntJaAU');

		const params: HttpParams = new HttpParams()
			.set('language', 'en-US')

		return this._httpClient.get<Cast[]>(`${this._baseUrl}/movie/${id}/credits`,
			{ headers, params })
			.pipe(
				map((response: any) => response.cast),
				catchError(() => [])
			);
	}
}
