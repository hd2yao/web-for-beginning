//1
// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');
// results divs
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilFuel = document.querySelector('.fossil-fuel');
const myRegion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');

//6
//call the API

//5
//set up user's api key and region

//4
// handle form submission

//3 initial checks
function init() {
    // 如果任何东西存在 localStorage 中，取出来
    const storedApiKey = localStorage.getItem('apiKey');
    const storedRegion = localStorage.getItem('regionName');

    // 设定 icon 为通用绿色
    // todo

    if (storedApiKey === null || storedRegion === null) {
        // 如果没有 keys，显示表单
        form.style.display = 'block';
        results.style.display = 'none';
        loading.style.display = 'none';
        clearBtn.style.display = 'none';
        errors.textContent = '';
    } else {
        // localStorage 有 saved keys/regions，显示结果
        displayCarbonUsage(storedApiKey, storedRegion);
        results.style.display = 'none';
        form.style.display = 'none';
        clearBtn.style.display = 'block';
    }
};

function reset(e) {
    e.preventDefault();
    // 只清除 local storage 国家区域代码
    localStorage.removeItem('regionName');
    init();
}

//2
// set listeners and start app
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();