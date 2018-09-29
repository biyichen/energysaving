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
#### The homepage has a few main jobs: Show visitors what they’re looking for, show them where to start, and establish your company’s credibility. Regardless of your website’s function (e-commerce, organizational, non-profit, etc.), the home page is like a storefront window. It is a peek inside of your website. And if it is not appealing or intriguing, then chances are it is the only thing your users will see because they will likely move on very quickly.Like that window, a home page is a website’s only chance to show visitors what there is to offer. A website visitor, like a shopper looking in a window, makes a decision within a very short amount of time whether a website will be any benefit to them. I decide make the homepage impressive by having an identity logo and Large & Responsive Hero Images background, providing a clear navigation, supplying both new and return visitors with desired content, providing multiple entry points from the navigation and "view your work" button, or even simply just scrop-down, give users different ways of accessing the site’s content.
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
#### CSS animations allows animation of most HTML elements without using JavaScript or Flash! Frist I need to insert the animate css external library into the header section of html file. I would recommend this website to download the animate css file and move into the main css file. (https://daneden.github.io/animate.css/)

```
<link rel="stylesheet" href="css/animate/animate.css">
```

## Contribution Section
#### The contribution section illustrates the web’s goal of introducing the features of this product to the visitor. Then, it gives visitors three options to try the product’s free calculation about energy savings. Too much written product introductions can make customers tired of reading. Therefore, I choose to use icons to represent the features of the product with concise and powerful explanations. It helps the customer to know excatly what they can do on here. And what measurements that we can offer to the customer to estimate how much one customer can contribute to the energy saving. Therefore, we can achieve the interaction with the customer and establish the customer relationship. My idea pretty similar with starhucks offical website. It is pretty straightforward to let customer know what we can help. (https://www.starbucks.com/menu?&utm_term=starbucks&gclid=Cj0KCQjwxbzdBRCoARIsACzIK2kT-bBgj3eD3bc6Wtyz79u31rp9jM9pyUJWEfVGdF7uAmWEjLg9MJUaAtlPEALw_wcB&utm_campaign=BR+-+Brand+-+Starbucks+-+Desktop+-+Exact&utm_medium=cpc&utm_source=google)
### ![alt text](/contribution.png)
#### Set up the reveal Animations When you scroll by download the wow.js. Link to Animate.css (You can link to another CSS animation library by changing WOW.js settings)
```
<link rel="stylesheet" href="css/animate.css">
```
#### Link and activate WOW.js in the custom.js file.
```
$(function () {

    // animate on scroll
    new WOW().init();
});

```
#### Add the CSS class .wow to a HTML element: it will be invisible until the user scrolls to reveal it.
```
<div class="contribution-item wow animated fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
```

## About You Section
### ![alt text](/about.png)
#### Often most of the “About” page—the page that introduces yourself to your website visitor, tells them what you do and builds a rapport that will hopefully turn them into a customer. On the contrary, the content of this part is my goal to encourage users to continue to contribute to energy saving, so my focus is on the customer's practical results to encourage more customers to continue to practice this activity. From a commercial perspective, to attract more return customers. So think of the “About Us” page as long-term dating with a current customer. Do not need too many gorgeous statements to modify, simply highlight the customer's success. 

#### Use the google chrome inspect function to examine and edit the CSS modifications.And find the best layout to add to the project css file. Change to border parameters to create the unique style of the "about you" section.
```
#about-bg-diagonal {
    width: 60%;
    height: 700px;
    float: right;
    background-image: url(../img/bg-about.jpg);
    border-left: 200px solid #fff;
    border-top: 700px solid transparent;
}
```

## Your Work Section 
### ![alt text](/work.png)

#### At this stage, the customer's success is automatically converted in three different measurement methods. There is no need for the customer to manually click on the specific button, and each result will automatically loop. Such an approach enables customers to more clearly recognize the importance of their contributions in different areas. The average user to a new unfamiliar web page is not going to risk clicking on multiple buttons at the same time. Most customers will only expolre the content presented on the web will not risk themselves turning to unfamiliar functions even they do have some basic understanding of the function of this product. Automatically jumping each result will better inform customers of their success and encourage them to make persistent efforts.

#### Download the Owl Carousel to create the strcuture of Infinity Loop. (https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html)
#### First, include two CSS files into your HTML head:
```
<link rel="stylesheet" href="owlcarousel/owl.carousel.min.css">
<link rel="stylesheet" href="owlcarousel/owl.theme.default.min.css">
<script src="owlcarousel/owl.carousel.min.js"></script>
```

## Our Customer Section
### ![alt text](/customer.png)

#### In the html file, add the bootstrap class="img-responsive" to make the image in a responsive design.
```
<img src="img/customer/customer-1.jpg" class="img-responsive" alt="customer member">
```

## Testimonials Section
### ![alt text](/testimonial.png)

## Stats Section
### ![alt text](/stats.png)

## Contract Section
### ![alt text](/contract.png)
