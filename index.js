const CLIENT_ID = 'aaea19153f6e1b12cd27';

const CLIENT_SECRET = '96743b8d5e5057f7de84386c4c898cc8c5e56abb'

async function getUser(name) {
    const res = await fetch(`https://api.github.com/users/${name}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);

    const profile = await res.json();

    return profile;
}

document.querySelector('#search').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.querySelector('#findByUsername').value;

    console.log(username);

    const profile = await getUser(username);

    console.log(profile);

})