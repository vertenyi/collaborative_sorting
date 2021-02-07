// Collaborative sorting js

const byId = (id) => document.getElementById(id);

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


let selection = () =>{
    tagCreator({ id: "c1"
                , target: compare
                , innerHTML: "text"
                , style: [["display","inline-block"],["cursor","pointer"]] 
                , attr: [["onclick","alert(1)"]] 
            });

    tagCreator({ id: "c2"
                , target: compare
                , innerHTML: "text2"
                , style: [["display","inline-block"],["cursor","pointer"]]
                , attr: [["onclick","alert(2)"]] 
            });

}

let sort = () => {

    selection();


    setresult("123");

};

let init = () => {

    let display = byId("display");
    tagCreator({ id: "compare", target: display });

    tagCreator({ id: "result", target: display });

    sort();
};