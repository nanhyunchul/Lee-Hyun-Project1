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
var searchInput = document.getElementById('keyword');
var lookUp = document.getElementById('search');
var remove = document.getElementsByClassName('panel');
var parentRemove = remove.parentNode;

function removeResults(event) {
  event.preventDefault();
  for (i = 0; i < remove.length; i++)
    parentRemove.removeChild(remove[i]);
}

function results(event) {
  event.preventDefault();
  for (i = 0; i < reviews.length; i++) {
    var reviewContent = document.createElement('div')
    reviewContent.setAttribute('class', 'panel panel-default');
    var commentHeading = document.createElement('div');
    commentHeading.setAttribute('class', 'panel-heading');
    var profilePicture = document.createElement('img');
    profilePicture.setAttribute('class', 'picture');
    profilePicture.setAttribute('src', 'images/logo.png');
    profilePicture.setAttribute('width', '50px');
    profilePicture.setAttribute('height', '50px');
    var profileName = document.createElement('span');
    profileName.setAttribute('class', 'panel-title');
    var userName = document.createTextNode(reviews[i].name);
    var commentBody = document.createElement('div');
    commentBody.setAttribute('class', 'panel-body');
    var commentText = document.createTextNode(reviews[i].comment);

    if (searchInput.value == '') {
      profileName.appendChild(userName);
      commentHeading.appendChild(profilePicture);
      commentHeading.appendChild(profileName);
      commentBody.appendChild(commentText);
      reviewContent.appendChild(commentHeading);
      reviewContent.appendChild(commentBody);
      reviewLocation.appendChild(reviewContent);
    }

    if (searchInput.value.toLowerCase() == reviews[i].city.toLowerCase() || searchInput.value == reviews[i].zip) {
      profileName.appendChild(userName);
      commentHeading.appendChild(profilePicture);
      commentHeading.appendChild(profileName);
      commentBody.appendChild(commentText);
      reviewContent.appendChild(commentHeading);
      reviewContent.appendChild(commentBody);
      reviewLocation.appendChild(reviewContent);
    }
  }
}

lookUp.addEventListener('submit', removeResults);
lookUp.addEventListener('submit', results);
