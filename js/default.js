var reviews = [{
  img: "../images.logo.png",
  name: 'Andrew',
  address: '123 Jamboree',
  city: 'tustin',
  zip: 92606,
  comment: 'safsadkfjlksafsa'
}, {
  img: "../images.logo.png",
  name: 'Helen',
  address: '456 Culver',
  city: 'Irvine',
  zip: 92602,
  comment: 'asklfhoiasfhosafs'
}, {
  img: "../images.logo.png",
  name: 'Mark',
  address: '300 Regal',
  city: 'Irvine',
  zip: 92620,
  comment: 'asdhfoiawheasnfv'
}, {
  img: "../images.logo.png",
  name: 'Garry',
  address: '273 Yale',
  city: 'Irvine',
  zip: 92620,
  comment: 'asdhfohoiweksanf'
}, {
  img: "../images.logo.png",
  name: 'Phillip',
  address: '8932 Harbor',
  city: 'Garden Grove',
  zip: 92843,
  comment: 'ashfoisadhfoinv'
}];

var reviewLocation = document.getElementById('reviewList');

var reviewDiv = document.createElement('div');
reviewDiv.setAttribute('class', 'list-group');

var reviewContent = document.createElement('a');
reviewContent.setAttribute('href', '#');
reviewContent.setAttribute('class', 'list-group-item list-group-item-danger');

var commentHead = document.createElement('h5');
commentHead.setAttribute('class', 'list-group-item-heading');

var profilePicture = document.createElement('img');
profilePicture.setAttribute('class', 'picture');
profilePicture.setAttribute('src', 'images/logo.png');
profilePicture.setAttribute('width', '50px');
profilePicture.setAttribute('height', '50px');

var profileName = document.createElement('span');
var userName = document.createTextNode(reviews[0].name);

var commentBody = document.createElement('p');
commentBody.setAttribute('class', 'list-group-item-text');
var commentText = document.createTextNode(reviews[0].comment);

profileName.appendChild(userName);
commentHead.appendChild(profilePicture);
commentHead.appendChild(profileName);
commentBody.appendChild(commentText);
reviewContent.appendChild(commentHead);
reviewContent.appendChild(commentBody);
reviewDiv.appendChild(reviewContent);
reviewLocation.appendChild(reviewDiv);
