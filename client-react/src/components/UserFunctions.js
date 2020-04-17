import axios from 'axios';

export const signup = newUser => {
    let url = "http://localhost:3001/users/signup/";
    return axios.post(url, {
        fName: newUser.fName,
        lName: newUser.lName,
        phone: newUser.phone,
        email: newUser.email,
        password: newUser.password
    }).then(res => {
        console.log("Registered")
    }).then(res => {
        if(res) {
            this.props.history.push('/login')
        }
    })
}

export const login = user => {
    let url = "http://localhost:3001/users/login/";
    return axios.post(url, {
        email: user.email,
        password: user.password
    }).then(res => {
        localStorage.setItem('usertoken', res.data)
        return res.data
    }).catch(err => {
        console.log(err)
    })
    }

    export const createTicket = newTicket => {
        let url = "http://localhost:3001/tickets/createTicket/";
        return axios.post(url, {
            category: newTicket.category,
            subCategory: newTicket.subCategory,
            priority: newTicket.priority,
            access: newTicket.access,
            note: newTicket.note
        }).then(res => {
            if(res) {
                this.props.history.push('/tenantProfile');
                console.log("Ticket Created");
            }
            
        }).then(res => {
            // if(res) {
            //     this.props.history.push('/tenantProfile')
            // }
        })
    }  