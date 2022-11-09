function hapus(id) {
    const hapus = document.getElementById(id);
    hapus.remove();
    const count = document.getElementById("basket").children.length - 1;
    document.getElementById("count").innerHTML = count;
  }
  
  function deleteAndAdd(id, src) {
    const count = document.getElementById("basket").children.length - 0;
    const image = document.createElement("img");
    image.setAttribute("id", count);
    image.setAttribute("onclick", "hapus(id)");
    image.src = `${src}`;
    document.getElementById("basket").appendChild(image);
    document.getElementById("count").innerHTML = count;
  }

function backgroundColor() {
 var inputColor = prompt( "Enter a color name for the" + "Background-color","" );
 document.body.setAttribute("style","Background-color: " + inputColor );
}

function textColor() 
{ 
    var inputColor = prompt( "Enter a color name for the" + "Background-color","" );
    document.getElementById("text1").setAttribute("style","color: "+ inputColor);
}
