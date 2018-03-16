![scroll-animate.js](https://preview.ibb.co/bt564c/header.png)
# Scroll-animate.js ![License](https://img.shields.io/github/license/nutterrocker/scroll-animate-js.svg)
A lightweight scroll animation javascript compatible with [daneden/animate.css](https://daneden.github.io/animate.css/)
### Easiest js to use
Chill out with almost hundred animation from [daneden/animate.css](https://daneden.github.io/animate.css/) by just adding `scroll-animate` css class and adding a following effect class from [daneden/animate.css](https://daneden.github.io/animate.css/) to the last css class of your html element.<br>
- Example. I want to use `fadeInUp` effect.
```html
<jumbotron class="....bla bla... scroll-animate fadeInUp">
  .... bla bla
</jumbotron>
```
### Lightweight!!!!
`scroll-animate.min.js` file is just 700 bytes !!!
# Getting Started
### Prerequisites
- Jquery
### Dependencies
- Animate.css [daneden/animate.css](https://daneden.github.io/animate.css/)
### Installation
1. Let's clone it!!!
```
git clone git://github.com/nutterrocker/scroll-animate-js
```
2. Use npm to install the repository.
```
npm install
```
3. Copy `animate.min.css` from `/scroll-animate-js/node_modules/animate.min.css` to your css folder.
4. Copy `scroll-animate.min.js` inside `/scroll-animate-js/` folder to your js folder.
5. ( Optional ) Remove `/scroll-animate-js/` folder.
### Usage
- Import animate.min.css and scroll-animate.min.js to your html file.
```html
<!-- Animate.css -->
<link rel="stylesheet" src="css/animate.min.css">

<!-- Scroll-animate.js -->
<script type="text/javascript" src>="js/scroll-animate.min.js"</script>
```
- Add `scroll-animate` to __the last css class__ of your html element.
```html
// Wrong! you have to add the class to the last of css class!
<p class="scroll-animate text-center text-danger"></p>

// Correct
<p class="text-center text-danger scroll-animate"></p>
```
- Then, add an animation class (you can check out from here [daneden/animate.css](https://daneden.github.io/animate.css/)) next to `scroll-animate` class.<br>
For example. I want to use `bounceInUp` effect.
```html
// Wrong! you have to add an animation class next to scroll-animate class.
<p class="ิbounceInUp text-center text-danger scroll-animate"></p>

// Correct
<p class="text-center text-danger scroll-animate bounceInUp"></p>
```
# Version
1.0.1
# Contributing
Code your repository by using style guide from [airbnb/javascript](https://github.com/airbnb/javascript), feel free to pull request anytime. I will do the action ASAP ;D