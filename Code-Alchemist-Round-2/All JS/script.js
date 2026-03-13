const centerDiv = document.getElementById('center');
const BmwCars = [
   {
      "name": "BMW X5",
      "LaunchDate": "2023-03-15",
      "Price": 60000,
      "Description": "A luxury mid-size SUV with advanced features and powerful performance.",
      "imageLink": "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/152681/x5-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80"
   },
   {
      "name": "BMW 3 Series",
      "LaunchDate": "2022-11-20",
      "Price": 45000,
      "Description": "A compact executive car known for its sporty handling and elegant design.",
      "imageLink": "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/152681/x5-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80"
   },
   {
      "name": "BMW M2",
      "LaunchDate": "2024-01-10",
      "Price": 140000,
      "Description": "A plug-in hybrid sports car that combines performance with eco-friendly technology.",
      "imageLink": "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/150123/m2-right-front-three-quarter-2.jpeg?isig=0&q=80"
   },
   {
      "name": "BMW 5 Series",
      "LaunchDate": "2023-06-25",
      "Price": 65000,
      "Description": "An executive sedan known for its luxury and cutting-edge technology.",
      "imageLink": "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/152681/x5-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80"
   },
   {
      "name": "BMW 7 Series",
      "LaunchDate": "2023-09-15",
      "Price": 85000,
      "Description": "A flagship luxury sedan with unmatched comfort and innovation.",
      "imageLink": "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/152681/x5-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80"
   },
   {
      "name": "BMW X3",
      "LaunchDate": "2023-04-10",
      "Price": 50000,
      "Description": "A versatile and dynamic compact luxury SUV.",
      "imageLink": "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/152681/x5-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80"
   },
   {
      "name": "BMW M4",
      "LaunchDate": "2024-02-28",
      "Price": 85000,
      "Description": "A high-performance sports coupe with aggressive styling.",
      "imageLink": "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/152681/x5-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80"
   },
   {
      "name": "BMW iX",
      "LaunchDate": "2022-12-01",
      "Price": 100000,
      "Description": "An all-electric SUV offering cutting-edge technology and sustainability.",
      "imageLink": "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/152681/x5-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80"
   },
   {
      "name": "BMW Z4",
      "LaunchDate": "2023-07-15",
      "Price": 65000,
      "Description": "A sleek and sporty roadster designed for exhilarating driving experiences.",
      "imageLink": "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/152681/x5-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80"
   },
   {
      "name": "BMW X7",
      "LaunchDate": "2023-10-20",
      "Price": 90000,
      "Description": "A luxurious and spacious SUV with impressive performance capabilities.",
      "imageLink": "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/152681/x5-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80"
   }
];

// Rotating the BMW Logo on hovering the card using GSAP
// Convert HTMLCollections to arrays
const carCards = Array.from(document.getElementsByClassName('CarCard'));

// Add event listeners to each card
carCards.forEach(card => {
    const logo = card.querySelector('.logo');
    card.addEventListener('mouseenter', () => {
        gsap.to(logo, { rotation: 360, duration: 1 });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(logo, { rotation: -360, duration: 1 });
    });
});
