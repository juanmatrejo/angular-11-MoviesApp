import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

	constructor(private _router: Router) { }

	searchFilm(film: string) {

		if (film.trim().length === 0) { return; }

		this._router.navigate(['/search', film]);
	}
}
