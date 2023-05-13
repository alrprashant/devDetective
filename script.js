// let userName="loveBabbar";
// getGitUser(userName);

const wrapper=document.querySelector(".wrapper");
const info=document.querySelector(".infobox");

const userMode=document.querySelector(".modeBtn");
const modeText=document.querySelector(".mode");
const modeIcon=document.querySelector("#mode-icon");

userMode.addEventListener("click",()=>{
    if(modeText.innerText==="DARK"){
        modeText.innerText="LIGHT";
        modeText.classList.add("text-white");
        modeIcon.src="./assets/images/sun-icon.svg";
        document.body.style.background="black";
        
        wrapper.classList.remove("bg-slate-100")
        wrapper.classList.add("bg-black");
       
        info.classList.remove("bg-slate-200");
        info.classList.add("bg-blue-950");
        info.classList.add("text-white");

        

    }
    else{
        modeText.innerText="DARK";
        modeText.classList.remove("text-white");
        modeIcon.src="./assets/images/moon-icon.svg";
        document.body.style.background="rgb(241 245 249)";
        wrapper.classList.remove("bg-black");
        
        wrapper.classList.add("bg-slate-100");
        info.classList.remove("bg-blue-950");
        info.classList.remove("text-white");
        info.classList.add("bg-slate-200");

    }
})

const searchInput = document.querySelector("[data-searchInput]");
const searchBtn=document.querySelector("[data-searchBtn]");

let userName=searchInput.value;
searchBtn.addEventListener("click",()=>{
    if (searchInput.value !== "") {
    getGitUser(userName);}
    
});

const noResult=document.querySelector("#no-results")
async function getGitUser(userName){
    try{
        const response =await fetch(`https://api.github.com/users/${userName}`);
        const data=await response.json();
        showUi(data);
        console.log(data);



    }
    catch(e){
        noResult.classList.remove("opacity-0");
    }
}


function showUi(data){
  if(data.message !=="Not Found"){
    info.classList.remove("opacity-0")
    

    



    const profilePic=document.querySelector(".icon");
    profilePic.src=data?.avatar_url;

    const name=document.querySelector(".name");
    name.innerText=data.name === null ? data.login : data.name;
    // here we r using Ternary Operator in case of data.name is null it will show login value in name.innerText otherwise it will show value of name in name 's innerText
    const joiningDate=document.querySelector(".joiningdate");
    joiningDate.innerText=`Joined${data?.created_at}`;
    const userId=document.querySelector(".user-name");
    userId.innerText=`@${data?.login}`;
    user.href = `${data.html_url}`;
    const userBio=document.querySelector(".bio");
    userBio.innerText=data.bio == null ? "This profile has no bio" : `${data.bio}`;
    const userRepos=document.querySelector(".repos");
    userRepos.innerText=data?.public_repos;
    const userFollowers=document.querySelector(".followers");
    userFollowers.innerText=data?.followers;
    const userFollowing=document.querySelector(".following");
    userFollowing.innerText=data?.following;
    const userLocation =document.querySelector(".location");
    userLocation.innerText=data?.location;
    const bioLink=document.querySelector(".biolink");
    bioLink.innerText=data?.html_url;
    const twitterLink=document.querySelector(".twitter");
    twitterLink.innerText=data?.twitter_username;
    const companies=document.querySelector(".comapnies");
    companies.innerText=data?.company;



    
    



  }
  else{
    noResult.classList.remove("opacity-0");
  }
}





 




