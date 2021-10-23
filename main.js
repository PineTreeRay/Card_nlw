const links = {
    youtube: "maykbrito",
    instagram: "pine_tree_ray",
    facebook: "maykbrito",
    witter: "pine_tree_ray",
    github: "PineTreeRay"
}
    
function changeSocialMediaLinks () {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
         li.children[0].href = `https://www.${social}.com/${links[social]}`
         //alert(li.children[0].href)
       }
    }
    
changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url =`https://api.github.com/users/${links.github}`
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.href = data.html_url
            userIcon.src = data.avatar_url
            userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()



      
      