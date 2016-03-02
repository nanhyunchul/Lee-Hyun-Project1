var reviewList [{
  address: '123 Jamboree',
  city: 'tustin',
  zip: 92606,
  comment: 'safsadkfjlksafsa'
}, {
  address: '456 Culver',
  city: 'Irvine',
  zip: 92602,
  comment: 'asklfhoiasfhosafs'
}, {
  address: '300 Regal',
  city: 'Irvine',
  zip: 92620,
  comment: 'asdhfoiawheasnfv'
}, {
  address: '273 Yale',
  city: 'Irvine',
  zip: 92620,
  comment: 'asdhfohoiweksanf'
}, {
  address: '8932 Harbor',
  city: 'Garden Grove',
  zip: 92843,
  comment: 'ashfoisadhfoinv'
}];

var review = document.getElementById('review');
var comment = review.createElement('p');
var commentText = comment.createTextNode('reviewList[i].comment');
