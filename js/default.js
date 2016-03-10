var reviews = [
  {
    id: 1,
    restaurant: 'Restaurant1',
    address: '123 Abc St. Tustin CA 92606',
    name: 'Andrew',
    city: 'Tustin',
    zip: 92606,
    comment: 'This is a review',
    star: 5
  },
  {
    id: 2,
    restaurant: 'Restaurant2',
    address: '321 Cba St. Irvine CA 92602',
    name: 'Helen',
    city: 'Irvine',
    zip: 92602,
    comment: 'This is a review',
    star: 3
  },
  {
    id: 3,
    restaurant: 'Restaurant3',
    address: '456 Def Ave. Los Angeles CA 92638',
    name: 'Mark',
    city: 'Los Angeles',
    zip: 92638,
    comment: 'This is a review',
    star: 4
  },
  {
    id: 4,
    restaurant: 'Restaurant4',
    address: '789 Ghi Blvd. Irvine CA 92620',
    name: 'Garry',
    city: 'Irvine',
    zip: 92620,
    comment: 'This is a review',
    star: 4
  },
  {
    id: 5,
    restaurant: 'Restaurant5',
    address: '987 Jkl Ave. Garden Grove CA 92843',
    name: 'Phillip',
    city: 'Garden Grove',
    zip: 92843,
    comment: 'This is a Review',
    star: 1
  }
];

//issue 1 & 2. User can search reviews and view a list of reveiws
var reviewLocation = document.getElementById('reviewList');
var searchInput = document.getElementById('keyword');
var lookUp = document.getElementById('search');

function results() {
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

    var moreInfo = document.createElement('button');
    moreInfo.setAttribute('type', 'button');
    moreInfo.setAttribute('data-id', reviews[i].id);
    moreInfo.setAttribute('class', 'btn btn-warning pull-right');
    moreInfo.textContent = 'Restaurant Info';

    var commentBody = document.createElement('div');
    commentBody.setAttribute('class', 'panel-body comment');

    var commentBlock = document.createElement('p');

    var commentText = document.createTextNode(reviews[i].comment);

    if (searchInput.value == '') {
      profileName.appendChild(userName);
      commentHeading.appendChild(profilePicture);
      commentHeading.appendChild(profileName);
      commentHeading.appendChild(moreInfo);
      for (var n = 0; n < reviews[i].star; n++) {
        var reviewRating = document.createElement('i');
        reviewRating.setAttribute('class', 'fa fa-star');
        commentBody.appendChild(reviewRating);
      }
      commentBlock.appendChild(commentText);
      commentBody.appendChild(commentBlock);
      reviewContent.appendChild(commentHeading);
      reviewContent.appendChild(commentBody);
      reviewLocation.appendChild(reviewContent);
    }

    if (searchInput.value.toLowerCase() == reviews[i].city.toLowerCase() || searchInput.value == reviews[i].zip) {
      profileName.appendChild(userName);
      commentHeading.appendChild(profilePicture);
      commentHeading.appendChild(profileName);
      commentHeading.appendChild(moreInfo);
      for (var n = 0; n < reviews[i].star; n++) {
        var reviewRating = document.createElement('i');
        reviewRating.setAttribute('class', 'fa fa-star');
        commentBody.appendChild(reviewRating);
      }
      commentBlock.appendChild(commentText);
      commentBody.appendChild(commentBlock);
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
      for (var n = 0; n < reviews[i].star; n++) {
        var reviewRating = document.createElement('i');
        reviewRating.setAttribute('class', 'fa fa-star');
        commentBody.appendChild(reviewRating);
      }
      commentBlock.appendChild(commentText);
      commentBody.appendChild(commentBlock);
      reviewContent.appendChild(commentHeading);
      reviewContent.appendChild(commentBody);
      reviewLocation.appendChild(reviewContent);
    }
  }
}
// end of issue 1 & 2.

//issue 3. User can post a review.
//hide&show function for write button.
var writeReview = document.getElementById('write');
var reviewInput = document.getElementById('reviewPanel');

function toggleClass(value, element) {
  var classes = element.className.split(' ');
  var position = classes.indexOf(value);

  if (position == -1) {
    classes.push(value);
  } else {
    classes.splice(position, 1);
  }

  element.className = classes.join(' ');
}

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
  var reviewStar = document.getElementById('star');
  var newReview = {
    name: reviewName.value,
    restaurant: reviewRestaurant.value,
    address: reviewAddress.value + ' ' + reviewCity.value + ' ' + reviewState.value + ' ' + reviewZip.value,
    street: reviewAddress.value,
    city: reviewCity.value,
    state: reviewState.value,
    zip: reviewZip.value,
    comment: reviewComment.value,
    star: reviewStar.value,
    id: reviews.length + 1
  };

  for (i in newReview) {
    if (newReview[i] == '') {
      alert('please fill out every section of review');
      return;
    }
  }

  reviews.unshift(newReview);

  var reviewContent = document.createElement('div');
  reviewContent.setAttribute('class', 'panel panel-default');

  var commentHeading = document.createElement('div');
  commentHeading.setAttribute('class', 'panel-heading');

  var profilePicture = document.createElement('img');
  profilePicture.setAttribute('src', 'images/logo.png');
  profilePicture.setAttribute('width', '50px');
  profilePicture.setAttribute('height', '50px');

  var profileName = document.createElement('span');
  profileName.setAttribute('class', 'panel-title');

  var moreInfo = document.createElement('button');
  moreInfo.setAttribute('type', 'button');
  moreInfo.setAttribute('data-id', newReview.id);
  moreInfo.setAttribute('class', 'btn btn-warning pull-right');
  moreInfo.textContent = 'Restaurant Info';

  var userName = document.createTextNode(newReview.name);

  var commentBody = document.createElement('div');
  commentBody.setAttribute('class', 'panel-body comment');

  var commentBlock = document.createElement('p')

  var commentText = document.createTextNode(newReview.comment);

  profileName.appendChild(userName);
  commentHeading.appendChild(profilePicture);
  commentHeading.appendChild(profileName);
  commentHeading.appendChild(moreInfo);
  for (var i = 0; i < newReview.star; i++) {
    var reviewRating = document.createElement('i');
    reviewRating.setAttribute('class', 'fa fa-star');
    commentBody.appendChild(reviewRating);
  }
  commentBlock.appendChild(commentText);
  commentBody.appendChild(commentBlock);
  reviewContent.appendChild(commentHeading);
  reviewContent.appendChild(commentBody);
  reviewLocation.insertBefore(reviewContent, reviewLocation.firstChild);

  toggleClass('hidden', reviewInput);
}

var body = document.body;
body.addEventListener('click', function(event) {
  event.preventDefault();
  var id = event.target.getAttribute('data-id');
  var type = event.target.textContent;
  if (type == 'search') {
    while (reviewLocation.firstChild) {
      reviewLocation.removeChild(reviewLocation.firstChild);
    }
    results();
  }
  if (type =='Write your own review!') {
    toggleClass('hidden', reviewInput);
  }
  if (type == 'Post a Review') {
    post();
  }
  if (type == 'Restaurant Info') {
    for (i = 0; i < reviews.length; i++) {
      if (reviews[i].id == id) {
        var review = reviews[i]
      }
    }
    var removeRestaurant= event.path[2].getElementsByClassName('restaurant')[0];
    if (removeRestaurant) {
      removeRestaurant.parentNode.removeChild(removeRestaurant);
    } else {
      var attachRestaurant = event.path[2];
      var restaurantInfo = document.createElement('div');
      restaurantInfo.setAttribute('class', 'panel-body restaurant');
      var addressBox = document.createElement('p');
      var commentRestaurant = document.createTextNode(review.restaurant);
      var commentAddress = document.createTextNode(review.address);
      restaurantInfo.appendChild(commentRestaurant);
      addressBox.appendChild(commentAddress);
      restaurantInfo.appendChild(addressBox);
      attachRestaurant.appendChild(restaurantInfo);
    }
  }
});
