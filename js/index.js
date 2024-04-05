let input = document.getElementById("search")
let gitForm = document.getElementById("github-form")
let firstList = document.getElementById("user-list")
let secondList = document.getElementById("repos-list")


gitForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let li = document.createElement( "h1" )
    firstList.appendChild( li ); 
     
    const value = input.value
    const baseURL = 'https://api.github.com/search/users?q='
    fetch(`${baseURL} ${value}`)
    .then(response => response.json())
    .then(data => {
        data.items.forEach(user => {
            const li = document.createElement('h2');
            const link = document.createElement('a')
            link.href =  user.html_url;
            link.textContent = "view profile"
            
            let img = document.createElement("img");
             img.src = user.avatar_url
            li.textContent = `${user.login} `
            
            firstList.appendChild(li);
            firstList.appendChild(img) 
            firstList.appendChild(link)
            

          })
    })
    
    input.value = ''
})


  