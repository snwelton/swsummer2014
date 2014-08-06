/* 
 Create a simple Ad that will display on the page as just text in a div. 
 The Ad will be random using Math.random from the array length.

Requirements:
1. Create an array that has 5 ad JSON objects.
2. Use Math.random() with the array.length to get a random index.
3. Display the ad using innerHTML.
4. Replace the document.title with the ad followed by three periods …
5. Please add comments to explain how the code works and what it’s doing.
   Hint: No need to go crazy, just general things on the flow, one line
         comments are fine.

 */

        var ads = [];


        ads.push({ 
         "title": 'Title 1', 
         "desc" : 'description 1' 
        }); 
        
        ads.push({ 
            "title": 'Title 2', 
            "desc" : 'description 2' 
        });
        ads.push({ 
            "title": 'Title 3', 
            "desc" : 'description 3' 
        });
        ads.push({ 
            "title": 'Title 4', 
            "desc" : 'description 4' 
        });

        ads.push({ 
            "title": 'Title 5', 
            "desc" : 'description 5' 
        });
        
          
        

            function rand(max){                         // creates a function that generates a random number
               return Math.floor( Math.random()*max);
              }
           
           var adRandIndex = rand(ads.length);          // creates a random index variable as an array with the lenght of the amount of ads
           var div = document.getElementById('ad');     // displays the ad to the xhtml screen
           div.innerHTML = ads[adRandIndex].desc;       // changes the div to match the correct desc 
       
          // console.log(ads[adRandIndex].title);       // helps test by displaying in the console
           //console.log(ads[adRandIndex].desc);
             
                     
          
            
            function changeDocumentTitle(str){      // function that changes the title
                document.title = str;
            }
            
            changeDocumentTitle(ads[adRandIndex].title + "...");        // matches the title up with the rand num 
          

