document.addEventListener('DOMContentLoaded', () => {


// 【图片配置区域：img为主图，table为悬停显示的表格】

const contentData = {

"Blue": [

{ img: "IMG2.PNG", table: "archive form_02.png" },

{ img: "IMG4.PNG", table: "archive form_04.png" },

{ img: "IMG5.PNG", table: "archive form_05.png" },

{ img: "IMG6.PNG", table: "archive form_06.png" },

{ img: "IMG7.PNG", table: "archive form_07.png" },

{ img: "IMG8.PNG", table: "archive form_08.png" },

{ img: "IMG9.PNG", table: "archive form_09.png" },

{ img: "IMG10.PNG", table: "archive form_10.png" },

{ img: "IMG11.PNG", table: "archive form_11.png" },

{ img: "IMG15.PNG", table: "archive form_15.png" },

{ img: "IMG17.PNG", table: "archive form_17.png" },

{ img: "IMG18.PNG", table: "archive form_18.png" },

{ img: "IMG19.PNG", table: "archive form_19.png" },

{ img: "IMG20.PNG", table: "archive form_20.png" },

{ img: "IMG22.PNG", table: "archive form_22.png" },

{ img: "IMG23.PNG", table: "archive form_23.png" },

{ img: "IMG24.PNG", table: "archive form_24.png" },

{ img: "IMG28.PNG", table: "archive form_28.png" },

{ img: "IMG29.PNG", table: "archive form_29.png" },

{ img: "IMG31.PNG", table: "archive form_31.png" },


],

"BW": [{ img: "IMG1.PNG", table: "archive form_01.png" },

{ img: "IMG12.PNG", table: "archive form_12.png" },

{ img: "IMG13.PNG", table: "archive form_13.png" },

{ img: "IMG14.PNG", table: "archive form_14.png" },

{ img: "IMG16.PNG", table: "archive form_16.png" },

{ img: "IMG21.PNG", table: "archive form_21.png" },

{ img: "IMG25.PNG", table: "archive form_25.png" },

{ img: "IMG26.PNG", table: "archive form_26.png" },

{ img: "IMG27.PNG", table: "archive form_27.png" },

{ img: "IMG30.PNG", table: "archive form_30.png" },

{ img: "IMG32.PNG", table: "archive form_32.png" },

{ img: "IMG33.PNG", table: "archive form_33.png" },

{ img: "IMG34.PNG", table: "archive form_34.png" },

{ img: "IMG35.PNG", table: "archive form_35.png" },

{ img: "IMG36.PNG", table: "archive form_36.png" },

{ img: "IMG37.PNG", table: "archive form_37.png" },





],

"Sketch": [

{ img: "IMG2.PNG", table: "archive form_02.png" },

{ img: "IMG1.PNG", table: "archive form_01.png" },

{ img: "IMG3.PNG", table: "archive form_03.png" },

{ img: "IMG10.PNG", table: "archive form_10.png" },

{ img: "IMG14.PNG", table: "archive form_14.png" },

{ img: "IMG19.PNG", table: "archive form_19.png" },

{ img: "IMG21.PNG", table: "archive form_21.png" },

{ img: "IMG23.PNG", table: "archive form_23.png" },

{ img: "IMG24.PNG", table: "archive form_24.png" },

{ img: "IMG25.PNG", table: "archive form_25.png" },

{ img: "IMG26.PNG", table: "archive form_26.png" },

],

"Silhouette": [{ img: "IMG5.PNG", table: "archive form_05.png" },

{ img: "IMG9.PNG", table: "archive form_09.png" },

{ img: "IMG15.PNG", table: "archive form_15.png" },

{ img: "IMG16.PNG", table: "archive form_16.png" },

{ img: "IMG27.PNG", table: "archive form_27.png" },

{ img: "IMG30.PNG", table: "archive form_30.png" },

{ img: "IMG31.PNG", table: "archive form_31.png" },

{ img: "IMG33.PNG", table: "archive form_33.png" },

{ img: "IMG35.PNG", table: "archive form_35.png" },

{ img: "IMG37.PNG", table: "archive form_37.png" },




],

"Printing": [

{ img: "IMG4.PNG", table: "archive form_04.png" },

{ img: "IMG6.PNG", table: "archive form_06.png" },

{ img: "IMG7.PNG", table: "archive form_07.png" },

{ img: "IMG8.PNG", table: "archive form_08.png" },

{ img: "IMG11.PNG", table: "archive form_11.png" },

{ img: "IMG12.PNG", table: "archive form_12.png" },

{ img: "IMG13.PNG", table: "archive form_13.png" },

{ img: "IMG17.PNG", table: "archive form_17.png" },

{ img: "IMG18.PNG", table: "archive form_18.png" },

{ img: "IMG20.PNG", table: "archive form_20.png" },

{ img: "IMG22.PNG", table: "archive form_22.png" },

{ img: "IMG28.PNG", table: "archive form_28.png" },

{ img: "IMG29.PNG", table: "archive form_29.png" },

{ img: "IMG32.PNG", table: "archive form_32.png" },

{ img: "IMG34.PNG", table: "archive form_34.png" },

{ img: "IMG36.PNG", table: "archive form_36.png" },





]

};



const container = document.getElementById('bookContainer');

const introView = document.getElementById('introView');

const categoryView = document.getElementById('categoryView');

const fullGrid = document.getElementById('fullGalleryGrid');

const sideNav = document.getElementById('sideNav');

const backBtn = document.getElementById('backBtn');

const flipOverlay = document.getElementById('pageFlipOverlay');

const navBtns = document.querySelectorAll('.nav-btn');



let currentState = "HOME";



// 状态 0 -> 1 (封面翻开)

document.getElementById('cover').addEventListener('click', () => {

if (currentState === "HOME") {

container.classList.add('active');

currentState = "INTRO";

setTimeout(() => {

sideNav.classList.add('visible');

backBtn.classList.add('visible');

}, 800);

}

});



// 状态 1 -> 2 (分类翻页)

navBtns.forEach(btn => {

btn.addEventListener('click', (e) => {

e.stopPropagation();

const category = btn.getAttribute('data-category');


flipOverlay.style.display = 'block';

flipOverlay.style.animation = 'pageFlip 0.8s ease-in-out forwards';


setTimeout(() => {

renderCategory(category);

introView.style.display = "none";

categoryView.style.display = "flex";

currentState = "CATEGORY";

setTimeout(() => {

flipOverlay.style.display = 'none';

flipOverlay.style.animation = '';

}, 100);

}, 400);



navBtns.forEach(b => b.classList.remove('active'));

btn.classList.add('active');

});

});



// 返回逻辑

backBtn.addEventListener('click', (e) => {

e.stopPropagation();

if (currentState === "CATEGORY") {

flipOverlay.style.display = 'block';

flipOverlay.style.animation = 'pageFlip 0.8s ease-in-out reverse forwards';

setTimeout(() => {

categoryView.style.display = "none";

introView.style.display = "flex";

currentState = "INTRO";

navBtns.forEach(b => b.classList.remove('active'));

setTimeout(() => {

flipOverlay.style.display = 'none';

flipOverlay.style.animation = '';

}, 100);

}, 400);

} else if (currentState === "INTRO") {

container.classList.remove('active');

sideNav.classList.remove('visible');

backBtn.classList.remove('visible');

currentState = "HOME";

}

});



// --- 修改前 (固定的12个框) ---
// for(let i=0; i<12; i++) { ... }

// --- 修改后 (动态生成，有多少图就生多少框) ---
function renderCategory(cat) {
    fullGrid.innerHTML = ''; 
    const data = contentData[cat] || [];
    
    data.forEach(item => { // 重点：改为遍历整个数组
        const itemDiv = document.createElement('div');
        itemDiv.className = 'gallery-item';
        // 保持内部 HTML 不变
        itemDiv.innerHTML = `<img src="${item.img}" class="main-img"><div class="table-overlay"><img src="${item.table}"></div>`;
        fullGrid.appendChild(itemDiv);
    });
}

}

);

