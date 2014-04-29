#### Include an inline screenshot of your codeschool's points from the profile page:

![CodeSchool Score](DBC/ehsalazar.github.io/unit1_projects/images/codeschool_score.png)

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS

  #####The elements tab provides access to both the html and css for inline editing. To save changes, you would also have to utilize the sources tab.

  * Javascript Debugging

  #####The console tab acts both as console to log to but also a CLI to run JavaScript. Once again, the sources tab can be used in conjunction for realtime debugging as well as saving modifications. 

  * Performance Optimization 

  #####The network tab will provide the both a visual waterfall of load times and delays as well as component sizes and issues. It can be paired with extension add-ons like PageSpeed Insight which identify optimization paths for improved performance.

* What's the quick key for your OS to spawn the Dev Tools inspector?

  #####option + command + I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  #####It is color #0b0f11.
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

  ![Postmacina Edits](DBC/ehsalazar.github.io/unit1_projects/images/postmachina_edits.png)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

  #####That text is not its own object but rather part of the home_bg.gif object and as such can't be tweaked on its own.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website?

  #####The largest image is of Times Square in NYC (92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png)

  * Explain how you would find out this information, and list the URL of offending image here and how big it is.

  #####The network tab can be used to identifty this as the largest image at 316KB and points us to is URL of http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?

  #####Minimize payload through optimize images. Just over 30 images can be optimized to eliminate 885.9KB overall.