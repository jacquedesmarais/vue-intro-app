document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      message: "Hey Vue! How's it going?",
      reviews: [
                {
                  text: "I don't want to sound enamored, but I think Vue.js is pretty cool",
                  rating: "5",
                  reviewer: "Bobby B"
                },
                {
                  text: "Vue.js can kick reacts butt.",
                  rating: "4",
                  reviewer: "Stanis"
                },
                {
                  text: "Vue.js, eh. It's okay.",
                  rating: "2",
                  reviewer: "Your mom"
                }
                ],
      newReviewText: "",
      newReviewRating: "",
      newReviewReviewer: ""
    },
    mounted: function() {

    },
    methods: {
      addReview: function() {
        if (this.newReviewText && this.newReviewRating && this.newReviewReviewer) {
          var newReview = {
                          text: this.newReviewText,
                          rating: this.newReviewRating,
                          reviewer: this.newReviewReviewer
                          };
        this.reviews.push(newReview);
        this.newReviewText = "";
        this.newReviewRating = "";
        this.newReviewReviewer = "";
        }
      },
      
      isPositive: function(inputReview) {
        return inputReview.indexOf('stupid') === -1;
      }
    },
    computed: {

    }
  });
});