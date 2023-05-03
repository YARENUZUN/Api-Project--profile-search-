class Profile {
    constructor() {
        this.clientid = '',
        this.cliendSecret =''
    }

    async getProfile(username) {

        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
        const profile = profileResponse.json();

        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`);
        const todo = todoResponse.json();

        return {
            profile,
            todo

            // profile : profile (ya da bunu deriz)
        }
    }
}