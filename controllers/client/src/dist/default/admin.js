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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const W_1 = require("../client/src/Web-Development/W");
const WW_1 = require("../client/src/Web-Development/WW");
const InfoArea_1 = __importDefault(require("./clientComponents/InfoArea"));
$(document).ready(function () {
    adminPage();
});
function adminPage() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, WW_1.$$$)("/data/api/info/GET.php", {
            username
        }).api().post();
        if (!data.success) {
            return;
        }
        const list = data.data;
        $(".info__img .uploadImg__filename").val(list.image === null ? '' : list.image);
        $(".info__name #name").val(list.name === null ? '' : list.name);
        $(".info__org #org").val(list.organization === null ? '' : list.organization);
        $(".info__des #des").val(list.description === null ? '' : list.description);
        (0, W_1.$$)("#social-media", (0, jsx_runtime_1.jsx)(InfoArea_1.default, { socialArr: socialName, data: list })).reactMounting();
        const img = document.querySelector(".info__img--location img");
        let transform, uploadImage = false;
        img.src = (list.image === null || list.image === '') ? defaultImgPath : '/user/' + username + '/' + list.image;
        const spinner = (0, W_1.$$)(".adminBtn__save").addSpinner().singleSpinner();
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
                url: "/data/api/info/PUT.php",
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
        let isDisabled = false;
        $(".adminBtn__save").click(function () {
            if (isDisabled) {
                return;
            }
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
                listForUpdate.src = "";
                listForUpdate.username = username;
                listForUpdate.image = $(".info__img .uploadImg__filename").val();
                listForUpdate.name = $(".info__name #name").val();
                listForUpdate.organization = $(".info__org #org").val();
                listForUpdate.description = $(".info__des #des").val();
                listForUpdate.Mobile = $(".Mobile #social__info").val();
                listForUpdate.MobileCode = $(".Mobile" + " .countryCode").data("dial");
                listForUpdate.MobileFlag = $(".Mobile" + " .countryCode").data("code");
                listForUpdate.Work = $(".Work #social__info").val();
                listForUpdate.WorkCode = $(".Work" + " .countryCode").data("dial");
                listForUpdate.WorkFlag = $(".Work" + " .countryCode").data("code");
                for (let i = 0; i < socialName.length; i++) {
                    if (['name', 'image', 'username', 'organization', 'description', 'Mobile', 'MobileCode', 'MobileFlag', 'Work', 'WorkCode', 'WorkFlag'].includes(socialName[i])) {
                        continue;
                    }
                    listForUpdate[socialName[i]] = $("." + socialName[i] + " #social__info").val();
                }
                $.ajax({
                    url: "/data/api/info/PUT.php",
                    method: "POST",
                    data: JSON.stringify(listForUpdate),
                    dataType: "html",
                    contentType: "application/json",
                    beforeSend: function () {
                        spinner.show();
                        $(".adminBtn__save span").css("visibility", "hidden");
                        isDisabled = true;
                        $(".adminBtn__save").css({
                            "cursor": "not-allowed"
                        });
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
