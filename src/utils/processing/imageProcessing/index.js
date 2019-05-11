// select the 
const getImage = document.querySelector('#image');
const result = document.querySelector('#result');

 // Initialize the Image Classifier method with MobileNet
 const classifier = ml5.imageClassifier('MobileNet', function() {
    console.log('Model Loaded!');
  });

  // Make a prediction with the selected image
  classifier.predict(image, function(err, results) {
      result.innerText = results[0].className;
  });
