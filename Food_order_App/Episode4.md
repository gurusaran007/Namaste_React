  # is JSX  mandatory in React?

       It's not mandatory because we can create react elements by uisng plain js, typescript but JSX is highely recommended 

## Reason

### why we use ?

          We can Integrate JS inbetween JSX by using {}

          It make react code more readability and cleaner 

          It makes security because it escapes vaue from cross  site scripting

### where we dont use ?

        When environment doesn't support Babel we dont use JSX Because no one is there to transpile our JSX code 

        When it has very dynamic (variable using in that time there is no need for HTML we need plain JS  or typescript)  


# is ES6 is Mandatory?

    ES6 is not mandatory but practically yes and essential in react because most of the jobs 99% there are using ES6 because it provides lot of fetures given below

        Arrow Functions 

        Destructuring(Array,Object)

        Spread operator/ Rest parameter

        let/const

        Modules(import/Export)

        Template Literals


  ## if we write without ES6 

        More verbose 

        less readable 

        Not used in real world objects 

        Most tools like CreateReactAP, vite,  and Next js assumes ES6 features


# Why we need keys in React? When do we need keys in React?

      Yes We need keys in react 

   ## what will happen if we dont use keys in  React?
       
      If we don’t give keys, React treats all elements as the same. So when a new element is added or one is removed, React won’t know which item changed. It might re-render the whole list — for example, all 100 items — even if only one changed. That can create performance issues.
      
   ## when do we use and what will happen if we use keys?

       When we are looping array we have to give unique key for each value form an array by using [Key attribute] now all elements which is rendered in container has own id so any new elemnts comes react know which place it has to add new elements  so it render that elements alone instead of rerendering 100 elements  it give huge optimization in app

#  Can we use index as keys in React?

       yes we might use index as a keys in react , index which is coming from array method like arr.map(e,index) , but react itself says dont recommend  because order of item is changed it cerate UI issue  but instead of without using key and create performance issue we might use rare case index as a key 

# What is props in React? Ways to

      Props means passing the data dynamically during react component call for executing react component dynamically before using props react component executed as static way when we sue props react component exceutes dynamcially 

 ## What are the ways we can define props

     There are two ways to define it 

         1. pass the data directly to variable during react component call

         2. pass the data inside the js object and uses js object inside spread operator 

    There are three ways to use them

      Once we pass the data dynamically as props react take the props and mentioned inside object and mentioned as props keyword if we want we can destructuring the props and use that variable inside JSX to rendering value dynamically or we directly use props to rendering value inside JSX dynamically or we can destructuring in the fly when we calling react component 

# What is a Config Driven UI ?
   
        Config Driven UI means Configuration files like (JSON format or JS object) which is coming from backend through API and we will pass that configuration file data dynamically as a props and rendering that data dynmaically thats called dynamic rendering 

## why we use it?

     If you take swiggy if i use swiggy in chennai it take configuration files (JSON format) has chennai based data so if i pass that data dynamically and rendering it dynamically it shows chennai based hotels and food 

     same If you take swiggy if i use swiggy in Delhi it take configuration files (JSON format) has delhi based data so if i pass that data dynamically and rendering it dynamically it shows delhi based hotels and food 
