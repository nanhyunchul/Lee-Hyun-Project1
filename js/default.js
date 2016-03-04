var reviews = [
  {
    restaurant: 'Restaurant1',
    address: '123 Abc St. Tustin CA 92606',
    name: 'Andrew',
    city: 'Tustin',
    zip: 92606,
    comment: 'This is a review'
  },
  {
    restaurant: 'Restaurant2',
    address: '321 Cba St. Irvine CA 92602',
    name: 'Helen',
    city: 'Irvine',
    zip: 92602,
    comment: 'This is a review'
  },
  {
    restaurant: 'Restaurant3',
    address: '456 Def Ave. Los Angeles CA 92638',
    name: 'Mark',
    city: 'Los Angeles',
    zip: 92638,
    comment: 'This is a review'
  },
  {
    restaurant: 'Restaurant4',
    address: '789 Ghi Blvd. Irvine CA 92620',
    name: 'Garry',
    city: 'Irvine',
    zip: 92620,
    comment: 'This is a reviewList'
  },
  {
    restaurant: 'Restaurant5',
    address: '987 Jkl Ave. Garden Grove CA 92843',
    name: 'Phillip',
    city: 'Garden Grove',
    zip: 92843,
    comment: 'This is a Review'
  }
];

//issue 1 & 2. User can search reviews and view a list of reveiws
var reviewLocation = document.getElementById('reviewList');
var searchInput = document.getElementById('keyword');
var lookUp = document.getElementById('search');

function results(event) {
  event.preventDefault();
  for (var i = 0; i < reviews.length; i++) {
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

lookUp.addEventListener('submit', results);
// end of issue 1 & 2.

// var remove = document.getElementsByClassName('panel panel-default');
// var parentRemove = remove.parentNode;
//
// function removeResults(event) {
//   event.preventDefault();
//   for (i = 0; i < remove.length; i++)
//     parentRemove.removeChild(remove[i]);
// }
//
// lookUp.addEventListener('submit', removeResults);
//This is an Enhancement to the search function. Will visit later.

//issue 3. User can post a review.
//hide&show function for write button.
var writeReview = document.getElementById('write');
var reviewInput = document.getElementById('reviewPanel');

function toggleClass(value, element) {
  var reviewClasses = element.className.split(' ');
  var position = reviewClasses.indexOf(value);

  if (position == -1) {
    reviewClasses.push(value);
  } else {
    reviewClasses.splice(position, 1);
  }

  element.className = reviewClasses.join(' ');
}

writeReview.addEventListener('click', function() {
  toggleClass('hidden', reviewInput);
});

//post function.
var postReview = document.getElementById('post');

function post() {
  event.preventDefault();
  //create a new object with input values and push it to an array 'reviews'.
  var reviewName = document.getElementById('name');
  var reviewRestaurant = document.getElementById('restaurant');
  var reviewAddress = document.getElementById('address');
  var reviewCity = document.getElementById('city');
  var reviewState = document.getElementById('state');
  var reviewZip = document.getElementById('zip');
  var reviewComment = document.getElementById('comment');

  var newReview = {};
  newReview.name = reviewName.value;
  newReview.restaurant = reviewRestaurant.value;
  newReview.address = reviewAddress.value + ' ' + reviewCity.value + ' ' + reviewState.value + ' ' + reviewZip.value;
  newReview.city = reviewCity.value;
  newReview.zip = reviewZip.value;
  newReview.comment = reviewComment.value;

  reviews.unshift(newReview);

  //append the values of 'newReview' to the list of reviews.
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

  var userName = document.createTextNode(reviews[0].name);

  var commentBody = document.createElement('div');
  commentBody.setAttribute('class', 'panel-body');

  var commentText = document.createTextNode(reviews[0].comment);

  profileName.appendChild(userName);
  commentHeading.appendChild(profilePicture);
  commentHeading.appendChild(profileName);
  commentBody.appendChild(commentText);
  reviewContent.appendChild(commentHeading);
  reviewContent.appendChild(commentBody);
  reviewLocation.appendChild(reviewContent);
}


postReview.addEventListener('click', post);
  //this will allow writing panel to dissapear as user clicks the button to post a review.
postReview.addEventListener('click', function() {
  toggleClass('hidden', reviewInput);
});
