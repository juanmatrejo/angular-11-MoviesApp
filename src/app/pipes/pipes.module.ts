import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextsPipe } from './texts.pipe';
import { PosterPipe } from './poster.pipe';

@NgModule({
	declarations: [
		TextsPipe,
		PosterPipe
	],
	imports: [
		CommonModule
	],
	exports: [
		TextsPipe,
		PosterPipe
	]
})
export class PipesModule { }
