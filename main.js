const body = document.body;
body.style.backgroundColor = 'grey';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.gap = '1rem';

// rewrite createContainer to  a factory function and add the ability for it to append it to a parent element

const createContainer = (
	text,
	color,
	width,
	height,
	display,
	justifyContent,
	alignItems,
	parentElement
) => {
	const container = document.createElement('div');
	container.textContent = text;
	container.classList.add('container');
	container.style.backgroundColor = color;
	container.style.width = width;
	container.style.height = height;
	container.style.display = display;
	container.style.justifyContent = justifyContent;
	container.style.alignItems = alignItems;

	parentElement.appendChild(container);

	return container;
};

const container1 = createContainer(
	'This is a container',
	'red',
	'100%',
	'100%',
	'flex',
	'center',
	'center'
);

const container2 = createContainer(
	'This is also a  container',
	'red',
	'100%',
	'100%',
	'flex',
	'center',
	'center'
);
