import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits.response';
import Swiper from 'swiper';

@Component({
	selector: 'app-cast-slide-show',
	templateUrl: './cast-slide-show.component.html',
	styles: [
	]
})
export class CastSlideShowComponent implements OnInit, AfterViewInit {

	@Input() _cast: Cast[] = [];

	ngOnInit(): void { }

	ngAfterViewInit(): void {

		const swiper = new Swiper('.swiper-container', {

			slidesPerView: 5.3,
			freeMode: true,
			spaceBetween: 15
		});
	}
}
