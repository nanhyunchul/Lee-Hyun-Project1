var reviews = [{
  restaurant: 'Restaurant1',
  address: '123 Abc St. Tustin CA 92606',
  name: 'Andrew',
  city: 'Tustin',
  zip: 92606,
  comment: 'This is a review'
}, {
  restaurant: 'Restaurant2',
  address: '321 Cba St. Irvine CA 92602',
  name: 'Helen',
  city: 'Irvine',
  zip: 92602,
  comment: 'This is a review'
}, {
  restaurant: 'Restaurant3',
  address: '456 Def Ave. Los Angeles CA 92638',
  name: 'Mark',
  city: 'Los Angeles',
  zip: 92638,
  comment: 'This is a review'
}, {
  restaurant: 'Restaurant4',
  address: '789 Ghi Blvd. Irvine CA 92620',
  name: 'Garry',
  city: 'Irvine',
  zip: 92620,
  comment: 'This is a reviewList'
}, {
  restaurant: 'Restaurant5',
  address: '987 Jkl Ave. Garden Grove CA 92843',
  name: 'Phillip',
  city: 'Garden Grove',
  zip: 92843,
  comment: 'This is a Review'
}];

var reviewLocation = document.getElementById('reviewList');
var searchInput = document.getElementById('keyword');
var lookUp = document.getElementById('search');

// var remove = document.getElementsByClassName('panel panel-default');
// var parentRemove = remove.parentNode;
//
// function removeResults(event) {
//   event.preventDefault();
//   for (i = 0; i < remove.length; i++)
//     parentRemove.removeChild(remove[i]);
// }
// This is an enhancement to the issue #1. Will comabeck later to finish if time allows.

function results(event) {
  event.preventDefault();
  for (i = 0; i < reviews.length; i++) {
    var reviewContent = document.createElement('div')
    reviewContent.setAttribute('class', 'panel panel-default');

    var commentHeading = document.createElement('div');
    commentHeading.setAttribute('class', 'panel-heading');

    var profilePicture = document.createElement('img');
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

    var restaurantPicture = document.createElement('img');
    restaurantPicture.setAttribute('src', 'images/restaurant.jpg');
    restaurantPicture.setAttribute('width', '50px');
    restaurantPicture.setAttribute('height', '50px');

    var restaurantName = document.createElement('span');
    restaurantName.setAttribute('class', 'panel-title');

    var restaurantNameValue = document.createTextNode(reviews[i].restaurant);

    var restaurantAddress = document.createElement('p');
    var AddressValue = document.createTextNode('Address: ' + reviews[i].address);

    if (searchInput.value.toLowerCase() == reviews[i].restaurant.toLowerCase()) {
      restaurantName.appendChild(restaurantNameValue);
      restaurantAddress.appendChild(AddressValue);
      commentHeading.appendChild(restaurantPicture);
      commentHeading.appendChild(restaurantName);
      commentHeading.appendChild(restaurantAddress);
      commentBody.appendChild(commentText);
      reviewContent.appendChild(commentHeading);
      reviewContent.appendChild(commentBody);
      reviewLocation.appendChild(reviewContent);
    }
  }
}

// lookUp.addEventListener('submit', removeResults);
//Enhancement to the search function. Will visit later.
lookUp.addEventListener('submit', results);


var asdf = [{
  a: 'a s d f',
  b: 'q w e r t y'
}, {
  a: 'a g d s w',
  b: 'a f k o w'
}];

function test(value) {
  var spliced = value[0].a.split(' ');
  console.log(spliced);
}

test(asdf);
