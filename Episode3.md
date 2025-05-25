 # What is JSX?

      JSX is a javascript Syntax Extension , It is used for creating react Elements in react by using JSX syntax ( html like syntax or Xml like syntax) also we say html like code in javascript file

 # Superposwers of JSX


      HTML like syntax , More readability, Security (cyber attacks escape the values before rendering cross site scripting),Js Integeration in JSX

      It's html like synatx to create react elements so developer can easily understand the code , it make developer life easy

      It makes react code more readable and clean structure compared to react.createElement(Core react)

      It prevents cyber attck when we inject js (if cyber attck try to make JSX wont blindly exceute js variable or expresiion ) which is inject into the jsx , it will check everything is fine then only it exceuted 

# Role Of type attribute in script tag and what can i use there ?

     the Type attribute in script tag used to tell the browser what type  of script file it is if type = text/javascript it has only 
     javascript code and 

     if i mention ( type = module) script file using ES Modules like

        we can use import/export in file

        Scope isolation: Every file behave like a own seperate container so other file cannot access variable from this file untill we manually export it

        Deffered: By default it is deffered ( it will wait to execute untill full Dom available)

        Strict-rules: If we use undeclare file it throw an error

        CORS rules: if we load script file from external resource it force to use CORS rules  

     you can use this type for React

# what is difference between {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent> </TitleComponent>}

     {TitleComponent}: React and Babel treat this is  just javascript expression so it wont render into DOM

     {<TitleComponent/>}: If we give like this or putting inside like this we embedded React component into JSX code  (another element) and Babel transpiling this like(react.createElement(TitleComponent) -> recat elements inside another JSX element then when it render it will render like HTML nested structure )

     {<TitleComponent> </TitleComponent>}: It is similar to  {<TitleComponent/>} both React treat as same but only difference when component doesn't have childern we will use self closing tag 