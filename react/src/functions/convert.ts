export function convertToInputElement(element: HTMLElement | null) {
	if (element instanceof HTMLInputElement) {
		return element;
	} else {
		console.error('Ошибка: Переданный элемент не является HTMLInputElement');
		return null;
	}
}
