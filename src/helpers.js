function clickHandler(button, cmd, originPage  ) {
    let btn = button;
    let action = cmd;
 
    btn.addEventListener("click", action);

};


export {clickHandler}
