let gameIcon=document.querySelectorAll(".gameIcon");
// let icon=document.querySelectorAll(".icon");
let computer=document.querySelectorAll(".computer");
let pickInfo=document.querySelector(".pickInfo");
let userPick=document.querySelector(".userPick");
let pcPick=document.querySelector(".pcPick");
let reultContainer=document.querySelector(".reultContainer");
let win=document.querySelector(".win");
let againstPc=document.querySelector(".againstPc");
let playAgain=document.querySelector(".playAgain");
let random=Math.floor(Math.random()*3); 
let triangle=document.querySelectorAll(".triangle");
let nextBtn=document.querySelector(".nextBtn");
let ruleBtn=document.querySelector("#ruleBtn");
let textAgainstPc=document.querySelector(".againstPc")
let compscore=JSON.parse(localStorage.getItem("compscore"));
let UserScore=JSON.parse(localStorage.getItem("UserScore"));
let pcScore=document.getElementById("pcscore");
let usreScore=document.getElementById("userscore");
if(compscore, UserScore){
    pcScore.innerText=compscore;
    usreScore.innerText=UserScore;
}
let pcscore=0;
let userscore=0;

gameIcon.forEach((element,index)=>{
    element.addEventListener("click", ()=>{
        pickInfo.style.display="block";
        triangle.forEach(triangle =>{
            triangle.style.display="none";
        });
        gameIcon.forEach(gameIcon =>{
            gameIcon.style.display="none";
        });
        element.style.display="block";
        element.classList.add("showIcon");
        setTimeout(() =>{
            pcPick.style.display="block";
            // gameIcon.style.display="block";
            setTimeout(() =>{
            computer[random].style.display="block";
            computer[random].classList.add("right");
            }, 100);
        }, 200);
        setTimeout(() =>{
            if(random==index){
                reultContainer.style.display="flex";
                win.innerText="TIE UP";  
            }else if(index==0 && random==1 || index==1 && random==2 || index==2 && random==0){
                reultContainer.style.display="flex";
                reultContainer.style.left="43%";
                win.innerText="YOU WIN";
                userscore=UserScore;
                userscore++;
                usreScore.innerText=userscore;
                localStorage.setItem("UserScore", JSON.stringify(userscore));
                nextBtn.style.display="block";
                ruleBtn.classList.add("rulebutton");
                element.classList.add("green");

               
            }else{
                reultContainer.style.display="flex";
                reultContainer.style.left="46%";
                win.innerText="YOU LOST";
                computer[random].classList.add("compwin");
                pcscore=compscore;
                pcscore++;
                pcScore.innerText=pcscore;
                localStorage.setItem("compscore", JSON.stringify(pcscore));
                
            }
        }, 100);
    })

});
playAgain.addEventListener("click", () =>{
    window.location.reload();
});
document.getElementById('ruleBtn').addEventListener('click', function(){
    document.querySelector('.ruleBox').style.display='flex';
});

document.querySelector('.closeBtn').addEventListener('click', function(){
    document.querySelector('.ruleBox').style.display='none';
});

// document.querySelector('.nextBtn').addEventListener('click', function(){
//     document.querySelector('')
// })