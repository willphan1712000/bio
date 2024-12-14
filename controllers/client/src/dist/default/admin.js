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
Object.defineProperty(exports, "__esModule", { value: true });
const W_1 = require("../client/src/Web-Development/W");
const WW_1 = require("../client/src/Web-Development/WW");
$(document).ready(function () {
    adminPage();
});
function render() {
    for (let i = 0; i < socialName.length; i++) {
        if (['username', 'name', 'image', 'organization', 'description', 'MobileFlag', 'MobileCode', 'WorkFlag', 'WorkCode'].includes(socialName[i])) {
            continue;
        }
        let string = socialName[i], displayString = string[0];
        for (let j = 1; j < string.length; j++) {
            displayString += (string[j] === string[j].toUpperCase()) ? ' ' + string[j] : string[j];
        }
        let inputmode = '', codeDisplay = 'flex', placeholder = '';
        if (socialName[i] === 'Mobile' || socialName[i] === 'Work') {
            inputmode = 'numeric';
        }
        else {
            codeDisplay = 'none';
        }
        if (socialName[i] === 'Messenger') {
            placeholder = 'Facebook Username';
        }
        else if (socialName[i] === 'Mobile' || socialName[i] === 'Work' || socialName[i] === 'Zalo') {
            placeholder = `${displayString} phone number here`;
        }
        else if (socialName[i] === 'Address') {
            placeholder = `Choose ${displayString} or ${displayString} link here`;
        }
        else {
            placeholder = `${displayString} link here`;
        }
        $("#social-media").append(`<div class="social ${socialName[i]}"><div class="social__img info__img">${icon[socialName[i]]}</div><div class="social__info info__about"><div class="info__name"><form action=""><label for="social__info">${displayString}</label><span></span><br></br><div class="inputWrapper"><div class="countryCode ${socialName[i]}" style="display: ${codeDisplay}" data-index><div class="flag"><img style="width:100%;height:100%;"></div><p class="code"></p><i class="fa-solid fa-caret-down"></i></div><div class="codeList ${socialName[i]}"><div class="codeList__search"><input name = "search" id = "searchCountry" type="text" placeholder="Search Country"></div><div class="codeList__list"></div></div><input id="social__info" placeholder="${placeholder}" autocomplete="on" name="${socialName[i]}" type="text" inputmode="${inputmode}" id="social__info"></div></form></div></div></div>`);
    }
    fetch("/controllers/client/src/module/countryCodes.json").then(res => res.json()).then(data => {
        let htmlList = '', htmlCountryCode = '', index = '';
        for (let j = 0; j < data.length; j++) {
            htmlList += `<div class="each" data-index="${j}"><p>${data[j].name}</p><p>${data[j].dial_code}</p></div>`;
        }
        $(".codeList__list").html(htmlList);
        $(".codeList__list > .each").click(function (e) {
            afterClick(e, data, null);
        });
        return [data, htmlList];
    }).then(([data, iniHtmlList]) => {
        const worker = new Worker('/controllers/client/src/dist/client/src/Web-Development/worker.js');
        $(".codeList__search > input").on("input", function (e) {
            let value = e.currentTarget.value;
            worker.postMessage({
                message: "countryCode",
                value: value,
                iniHtmlList: iniHtmlList,
                data: data
            });
        });
        worker.onmessage = function (e) {
            $(".codeList__list").html(e.data);
            $(".codeList__list > .each").click(function (e) {
                afterClick(e, data, iniHtmlList);
            });
        };
    });
    function afterClick(e, data, iniHtmlList) {
        $(".codeList").removeClass("active");
        let index = $(e.currentTarget).data("index");
        $(e.currentTarget).parent().parent().prev().data("index", index);
        let htmlCountryCode = `<div class="flag"><img src="/controllers/client/src/module/flags/${data[index].code.toLowerCase()}.png" style="width:100%;height:100%;""></div><p class="code">${data[index].dial_code}</p><i class="fa-solid fa-caret-down"></i>`;
        $(e.currentTarget).parent().parent().prev().html(htmlCountryCode);
        $(".codeList__search > input").val("");
        if (iniHtmlList !== null) {
            $(".codeList__list").html(iniHtmlList);
        }
    }
}
function adminPage() {
    return __awaiter(this, void 0, void 0, function* () {
        yield render();
        const img = document.querySelector(".info__img--location img");
        let transform, uploadImage = false;
        const spinner = (0, W_1.$$)(".adminBtn__save").addSpinner().singleSpinner();
        (0, W_1.$$)({
            trigger: ".countryCode.Mobile",
            terminate: undefined
        }, ".codeList.Mobile", "active").toggle().advanced();
        (0, W_1.$$)({
            trigger: ".countryCode.Work",
            terminate: undefined
        }, ".codeList.Work", "active").toggle().advanced();
        if (typeof (username) === 'string') {
            $.ajax({
                url: "/data/api/info/GET.php",
                method: "POST",
                dataType: "json",
                data: JSON.stringify({
                    username: username,
                    type: "getInfo"
                }),
                success: function (e) {
                    const list = e.data;
                    if (list !== undefined) {
                        $(".info__img .uploadImg__filename").val(list.image === null ? '' : list.image);
                        $(".info__name #name").val(list.name === null ? '' : list.name);
                        $(".info__org #org").val(list.organization === null ? '' : list.organization);
                        $(".info__des #des").val(list.description === null ? '' : list.description);
                        for (let i = 0; i < socialName.length; i++) {
                            let ele = list[socialName[i]];
                            ele = (ele === null || ele === '') ? '' : ele;
                            if (socialName[i] === "Messenger") {
                                ele = ele.replace("https://m.me/", "");
                            }
                            else if (socialName[i] === 'Zalo') {
                                ele = ele.replace("https://zalo.me/", "");
                            }
                            else if (socialName[i] === "Mobile" || socialName[i] === "Work") {
                                let dial, index, code;
                                if (ele === '') {
                                    dial = '+1';
                                    code = 'US';
                                }
                                else {
                                    if (socialName[i] === "Mobile") {
                                        code = list['MobileFlag'];
                                        dial = list['MobileCode'];
                                        ele = list['Mobile'];
                                    }
                                    if (socialName[i] === "Work") {
                                        code = list['WorkFlag'];
                                        dial = list['WorkCode'];
                                        ele = list['Work'];
                                    }
                                }
                                $("." + socialName[i] + " .countryCode").data("dial", dial);
                                $("." + socialName[i] + " .countryCode").data("code", code);
                                $("." + socialName[i] + " .countryCode > .flag > img").attr("src", "/controllers/client/src/module/flags/" + code.toLowerCase() + ".png");
                                $("." + socialName[i] + " .countryCode > .code").html(dial);
                            }
                            $("." + socialName[i] + " #social__info").val(ele);
                        }
                        img.src = (list.image === null || list.image === '') ? defaultImgPath : '/user/' + username + '/' + list.image;
                    }
                    else {
                        img.src = defaultImgPath;
                    }
                }
            });
        }
        $(".adminBtn__delete").click(function () {
            $(".warning__parent").addClass("active");
        });
        $(".warning__child .btn__back").click(function () {
            $(".warning__parent").removeClass("active");
        });
        $(".warning__child .btn__confirm").click(function () {
            let listForUpdate = {
                type: "deleteToken",
                token: time,
                username: username
            };
            $.ajax({
                url: "/data/update.php",
                method: "POST",
                dataType: "html",
                contentType: 'application/json',
                data: JSON.stringify(listForUpdate),
                success: function (e) {
                    if (e) {
                        window.location.href = "/";
                    }
                }
            });
        });
        $(".adminBtn__index").click(function () {
            window.location.href = `/${username}`;
        });
        $(".info__img--remove").click(function () {
            let data = {
                type: 'avaDelete',
                username: username,
                img: $(".info__img .uploadImg__filename").val()
            };
            $.ajax({
                url: "/data/update.php",
                method: "POST",
                data: JSON.stringify(data),
                dataType: "html",
                contentType: "application.json",
                success: function (e) {
                    if (e) {
                        img.src = defaultImgPath;
                    }
                    else {
                        location.reload();
                    }
                }
            });
        });
        const isValid = {};
        for (let i = 0; i < socialName.length; i++) {
            if (!(socialName[i] === 'Mobile' || socialName[i] === 'Email' || socialName[i] === 'Messenger' || socialName[i] === 'Work')) {
                isValid[socialName[i]] = (0, WW_1.$$$)("." + socialName[i] + " #social__info", "." + socialName[i] + " span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^(https?:\/\/)\w*/).formValidate().run();
            }
        }
        isValid.Mobile = (0, WW_1.$$$)(".Mobile #social__info", ".Mobile span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^\d{3}-\d{3}-\d{4}$/).formValidate().run();
        isValid.Mobile.phoneFormat();
        isValid.Work = (0, WW_1.$$$)(".Work #social__info", ".Work span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^\d{3}-\d{3}-\d{4}$/).formValidate().run();
        isValid.Work.phoneFormat();
        isValid.Zalo = (0, WW_1.$$$)(".Zalo #social__info", ".Zalo span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^\d{3}\d{3}\d{4}$/).formValidate().run();
        isValid.Email = (0, WW_1.$$$)(".Email #social__info", ".Email span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^[^\s@]+@[^\s@]+\.[^\s@]+$/).formValidate().run();
        isValid.Messenger = (0, WW_1.$$$)(".Messenger #social__info", ".Messenger span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^.*$/).formValidate().run();
        isValid.Address = (0, WW_1.$$$)(".Address #social__info", ".Address span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^.*$/).formValidate().run();
        $(".adminBtn__save").click(function () {
            let booleanArr = [];
            for (let i = 0; i < socialName.length; i++) {
                booleanArr.push(isValid[socialName[i]].getValidity());
            }
            booleanArr.push(isValid.Mobile.getValidity());
            booleanArr.push(isValid.Work.getValidity());
            booleanArr.push(isValid.Email.getValidity());
            booleanArr.push(isValid.Messenger.getValidity());
            booleanArr.push(isValid.Address.getValidity());
            const allTrue = booleanArr.every(ele => ele === true);
            if (allTrue) {
                let listForUpdate = {};
                if (uploadImage) {
                }
                listForUpdate.username = username;
                listForUpdate.image = $(".info__img .uploadImg__filename").val();
                listForUpdate.name = $(".info__name #name").val();
                listForUpdate.organization = $(".info__org #org").val();
                listForUpdate.description = $(".info__des #des").val();
                for (let i = 0; i < socialName.length; i++) {
                    if (socialName[i] === 'Messenger') {
                        const v = $("." + socialName[i] + " #social__info").val();
                        const link = (v === '') ? '' : `https://m.me/${v}`;
                        listForUpdate[socialName[i]] = link;
                    }
                    else if (socialName[i] === 'Zalo') {
                        const v = $("." + socialName[i] + " #social__info").val();
                        const link = (v === '') ? '' : `https://zalo.me/${v}`;
                        listForUpdate[socialName[i]] = link;
                    }
                    else if (socialName[i] === 'Mobile' || socialName[i] === 'Work') {
                        const dial = $("." + socialName[i] + " .countryCode").data("dial");
                        const value = $("." + socialName[i] + " #social__info").val();
                        const code = $("." + socialName[i] + " .countryCode").data("code");
                        if (value === '') {
                            listForUpdate[socialName[i]] = '';
                        }
                        else {
                            listForUpdate[socialName[i]] = `${code} ${dial} ${$("." + socialName[i] + " #social__info").val()}`;
                        }
                    }
                    else {
                        listForUpdate[socialName[i]] = $("." + socialName[i] + " #social__info").val();
                    }
                }
                $.ajax({
                    url: "/data/update.php",
                    method: "POST",
                    data: JSON.stringify(listForUpdate),
                    dataType: "html",
                    contentType: "application/json",
                    beforeSend: function () {
                        spinner.show();
                        $(".adminBtn__save span").css("visibility", "hidden");
                    },
                    success: function (e) {
                        if (e !== null) {
                            spinner.hide();
                            $(".adminBtn__save span").css("visibility", "visible");
                            $(".info__img .uploadImg__filename").val(e);
                            $(".msg").removeClass("active");
                            $(".successMsg").addClass("active");
                            setTimeout(() => {
                                $(".successMsg").removeClass("active");
                                window.location.href = `/${username}`;
                            }, 1000);
                        }
                    },
                    error: function () {
                        $(".msg").removeClass("active");
                        $(".errorMsg").addClass("active");
                        setTimeout(() => {
                            location.reload();
                        }, 3000);
                    }
                });
            }
            else {
                $(".msg").removeClass("active");
                $(".notValidForm").addClass("active");
                setTimeout(() => {
                    $(".notValidForm").removeClass("active");
                }, 3000);
            }
        });
    });
}
