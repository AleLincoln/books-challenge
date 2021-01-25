function loadBooks(myjson){
    const ul = document.createElement('ul');

    myjson.forEach((item) => {
        let li = document.createElement('li')
        let author = document.createElement('h4')
        author.innerHTML = item.author
        let title = document.createElement('h3')
        title.innerHTML = item.title
        let publisher = document.createElement('h2')
        publisher.innerHTML = item.publisher

        li.appendChild(author)
        li.appendChild(title)
        li.appendChild(publisher)
        ul.appendChild(li)
    })


}
