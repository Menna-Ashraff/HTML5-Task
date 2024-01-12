window.onload = function() 
{
    loadUsers()
}

document.getElementById('userForm').addEventListener('submit', function(e) 
{
    e.preventDefault()
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value

    if (username && email) 
    {
        const user = { username, email }
        addUser(user)
        loadUsers()
        document.getElementById('userForm').reset()
    } 
    else 
    {
        alert('Please fill out all fields.')
    }
})

function addUser(user) 
{
    let users = JSON.parse(localStorage.getItem('users') || '[]')
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))
}

function loadUsers() 
{
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const tableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0]
    tableBody.innerHTML = ''
    users.forEach(user => 
        {
        const row = tableBody.insertRow()
        const cell1 = row.insertCell(0)
        const cell2 = row.insertCell(1)
        const cell3 = row.insertCell(2)
        cell1.innerHTML = user.username
        cell2.innerHTML = user.email
        cell3.innerHTML = `<button onclick="deleteUser('${user.email}')">Delete</button>`
    })
}

function deleteUser(email) 
{
    let users = JSON.parse(localStorage.getItem('users') || '[]')
    users = users.filter(user => user.email !== email)
    localStorage.setItem('users', JSON.stringify(users))
    loadUsers()
}

function removeAllUsers() 
{
    localStorage.removeItem('users')
    loadUsers()
}
