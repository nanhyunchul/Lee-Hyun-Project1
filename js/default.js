var reviews = [{
  img: "../images.logo.png",
  name: 'Andrew',
  city: 'Tustin',
  zip: 92606,
  comment: 'safsadkfjlksafsa'
}, {
  img: "../images.logo.png",
  name: 'Helen',
  city: 'Irvine',
  zip: 92602,
  comment: 'asklfhoiasfhosafs'
}, {
  img: "../images.logo.png",
  name: 'Mark',
  city: 'Los Angeles',
  zip: 92620,
  comment: 'asdhfoiawheasnfv'
}, {
  img: "../images.logo.png",
  name: 'Garry',
  city: 'Irvine',
  zip: 92620,
  comment: 'asdhfohoiweksanf'
}, {
  img: "../images.logo.png",
  name: 'Phillip',
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

var i = 0;
var profileName = document.createElement('span');
var userName = document.createTextNode(reviews[i].name);

var commentBody = document.createElement('p');
commentBody.setAttribute('class', 'list-group-item-text');
var commentText = document.createTextNode(reviews[i].comment);

function results() {
  var input = document.getElementById('search');
  for (i = 0; i < reviews.length; i++) {
    if (input.value.toLowerCase() == reviews[i].city.toLowerCase()) {
      profileName.appendChild(userName);
      commentHead.appendChild(profilePicture);
      commentHead.appendChild(profileName);
      commentBody.appendChild(commentText);
      reviewContent.appendChild(commentHead);
      reviewContent.appendChild(commentBody);
      reviewDiv.appendChild(reviewContent);
      reviewLocation.appendChild(reviewDiv);
    } else if (input.value == '') {

    }
  }
}

var click = document.getElementById('button');

click.addEventListener('click', results());

var input = document.getElementById('search');
for (i = 0; i < reviews.length; i++) {
  console.log(reviews[i].city);
}
