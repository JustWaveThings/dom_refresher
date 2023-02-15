const body = document.body;
body.style.backgroundColor = 'lightblue';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.gap = '1rem';

// create factory to make elements and be able to dynamically append them
const elementFactory =
	(parent) =>
	(
		elementType,
		properties = {},
		children = [],
		appendToParent = true
	) => {
		const element = document.createElement(elementType);
		for (const [key, value] of Object.entries(properties)) {
			element[key] = value;
		}
		for (const child of children) {
			if (typeof child === 'string') {
				element.appendChild(document.createTextNode(child));
			} else {
				element.appendChild(child);
			}
		}

		if (parent && appendToParent) {
			parent.appendChild(element);
		}
		return element;
	};

const parentElement = document.body;
const createAndAppendElementMain = elementFactory(parentElement);

const newDiv = createAndAppendElementMain('div', {
	textContent: 'This is a new div',
	className: 'my-class',
	id: 'my-id',
	style: 'background-color: red; width: 100%; height: auto;',
});

const divElement = document.getElementById('my-id');
const createAndAppendElement = elementFactory(divElement);

const insideNewDiv = createAndAppendElement('div', {
	textContent: 'This is inside the new div',
	className: 'my-class-too',
	style: 'background-color: green; width: 50%; height: 1.5rem;',
});
