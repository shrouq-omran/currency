let btn=document.getElementById("btn");
let p=document.getElementById("result");
let one=document.getElementById("option");
let tow=document.getElementById("option2");
let Amount=document.getElementById("Amount");


const currencies = [
    "USD",
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTN",
    "BWP",
    "BYN",
    "BZD",
    "CAD",
    "CDF",
    "CHF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "FOK",
    "GBP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "IMP",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JEP",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KID",
    "KMF",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLE",
    "SLE", // Duplicate entry for Sierra Leone
    "SOS",
    "SRD",
    "SSP",
    "STN",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TVD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "UYU",
    "UZS",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XCD",
    "XDR",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL"
];
let rates = {};  

async function url() {
    try {
        let res = await fetch("https://v6.exchangerate-api.com/v6/ef8a0a58f0cfa90f3cc5af56/latest/USD");
        let data = await res.json();  

        if (data && data.conversion_rates) {
            rates = data.conversion_rates;  
            console.log(rates);  
        } else {
            console.error("Failed to load exchange rates.");
        }
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
    }
}
url();
    url()
    btn.addEventListener("click",()=>{
        let fromCurrency = one.value;
        let toCurrency = tow.value;
        let amountValue = parseFloat(Amount.value);
        if (isNaN(amountValue)) {
            document.getElementById("result").innerHTML = "Please enter a valid amount.";
        } else if (rates[fromCurrency] && rates[toCurrency]) { // التأكد من وجود أسعار الصرف
            let convertedAmount = (amountValue / rates[fromCurrency]) * rates[toCurrency]; // حساب المبلغ المحول
            document.getElementById("result").innerHTML = `${amountValue} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}.`;
        } else {
            p.textContent = "Exchange rates are not available. Please try again later.";
        }
    });
    
    
