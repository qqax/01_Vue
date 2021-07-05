function Tab(tabData, i) {
    return `<li class="tab-link_tab" id="${i}"><span></span>${tabData.name}</li>`;
}

function TabList(tabs) {
    return `<ul>
                ${tabs.map((el, i) => Tab(el, i)).join('')}
            </ul>`
}

let tabs = [
    {
        name: 'gitHub',
        contentLink: 'https://github.com/qaxx',
        contentLinkText: '@github/qaxx',
        contentText: 'Saw my projects'
    },
    {
        name: 'email',
        contentLink: 'alar0@yahoo.com',
        contentLinkText: 'alar0@yahoo.com',
        contentText: 'Your offers'
    },
    {
        name: 'skype',
        contentLink: '+79060646065',
        contentLinkText: '+79060646065',
        contentText: 'Call me'
    },

];

$('.tabs_container')[0].innerHTML = TabList(tabs);

function TabContent(tab) {
    return `<div class="tabs_content_container" style="display: block">
                <a href="${tab.contentLink}" target="_blank">${tab.contentLinkText}</a>
                <p>${tab.contentText}</p>
            </div>`;
}

const tabLinkTabs = $('.tab-link_tab');

tabLinkTabs.on('click', function () {
    for (let tab of tabLinkTabs) {
        tab.classList.remove('active_tab-link');
    }

    this.classList.add('active_tab-link');
    $('.tab-content_wrapper')[0].innerHTML = TabContent(tabs[+this.id])
})

// const tabLinkTabs = document.querySelectorAll('.tab-link_tab');
// const tabsContainer = document.querySelector('.tabs_container');
// const wrapper = document.querySelector('.tab-content_wrapper');
//
// tabsContainer.addEventListener('mouseover', function (evt) {
//     let target = evt.target;
//     let id = evt.target.id;
//     if (target.className === 'tab-link_tab') {
//
//         tabLinkTabs.forEach((tab) => {
//             tab.classList.remove('active_tab-link');
//         });
//
//         wrapper.innerHTML = TabContent(tabs[+id]);
//         target.classList.add('active_tab-link');
//     }
// });

// $('.tabs_container>ul>li').hover((e) => {
//     $(e.target)
//         .addClass('active_tab-link')
//         .siblings()
//         .removeClass('active_tab-link')
//         .closest('.contacts_block')
//         .find('div.tabs_content_container')
//         .removeClass('active_tab-content')
//         .eq($(e.target).index())
//         .addClass('active_tab-content')
// });