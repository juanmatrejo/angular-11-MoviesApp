import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/nowPlaying.response';
import { Swiper } from 'swiper';

@Component({
	selector: 'app-slide-show',
	templateUrl: './slide-show.component.html',
	styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit, AfterViewInit {

	@Input() _moviesSlide: Movie[] = [];

	_swiper!: Swiper;

	ngOnInit(): void { }

	ngAfterViewInit(): void {

		this._swiper = new Swiper('.swiper', {
			// Optional parameters
			// direction: 'vertical',
			loop: true

			// If we need pagination
			// pagination: {
			// 	el: '.swiper-pagination',
			// },

			// Navigation arrows
			// navigation: {
			// 	nextEl: '.swiper-button-next',
			// 	prevEl: '.swiper-button-prev',
			// },

			// And if we need scrollbar
			// scrollbar: {
			// 	el: '.swiper-scrollbar',
			// },
		});
	}

	onSlidePrev() {

		this._swiper.slidePrev();
	}

	onSlideNext() {

		this._swiper.slideNext();
	}
}
