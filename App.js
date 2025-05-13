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


const parent = React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child1"},
            [React.createElement("h1",{},"Iam h1 tag"),
             React.createElement("h2",{},"Iam h2 tag")]
        ),
        React.createElement("div",{id:"child2"},
            [React.createElement("h3",{},"Iam h3 tag"),
             React.createElement("h4",{},"Iam h4 tag")]
        )
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);