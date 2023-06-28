predicion_1 = ""
predicion_2 = ""

webcam.set({
width:390,
heihgt:300,
image_formant :"png",
png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("camera")

function take_snapshot()
 { 
Webcam.snap(function(data_uri) {
     document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
     });
     }
      console.log("ml5.version :",ml5.version );
      classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/SXbAakvwg/model.json",modelLoaded);
      function modelLoaded(){console.log("modelLoaded");}

      function speak(){
          var synth = window.speechSynthesis;
          speak_data_1 = "La primera prediccion es " + prediction_1;
          speak_data_2 = "Y la segunda prediccion es " + prediction_2;
          var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
          synth.speak(utterThis);
        }

        function check(){img=document.getElementById("captured_image");
     classifier.classify(img, gotResult);}

     function gotResult(error, results)¨{




          
     }