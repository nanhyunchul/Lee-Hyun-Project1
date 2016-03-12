'use-strict'
var reviews = [
  {
    id: 1,
    restaurant: 'Restaurant1',
    address: '123 Abc St. Tustin CA 92606',
    name: 'Andrew',
    city: 'Tustin',
    zip: 92606,
    comment: 'Im going 5 right now as this has moved up my list of mobile favorites. I have yet to have something here I would not gladly eat again. In fact when I saw the truck on the street headed to the Orange Farmers Market.... I actually got a little giddy. Im going to focus on the spouts. They are tender down to the heart and are chard to perfection on the outside. They sprinkle in crisp leaves that have fallen off which add an amazing texture and crunch to every mouthful. Its the mystery they do on top that really seals the deal. Layered on these perfectly cooked sprouts are two sauces; one familiar, red and spicy, the "other" is tangy, peppery, savory and ends with a terrific bite. It really becomes the glue to this culinary creation. Simply amazing.',
    star: 5,
    userPicture: 'http://www.soulconnections.net/wp-content/uploads/2015/12/0-50x50.jpg',
    restaurantPicture: ['http://s3-media1.fl.yelpcdn.com/bphoto/1OAnd4bJTpPovlVoTnyvhg/o.jpg', 'http://s3-media3.fl.yelpcdn.com/bphoto/RA5j9rKrHYzfAtsNkiy-yg/o.jpg', 'http://s3-media2.fl.yelpcdn.com/bphoto/UJ2TpttDHJufG-BavnOheQ/o.jpg']
  },
  {
    id: 2,
    restaurant: 'Tadu Ethiopian Kitchen',
    address: '321 Cba St. Irvine CA 92602',
    name: 'Helen',
    city: 'Irvine',
    zip: 92602,
    comment: 'Flavors: awesome. Deeper, more interesting, and I assume more authentic than the other Ethopian places I\'ve been. Lots of good choices. We got the kitfo and the beef Tibs, and both were good, but the beef tibs were ESPECIALLY good...watch out, though, they\'re spicy; it\'ll kick your ass. I\'m glad that the sever was ok with me getting up to serve myself several more water. \n\nseating: LIMITED. I wouldn\'t come here with more than a couple of people. Which kind of sucks, because it\'s a bit hard to do Ethopian takeout, AND Ethopian is more fun with more people....but they do takeout, and that would be the way to do it. Make sure to get extra Injera.\nPrices: Pretty good for ethopian, for sure!\n\nLocation: Smack dab in a sketchy part of the tenderloin. Bummer.',
    star: 3,
    userPicture: 'http://www.soulconnections.net/wp-content/uploads/2015/12/soulmates-50x50.gif',
    restaurantPicture: ['http://s3-media1.fl.yelpcdn.com/bphoto/D6TVRBZ27xT5kA-M7Ijc5A/o.jpg', 'http://s3-media3.fl.yelpcdn.com/bphoto/xzb3Q2fm94pOGLeOrWq5Yw/o.jpg', 'http://s3-media3.fl.yelpcdn.com/bphoto/lMRAHiosGmB5hAAHo3R42A/o.jpg']
  },
  {
    id: 3,
    restaurant: 'KUSAKABE',
    address: '456 Def Ave. Los Angeles CA 92638',
    name: 'Mark',
    city: 'Los Angeles',
    zip: 92638,
    comment: 'Book your spot already! The best sushi I ever had in my life outside of Japan. We had to make a reservations weeks ahead. They have a really strict cancellation policy too, if I did not recall wrongly it\'s about $65 for cancellations/change. Pretty harsh policy. We arrived slightly late and were promptly seated at the bar. We were assigned to the head chef, Chef Kusakabe himself! Our meal commence shortly. Every single dish was beautifully presented and thoroughly explained. Every piece of sushi was treated as an exquisite delicious art piece. I am not going to list the items I ate simply cause it changes with the season, ingredients and theme. During my visit, yuzu was the main theme/ingredient that threads through the entire omakase meal. Perhaps because we were slightly late, we felt a little rushed through the meal. There was little room to stop and breathe a little before the next dish. So, remember to be on time. If you are driving, parking around the vicinity is a pain in the butt so do buffer more time for that. Nevertheless, it was one of the most amazing dinner I ever had in my life. Service was fantastic, attentive and personable. Highly recommend dining here, not the most wallet friendly but definitely one of the most palate satisfying.',
    star: 4,
    userPicture: 'http://www.soulconnections.net/wp-content/uploads/2015/12/sat-travel-50x50.jpg',
    restaurantPicture: ['http://s3-media3.fl.yelpcdn.com/bphoto/RZTWvYOMvBMKwgb_C6QO8Q/o.jpg', 'http://s3-media3.fl.yelpcdn.com/bphoto/PaZ0Um4IIjfKLZPEsV0yag/o.jpg']
  },
  {
    id: 4,
    restaurant: 'The Flying Falafel',
    address: '789 Ghi Blvd. Irvine CA 92620',
    name: 'Garry',
    city: 'Irvine',
    zip: 92620,
    comment: 'Didn\'t love the first falafel I had from here, but so glad I gave it another try! The falafel is just so delicious! The sauces are great - nice and spicy and make the whole thing perfectly moist. The guys making the food are so friendly and sweet always too - even when there\'s a line out the door and literally dozens of people waiting. It\'s so cheap too! The $5 \'snacker\' size pita is more than enough food for me for lunch. I\'m not sure if this is standard or just something special, but the one I got today had French fries in it! I was a little skeptical at first but it was SO good. Overall, just love this place. New favorite lunch spot for sure!',
    star: 4,
    userPicture: 'http://www.soulconnections.net/wp-content/uploads/2015/12/pg40_1-50x50.jpg',
    restaurantPicture: ['http://s3-media3.fl.yelpcdn.com/bphoto/NLiyaU1D9zBN5Lty5dAcIQ/o.jpg', 'http://s3-media1.fl.yelpcdn.com/bphoto/0AdfShJFyO0-_m1Z_6VuVQ/o.jpg', 'http://s3-media1.fl.yelpcdn.com/bphoto/XUivCIcGfUeXqoZmEnzEwg/o.jpg', 'http://s3-media3.fl.yelpcdn.com/bphoto/KQvVNDyMhakDC2BYl8oYfQ/o.jpg']
  },
  {
    id: 5,
    restaurant: 'Restaurant5',
    address: '987 Jkl Ave. Garden Grove CA 92843',
    name: 'Phillip',
    city: 'Garden Grove',
    zip: 92843,
    comment: 'Ok, so I have to update my review of this place because since I last wrote, my opinion has changed. The service here is awful. They are understaffed and everytime I go in there at lunch time. There is always a ridiculous line with only one person making sandwiches. If you just want to go in for a quick soda, you are out of luck if the one staff person is making a sandwich. If this place doesn\'t get more staff in (at the very least during peak lunch hours) then they are going to lose a lot of customers. I definitely am not going there anymore, because I\'m at WORK, and I only have an hour for lunch! I don\'t have the 25 minutes to order a sandwich, grab a soda, eat, and get back to work on time. No bueno. What a waste of space.',
    star: 1,
    userPicture: 'http://www.soulconnections.net/wp-content/uploads/2015/12/Winter-Solstice-Is-When-The-Sun-Stands-Still-50x50.jpg',
    restaurantPicture: ['http://s3-media2.fl.yelpcdn.com/bphoto/GOt3Ug6yaOJAMLA2pSgtxA/o.jpg']
  }
];

//issue 1 & 2. User can search reviews and view a list of reveiws
var reviewLocation = document.getElementById('reviewList');

function results() {
  for (var i = 0; i < reviews.length; i++) {
    var searchInput = document.getElementById('keyword');

    var reviewContent = document.createElement('div')
    reviewContent.setAttribute('class', 'panel panel-danger');

    var commentHeading = document.createElement('div');
    commentHeading.setAttribute('class', 'panel-heading');

    var profilePicture = document.createElement('img');
    profilePicture.setAttribute('class', 'img-thumbnail');
    profilePicture.setAttribute('width', '50px');
    profilePicture.setAttribute('src', reviews[i].userPicture);

    var profileName = document.createElement('span');
    profileName.setAttribute('class', 'panel-title');

    var userName = document.createTextNode(reviews[i].name);

    var commentFooter = document.createElement('div');
    commentFooter.setAttribute('class', 'panel-footer');

    var moreInfo = document.createElement('button');
    moreInfo.setAttribute('type', 'button');
    moreInfo.setAttribute('data-id', reviews[i].id);
    moreInfo.setAttribute('class', 'btn btn-danger');
    moreInfo.textContent = 'Restaurant Info';

    var commentBody = document.createElement('div');
    commentBody.setAttribute('class', 'panel-body comment');

    var commentBlock = document.createElement('p');

    var commentText = document.createTextNode(reviews[i].comment);

    profileName.appendChild(userName);
    commentHeading.appendChild(profilePicture);
    commentHeading.appendChild(profileName);
    commentFooter.appendChild(moreInfo);
    for (var n = 0; n < reviews[i].star; n++) {
      var reviewRating = document.createElement('i');
      reviewRating.setAttribute('class', 'fa fa-star');
      commentBody.appendChild(reviewRating);
    }
    commentBlock.appendChild(commentText);
    commentBody.appendChild(commentBlock);
    reviewContent.appendChild(commentHeading);
    reviewContent.appendChild(commentBody);
    reviewContent.appendChild(commentFooter);

    if (searchInput.value == '') {
      reviewLocation.appendChild(reviewContent);
    }

    if (searchInput.value.toLowerCase() == reviews[i].city.toLowerCase() || searchInput.value == reviews[i].zip) {
      reviewLocation.appendChild(reviewContent);
    }
  }
}
// end of issue 1 & 2.

//issue 3. User can post a review.
//hide&show function for write button.
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
    id: reviews.length + 1,
    userPicture: 'images/logo.png'
  };

  for (i in newReview) {
    if (newReview[i] == '') {
      alert('please fill out every section of review');
      return;
    }
  }

  reviews.unshift(newReview);

  var reviewContent = document.createElement('div');
  reviewContent.setAttribute('class', 'panel panel-danger');

  var commentHeading = document.createElement('div');
  commentHeading.setAttribute('class', 'panel-heading');

  var profilePicture = document.createElement('img');
  profilePicture.setAttribute('src', newReview.userPicture);
  profilePicture.setAttribute('width', '50px');
  profilePicture.setAttribute('class', 'img-thumbnail');

  var profileName = document.createElement('span');
  profileName.setAttribute('class', 'panel-title');

  var commentFooter = document.createElement('div');
  commentFooter.setAttribute('class', 'panel-footer');

  var moreInfo = document.createElement('button');
  moreInfo.setAttribute('type', 'button');
  moreInfo.setAttribute('data-id', newReview.id);
  moreInfo.setAttribute('class', 'btn btn-danger');
  moreInfo.textContent = 'Restaurant Info';

  var userName = document.createTextNode(newReview.name);

  var commentBody = document.createElement('div');
  commentBody.setAttribute('class', 'panel-body comment');

  var commentBlock = document.createElement('p')

  var commentText = document.createTextNode(newReview.comment);

  profileName.appendChild(userName);
  commentHeading.appendChild(profilePicture);
  commentHeading.appendChild(profileName);
  commentFooter.appendChild(moreInfo);
  for (var i = 0; i < newReview.star; i++) {
    var reviewRating = document.createElement('i');
    reviewRating.setAttribute('class', 'fa fa-star');
    commentBody.appendChild(reviewRating);
  }
  commentBlock.appendChild(commentText);
  commentBody.appendChild(commentBlock);
  reviewContent.appendChild(commentHeading);
  reviewContent.appendChild(commentBody);
  reviewContent.appendChild(commentFooter);
  reviewLocation.insertBefore(reviewContent, reviewLocation.firstChild);

  toggleClass('hidden', reviewInput);
}

var commentNewLine = document.getElementById('comment');
commentNewLine.addEventListener('keypress', enter)
function enter(event) {
  var commentEnter = commentNewLine.value;
  if (event.charCode == 13) {
    commentEnter = commentEnter + '\n';
  }
}

var body = document.body;
body.addEventListener('click', function(event) {
  event.preventDefault();
  var id = event.target.getAttribute('data-id');
  var type = event.target.textContent;
  if (type == 'Show Me Reviews!') {
    while (reviewLocation.firstChild) {
      reviewLocation.removeChild(reviewLocation.firstChild);
    }
    results();
  }
  if (type =='Share Your Review') {
    toggleClass('hidden', reviewInput);
  }
  if (type == 'Post a Review') {
    post();
  }
  for (i = 0; i < reviews.length; i++) {
    if (id == reviews[i].id) {
      var review = reviews[i];
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
        if (review.restaurantPicture) {
          for (n = 0; n < review.restaurantPicture.length; n++) {
            var restaurantPhoto = document.createElement('img');
            restaurantPhoto.setAttribute('src', review.restaurantPicture[n]);
            restaurantPhoto.setAttribute('width', '100px');
            restaurantPhoto.setAttribute('class', 'img-thumbnail')
            restaurantInfo.appendChild(restaurantPhoto);
          }
        }
      }
    }
  }
});
