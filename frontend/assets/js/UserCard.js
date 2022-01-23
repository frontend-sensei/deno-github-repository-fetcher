class UserCard {
    constructor(selector) {
        this.card = document.querySelector(selector)
    }
    render(data) {
        if(!data) {
            this.renderEmpty()
            return this
        }
        const blog = data.blog ? data.blog : ''
        const bio = data.bio ? data.bio : ''
        this.card.innerHTML = `
            <h3>${data.name}</h3>
            <img src="${data.avatar_url}" alt="user" width="100">
            <span></span>
            <span>BIO: ${bio}</span>
            <hr>
            <div>
                blog:
                <a href="${blog}">${blog}</a>
            </div>
            <p>location: ${data.location}</p>
            <p>
                Created: ${new Date(data.created_at).toISOString().split('T')[0]} 
            </p>
        `

        return this
    }
    renderEmpty() {
        this.card.innerHTML = ''

        return this
    }
}
