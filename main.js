"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var cheerio = require("cheerio");
var fs = require("fs");
var Twitter = require("twitter-lite");
// provide your own config with keys
// comment this section out if you don't have keys and
// and you just want to scrape Coingecko
var Config = require("./config");
// setup client
// comment this section out if you don't have keys and
// and you just want to scrape Coingecko
var client = new Twitter({
    consumer_key: Config.consumer_key,
    consumer_secret: Config.consumer_secret,
    access_token_key: Config.access_token_key,
    access_token_secret: Config.access_token_secret
});
// make a new tweet
function newTweet(coinData) {
    return __awaiter(this, void 0, void 0, function () {
        var tweet;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tweet = "New Coingecko Listing!\n" +
                        coinData.name + " / $" + coinData.ticker +
                        "\n\nPrice: " + coinData.price +
                        "\n1h Change: " + coinData.hour +
                        "\n24h Change: " + coinData.day +
                        "\n24h Volume: " + coinData.volume +
                        "\n\n" + coinData.url;
                    // post the tweet
                    return [4 /*yield*/, client.post("statuses/update", {
                            status: tweet
                        })
                            .then(function () {
<<<<<<< HEAD
                            console.log(new Date().toJSON());
=======
>>>>>>> 4bf87b8f6f5aa74891bdb2cd94512c36bf299d31
                            console.log("tweet sent: \n" + tweet);
                        })["catch"](function (err) {
                            console.log(new Date().toJSON());
                            console.log(err);
                        })];
                case 1:
                    // post the tweet
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// scrape the recently added page
function scrape() {
    return __awaiter(this, void 0, void 0, function () {
        var coins, html, $;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
<<<<<<< HEAD
                    console.log(new Date().toJSON());
                    console.log("scraping");
=======
>>>>>>> 4bf87b8f6f5aa74891bdb2cd94512c36bf299d31
                    coins = "";
                    try {
                        coins = fs.readFileSync("coins.txt", "utf8");
                    }
                    catch (err) {
                        console.log(err);
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, axios_1["default"].get("https://www.coingecko.com/en/coins/recently_added")];
                case 1:
                    html = _a.sent();
                    return [4 /*yield*/, cheerio.load(html.data)];
                case 2:
                    $ = _a.sent();
                    // go through all table items
                    $('tr', 'tbody').each(function (i, elem) { return __awaiter(_this, void 0, void 0, function () {
                        var coinName, coinTicker, nameInfo, price, hourChange, dayChange, volume, marketCap, url, coinData;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    nameInfo = $(elem).find(".coin-name a").text().trim().split("\n").join().split(",,");
                                    coinName = nameInfo[0];
                                    coinTicker = nameInfo[1];
                                    coinTicker = coinTicker.trim();
                                    price = $(elem).find(".td-price span").text().trim();
                                    hourChange = $(elem).find(".td-change1h span").text().trim();
                                    dayChange = $(elem).find(".td-change24h span").text().trim();
                                    volume = $(elem).find(".td-liquidity_score span").text().trim();
                                    marketCap = $(elem).find(".td-market_cap").text().trim();
                                    url = "https://www.coingecko.com" + $(elem).find(".coin-name a").attr("href");
                                    // check if price change data has been added
                                    if (hourChange.length <= 1)
                                        hourChange = "?";
                                    if (dayChange.length <= 1)
                                        dayChange = "?";
                                    coinData = {
                                        name: coinName,
                                        ticker: coinTicker,
                                        price: price,
                                        hour: hourChange,
                                        day: dayChange,
                                        volume: volume,
                                        marketCap: marketCap,
                                        url: url
                                    };
                                    if (!(coins.indexOf(coinName + "(" + coinTicker + ")") === -1)) return [3 /*break*/, 2];
<<<<<<< HEAD
                                    console.log(new Date().toJSON());
=======
>>>>>>> 4bf87b8f6f5aa74891bdb2cd94512c36bf299d31
                                    console.log("New coin found: " + coinName + " / $" + coinTicker);
                                    // append coin name to text file
                                    return [4 /*yield*/, fs.appendFile("coins.txt", "\n" + coinName + "(" + coinTicker + ")", function (err) {
                                            if (err)
                                                console.log(err);
                                        })];
                                case 1:
                                    // append coin name to text file
                                    _a.sent();
<<<<<<< HEAD
=======
                                    newTweet(coinData);
>>>>>>> 4bf87b8f6f5aa74891bdb2cd94512c36bf299d31
                                    _a.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
            }
        });
    });
}
console.log("starting!");
// scrape every 10 minutes
scrape();
setInterval(function () {
    scrape();
}, 600000);
