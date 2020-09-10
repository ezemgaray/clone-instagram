# Clone Instagram

Simple practice to learn Sass and compile css. The objective of this pill is to put the basic foundations of SASS into practice.
The practice consists of two pages. A login and a summary of the instagram feed, excluding stories and contact suggestions.

## Content of this practice
   - [Import](#sass-organization)




## Sass Organization
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