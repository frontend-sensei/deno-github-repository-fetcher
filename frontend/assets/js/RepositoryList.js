class RepositoryList {
    constructor(selector) {
        this.list = document.querySelector(selector)
    }
    render(repositories = []) {
        this.renderEmpty()

        if(!repositories.length) {
            return this
        }

        repositories.forEach(repository => {
            this.list.append(this.createListItem(repository))
        })

        return this
    }
    renderEmpty() {
        this.list.innerHTML = ''

        return this
    }
    createListItem(data = {}) {
        let listItem = document.createElement('li')
        listItem.classList = 'list__item'
        listItem.innerHTML = `
            <div class="d-flex justify-between items-center">
                <h4>
                    <a href="${data.html_url}" target="_blank">${data.full_name}</a>
                </h4>
                <div>
                    Stars: ${data.stargazers_count} 
                </div>
            </div>
            <p>Description</p>
            <p>${data.description ? data.description : '-'}</p>

            <div class="d-flex justify-between items-center">
                <small>Language: ${data.language ? data.language : '-'}</small>
                <small>Created: ${ new Date(data.created_at).toISOString().split('T')[0] } </small>
            </div>
        `
        return listItem
    }
}
