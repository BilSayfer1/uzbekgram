fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => res.json())
  .then((photos) => {
    const itemDivs = document.querySelectorAll('.item');
    itemDivs.forEach((a, b) => {
      const img = a.querySelector('img');
      img.src = photos[b].url; 

      img.style.height = '50px';
      img.style.width = '50px';
      img.style.borderRadius = '50%';
    });
  })




fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json())
.then((texts) => {
    const [commentText1, commentText2] = document.querySelectorAll('.main_Box .gray');
    commentText1.setAttribute('title', texts[0].title);
    commentText2.setAttribute('title', texts[1].title);
  
})
 


const header = document.createElement('header');
const logoImg = document.createElement('img');
logoImg.src = './imgORicons/Logo.png';
logoImg.alt = '';
logoImg.classList.add('logo');
header.appendChild(logoImg);

const form = document.createElement('form');
form.classList.add('formInp');

const inputContainerDiv = document.createElement('div');
inputContainerDiv.classList.add('inputContainer');

const input = document.createElement('input');
input.type = 'text';
input.name = 'search';
input.placeholder = 'Search';
input.classList.add('inpSearch');
inputContainerDiv.appendChild(input);

const searchIconImg = document.createElement('img');
searchIconImg.src = './imgORicons/Search.png';
searchIconImg.alt = 'search-icon';
searchIconImg.classList.add('searchIcon');
inputContainerDiv.appendChild(searchIconImg);

form.appendChild(inputContainerDiv);
header.appendChild(form);

const iconsDiv = document.createElement('div');
iconsDiv.classList.add('icons');

const homeIconImg = document.createElement('img');
homeIconImg.id = 'home';
homeIconImg.src = './imgORicons/home.png';
homeIconImg.alt = '';
iconsDiv.appendChild(homeIconImg);

const iconNames = ['massege', 'interesting', 'like', 'Avatar'];
iconNames.forEach(iconName => {
    const iconImg = document.createElement('img');
    iconImg.src = `./imgORicons/${iconName}.png`;
    iconImg.alt = '';
    iconsDiv.appendChild(iconImg);
});

const peredelanit_iconNames = ['whitemes', 'kompas', 'whiteserdse']

header.appendChild(iconsDiv);

document.body.appendChild(header);

const section = document.createElement('section');
section.classList.add('sect');

const checkDiv = document.createElement('div');
checkDiv.classList.add('check');

const mainBoxDiv = document.createElement('div');
mainBoxDiv.classList.add('main_Box');

const itemNames = [
    "al.safir", "musinjonov_bexruz", "ali_alieev", "m.bobur_official", "t.e.r.a.e.v", "wepro_students",
    "wepro.uz", "sherkulov_03", "xasanlv", "rabbimov_khasan", "shuxi._", "._diiyor", "daler.sharifkulov",
    "tiarkel", "latipov_kama", "konstantin_kuznecov", "shakh.up", "sabiwee", "hello", "goodbye", "whatsup",
    "black", "white", "red", "karol", "koroleva", "shaytan", "xazbik", "ishak", "hayvan", "maymun", "kuchuk",
    "pishak", "induk", "mr.bean", "mr.crazy", "bugatti", "mercedes", "bmw", "camry", "toyota", "lexus",
    "chevrolet", "porsche", "RONALDO", "messi", "matiz", "cobbalt", "nexia", "malibu", "jentra", "TAHOE",
    "lacetti", "monza", "onix", "russkiy", "uzbekskiy", "tojiki", "angliyskiy", "raptor", "ferrari", "cherry",
    "li", "jetour", "byd", "matiz", "jiguli", "banan", "m5f90", "mishka", "klava", "dipfeyker", "fake",
    "bagatata", "lujpik", "balasteyshn", "katiye", "rolex", "gucci", "LV", "nike", "adidas", "ababas", "abbas",
    "adadaos", "aiosdos", "andidas", "jordan", "jopdon", "jopadon", "jorikdon", "jamsheddon", "jakudon",
    "jorabekdon", "jangaldan", "jadirdan"
];

itemNames.forEach(itemName => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const img = document.createElement('img');
    img.src = './imgORicons/storisAvatar.png';
    img.alt = '';
    img.classList.add('itemImg');

    const textNode = document.createTextNode(itemName);
    itemDiv.appendChild(img);
    itemDiv.appendChild(textNode);

    mainBoxDiv.appendChild(itemDiv);
});

const button = document.createElement('button');
button.classList.add('tuda_suda');
button.textContent = '>';

mainBoxDiv.appendChild(button);

checkDiv.appendChild(mainBoxDiv);

section.appendChild(checkDiv);

document.body.appendChild(section);
const main = document.createElement('main');

const headerMainDiv = document.createElement('div');
headerMainDiv.classList.add('header_main');

const glavDiv = document.createElement('div');
glavDiv.classList.add('glav');

const leftDiv = document.createElement('div');
leftDiv.classList.add('left');

const avatarImg = document.createElement('img');
avatarImg.src = './imgORicons/Avatar.png';
avatarImg.alt = '';

leftDiv.appendChild(avatarImg);

const vozleDiv = document.createElement('div');
vozleDiv.classList.add('vozle');

const nicknameH5 = document.createElement('h5');
nicknameH5.textContent = 'nickname';

const cityCountryH4 = document.createElement('h4');
cityCountryH4.textContent = 'City, Country';

vozleDiv.appendChild(nicknameH5);
vozleDiv.appendChild(cityCountryH4);

const rightDiv = document.createElement('div');
rightDiv.classList.add('right');

const moreOptionsB = document.createElement('b');
moreOptionsB.textContent = '···';

rightDiv.appendChild(moreOptionsB);

glavDiv.appendChild(leftDiv);
glavDiv.appendChild(vozleDiv);
glavDiv.appendChild(rightDiv);

const mainImgDiv = document.createElement('div');
mainImgDiv.classList.add('main_img');

const mainImageImg = document.createElement('img');
mainImageImg.src = './imgORicons/me.jpg';
mainImageImg.alt = '';

mainImageImg.ondblclick = () => {
    like.src = "./imgORicons/icons8-сердце-50 (1).png"
    likeCountSpan.innerHTML = '7,777'
}

mainImgDiv.appendChild(mainImageImg);

const otherDiv = document.createElement('div');
otherDiv.classList.add('other');

const leftImgDiv = document.createElement('div');
leftImgDiv.classList.add('left_img');

const likeImg = document.createElement('img');
likeImg.id = 'like';
likeImg.src = './imgORicons/icons8-сердце-50.png';
likeImg.alt = '';

const soobsheniyeImg = document.createElement('img');
soobsheniyeImg.src = './imgORicons/soobsheniye.png';
soobsheniyeImg.alt = '';

const mesageImg = document.createElement('img');
mesageImg.src = './imgORicons/mesage.png';
mesageImg.alt = '';

leftImgDiv.appendChild(likeImg);
leftImgDiv.appendChild(soobsheniyeImg);
leftImgDiv.appendChild(mesageImg);

const rightImgDiv = document.createElement('div');
rightImgDiv.classList.add('right_img');

const izbrannoeImg = document.createElement('img');
izbrannoeImg.src = './imgORicons/izbrannoe.png';
izbrannoeImg.alt = '';

rightImgDiv.appendChild(izbrannoeImg);

otherDiv.appendChild(leftImgDiv);
otherDiv.appendChild(rightImgDiv);

const countLikesDiv = document.createElement('div');
countLikesDiv.classList.add('count_likes');

const likeCountSpan = document.createElement('span');
likeCountSpan.textContent = '7,776';

countLikesDiv.appendChild(likeCountSpan);

const commentDiv1 = document.createElement('div');
const commentSpan1 = document.createElement('span');
commentSpan1.textContent = 'nickname: ';
const commentText1 = document.createElement('b');
commentText1.textContent = 'S A Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus eum cum et beatae facere dolor id quis modi maxime! Asperiores.';
commentDiv1.appendChild(commentSpan1);
commentDiv1.appendChild(commentText1);

const grayDiv1 = document.createElement('div');
grayDiv1.classList.add('gray');
grayDiv1.textContent = 'View all 33 comments';

const commentDiv2 = document.createElement('div');
const commentSpan2 = document.createElement('span');
commentSpan2.textContent = 'nickname: ';
const commentText2 = document.createElement('b');
commentText2.textContent = 'S A Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda quo minus! Velit nostrum earum eos beatae rem quod hic.';
commentDiv2.appendChild(commentSpan2);
commentDiv2.appendChild(commentText2);

const grayDiv2 = document.createElement('div');
grayDiv2.classList.add('gray');
grayDiv2.textContent = '1 HOUR AGO';

const linyaDiv = document.createElement('div');
linyaDiv.classList.add('linya');

const footerDiv = document.createElement('div');
footerDiv.classList.add('footer');

const leftFooterDiv = document.createElement('div');
leftFooterDiv.classList.add('left_footer');

const emojiImg = document.createElement('img');
emojiImg.src = './imgORicons/emoji.png';
emojiImg.alt = '';

leftFooterDiv.appendChild(emojiImg);

const addDiv = document.createElement('div');
addDiv.classList.add('add');

const addSpan = document.createElement('span');
addSpan.textContent = 'Add a comment...';

addDiv.appendChild(addSpan);

const rightFooterDiv = document.createElement('div');
rightFooterDiv.classList.add('right_footer');

const postButton = document.createElement('button');
postButton.innerHTML = '<b>Post</b>';

rightFooterDiv.appendChild(postButton);

headerMainDiv.appendChild(glavDiv);
headerMainDiv.appendChild(mainImgDiv);
headerMainDiv.appendChild(otherDiv);
headerMainDiv.appendChild(countLikesDiv);
headerMainDiv.appendChild(commentDiv1);
headerMainDiv.appendChild(grayDiv1);
headerMainDiv.appendChild(commentDiv2);
headerMainDiv.appendChild(grayDiv2);
headerMainDiv.appendChild(linyaDiv);
headerMainDiv.appendChild(footerDiv);
footerDiv.appendChild(leftFooterDiv);
footerDiv.appendChild(addDiv);
footerDiv.appendChild(rightFooterDiv);

main.appendChild(headerMainDiv);

const mainSpravaDiv = document.createElement('div');
mainSpravaDiv.classList.add('main_sprava');

const meDiv = document.createElement('div');
meDiv.classList.add('me');

const leftMeDiv = document.createElement('div');
leftMeDiv.classList.add('left_me');

const avatarMeImg = document.createElement('img');
avatarMeImg.src = './imgORicons/Avatar.png';
avatarMeImg.alt = '';

leftMeDiv.appendChild(avatarMeImg);

const nickMeDiv = document.createElement('div');
nickMeDiv.classList.add('nick_me');

const nickMeH4 = document.createElement('h4');
nickMeH4.textContent = '_al.safir_';

const nameMeH5 = document.createElement('h5');
nameMeH5.textContent = 'Al Safir Bozorov';

nickMeDiv.appendChild(nickMeH4);
nickMeDiv.appendChild(nameMeH5);

const rightMeDiv = document.createElement('div');
rightMeDiv.classList.add('right_me');

const switchButton = document.createElement('button');
switchButton.textContent = 'Switch';

rightMeDiv.appendChild(switchButton);

meDiv.appendChild(leftMeDiv);
meDiv.appendChild(nickMeDiv);
meDiv.appendChild(rightMeDiv);

const sugestionsDiv = document.createElement('div');
sugestionsDiv.classList.add('sugestions');

const leftSugestionsDiv = document.createElement('div');
leftSugestionsDiv.classList.add('left_sugestions');
leftSugestionsDiv.textContent = 'Suggestions for you';

const seeAllDiv = document.createElement('div');
seeAllDiv.classList.add('see_all');
seeAllDiv.innerHTML = '<b>See All</b>';

sugestionsDiv.appendChild(leftSugestionsDiv);
sugestionsDiv.appendChild(seeAllDiv);

const itemBrbrDiv = document.createElement('div');
itemBrbrDiv.classList.add('item_brbr');

for (let i = 0; i < 5; i++) {
    const itemNickDiv = document.createElement('div');
    itemNickDiv.classList.add('item_nick');

    const itemImgDiv = document.createElement('div');
    itemImgDiv.classList.add('item_img');

    const avatarItemImg = document.createElement('img');
    avatarItemImg.src = './imgORicons/Avatar.png';
    avatarItemImg.alt = '';

    fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => res.json())
  .then((photos_dbl) => {
    const avatar_item_img = document.querySelectorAll('img')
avatar_item_img.forEach((a, b) => {
    const image = a.querySelector('img');
    image.src = photos_dbl[b].url; 

    image.style.height = '50px';
    image.style.width = '50px';
    image.style.borderRadius = '50%';
})
})



    itemImgDiv.appendChild(avatarItemImg);

    const nicknameItemDiv = document.createElement('div');
    nicknameItemDiv.classList.add('nickname_item');

    const nickH4 = document.createElement('h4');
    nickH4.textContent = 'nickname';

    const suggestionH5 = document.createElement('h5');
    suggestionH5.textContent = 'Suggestions for you';

    nicknameItemDiv.appendChild(nickH4);
    nicknameItemDiv.appendChild(suggestionH5);

    const itemBtnDiv = document.createElement('div');
    itemBtnDiv.classList.add('item_btn');

    for (let i = 0; i < 1; i++) {
        const followButton = document.createElement('button'); 
        followButton.textContent = 'Follow'; 
    
        followButton.onclick = () => {
            followButton.textContent = "Followed";
            followButton.style.color = 'green';
        };
        followButton.ondblclick = () => {
            followButton.textContent = "Follow";
            followButton.style.color = 'blue';
        }
        
    
        itemBtnDiv.appendChild(followButton); 
    }

    itemNickDiv.appendChild(itemImgDiv);
    itemNickDiv.appendChild(nicknameItemDiv);
    itemNickDiv.appendChild(itemBtnDiv);

    itemBrbrDiv.appendChild(itemNickDiv);
}

mainSpravaDiv.appendChild(meDiv);
mainSpravaDiv.appendChild(sugestionsDiv);
mainSpravaDiv.appendChild(itemBrbrDiv);

main.appendChild(mainSpravaDiv);

document.body.appendChild(main);

let tudaSudaButton = document.querySelector('.tuda_suda');



function removeItems() {

    let itemsToRemove = document.querySelectorAll('.item');
    let item_count = 8
    for (let i = 0; i < item_count; i++) {
        if (itemsToRemove.length > 0) {
            itemsToRemove[i].remove()
        } else {
            break;
        }
    }


}

tudaSudaButton.onclick = () => {
    removeItems()
}

like.ondblclick = () => {
    like.src = "./imgORicons/icons8-сердце-50 (1).png"
    likeCountSpan.innerHTML = '7,777'
}
like.onclick = () => {
    like.src = "./imgORicons/icons8-сердце-50.png"
    likeCountSpan.innerHTML = '7,776'

}


izbrannoeImg.ondblclick = () => {
    izbrannoeImg.src = "./imgORicons/yel.png"
}
izbrannoeImg.onclick = () => {
    izbrannoeImg.src = "./imgORicons/izbrannoe.png"
}
const buttons = document.querySelectorAll('button');

homeIconImg.ondblclick = () => {
    const header = document.querySelector('header');
    const logoImg = document.querySelector('.logo');
    const homeIconImg = document.getElementById('home');
    const peredelanit_iconNames = ['whitemes', 'kompas', 'whiteserdse'];

    header.style.backgroundColor = "black";
    logoImg.src = "./imgORicons/logo_white.png";
    homeIconImg.src = './imgORicons/whitehom.png';
    document.body.style.color = "white";
    document.body.style.backgroundColor = " rgb(19, 19, 19)"
    button.style.backgroundColor = "rgb(19, 19, 19)"
    peredelanit_iconNames.forEach(peredelka => {
        const peredelka_icon = document.createElement('img');
        peredelka_icon.src = `./imgORicons/${peredelka}.png`;
        button.style.background = "none"
        checkDiv.style.backgroundColor = "rgb(19, 19, 19)"

        buttons.forEach(button => {
            button.style.backgroundColor = 'rgb(19, 19, 19)';
        });
    });
};


homeIconImg.onclick = () => {
    homeIconImg.src = "./imgORicons/home.png"
    header.style.backgroundColor = "white"
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white"
    buttons.forEach(button => {
        button.style.backgroundColor = 'white';
    });
    button.style.background = "none"
    checkDiv.style.backgroundColor = "rgb(241, 241, 241)"


}

followButton.onclick = () => {
    followButton.text = "Followed"
    followButton.style.color = 'green'
}

