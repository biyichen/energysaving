# Energy Savings

#### Designing a web widget where users can visualize the impact of their energy savings. Users who saved energy last month will see an illustration of the number of cars that were “removed from the road” by the user’s energy offset. The illustration should be designed to delight, so that users see it as a reward for saving electricity, and become motivated to continue doing so.

## Set up the web enironment
#### Install chrome browse 
(https://www.google.com/chrome/)

## Creating the website wireframe
#### I used the lucidchart to initial the wireframe which like a clear guideline that I will be used on my later actual coding. 

###### ![alt text](/ENERGYSAVINGSDiagram.png "Description goes here")

## Buidling Basic Structure of Website
#### Step 1: Setup Basic Website Folder like required image files, html files, css files, js files. Put all the files into single project file, which will be convenience for your later work and push to the GitHub. 
#### Step 2: Add basic external files. Go to the jQuery website to download the compressed verizon of production jQuery 3.1.1, and move the file to the js file. (http://jquery.com/download/) 
#### Step 3: Choose the right fonts and skin color and right icons. Google Fonts is an amazing resource for choosing the fonts. Caution: this sequence of external css link and custom css link matters, remember put the google fonts css external link before the style css link. (https://fonts.google.com/) For skin color, I would recommend use adobe color wheel. (https://color.adobe.com/create/color-wheel/) Sometimes, we might need to use rgb value. I would recommend use HEX to RGB Converter to convert the hex value to rgb value. (https://www.webpagefx.com/web-design/hex-to-rgb/) I used some meaningful icon to my project which I found them on the Font Awwsome website that I would like to share. Free to download the fancy icons. (https://fontawesome.com/v4.7.0/)
#### Step 4: Use the Bootstrap to build responsive, mobile-first projects on the web, and prevent repetition between projects, consistency to design and code, quickly and easily prototype new designs, and ensure cross-browser compatibility. I used the verizon 3.3 for this project. I also used the Grid systems for creating page layouts, .containter for a responsive fixed width container and .container-fluid for a full width containter, spanning the entire width of the viewport, and the secondary div row below that, and column div. So in the most of code structures will look like as following:
``` 
   <div class = "container">
     <div class = "row">
       <div class = "col-(lg/md/sm/xs)-*"> //lg-large desktops 1200px and up, md-desktop 992px and up, sm-tablets 768px and up, xs-phones less than 768px
         //content goes here
       </div>
     </div>
   </div>
   ```
#### I used Navbar to create the responsive navigation headers for my application. It requires JavaScript plugin and require to use "<nav>" element or if using a more generic element such as a <div>, add a role="navigation" to every navbar to explicitly identify it as a landmark region for users of assistive technologies. (https://getbootstrap.com/)

## Home Section
#### Regardless of your website’s function (e-commerce, organizational, non-profit, etc.), the home page is like a storefront window. It is a peek inside of your website. And if it is not appealing or intriguing, then chances are it is the only thing your users will see because they will likely move on very quickly.Like that window, a home page is a website’s only chance to show visitors what there is to offer. A website visitor, like a shopper looking in a window, makes a decision within a very short amount of time whether a website will be any benefit to them. I decide make the homepage impressive by having an identity logo and background, providing a clear navigation, supplying both new and return visitors with desired content, providing multiple entry points from the navigation and "view your work" button, or even simply just scrop-down, give users different ways of accessing the site’s content.
### ![alt text](/favicon.png)
### ![alt text](/home.png)
#### css trick: in the /* General CSS */ section of style.css file. If you simplely change the height of background image to cover the whole screen, the result will not work as the way you want it be. You need to add the css style for  html and body because they are the parent for the #home and #home-cover. The coding are presenting as following:
```
html,body {
    height: 100%;
}
```
```
#home {
    height: 100%;
}

#home-cover {
    height: 100%;
    background-image: url("../img/bg-home.jpg");

}
```
#### Used the bootstrap alignment classes can Easily realign text to components without adding the extra code into the css file. 
```
<p class="text-left">Left aligned text.</p>
<p class="text-center">Center aligned text.</p>
<p class="text-right">Right aligned text.</p>
<p class="text-justify">Justified text.</p>
<p class="text-nowrap">No wrap text.</p>
```
```
<div id="home-content-box-inner" class="text-center">
```
#### In the header section I alread insert the external google fonts css file.It gives me the certain font weights that I can use in the project for different categories, which are 300,400,700.

```
<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i" rel="stylesheet">
```
#### I used the hover and focus to create the button effect. When a visitor mouses over it the button can change color to attract attention.
```
.btn-white:hover,
.btn-white:focus {
    background-color: #fff;
    color: #41464b;
}
```
#### Parallax scrolling may look complicated, but it’s actually not too complex and doesn’t require any fancy CSS properties. However, it definitely adds to the user experience and can be eye catching…sometimes even too captivating! And the code can be reused it again and again. It really saves a lot of time to create a complicated look. 
```
.bg-parallax {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}
```


## Contribution Section
### ![alt text](/contribution.png)

## About You Section
### ![alt text](/about.png)

## Your Work Section 
### ![alt text](/work.png)

## Our Customer Section
### ![alt text](/customer.png)

## Testimonials Section
### ![alt text](/testimonial.png)

## Stats Section
### ![alt text](/stats.png)

## Contract Section
### ![alt text](/contract.png)
