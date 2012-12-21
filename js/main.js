 $(window).load(function(){
  introIn();
  eventListenSidebar();
  checkDevice();
  setTimeout(function(){
    intro();
  },1500);
 });


 function sample(){
   $('html, body').animate({
                scrollTop: $('#jam').offset().top
                }, "slow");
 }

function eventListenSidebar(){

  $('.nav-list li').click(function(){

    $('.nav-list li').removeClass('active');
    $(this).addClass('active');
  });

  $('.nav li').click(function(){

    $('.nav li').removeClass('active');
    $(this).addClass('active');
  });


  



}

var checker;
function introIn(){

  $('html').css({'opacity': '0'});
  $('html').css({'filter': 'opacity = 0'});
    setTimeout(function(){
      $('html').animate({'opacity': '1'}, 1100);
      $('html').animate({'filter': 'opacity = 100'}, 1100);
      
    },300);
}
function checkDevice(){

  var ua = navigator.userAgent;
  checker = {
    iphone: ua.match(/(iPhone|iPod)/),
    blackberry: ua.match(/BlackBerry/),
    android: ua.match(/Android/)
};

  if (checker.iphone){
   
      $('body').animate({'padding-top': '0px'},1000);

      $('h1').css({"font-size":"20px"});
      $('p').css({"font-size":"15px"});
      $('#heroUnit').css({"padding":"10px", "margin-left": "-40%"});
      
  }

  if (checker.android){
    
      $('body').animate({'padding-top': '0px'},1000);

      $('h1').css({"font-size":"20px"});
      $('p').css({"font-size":"15px"});
      $('#heroUnit').css({"padding":"10px", "margin-left": "-40%"});
  }
  if (checker.blackberry){
    
      $('body').animate({'padding-top': '0px'},1000);

      $('h1').css({"font-size":"20px"});
      $('p').css({"font-size":"15px"});
      $('#heroUnit').css({"padding":"10px", "margin-left": "-40%"});
  }

}

 function goTo(whichPage){

        //$('#span3, #navBar').unbind();
        elemH = $("#heroUnit h1");
            elemP= $("#heroUnit p:first");
            elemP2= $("#heroUnit p:nth(1)").hide();
            elem = $("#heroUnit");
            if(elemH.offset().top >= 250){
               $('html, body').animate({
                scrollTop: elemH.offset().top -40
                }, "slow");
            }

            elem.hide('slow')

        switch(whichPage){
            
          case "about":
              
              setTimeout(function(){
                  elemH.html('About');
                  elemP.html('The alpha version of jQuery.coded was released during the end of the world on 12/21/12 at midnight. <br><br>Since we are currently on our first alpha release, we realize there will be a lot of room for improvements and we are eagerly looking forward to your feedback.<br><br><h3> So, what is jQuery.coded anyway?</h3> <br>jQuery.coded is all about simplicity. Your back-end server response is in JSON, so why shouldn\'t your front-end markup be? <br><br>jQuery.coded introduced JAM (JSON as Markup), a way for you to use JSON to do most of the things you do with HTML, CSS and handling events. <br><br>You can use jQuery.coded\'s javascript library to send/recieve/manipulate AJAX requests and repsonses, format a site for mobile, quickly style a site with Twitter Bootstrap, add cool swipe effects to mobile content, produce ligthbox effects, and more.<br><br>If you are an experienced coder, we hope you contribute your input and/or code to help enhance this framework. If you are a newbie to coding, the .coded framework is a great place to start learning how to build sites, mobile web apps, and Phonegap-based iPhone/Android apps.<br><br> ');
                  elem.show('slow');
              }, 500);

          break;


          case "home":
              
              setTimeout(function(){
                  elemH.html('A new way to {c}0dE');
                  elemP.html('<br>Rapid and neat. For most web developers, having to pick between the two can either lead to missed deadlines or releases with horrible user experiences.  Fortunately, there are open-source libraries out there that help you create awesome user experiences quickly. Unfortunately, quickly never seems to be quick enough, and sometimes combining these different libraries can lead to bumpy roads. <br>jQuery.coded is a JSON & jQuery-based framework that combines many popular open-source libraries, CSS stylesheets, jQuery plugins, as well as a the {c}0dEd Bottlenecking Library to streamline web  and Phonegap app development in  a rapid and neat fashion.<br><br>');
                  elemP2.fadeIn();
                  elem.show('slow');
              }, 500);

          break;

          case "author":
              setTimeout(function(){
                  elemH.html('Author');
                  elemP.html('<br><a href="http://mikedeshazer.com" target="_blank">Mike De\'Shazer</a> is the developer of over a dozen mobile and web applications, including Cold Snap, one of the first location-based mobile chatrooms in 2010. In 2012, Mike led a team of developers to win Etsy and Dwolla\'s E-Commerce Hack Day. In 2011, Mike was a featured speaker at Harvard University\'s Innovation Conference.<br><br> As the operating partner and chief architect at 140 Ventures, Mike overseas product development and engineering of web-based and mobile applications in industries ranging from finance, to education, to entertainment. Before starting 140 Ventures, Mike spent two years  as director of engineering at an AT&T and WPP-backed mobile ad network startup. Today, Mike is passionate about software education and is changing the way people enter the web and app developer workforce. ');
                  elem.show('slow');
              }, 500);

          break;

          case "aboutJAM":
                $('#span3, #navBar').animate({opacity:".1"}, 500); $('#span3, #navBar').bind('click', function(){$('#span3, #navBar').animate({opacity:"1"}, 1000);});
                 
                   elemH.html('Docs');
                  elemP.html('<div><ul class="nav nav-list bs-docs-sidenav"><li><a href="#gettingStarted" onclick="docu(\'whatIs\')"><i class="icon-chevron-right"></i> Getting Started</a></li><li><a href="#jsonJAM" onclick="docu(\'JAM\')"><i class="icon-chevron-right"></i>JSON As Markup (JAM)</a></li><li><a href="#methods" onclick="docu(\'methods\')"><i class="icon-chevron-right"></i>$.coded Methods</a></li></ul></div><br><br><div id="docu"></div>');
                  elem.show('slow');

                setTimeout(function(){
                    docu('whatIs');
                }, 1000);
          break;
          
          case "documentation":


                setTimeout(function(){
                  $('#span3, #navBar').animate({opacity:".1"}, 500); $('#span3, #navBar').bind('click', function(){$('#span3, #navBar').animate({opacity:"1"}, 1000);});
                 
                   elemH.html('Docs');
                  elemP.html('<div><ul class="nav nav-list bs-docs-sidenav"><li><a href="#gettingStarted" onclick="docu(\'whatIs\')"><i class="icon-chevron-right"></i> Getting Started</a></li><li><a href="#jsonJAM" onclick="docu(\'JAM\')"><i class="icon-chevron-right"></i>JSON As Markup (JAM)</a></li><li><a href="#methods" onclick="docu(\'methods\')"><i class="icon-chevron-right"></i>$.coded Methods</a></li></ul></div><br><br><div id="docu"></div>');
                  elem.show('slow');
              }, 500);

          break;
          
          case "download":
              setTimeout(function(){
                  elemH.html('Download');
                  elemP.html('<br><a class="btn btn-primary btn-large" href="jQueryCoded.alpha-0.1.zip">jQuery.coded v. alpha 0.1</a>');
                  elem.show('slow');
              }, 500);

          break;
          
          case "questions":
              setTimeout(function(){
                  elemH.html('Questions');
                  elemP.html('<div id="contactDiv"><br>subject:<br> <input type="text" id="subject"><br><br>question/comment:<br> <textarea id="message" cols="40" rows="5"></textarea><br><br>Your email:<br> <input type="text" id="email"><br><br><a class="btn btn-primary btn-large" onclick="$(\'#contactDiv\').request2View(\'cloud/questions.php\', \'\', \'lightBox\')">send</a></div>');
                  
                  elemP.prepend('<h4>Note: The contact form below uses jQuery.coded\'s .request2View method to submit this element\'s input data via AJAX and manipulate the DOM based on the server response.</h4><div class="bs-docs-example"><code style="white-space: normal; font-size:18px">$(\'#contactDiv\').request2View(\'cloud/questions.php\', \'\', \'lightBox\')</code></div>');
                  elem.show('slow');
              }, 500);

          break;
          
          case "donate":
              setTimeout(function(){
                  elemH.html('Donate');
                  elemP.html('Coming soon.');
                  elem.show('slow');
              }, 500);

          break;
          
          case "demos":
              setTimeout(function(){
                  elemH.html('Demos');
                  elemP.html('Coming soon.');
                  elem.show('slow');
              }, 500);

          break;

          case "classes":
              setTimeout(function(){
                  elemH.html('Classes');
                  elemP.html('2013 class schedules will be posted soon. <br> Stay tuned.');
                  elem.show('slow');
              }, 500);

          break;

          case "license":
              setTimeout(function(){
                  elemH.html('License');

                  if(checker.iphone || checker.android || checker.blackberry){
                       elemP.html('<br>The license? We thought you GNU? <br>If you didn\'t get that reference, no worries. We\'re open source under the GNU Public License. And if you don\'t know, now you kGNow.');
                    elem.show('slow');
                    return;
                  }
                  elemP.html('<br>The license? We thought you GNU? <br>If you didn\'t get that reference, no worries. We\'re open source under the GNU Public License. And if you don\'t know, now you kGNow.<br><br><iframe frameBorder="0" src="http://www.gnu.org/licenses/gpl-3.0-standalone.html" style="width:100%; height:70%"></iframe>');
                  elem.show('slow');
              }, 500);

          break;

          
          default:
            setTimeout(function(){
                  elemH.html('about');
                  elemP.html('about');
                  elem.show('slow');
              }, 500);

          break;
        }
    }



    function intro(){
        if(checker.iphone || checker.android || checker.blackberry){
          return;
        }

        $('#rapid').animate({"font-size":"32px"}, 500);setTimeout(function(){$('#awesome').animate({"font-size":"32px"}, 500);  $('#rapid').animate({"font-size":"23px"}, 500)}, 5800);
        
        setTimeout(function(){
          $('#awesome').animate({"font-size":"23px"}, 500)
          $('#framework').animate({"font-size":"32px"}, 900);setTimeout(function(){$('#streamline').animate({"font-size":"32px"}, 500);  $('#framework').animate({"font-size":"23px"}, 500)}, 5800);
        },
         11000);

    }



    function docu(whichOne){
       $('html, body').animate({
                scrollTop: $('#docu').offset().top -40
                }, "slow");
      switch(whichOne){

          case "whatIs":

            $('#docu').html('<section><div class="page-header"><h1>Dive in</h1></div><h2>How jQuery.coded works</h2><p>jQuery.coded allows you to write  JSON As Markup (JAM) and do other cool animation, AJAX, and mobile effects stuff. For example, When you call jQuery.coded\'s .coded() method, it converts your JAM to HTML, CSS, and Javascript. In the snippet below, you can see an example of JAM with some jQuery.coded javascript. Click the blue button below the snippet to see what happens when you run the .coded method on the div with the JAM. <br>Hint: click the result after you click the blue button to see the coded lightBox method in action. </p><div id="jam" style="display:none">[{"#imageName":{type:"image", content:"images/scarlettJo.png", parent:"#jam", listeners:{click:"$.coded.lightBox(\'callbackFunction for clicking the photo.\' , \'awesome, right?\')"}, class:"img-polaroid" }}]</div><div class="bs-docs-example"><code style="white-space: normal; font-size:18px">&lt;div id="jam" style="display:none"&gt; <br><br>&nbsp;&nbsp; [{"#imageName":{type:"image", content:"images/scarlettJo.png", listeners:{click:"$.coded.lightBox(\'callbackFunction for clicking the photo.\', \'awesome right?\')"}, class:"img-polaroid" }}]<br><br>&lt;/div&gt;</code></div><pre class="prettyprint linenums">try it: <a class="btn btn-primary btn-large" onclick="$(\'#jam\').coded(); sample(); "> $(\'#jam\').coded()</a><br><br>If you need help creating an HTML document to get started, check out <a href="http://code.google.com/edu/submissions/html-css-javascript/" target="_blank">this Google tutorial </a>on building websites with HTML files, CSS, and Javascript.</pre><br><p>All you have to do to use jQuery.coded is add the following snippet to import jQuery.coded (which imports jQuery as well if you don\'t have it imported already).</p><div class="bs-docs-example"><code style="white-space: normal; font-size:18px">&lt;script src="http://jquerycoded.org/alpha-0.1/jqueryCoded.js"&gt;&lt;/script&gt;<br></code></div><pre class="prettyprint linenums">You can download the jQuery.coded source code and import it from a local directory, of couse. http://jquerycoded.org/coded/ will always contain the latest stable release of jQuery.coded</pre><br><p>If you want to see examples of implementation of jQuery.coded, view the source of this page, or check out this very simple example of creating basic elements with JAM, here: <a target="_blank" href="example.html">example.html</a>.<br> If you\'re using a mobile device, iPad, Chrome, Firefox, or Safari, check out what coded can do on mobile, here:  <a target="_blank" href="mobile.html">mobile.html</a></p></section> ' );
            

          break;

          case "gettingStarted":


          break;


          case "JAM":
            $('#docu').html('<section><div class="page-header"><h1>JAM</h1></div><h2>JSON As Markup</h2><p>Here are some examples of how to use JAM to create common DOM elements, style them, and add event listeners.</p><div style="padding-top:50px; width:620px; background-color:#EEE"><iframe style="width:100%; height:1000px;" FRAMEBORDER= "0" src="reg.html" ></iframe></div></section>');


          break;

          case "methods":
           $('#docu').html('<section><div class="page-header"><h1>Methods</h1></div><h2>Creating good user experiences just got a little easier.</h2><p></p><div style="padding-top:50px; width:620px; background-color:#EEE"><iframe style="width:100%; height:1000px;" FRAMEBORDER= "0" src="methods.html" ></iframe></div></section>');


          break;

          case "examples":


          break;


      }
    }



    function lightBox(response){
      if(typeof response == "object"){
        $.coded.lightBox("Thanks for reaching out!", "<center><div style='font-size:18px'>Your message was received successfully. We will get back to you within the next few days.<br></div></center> ");
      }
      else{
        $.coded.lightBox("Oops", "<center>TThere was an issue communicating with the server. Please check your internet connection or try again later. ");
     
      }
    }