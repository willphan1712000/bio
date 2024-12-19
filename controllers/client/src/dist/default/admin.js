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
        const socialName = Object.keys(data.data);
        const list = data.data;
        list.username = username;
        (0, W_1.$$)("#info__wrapper", (0, jsx_runtime_1.jsx)(InfoArea_1.default, { data: list, extraData: { defaultImgPath } })).reactMounting();
        const img = document.querySelector(".info__img--location img");
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
        $(".info__img--remove").click(function () {
            let data = {
                type: 'avaDelete',
                username: username,
                img: $(".info__img .uploadImg__filename").val()
            };
            $.ajax({
                url: "/data/api/info/PUTss.php",
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
        let isDisabled = false;
        $(".adminBtn__saves").click(function () {
            if (isDisabled) {
                return;
            }
            let booleanArr = [];
            const allTrue = true;
            if (allTrue) {
                let listForUpdate = {};
                if (true) {
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
                    url: "/data/api/info/PUTss.php",
                    method: "POST",
                    data: JSON.stringify(listForUpdate),
                    dataType: "html",
                    contentType: "application/json",
                    beforeSend: function () {
                        $(".adminBtn__save span").css("visibility", "hidden");
                        isDisabled = true;
                        $(".adminBtn__save").css({
                            "cursor": "not-allowed"
                        });
                    },
                    success: function (e) {
                        if (e !== null) {
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
