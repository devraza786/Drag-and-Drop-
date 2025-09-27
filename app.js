const dragstartHandler =(ev) => {
    ev.dataTransfer.setData("text",ev.target.id);
}

const dragoverHandler =(ev) => {
    ev.preventDefault();
}
const dropHandler =(ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

}





