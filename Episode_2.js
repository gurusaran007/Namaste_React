import React from "react";

import ReactDOM from "react-dom/client"


//  Create a Nested header Element using React.createElement(h1,h2,h3 inside a
// div with class “title”)
// ○ Create the same element using JSX
// ○ Create a functional component of the same with JSX
// ○ Pass attributes into the tag in JSX
// ○ Composition of Component(Add a component inside another)
// ○ {TitleComponent} vs {<TitleComponent/>} vs
// {<TitleComponent></TitleComponent>} in JSX


//Create a Nested header Element using React.createElement(h1,h2,h3 inside a
// div with class “title”)

// const element = React.createElement("div",{className:"title"},
//     [React.createElement("h1",{},"This is head1"),
//         React.createElement("h1",{},"This is head2"),
//         React.createElement("h1",{},"This is head1")
//     ]
// )

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(element);


 //Create the same element using JSX

// const element = <div className = "title">
//                   <h1>This is head1</h1>
//                   <h1>This is head2</h1>
//                   <h1>This is head3</h1>
//                 </div>


// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(element)

//Create a functional component of the same with JSX

// const HeadingComponent = () => {
//     return   (
//                  <div className = "title"> 
//                     <h1>This is head1</h1>  
//                     <h1>This is head2</h1>
//                     <h1>This is head3</h1>
//                 </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<HeadingComponent/>)


//Pass attributes into the tag in JSX

const myself = "Guru";

const sister = "Saranya"

const HeadingComponent = () => {

        
    return   (
                 <div className = "title"> 
                     {/* <b> {myself} {sister}</b> */}

                     {<TitleComponent />}
                    {<TitleComponent></TitleComponent>}
                    <h1>This is head1</h1>  
                    <h1>This is head2</h1>
                    <h1>This is head3</h1>
                </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)


//Composition of Component(Add a component inside another)

const TitleComponent = () =>{
    return (
        <div>
            <h1>Hello {myself} {sister}</h1>
        </div>
    )
}