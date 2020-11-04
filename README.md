# Clone Instagram

Simple practice to learn Sass and compile css. The objective of this pill is to put the basic foundations of SASS into practice.
The practice consists of two pages. A login and a summary of the instagram feed, excluding stories and contact suggestions.

## Content of this practice
   - [Import](#sass-organization)
   - [Inheritance](#inheritance)
   - [Carousel Animation](#carousel-animation)


## Original

![Original](src/img/original.png)

## Clone

![Clone](src/img/clone.png)


### Sass Organization
The **Sass** files are organizated of the following way

```
├── sass/                     # Folder into src/css/
│   ├── style.sass            # This is the main sass. It contains the @import's
│   ├── variables.sass        # Define variables about colors and font-family 
│   ├── reset.sass            # general styles about tags like body, main, header, a, inputs, etc
│   ├── icons.sass            # Font implement and Styles of icons 
│   ├── generalClasses.sass   # Classes to be implemented in the different files/pages 
│   ├── login.sass            # Login styles (form, view of mobile with carousel) 
│   └── feed.sass             # Feed styles (navbar and posts) 
```

### Inheritance
Due to their similarity, inheritance has been applied to input styles.

*SASS*

**src/css/sass/reset.sass**
```
%input
   background-color: $bg
   outline: none
   width: 100%
   border-radius: 3px
   padding: 8px 5px
   line-height: 18px

input[type="text"], input[type="password"], input[type="search"]
   @extend %input
   border: solid 1px rgba($gray-light, .3)
   font-size: 16px

input[type="submit"]
   @extend %input
   margin: 10px 0
   border: none
   background-color: $blue-light
   color: $white
   font-weight: bold
   cursor: pointer
```

*CSS RESULT*

**src/css/style.css**
```
input[type=submit], input[type=text], input[type=password], input[type=search] {
  background-color: #fafafa;
  outline: none;
  width: 100%;
  border-radius: 3px;
  padding: 8px 5px;
  line-height: 18px;
}

input[type=text], input[type=password], input[type=search] {
  border: solid 1px rgba(142, 142, 142, 0.3);
  font-size: 16px;
}

input[type=submit] {
  margin: 10px 0;
  border: none;
  background-color: #b2dffc;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
}

```


### Carousel Animation

To perform the carousel on the login page I combined different rules within a @mixin

**@mixin:** As a function, @mixin contains the code that can be reused.
**@at-root:** Allow to encapsulate code for organization in Sass but jumps to top level at compile time
**@for:** Loop to generate code at compile time, following the specified rules
**@if:** Condition. 

```
$n: 5
$x: 17.5%
$y: (100% - $n * $x) / ($n - 1)

@mixin carousel-animation($frames, $interval, $name: 'carousel')
   $animating: (100% - $frames * $interval) / ($frames - 1)

   @at-root 
      @keyframes carousel 
         @for $i from 0 to $n
            $current: ($i * $x) + ($i * $y)
            $next: (($i + 1) * $x) + ($i + $y)

            #{$current, $next}
               background: url('../img/phone_' + ($i + 1) + '.jpg')
               opacity: 1
            $midle: $i * ($x / 2%) + ($i - 1) * $y + ($y / 2)

            @if $i > 0
               #{$midle}
                  opacity: 1

// IMPLEMENTATION
@include carousel-animation($frames: 5, $interval: 20%)
```

## Authors

*  **Ezequiel Garay** - [Github](https://github.com/ezemgaray "Ezequiel Garay - GitHub")