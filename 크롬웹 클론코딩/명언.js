const quotes = [
    {quote: "별은 바라보는 자에게 빛을 준다" ,
    author : "라자"},
    {quote: "낭비 없는 낭만은 없다" ,
    author : "금강선"},
    {quote: "영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라" ,
    author : "제임스틴"},
    {quote: "헛소문도 많이 들으면 진실이 된다" ,
    author : "개리 마커스"},
    {quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다" ,
    author : "괴테"},
    {quote: "이 또한 지나가리라" ,
    author : "미드라시"},
    {quote: "기회는 새와 같다. 날아가기전에 꽉 잡아라" ,
    author : "쉴러"},
    {quote: "삶이 있는한 희망은 있다" ,
    author : "키케로"},
    {quote: "신은 용기있는자를 결코 버리지 않는다" ,
    author : "켄러"},
    {quote: "피할수 없으면 즐겨라" ,
    author : "엘리엇"}
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.round(Math.random()*(quotes.length-1))];

quote.innerHTML = randomQuote.quote+ "&nbsp"+ "&nbsp"+ "&nbsp";
author.innerHTML = randomQuote.author;

