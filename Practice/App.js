 
 import React from "react"
 import ReactDOM from "react-dom/client"
 import justImage from "/just.jpg"
 
 //How to create HTML element using react ( By using React library and inbuilt method)

  const heading = React.createElement("h1",
    {id:"heading",
     className:"abc"
     
  },"Hello world from React"); //This inbuit method usec to create HTML elemnt and it accepts 3 arguments tagname,object for attribute,content

  console.log(heading);//if we use react this not creating actual HTML element it will create React element its nothing (but a normal Js object) 

  // we aill add this react element to actual dom but we cannot do by using React instaed we will use ReactDOM we will add all our react elements
  //to our ReactDOM  it will convert intoHTL elemnts andd put into dom

  // create root element or container which used to do all our react dom manipulation since react 18

//   const root = ReactDOM.createRoot(document.getElementById("root"));

  

//   <div id="parent">
//     <div id="child">
//        <h1>Iam h1 tag</h1>
//     </div>
//   </div>


//Nested html elements
// const parent = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child1"},
//         React.createElement("h1",{},"Iam h1 tag")
//     )
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//If i have nested html  elements with siblings 

//   <div id="parent">
//     <div id="child">
//        <h1>Iam h1 tag</h1>
//        <h2> Iam h2 tag</h2>
//     </div>
//   </div>


// const parent = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child1"},
//         [React.createElement("h1",{},"Iam h1 tag"),
//          React.createElement("h2",{},"Iam h2 tag")]
//     )
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);



//If i have  complex nested html  elements with siblings 

//   <div id="parent">
//     <div id="child">
//        <h1>Iam h1 tag</h1>
//        <h2> Iam h2 tag</h2>
//     </div>

//        <div id="child">
// //        <h1>Iam h1 tag</h1>
// //        <h2> Iam h2 tag</h2>
// //     </div>
//   </div>


// const parent = React.createElement("div",{id:"parent"},
//     [
//         React.createElement("div",{id:"child1"},
//             [React.createElement("h1",{},"Iam h1 tag"),
//              React.createElement("h2",{},"Iam h2 tag")]
//         ),
//         React.createElement("div",{id:"child2"},
//             [React.createElement("h3",{},"Iam h3 tag"),
//              React.createElement("h4",{},"Iam h5 tag")]
//         )
//     ]
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


//Writing JSX code creating react Element and stored in variable 

    // const head = (<h1  className="vanakam">Namaste React By using JSX
    //               <img src= {justImage} alt="just"/>
    //               <a href="https://namastedev.com/learn/namaste-react/ep-03-laying-the-foundation" target="_blank"> Hello Boys</a>
    //                </h1>)

    // console.log(head)

    // const root = ReactDOM.createRoot(document.getElementById("root"));

    // root.render(head)


// Creating React elements using JSX using React components 

   
  // There is 2 types of react components 

  //1.class Based Component (old)

  //2.Functional Component (New)


  // // Functional Component : Its nothing but js functions which is return some piece of JSX code or function which is return react elements and function name should start with caps

  
  //  const HeadingComponent = () => ( 
                                      
  //                                    <div>
  //                                     <Title/>
  //                                      <h1>Hello from JSX component</h1> 
  //                                   </div>
  //                                   )


  //  //If you want to render react functional component 

  //    ReactDOM.createRoot(document.getElementById("root")).render( <HeadingComponent/> )


  // const Title = () => 
  // <>
  //       <div>
  //         <h1>Hello I am gurusaran</h1>
  //       </div>

  //       <div>
  //         <h1>How are you </h1>
  //       </div>
  //   </>
       
  
  
    
//Composing Component 

// place one component into the another component finally briser creates html nested structure 

//In js return inside function also give carefully because if we return but didn't mention anything in same line it wont reach next line it take as undefined 

const HeadingComponent = () =>   {

   <Title></Title>
     return (
      
      <>
    
           <div>   
            
               {/* <Title/> */}

              

               {vet}

            <h1> Hello from JSX </h1> 
           
           </div>  

           <div>  

             {/* <Title/> */}

              {Title()} {/*We can give as normal js function */}
            
            {vet}
            <p> Hi i am  <b> Guru </b>  from karur I am going to do the biggest thing in my life </p>

           </div>

          

      </>
        
 
     )
        
              
                              
}
   




const Title = () => {
   
  return  (

      <table>
        <thead>
        
           <tr>
            <td> Name </td>
            <td>Interest</td>
        </tr>

        </thead>
        
       <tbody>
         
        <tr>
        <td>Gurusaran</td>
        <td> Coding</td>
       </tr>

       <tr>
        <td>Saranya</td>
        <td>Auditor</td>
       </tr>

       </tbody>
      

      </table> 

  )

}
            
          
         

//react Elements

const vet = (
  <div>
    <img  src="/just.jpg" alt="hair image"></img>

     <Title/>
   
  </div>

  
)
         

                  
    
           
         





//rendering the React elements by converting into HTML elements  put into the DOM

ReactDOM.createRoot(document.getElementById("root")).render(<HeadingComponent/>)


// React Cross site Scripting 

//Cyber attacks through Javascript and if we inject that javascript into the JSX , It(JSX ) prevents cyber attack whenw e inject javascript it wont blindly exceute that js 

// it sanitize that js inside brackets everything is fine it will execute it 


