const body = document.body;
body.style.backgroundColor = 'grey';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.gap = '1rem';

// rewrite createContainer to  a factory function and add the ability for it to append it to a parent element

const createElementFactory =
	(parent) =>
	(
		elementType,
		properties = {},
		children = [],
		appendToParent = true
	) => {
		const element = document.createElement(elementType);

		// Set element properties
		for (const [key, value] of Object.entries(properties)) {
			element[key] = value;
		}

		// Add child elements
		for (const child of children) {
			if (typeof child === 'string') {
				element.appendChild(document.createTextNode(child));
			} else {
				element.appendChild(child);
			}
		}

		// Append element to parent, if specified
		if (parent && appendToParent) {
			parent.appendChild(element);
		}

		return element;
	};

// Example usage
const parentElement = document.body;
const createAndAppendElement = createElementFactory(parentElement);

const newDiv = createAndAppendElement('div', {
	textContent: 'This is a new div',
	className: 'my-class',
	style: 'background-color: red; width: 100px; height: 100px;',
});

const newSpan = createAndAppendElement('span', {
	textContent: 'This is a new span',
	style: 'color: blue;',
});

createAndAppendElement('p', {}, [
	'This is a paragraph with a ',
	newSpan,
	' inside.',
]);

const newImg = createAndAppendElement(
	'img',
	{
		src: 'path/to/image.jpg',
	},
	[],
	false
);

/* document.body.appendChild(newImg); */
