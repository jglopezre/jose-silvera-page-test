const MISSION = 'We are an expert group in architectural design and interior design with a residential approach, where we generate creative, authentic and innovative solutions, achieving results that exceed the expectations of each client.'
const VISION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non nisi est sit amet. Et tortor at risus viverra adipiscing at in. Sit amet purus gravida quis.'
const VALUE = 'id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus'

let description = document.getElementById('description')
let mission = document.getElementById('mission').addEventListener('click', () => description.innerHTML = `<p>${MISSION}</p>`);
let vision = document.getElementById('vision').addEventListener('click', () => description.innerHTML = `<p>${VISION}</p>`);
let value = document.getElementById('value').addEventListener('click', () => description.innerHTML = `<p>${VALUE}</p>`);

description.innerHTML = `<p>${MISSION}</p>`;
