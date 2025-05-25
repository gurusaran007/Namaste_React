 
//JSX => Javascript syntax extension it is used to create React elements in react easier way that means it makedeveloper life easier compared 
// compared to react.createElement

//By using JSX syntax (it is a html like syntax or xml like syntax ) (ie writing HTML like code in javascript)

// but jsx is not create react elements directly like react.createElement() because JSX cannot understand by js engine and browser  because its not a proper js code, (JS Engine
// and browser underatand only js code or react code so parcel using babel package which is transpiler or javascripf compiler it is used to transpiling 
//JSX code into react.createElement() ( Its a javascript function form recat library so its standard javascript) browser and js engine can understand  and create react elements )


//The flow for understanding 

// JSX code -> Babel (Transpilation) -> React.createElement(staandard Javascript)-> ReactElements -> render(ReactElements) -> convert into HTML -> updated into DOM



//Writing JSX code

    const head = <h1  className="vanakam">Namaste React By using JSX</h1>

    console.log(head)