import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'texts'
})
export class TextsPipe implements PipeTransform {

	transform(value: string, length: number): string {

		if (value === null) { return ''; }

		let result: string = value;

		if (value.trim().length > length) { result = value.substring(0, length); }

		return result;
	}
}
