const form = document.getElementById('form')

const repositoryList = new RepositoryList('#repository_list')
const userCard = new UserCard('#user')

async function submitHandler(event) {
    event.preventDefault()
    const userName = document.getElementById('userName').value
    const user = new User(userName)

    await user.getInfo()
    await user.getRepositories()

    userCard.render(user.info)
    repositoryList.render(user.repositories)
}

form.addEventListener('submit', submitHandler)

