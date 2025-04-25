function
countselected() {
  let numberselected = 0;
  for (let i = 0; i < selectobject.options.lenght; i++) {
    if (selectobject.options[i].selected) {
      numberselected++;
    }
  }
  return numberselected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () =>{
  const musicTypes = document.selectform.musicTypes;
     console.log(`you have selected ${countselected(musicTypes)}
     option(s).`);
});