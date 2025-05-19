"Namste React#" 

# What is Emmet?

It is a plugin or tool used by developers to write html or css write faster using abbrevations

Example: ul>li*3 , div.class="guru",div#id = "saran"


# Difference between a Library and Framework

## Library: 

RealTime Example: It's a toolbox when we needa tool for our car or bike we will use toolbo and pick tool , use the tool however we want
but programming way library is code reusable code you call it , you controls the code , lightweight 

## Framework:

RealTime Example: Its a bblueprint, when you are building house you must follow the structure thats how whem you build project you follow structure defined by framework

but programming way Framework its a structure it calls your code , framework controls you code and its openiated 



# What is CDN? why do we use it?

    RealTimeExample: Its like swiggy/zomato instead of cooking food and we ordered food throgh zomato/swiggy, same in react concept also 
    instead of creating react library ourselves we will order react library  from CDN 

    In programing way: CDN is anetwork of servers distributed globally , it host js libraries like React and React DOM and deliver the react , and react dom to near by user for faster loading

    What is CDN-link: That link which is hosting the react librarry and react-Dom 

    Advantages: if we use CDN we can easily inject react into our project

    Disadvantages

        🌐 Needs internet – It fetches React from the web

        💸 Network dependency – Adds load time if the network is slow

        🔧 Version control – You have to manually update the URL when a new React version comes

# why is React known as React?

React is reacts for changing data and it update the data quickly and automaticaly to UI 

RealTime example: if we watch live cricket if batsman hit four app will reacts for change the data and update the data in app(UI)

It doesn't do any dom manipulation like js and jquery , its used virtual dom and reacts for changing data and update it automatically in app

# what is crossorigin in script tag?

crossOrigin is an attribute in script tag

RealTimeExample:

there is a two situation 

1) I order the food from swiggy without using my login id and name (just order the food) and swiggy also dont want our name and give me the food 
is called crossOrigin = "anonymous" and get the food publicly

2) I order the food from swiggy by using my login Id and name and if swiggy denied the access use our login Id and get the food privately is called crossOrigin = "use credentials"

3) No crossOrigin if you dont mind about errors 


CrossOrigin = anonymous : if scripts loading script files from external resource like CDN react library we will get react library safely without our login Id and  if we have any error it tells detail error

CrossOrigin = use credentials : if scripts loading script files from external resource like authentication APi where authentication needed  and  if we have any error it tells detail error


if we loading script by script tag if we face error and its not detailed in that case we will use attribute crossOrigin=anonymous if scrit tag load script files from public external resource it will show error message detail(if server accepts Access control allow origin ) if its private ER ierro is still hidden , In that case we will use another option that is called 
crossOrigin=use credentials if we use it script tag load script files from external resource private and it shows detail error (only server allows Access contol allow origin and use credentials = true)



# what is difference between React  and ReactDOM?

## React

    React: its a core library , it is used to create react elements 

    It deals with component logic , state and lifecycle

    it provides useState,useEffect,useContext 

    it is platform diagnostic(it can works wth reactNative)

## ReactDom

   It is a library to rebder react elements into the dom

   It deals with rendering react components into the dom

   It provides ReactDom.render() and createRoot methods

   It works only for webapps

# what is difference beween react.development.js and react.production.js

## react.development.js

    Its is used for development environment

    it includes warning and helpful error message 

    It is not optimized code for speed or size

    by using this we can easily do debugs by uisng ReactDev Tools

    Parcel using this library automatically when it will do dev build by uisng files 

## react.production.js

    Its is used for production environment

    it reduces warnings for minimize the size

    It is  optimized code for speed or size

    by using this, its hard  do debugs due to itgs minified

    Parcel using this library automatically when it will do production build by uisng files 

# what is async and defer?

 Before using async and defer what will happen

 ## Normal script tag

    if we use normal script the browser pause HTML exceution by HTML parser and creating Dom tree and start script files downloading from sources 
    and exceuting script files and once script file exceution is done It will start to create DOM tree

    Problem: if script file is larger its take  time to execute untill unless it block DOM tree creation  so content not displayed and the page is frozen
 ## using async in script tag

    if we use  script  with async the browser parallely  HTML parser creating Dom tree  by Executingn  HTML code and  script files downloading from sources aand once script files downloaded , browser stops HTMl parser to cerate dom tree and start to execute script files and once done it will resume HTMl parser to create DOM tree , 

    Advantages : it will parallely loading or downloading script files from resurces when Html parser creating DOm tree  
    DisAdvantages 
    it also block dom creation once script files executed 
    It doesn't maintain order when we have multiple script files 

    used when: it doesn't depend  on DOM manipulation and other script files

## using defer in script tag

    if we use  script  with defer the browser parallely  HTML parser creating Dom tree  by Executingn  HTML code and  script files downloading from sources aand once script files downloaded , it will wait untill HTML parser creating full Dom tree by executing HTML code 

    Advantages : 
    it will parallely loading or downloading script files from resurces when Html parser creating DOm tree  
    it start to execute once dom tree is fully available 
    it maintain order even we hsave multiple script files

    used when: 
    we do DOM manipulation in js
    we have order is matters
    