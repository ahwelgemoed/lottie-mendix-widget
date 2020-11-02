<h1 align="center">Lottie Animation For Mendix</h1>

<p align="center">
  <a href="">
    <img alt="License: MIT" src="https://img.shields.io/github/issues/ahwelgemoed/lottie-mendix-widget" target="_blank" />
  </a>
  <a href="">
    <img alt="GitHub issues" src="https://img.shields.io/github/release/ahwelgemoed/lottie-mendix-widget" target="_blank" />
  </a>
  <a href="https://appstore.home.mendix.com/link/modeler/">
    <img alt="GitHub issues" src="https://img.shields.io/badge/Studio%20version-8.0%2B-blue.svg" target="_blank" />
  </a>
  <a href="https://docs.mendix.com/developerportal/app-store/app-store-content-support">
    <img alt="GitHub issues" src="https://img.shields.io/badge/Support-Community%20(no%20active%20support)-orange.svg" target="_blank" />
  </a>
  <a href="/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-Apache%202.0-orange.svg" target="_blank" />
  </a>
  <br>
  
</p>
 <img  align="center" alt="headerIMG" src="./assets/Lottie.png" target="_blank" />

  <br>
<p align="center">
    Lottie Implementation for Mendix.
</p>
<p align="center">
    Lottie is any easy way to add beautifull animations to your app. It uses JSON files exported from After Effects. <br> Read more about Lottie 
      <a href="https://airbnb.design/lottie/">here</a> and see the possibilities  <a href="https://lottiefiles.com/">here</a>
</p>

<h2>Usage</h2>
 <img  align="center" alt="headerIMG" src="./assets/SS1.png" target="_blank" />
 <h3>Data</h3>
 <h4>Usage with Hosted JSON Files</h4>
    <p>
    In this option you dont have to store the Animation JSON file locally or copy it over, you can simply provide a publicly available URL.
    </p>
 <h4>Usage with Attributes</h4>
    <p>
    Here you will have to setup a entity in the domain model that stores the JSON in a String Attribute.
    </p>
    <p>
    You can simply open the JSON file in a Text Editor you receive from your designer and copy and save it.
    </p>

**HERE is an example of a JSON string copied**
<img  align="center" alt="headerIMG" src="./assets/SS2.png" target="_blank" />

<h3>Controls</h3>

|                  | Type    | Info                                                                                                                     |
| ---------------- | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| Loop             | boolean | Either loops the animation or not                                                                                        |
| Width and Height | number  | Set Animation Width and Height                                                                                           |
| Start Animation  | boolean | When this is selected the animation will only start once the value changes from False to True _(Non persistable object)_ |
| On Complete      | action  | When this is selected it will trigger the action once the animation is Done (WILL NOT TRIGGER ON LOOPING ANIMATIONS)     |

## Example GIF

**Example of a Microflow triggering a Manual Start**
<img  align="center" alt="headerIMG" src="./assets/ManuallyStart.gif" target="_blank" />

**Example of a OnComplete triggering a Page To Open (Also A Manual Start)**
<img  align="center" alt="headerIMG" src="./assets/OnComplete.gif" target="_blank" />

**Random Locally Stored Animations** <img  align="center" alt="headerIMG" src="./assets/Random.gif" target="_blank" />

## Known Issues

-   Currently not able to loop segments and then stop the Animation

## Issues, suggestions and feature requests

[Github Issues](https://github.com/ahwelgemoed/lottie-mendix-widget/issues "Github Issues")

## Development and contribution

[specify contribute]
