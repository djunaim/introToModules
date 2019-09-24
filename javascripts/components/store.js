const printToDOM = (divID, toPrint) => {
    document.getElementById(divID).innerHTML = toPrint;
}

const makeStore = () => {
    const domString = 'hi new store';
    printToDOM('storeContainer', domString);
}

// export default. what's inside brackets is object
export default{ makeStore };