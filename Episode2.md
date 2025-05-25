 # Episode-2 Assignments 

 # What is NPM?

     Its a Node Package manager ( which is managing package) , It's a repository which has all packages which we want in our project and 
if we want to use any library or package into our project we first initialize NPM then we will install packages

 # What is `Parcel/Webpack`? Why do we need it?
    
    Its a package  or javascript bundler which we install from NPM its present in devDependencies and NPM also configured this package details in package .json and intsall into node modules
    Why ?  , it dod evBuild creates local server and hosying dev build files in server in port number 1234 and it will do image optimization , better Error handling and This tool bundle our all project files (JS,HTML and CSS)and then optimized   during production so it make react app is faster in production.

 # What is `.parcel-cache` ?

     It is a folder and created by parcel to store  caching all our peoject fils data once parcel complete the build its its dev build or prod build its used so its fatser the building process  and it works with file watching algorithn which is detact file changes , it rebuild files which is changed currently and update that changes alone in browser without reloading whole browser(HMR) 

 # What is `npx` ?

    npx coomand line tool comes with similar npm . its used for directly executing the parcel without installed globally 

    instead of doing like this
    npm install parcel 
    parcel index.html

    we will use 
    npx parcel index.html

 # What is difference between `dependencies` vs `devDependencies`?

  ## Dependencies
     
     Its normal dependencies which is used for production like(React,ReactDom) and it configured in package.json under 
     "dependencies": {
      "react": "^19.1.0",
      "react-dom": "^19.1.0"
     },

  ## DevDependencies

      Its devDependencies which is used during development like(Parcel)

      "devDependencies": {
        parcel:"^2.8.1"
     },

 ## Why separate them?

        Dependencies are installed when someone installs your project to run it.

        DevDependencies are installed only during development and not included in production builds.

 # What is Tree Shaking?
 
    Tree Shaking is a feature of modern bundlers(parcel,webpack) , It is used to remove  unused or dead code from final production bundle 
    it reduce the size of bundle  and improve the performance by shakking off the unused variables and functions 

    Example 

    export function add(a,b){
        console.log(a+b)
    }

    
    export function multiply(a,b){
        console.log(a+b)
    }

    import {add} from ./utils
    console.log(add(2,3))

    Tree Shaking detect multiply is never used and remove that multiply code from production bundle 

 # What is Hot Module Replacement?

   Hot module replacement : it replace the updated module in browser instead of entire browser is loading 
   
   works by caching and File watching algorithem which is used to detect  file changes and update that part changes  alone in browser instead of whole browser loading

 # List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

  ## DevBuild

     It will do devBuild and create local server , hosting the dev build in server with port number 1234

  ## Image Optimization

     one of the expensive thing in web development is the image loading in web app so that will handle by parcel

  ## Hot Module Replacement

       one of the best feature in parcel it will replace the updated module in browser instead of whole browser is loading 

  ## Caching and File Watching algorithm

       .parcel-cache is the folder created by parcel to store the data once file is build so it helps to faster the bulds because it cachingall files and it used with file watching alogorithem which detach file changes and update that changes alone in browser

  ## TreeShaking

      It is a feature of modern parcel which is used to remove unused code or dead code from final production bundle so it reduce bundle size and improve the perfomance 

 # What is `.gitignore`? What should we add and not add into it?

     .gitignore is the file which we mention  the folders like(node_modules,dist,.parcel-cache) to ignore during commit 

     (ie) whatever folder we dont need in production (mostly parcel/npm created folder) and dont want to commit we will mention inside the gitignore

 # What is the difference between `package.json` and `package-lock.json`

     package.json: Its configured file  created manually with help of NPM when we give npm init , it has project details and package details in JSON format

     package-lock.json: Its a auto generated file created by NPM when we give npm install ,its a json format file which locks the exact version of all dependencies including subdependencies  (ie in package.json version we will mention  2 symbols (^-carrot) if we mention this symbol it refers if any  mini update come tommorrow or any other day update that version automatically in Package-lock.json 
       (~-tilda) if we mention this symbol it refers if any  major update come tommorrow or any other day update that version automatically in Package-lock.json thats  how it locks the exact version  ( always prefer carrot symbol because any major update came and update automatically it will affect our app) )
    
      we have to commit both package.josn and package-lock.json to install packages with exact version in production (if we dont commit package-lock.json we will get like its work in dev machine not work in prod machine )


 # Why should I not modify `package-lock.json`?

    Package lock.json is aauto generated file is cerated by NPM when we give npm install, it locks the exact version of all installed dependencies including nested dependencies 
    we should not modify because

     it is auto generated and managed by NPM 

     if we change manually anything it break dependency tree

     it creates incosistent across envoironments ( Development and production)

     Instead if you want change anything change in package.josn and give npm install its auto updated 

 # What is `node_modules` ? Is it a good idea to push that on git?

      Node modules is a folder auto created by NPM  when we ask NPM to install package, it has instlled dependencies and nested dependencies 
      Its not a good idea to push node modules that on git ,because it is large files and its also auto created by NPM so we can create anytime when we give NPM install and more than that we will rely on package.json and package-lock.json

 # What is the `dist` folder?

     Dist folder (output folder) is created by parcel when we exceute npx parcel index.html/npx parcel build index.html  , the parcel do dev build and store all dev build files inside the dist folder and when parcel do prod build once prod build done it stores production ready code inside dist folder if already dist folder have dev files remove that files and add production ready files , if its deleted parcel created again during production build and store the prouduction ready code 

     we wont commit dist folder because its generated folder not source code and anytime we can create this folder by parcel when it will do dev build or prod build , this folder is used for testing purpose no other need 


 # What is `browserlists`

     Browserlist is used to define which browsers , browser version the app should work , browserlist is a package again and its installed from npm and its installed along with parcel, if we want to configure it we can do it in package.json like this

     {
        "browserslist: [
            "last 2 versions" ( if we give like this our app 100% compatable with all browser last 2 versions it might compatable with before last 2 versions)
        ]
     }

  ## polyfill

   polyfill is the custom implementations of modern features in js to work modern feature in old browsers which natively wont support 

 # Read about dif bundlers: vite, webpack, parcel

   ## parce:

         Its quick setup because it has zero configuration , it has inbuilt HMR and its suitable for small to medium projects (react,vue,vannila js)

   ## Webpack

         Its powerful and customizable , but it need manula configuration and p,ugins , it is used for enterprise applications where we need more control(React,Angular)

   ## vite

        Its a modern and fast tool, it ahs ES build and ES native so its fast compare to parcel and webpack , its used for Modern react apps and vue apps 

 # Read about: ^ - caret and ~ - tilda

  ## ^-caret:  
     if we define in version in package.json  any mini + patch update (1.x.x) update come tommorrow , it update automatically in package-lock.json
     (smaller updates,large internal refactor, old functionalities depreceated )

  ## ^-tilda: 

    if we define in version in package.json  any patch(1.2.x) update comes tommorrow it will update automatically (mostly for bug fixes)

 # Read about Script types in html (MDN Docs)
 
   It define what type of script file is 

## script type: text/javascript

    It is regular js so no need to mention it 

## script type: module

     if its module

        Scoped(variable wont leak to global space)
        can use import and export
        loaded asynchronously

        most important in front end dev like react 

## script type : JSON

     we can store data Json in html file like this 

     <script type="JSON" id = "dat">

       {
        "name:"guru"
       }

    </script>

    later we will convert into js 

    const data = json.parse(document.getElementById("dat).textContent)

## script type: babel

     if script type is babel we can write JSX inside HTML file inside script tag

     Note: Its outdated