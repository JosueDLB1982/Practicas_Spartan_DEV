/* 
const ordenarMayorMenor = (arr) => {
    if ((arr[0] > arr[1]) && (arr[0] > arr[2])) {
        if (arr[1] > arr[2]) {
            return Array(arr[0], arr[1], arr[2])
        } else {
            return Array(arr[0], arr[2], arr[1])
        }
    } else if ((arr[1] > arr[0]) && (arr[1] > arr[2])) {
        if (arr[0] > arr[2]) {
            return Array(arr[1], arr[0], arr[2])
        } else {
            return Array(arr[0], arr[2], arr[1])
        }
    } else {
        if(arr[0] > arr[1]) {
            return Array(arr[2], arr[0], arr[1])
        } else {
            return Array(arr[2], arr[1], arr[0])
        }
    }
}
console.log(ordenarMayorMenor([15, 1, 3]))

console.log()
console.log(err) console.log()
const sort = (arr) => {
    return arr.sort((a,b) => b - a)
}
console.log(sort([15, 1, 3])) */

const users = [
    {
        name: 'Josue',
        id: 1
    },

    {
        name: 'Ender',
        id: 2
    },
    {
        name: 'Gorge',
        id: 3
    }
]

const emails = [
    {
        id: 2,
        email: 'sanchender1282@gmail.com'
    },
    {
        id: 3,
        email: 'gorgenavarro3000@gmail.com'
    }
]

const getUser = (id, cb) => {
    const user = users.find(user => user.id === id)
    return (!user) ? cb(`No existe un usuario con el id ${id}`) : cb(null, user)
}

const getEmail = (users, cb) => {
    const email = emails.find(email => email.id === users.id)
    return (!email) ? cb(`${users.name} tiene el id: ${users.id} pero no tiene email registrado`) : cb(null, /* {id: users.id, name: users.name, email: email.email } */`id de usuario: ${users.id}, nombre: ${users.name} y su email es: ${email.email}`)
}

console.log(getUser(3, (err, user) => {
    return err ? err : getEmail(user, (err, res) => {
       return err ? err : res
    })
}))