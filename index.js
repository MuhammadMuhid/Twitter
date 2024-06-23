const mainpage = document.querySelector('.main-page');
const loginpage = document.querySelector('.login-page');
const middlecontent = document.querySelector('.middle-content');
const feedpage = document.querySelector('.feed-page')
const loginform = document.querySelector('.login-content')

const gotologinpage = () => {
    mainpage.style.display = 'none';
    loginpage.style.display = 'grid';
    feedpage.style.display = 'none';

};
middlecontent.addEventListener('click', e => {
    if (e.target.classList[1] === 'main-btn') {
        gotologinpage();
    }
});

const gotofeedpage = () => {
    mainpage.style.display = 'none';
    loginpage.style.display = 'none';
    feedpage.style.display = 'grid';
}

loginform.addEventListener('click', e => {
    if (e.target.classList[0] === 'login-btn') {
        gotofeedpage();
    }
});
