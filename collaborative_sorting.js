// Collaborative sorting by eriol

inputData = [ "alma"
            , "körte"
            , "szilva"
            , "cseresznye"
            , "banán"
            , "eper" 
            , "narancs"
];


const byId = (id) => document.getElementById(id);
let appRunning = 0;


//const display = byId("display");
//const output = (text) => display.innerHTML = text;

const tagCreator = (e) => {
    let t = document.createElement(e.hasOwnProperty("tag") ? e.tag : "div");
    t.id = e.id || "";
    t.className = e.class || "";
    t.textContent = e.text || "";
    t.innerHTML = e.innerHTML || "";
    if (e.hasOwnProperty("classList")) { e.attr.forEach(item => { t.classList.add(item); }); };
    if (e.hasOwnProperty("attr")) { e.attr.forEach(item => { t.setAttribute(item[0], item[1]); }); };
    if (e.hasOwnProperty("style")) { e.style.forEach(item => { t.style[item[0]] = item[1]; }); };
    if (e.hasOwnProperty("event")) { t.addEventListener(e.event[0], event => { e.event[1]; }) }
    if (e.hasOwnProperty("target")) { e.target.appendChild(t); }
    return t;
}

let setresult = (t) => byId("result").innerHTML = t;

let createComparison = (id, value) =>{
        tagCreator({ id: "id"
                , target: compare
                , innerHTML: value
                , class: "comparisonBox"
                , style: [["display","inline-block"],["cursor","pointer"]] 
                , attr: [["onclick",value]] 
            });

}
let selection = () =>{
    byId("compare").innerHTML = "";
    createComparison("c1","t1");
    createComparison("c2","t2");
}

let sort = () => {

    selection();

    setresult("123");

};


let start = () => {
    if (appRunning == 0){

    let display = byId("display");
        display.innerHTML = "";
    
    tagCreator({ id: "inputData", class: "div", target: display, innerHTML: inputData.toString() });

    tagCreator({ id: "compare", class: "div", target: display });

    tagCreator({ id: "result", target: "div", target: display });
    appRunning = 1;
    }
    sort();

};