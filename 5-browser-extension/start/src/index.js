import axios from '../node_modules/axios'

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
async function displayCarbonUsage(apiKey, region) {
    try {
        await axios
        .get('https://api.co2signal.com/v1/latest', {
            params: {
                countryCode: region,
            },
            headers: {
                'auth-token': apiKey,
            },
        })
        .then((response) => {
            let CO2 = Math.floor(response.data.data.carbonIntensity);

            // calculateColor(CO2);

            loading.style.display = 'none';
            form.style.display = 'none';
            myRegion.textContent = region;
            usage.textContent = 
                Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
            fossilFuel.textContent = 
                response.data.data.fossilFuelPercentage.toFixed(2) +
                '% (percentage of fossil fuels used to generate electricity)';
            results.style.display = 'block';
        });
    } catch (error) {
        console.log(error);
        loading.style.display = 'none';
        results.style.display = 'none';
        errors.textContent = 'Sorry, we have no data for the region you have requested.';
    }
}

//5
//set up user's api key and region
function setUpUser(apiKey, regionName) {
    localStorage.setItem('apiKey', apiKey);
    localStorage.setItem('regionName', regionName);
    loading.style.display = 'block';
    errors.textContent = '';
    clearBtn.style.display = 'block';
    // 建立初始化呼叫
    displayCarbonUsage(apiKey, regionName);
}

//4
// handle form submission
function handleSubmit(e) {
    e.preventDefault();
    setUpUser(apiKey.ariaValueMax, region.value);
}

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