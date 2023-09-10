import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { PipesModule } from '../pipes/pipes.module';
import { MoviePosterGridComponent } from './movie-poster-grid/movie-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { CastSlideShowComponent } from './cast-slide-show/cast-slide-show.component';

@NgModule({
	declarations: [
		NavbarComponent,
		SlideShowComponent,
		MoviePosterGridComponent,
		CastSlideShowComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		PipesModule,
		RatingModule
	],
	exports: [
		NavbarComponent,
		SlideShowComponent,
		MoviePosterGridComponent,
		CastSlideShowComponent
	]
})
export class ComponentsModule { }
