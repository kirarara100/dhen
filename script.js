x = 155;
y = 155;

function no(){
   let a =  Math.floor(Math.random() * 4);
    const awts = ["hmmpppp sumbong kita kay papa mo hmpp", "bebii yes ka plsss", "ganto ba kapag di mahal hmmpp","Hmppppp hmmpp","sakit kirot aray paghihinagpis TT "];
    const sad = ["sad.gif"];
    const out = document.getElementById("output");
    out.textContent = awts[a];
    let pic = document.getElementById("pic");
    pic.src = sad[0];

        const nB = document.getElementById("no");
        nB.style.width = x + "px" ;
        nB.style.height = y + "px" ;
        x -= 20;
        y -= 20;
}