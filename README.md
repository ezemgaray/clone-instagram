# Clone Instagram

Simple practice to learn Sass and compile css. The objective of this pill is to put the basic foundations of SASS into practice.
The practice consists of two pages. A login and a summary of the instagram feed, excluding stories and contact suggestions.

## Content of this practice
   - [Import](#sass-organization)
   - [Inheritance](#inheritance)



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
