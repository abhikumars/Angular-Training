let print = () => { console.log("Hello"); }

let callback = (func) => {
    //prefix Logic
    console.log("Before Hello");
    func();

    //Post fix
}

callback(print);