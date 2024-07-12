/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/module/W.js":
/*!*************************!*\
  !*** ./src/module/W.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$: () => (/* binding */ $$)
/* harmony export */ });
// W.js is module created by Will - Thanh Nha Phan - Kennesaw State University
// This module helps frontend development to be easily deployed

function $$(ele1, ele2, ele3, ele4) {
    const p = arguments.length
    if(p === 1) {
        return new W1(ele1)
    }
    else if (p === 2) {
        return new W2(ele1, ele2)
    }
    else if(p === 3) {
        return new W3(ele1, ele2, ele3)
    }
    else if(p === 4) {
        return new W4(ele1, ele2, ele3, ele4)
    }
}

function W1(ele1) {
    this.ele1 = ele1
    const thisObject = this
    this.passShowHide = function() {
        return new PassShowHide(this.ele1)
    }
    this.transform = function() {
        return new Transform(this.ele1, undefined, undefined)
    }
    this.addSpinner = function() {
        return new Spinner(this.ele1)
    }
    this.format = function() {
        return new Format(this.ele1)
    }
}

function W2(ele1, ele2) {
    this.ele1 = ele1
    this.ele2 = ele2
    const thisObject = this
    this.toggle = function() {
        return new Toggle(this.ele1, this.ele2)
    }
    this.upload = function() {
        return new Upload(this.ele1, this.ele2)
    }
    this.copyToClipboard = function() {
        return new CopyToClipboard(this.ele1, this.ele2)
    }
}
function W3(ele1, ele2, ele3) {
    this.ele1 = ele1
    this.ele2 = ele2
    this.ele3 = ele3
    const thisObject = this
    this.transform = function() {
        return new Transform(thisObject.ele1, thisObject.ele2, thisObject.ele3)
    }

    this.table = function() {
        return new Table(this.ele1, this.ele2, this.ele3)
    }
}
function W4(ele1, ele2, ele3, ele4) {
    this.ele1 = ele1
    this.ele2 = ele2
    this.ele3 = ele3
    this.ele4 = ele4
    const thisObject = this
}

function Table(location, header, data) {
    // Follow the object format
    // header = {
    //     1: a,
    //     2: b,
    //     3: c
    // }
    // data = {
    //     1: {
    //         1: data1,
    //         2: data2
    //     },
    //     2: {
    //         1: data3,
    //         2: data4
    //     }
    // }
    // The table should look like this
    // a b     c
    // 1 data1 data2
    // 2 data3 data4
    this.location = location
    this.header = header
    this.data = data
    const thisObject = this

    this.create = function() {
        $(this.location).append('<table><tr></tr></table>')
        for(const headerKey in this.header) {
            if(this.header.hasOwnProperty(headerKey)) {
                $(this.location + " table tr").append(`<th>${this.header[headerKey]}</th>`)
            }
        }
        let counter = 0
        for(const dataKey in this.data) {
            counter++
            let row = `<tr><th>${counter}</th>`, eachData = this.data[dataKey]
            for(const eachKey in eachData) {
                row += `<th>${eachData[eachKey]}</th>`
            }
            row += `</tr>`
            $(this.location + " table").append(row)
        }
        return this
    }
}

function Spinner(ele1) {
    this.ele1 = ele1 // Element that the spinner will be added to
    const thisObject = this
    this.show = function() {
        $(this.ele1 + " .loader").addClass("spinner")
        return this
    }
    this.hide = function() {
        $(this.ele1 + " .loader").removeClass("spinner")
        return this
    }
    this.singleSpinner = function() {
        let styleElement = document.createElement("style")
        styleElement.textContent = `
        .spinner {
            position: absolute;
            top: 50%;
            left: 50%;
        }
        .spinner::after {
            content: "";
            position: absolute;
            width: 16px;
            height: 16px;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            border: 4px solid transparent;
            border-top-color: #000;
            border-radius: 50%;
            animation: spinner 1s linear infinite;
        }
        @keyframes spinner {
            from {
                transform: rotate(0turn);
            }
            to {
                transform: rotate(1turn);
            }
        }`
        document.head.appendChild(styleElement)
        $(this.ele1).append(`<div class="loader"></div>`)
        $(this.ele1).css("position", "relative")
        return this
    }
    this.gradientSpinner = function() {
        $(this.ele1).append(`<div class="loader spinner"></div>`)
        return this
    }
}

function PassShowHide(input) {
    this.input = input
    const $input= $(this.input)
    this.run = function() {
        const inputWidth = $input.innerWidth()
        const inputHeight = $input.innerHeight()
        $input.after('<div style="position: relative;"></div>')
        $(input + " + div").append($input.html(self))
        $input.after(`<i class="fa-solid fa-eye eye" style="position: absolute;left: ${inputWidth - (18+3)}px; top: ${(inputHeight-16)/2}px; cursor: pointer; color: #333;"></i>`)
        const $eye = $(this.input).next()
        $eye.click(function() {
            if($input.attr('type') === "password") {
                $input.attr('type', 'text')
                $(this).css({
                    color: "green"
                })
            } else {
                $input.attr('type', 'password')
                $(this).css({
                    color: "#333"
                })
            }
        })
        return this
    }
}

function Upload(ele1, ele2) {
    this.ele1 = ele1
    this.ele2 = ele2
    const $ele1 = $(this.ele1)
    const $ele2 = $(this.ele2)
    const thisObject = this

    this.openFile = function() {
        $ele1.click(e => {
            e.stopPropagation()
            $ele2.click()
        })
        return this
    }

    this.fileHandling = function(e, cb) {
        const {target} = e
        const file = target.files[0]
        if(file) {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = function(readerEvent) {
                const imgElement = document.createElement("img")
                imgElement.src = readerEvent.target.result
                imgElement.onload = function(imgEvent) {
                    cb(imgEvent.target.src)
                }
            }
        }
    }
    
    this.drawImage = function(e, x, y, scale, angle, canvasWidth, canvasHeight, containerWidth, containerHeight) {
        const canvas = document.createElement("canvas")
        canvas.width = canvasWidth
        canvas.height = canvasHeight
        const ctx = canvas.getContext("2d")
        const ratioX = canvasWidth/containerWidth
        const ratioY = canvasHeight/containerHeight
        let finalX = x*ratioX
        let finalY = y*ratioY
        let midleWidth = e.width*ratioX
        let midleHeight = e.height*ratioY
        let finalWidth = e.width*ratioX*scale
        let finalHeight = e.height*ratioY*scale
        ctx.translate(finalX + midleWidth/2, finalY + midleHeight/2)
        ctx.rotate((angle*Math.PI)/180)
        ctx.drawImage(e, -finalWidth/2, -finalHeight/2, finalWidth, finalHeight);
        const srcEncoded = ctx.canvas.toDataURL(e).split(",")[1];
        return srcEncoded
    }
}

function Toggle(ele1, ele2) {
    this.ele1 = ele1 // Targeted element
    this.ele2 = ele2 // Class name to be toggled
    const thisObject = this

    this.run = function() {
        $(this.ele1).click(function(e) {
            e.stopPropagation()
            $(e.currentTarget).toggleClass(thisObject.ele2)
            $("body").click(function(event) {
                if(!event.target.classList.contains(thisObject.ele2)) {
                    $(e.currentTarget).removeClass(thisObject.ele2)
                    $("body").off("click")
                }
            })
        })
        return this
    }

    this.custom = function() {
        $(this.ele1).click(function(e) {
            e.stopPropagation()
            $(e.currentTarget).next().toggleClass(thisObject.ele2)
            // $("body").click(function(event) {
            //     if(!event.target.classList.contains(thisObject.ele2)) {
            //         $(e.currentTarget).next().removeClass(thisObject.ele2)
            //         $("body").off("click")
            //     }
            // })
        })
    }
}

function Transform(ele1, ele2, ele3) {
    this.ele1 = ele1
    this.ele2 = ele2
    this.signal = ele3
    this.collided = false
    this.x = 0
    this.y = 0
    this.scale = 1
    this.angle = 0
    const $ele1 = $(this.ele1)
    const $ele2 = $(this.ele2)
    const thisObject = this
    
    this.setValue = function(x, y, scale, angle) {
        this.x = (x !== undefined) ? x : this.x
        this.y = (y !== undefined) ? y : this.y
        this.scale = (scale !== undefined) ? scale : this.scale
        this.angle = (scale !== undefined) ? angle : this.angle
    }
    this.performTransform = function(x, y, scale, angle) {
        $ele1.css({
            transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${angle}deg)`
        })
    }

    this.exportData = function() {
        return [this.x, this.y, this.scale, this.angle]
    }

    this.isCollided = function() {
        return this.collided
    }

    this.setIsCollided = function(is) {
        this.collided = is
    }

    this.draggable = function() {
        let iPosX, iPosY, posX, posY, dX, dY
        $ele1.on("touchstart", function(e) {
            e.preventDefault()
            e.stopPropagation()
            iPosX = e.touches[0].clientX
            iPosY = e.touches[0].clientY
            let [posX, posY, scale, angle] = thisObject.exportData()
            $ele1.on("touchmove", function(e) {
                dX = e.touches[0].clientX - iPosX
                dY = e.touches[0].clientY - iPosY
                iPosX = e.touches[0].clientX
                iPosY = e.touches[0].clientY
                posX += dX
                posY += dY
                thisObject.performTransform(posX, posY, scale, angle)
            })
            $ele1.on("touchend", function() {
                $ele1.off("touchmove", null)
                $ele1.off("touchend", null)
                thisObject.setValue(posX, posY, undefined, undefined)
            })
        })
        return this
    }

    this.distort = function() {
        $ele1.on("touchstart", function(e) {
            e.preventDefault()
            e.stopPropagation()
            let finger1X, finger1Y, finger2X, finger2Y, iVectorX, iVectorY, vectorX, vectorY, initialAngle, currentAngle, dScale
            if(e.touches.length === 2) {
                finger1X = e.touches[0].clientX
                finger1Y = e.touches[0].clientY
                finger2X = e.touches[1].clientX
                finger2Y = e.touches[1].clientY
                iVectorX = finger2X - finger1X
                iVectorY = finger2Y - finger1Y
                initialAngle = Math.atan2(iVectorX, iVectorY)
                let [posX, posY, scale, angle] = thisObject.exportData()
                $ele1.on("touchmove", function(e) {
                    finger1X = e.touches[0].clientX
                    finger1Y = e.touches[0].clientY
                    finger2X = e.touches[1].clientX
                    finger2Y = e.touches[1].clientY
                    vectorX = finger2X - finger1X
                    vectorY = finger2Y - finger1Y
                    currentAngle = Math.atan2(vectorX, vectorY)
                    angle -= (currentAngle - initialAngle)*180/Math.PI
                    dScale = Math.sqrt(vectorX*vectorX + vectorY*vectorY)/Math.sqrt(iVectorX*iVectorX + iVectorY*iVectorY)
                    scale *= dScale
                    thisObject.performTransform(posX, posY, scale, angle)
                    iVectorX = vectorX
                    iVectorY = vectorY
                    initialAngle = currentAngle
                })
                $ele1.on("touchend", function() {
                    $ele1.off("touchmove", null)
                    $ele1.off("touchend", null)
                    thisObject.setValue(undefined, undefined, scale, angle)
                })
            }
        })
        return this
    }
    
    this.terminate = function() {
        $ele1.off("touchstart", null)
        $(document).off("touchmove", null)
        $(document).off("touchend", null)
        return this
    }
}

function CopyToClipboard(ele1, ele2) {
    this.ele1 = ele1 // text
    this.ele2 = ele2 // button
    const thisObject = this

    this.run = function(cb) {
        $(this.ele2).click(() => {
            navigator.clipboard.writeText(thisObject.ele1)
            cb()
        })
    }
}




/***/ }),

/***/ "./src/module/WW.js":
/*!**************************!*\
  !*** ./src/module/WW.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$$: () => (/* binding */ $$$)
/* harmony export */ });
// WW.js is module created by Will - Thanh Nha Phan - Kennesaw State University
// This module helps backend development to be easily deployed

function $$$(ele1, ele2, ele3, ele4, ele5) {
    const p = arguments.length
    if(p === 1) {
        return new WW1(ele1)
    }
    else if (p === 2) {
        return new WW2(ele1, ele2)
    }
    else if(p === 3) {
        return new WW3(ele1, ele2, ele3)
    }
    else if(p === 4) {
        return new WW4(ele1, ele2, ele3, ele4)
    }
    else if(p === 5) {
        return new WW5(ele1, ele2, ele3, ele4, ele5)
    }
}

function WW1(ele1) {
    this.ele1 = ele1
    const thisObject = this

    this.googleAPI = function(key) {
        return new GoogleAPI(key)
    }
}
function WW2(ele1, ele2) {
    this.ele1 = ele1
    this.ele2 = ele2
    const thisObject = this
}
function WW3(ele1, ele2, ele3) {
    this.ele1 = ele1
    this.ele2 = ele2
    this.ele3 = ele3
    const thisObject = this

}
function WW4(ele1, ele2, ele3, ele4) {
    this.ele1 = ele1
    this.ele2 = ele2
    this.ele3 = ele3
    this.ele4 = ele4
    const thisObject = this

}
function WW5(ele1, ele2, ele3, ele4, ele5) {
    this.ele1 = ele1
    this.ele2 = ele2
    this.ele3 = ele3
    this.ele4 = ele4
    this.ele5 = ele5
    const thisObject = this

    this.signup = function() {
        return new Signup(this.ele1, this.ele2, this.ele3, this.ele4, this.ele5)
    }

    this.formValidate = function() {
        return new FormValidate(this.ele1, this.ele2, this.ele3, this.ele4, this.ele5)
    }
}

function GoogleAPI(key) {
    this.API_KEY = key
    this.autocomplete
    const thisObject = this

    this.runGoogleMapsAPI = function(input) {
        let scriptElement = document.createElement('script')
        scriptElement.src = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=${thisObject.API_KEY}`
        document.body.appendChild(scriptElement)
        scriptElement.addEventListener("load", () => {
            // let map;

            // async function initMap() {
            //     const { Map } = await google.maps.importLibrary("maps");

            //     map = new Map(document.getElementById("map"), {
            //         center: { lat: -34.397, lng: 150.644 },
            //         zoom: 8,
            //     });
            // }

            // initMap();

            input = document.querySelector(input)
            thisObject.autocomplete = new google.maps.places.Autocomplete((input), {
                types: ['geocode'],
            })
            google.maps.event.addListener(thisObject.autocomplete, 'place_changed', function() {
                var near_place = thisObject.autocomplete.getPlace()
            })
        })
    }
}

function FormValidate(input, msg, success, error, regex) {
    this.input = input
    this.msg = msg
    this.success = success
    this.error = error
    this.regex = regex
    this.isValid = true
    const thisObject = this

    this.setValidity = function(value) {
        this.isValid = value
    }

    this.getValidity = function() {
        return this.isValid
    }


    this.phoneFormat = function() {
        $(this.input).on("input", function(event) {
            let inputValue = event.target.value.replace(/\D/g, '');
            let formattedValue = '';

            // Apply the formatting
            for (let i = 0; i < inputValue.length; i++) {
                if (i === 3 || i === 6) {
                    formattedValue += '-';
                }
                formattedValue += inputValue[i];
            }

            // Update the input value
            event.target.value = formattedValue;
        })
    }

    this.run = function() {
        const regex = this.regex
        $(this.input).on("input", function(e) {
            if(e.target.value !== '') {
                if(regex.test(e.target.value)) {
                    thisObject.setValidity(true)
                    $(thisObject.msg).html(thisObject.success)
                } else {
                    thisObject.setValidity(false)
                    $(thisObject.msg).html(thisObject.error)
                }
            } else {
                $(thisObject.msg).html('')
                thisObject.setValidity(true)
            }
        })
        return this
    }
}

function Signup(username, email, password, error, submit) {
    this.username = username
    this.email = email
    this.password = password
    this.error = error
    this.submit = submit
    const $usernameInput = $(this.username)
    const $emailInput = $(this.email)
    const $passwordInput = $(this.password)
    const $submit = $(this.submit)
    const $error = $(this.error)

    const thisObject = this
    this.run = function() {
        $submit.click(function(e) {
            e.preventDefault()
            if(thisObject.isFillAll($usernameInput.val(), $emailInput.val(), $passwordInput.val())) {
                $error.html("Please fill in all information!")
                thisObject.shakingErrorMsg($error)
            } else {
                if(!thisObject.isValidEmail($emailInput.val())) {
                    $error.html("The email is not valid!")
                    thisObject.shakingErrorMsg($error)
                } else {
                    if(!thisObject.isValidPassword($passwordInput.val())) {
                        $error.html("The password is not valid!")
                        thisObject.shakingErrorMsg($error)
                    } else {
                        $error.html("")
                        $.ajax({
                            url: "/data/signup.php",
                            method: "POST",
                            dataType: "json",
                            data: {
                                username: thisObject.removeSpace($usernameInput.val()),
                                email: $emailInput.val(),
                                password: $passwordInput.val()
                            },
                            success: function(e) {
                                if(e[0]) {
                                    $error.html("The username has already been taken!")
                                    thisObject.shakingErrorMsg($error)
                                } else {
                                    if(!e[1]) {
                                        $error.html("The email is not valid!")
                                        thisObject.shakingErrorMsg($error)
                                    } else {
                                        if(!(e[2] && e[3] && e[4] && e[5])) {
                                            $error.html("There is an error, try again!")
                                            thisObject.shakingErrorMsg($error)
                                        } else {
                                            // Optional operation
                                            thisObject.createFiles(thisObject.removeSpace($usernameInput.val()), function(e) {
                                                if(e) {
                                                    thisObject.signUpSuccess(".signupChild", "inactive", ".signupSuccess", "active")
                                                }
                                            })
                                        }
                                    }
                                }   
                            },
                            error: function() {
                                $error.html("The server has internal error!")
                                thisObject.shakingErrorMsg($error)
                            }
                        })
                    }
                }
            }
        })
    }

    this.isFillAll = function(username, email, password) {
        return (!(username && email && password)) ? true : false
    }

    this.isValidEmail = function(email) {
        // Regular expression for a basic email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        // Test the email against the regular expression
        return emailRegex.test(email);
    }

    this.isValidPassword = function(password) {
        let position, isValidLength = false, hasUpperCase = false, hasDigit = false, hasSpecialChar = true, isValid = false // Bypass special character requirement
        if(password.length >= 12) {
            isValidLength = true
        }
        for(let i = 0; i < password.length; i++) {
            position = password[i].charCodeAt()
            if(position >= 65 && position <= 90) {
                hasUpperCase = true
            }
            if(position >= 48 && position <= 57) {
                hasDigit = true
            }
            if(position >= 33 && position <= 47) {
                hasSpecialChar = true
            }
            if(hasUpperCase && hasDigit && hasSpecialChar) {
                isValid = true
                break;
            }
        }
        if(isValidLength && isValid) return isValid
    }

    this.removeSpace = function(text) {
        let filtered = '';
        for(let i = 0; i < text.length; i++) {
            if(text[i] === ' ') {
                continue
            } else {
                filtered += text[i]
            }
        }
        return filtered;
    }

    this.shakingErrorMsg = function(error) {
        var requestAnimationFrame = window.requestAnimationFrame || window.mozrequestAnimationFrame || window.webkitrequestAnimationFrame || window.msrequestAnimationFrame;

        var counter = 0, x = 0, dx = -2.5
        function shaking() {
            counter++
            x += dx
            if(x <= -15 || x >= 15) {
                dx = -dx;
            }
            const runAnimation = requestAnimationFrame(shaking)
            if(counter === 30) {
                cancelAnimationFrame(runAnimation)
                x = 0
            }
            error.css({
                transform: `translateX(${x}px)`
            })
        }
        shaking()
    }

    this.signUpSuccess = function(before, beforeClass, after, afterClass) {
        $(before).addClass(beforeClass)
        $(after).addClass(afterClass)
    }
    
    // Gray out this function when not in use in other projects
    this.createFiles = function(username, cb) {
        let data = {}
        data.type = 'create'
        data.username = username
        $.ajax({
            url: "/data/update.php",
            method: "POST",
            dataType: "html",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function(e) {
                cb(e)
            }
        })
    }
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_W_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/W.js */ "./src/module/W.js");
/* harmony import */ var _module_WW_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/WW.js */ "./src/module/WW.js");



$(document).ready(function() {
    // Deployment
    switch(type) {
        case 'index':
            // bioPage()
            break
        case 'admin':
            adminPage()
            break
        case 'signup':
            // signupPage()
            break
        case 'signin':
            // signinPage()
            break
        case 'aic':
            // aic()
            // runCheckDatabase()
            break
        case 'forgot':
            // forgot()
            break
        case 'forgotUsername':
            // forgotUsername()
            break
        case 'resetPass':
            // resetPass()
            break
        case 'restore':
            // restore()
            break
        case 'template':
            template(props)
            break
        default:
            break
    }

    function adminPage() {
        // $(".share__btn.image").click(()=>{ 
        //     const element = document.querySelector("#template-container");
        //     const d = element.getBoundingClientRect();
        //     html2canvas(element, {width: d.width,height: ( 16 / 9 ) * d.width,x: 0,y: 0,useCORS: true }).then(canvas => {document.querySelector(".image .shareWindow__qr").src = canvas.toDataURL("image/png"); document.querySelector(".image .shareWindow__download").download = "card.png";
        //     document.querySelector(".image .shareWindow__download").href = canvas.toDataURL("image/png")
        //     $(".shareWindow_parent.image").addClass("active");
        //     $("#container").addClass("touch-disabled")})
        // })
    }

    function template(props) {
        $(".select").click(e => {
            const current = e.currentTarget;
            const id = $(current).data("id");
            $.ajax({
                url: '/data/template.php',
                method: 'POST',
                data: {
                    type: "select",
                    username: props.username,
                    themeid: id
                },
                dataType: "json",
                success: function(e) {
                    if(e === 1) {
                        window.location.href = '/' + props.username
                    }
                },
                error: function() {
                    console.log("error");
                }
            })
        })
    }
})
/******/ })()
;
//# sourceMappingURL=mainjsec5b9ab1a17f97698fc7.js.map