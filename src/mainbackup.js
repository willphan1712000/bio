__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_W_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/W.js */ "./src/module/W.js");
/* harmony import */ var _module_WW_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/WW.js */ "./src/module/WW.js");
/* harmony import */ var _module_components_Cart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/components/Cart.js */ "./src/module/components/Cart.js");




$(document).ready(function() {
    // Deployment
    switch(type) {
        case 'index':
            bioPage()
            break
        case 'admin':
            adminPage()
            break
        case 'signup':
            signupPage()
            break
        case 'signin':
            signinPage()
            break
        case 'aic':
            aic()
            runCheckDatabase()
            break
        case 'forgot':
            forgot()
            break
        case 'forgotUsername':
            forgotUsername()
            break
        case 'resetPass':
            resetPass()
            break
        case 'restore':
            restore()
            break
        case 'template':
            template(props)
            break
        default:
            break
    }

    function runCheckDatabase() {
        $.ajax({
            url: "/data/update.php",
            method: "POST",
            dataType: "json",
            data: JSON.stringify({
                type: "mainPage"
            }),
            success: function(e) {
                if(e)
                console.log("Database has been checked and updated")
            },
            error: function() {
                console.log("Error")
            }
        })
    }
    
    function signupPage() {
        (0,_module_W_js__WEBPACK_IMPORTED_MODULE_0__.$$)("#password").passShowHide().run()
        ;(0,_module_W_js__WEBPACK_IMPORTED_MODULE_0__.$$)(".passRequirements", "dropdown").toggle().run()
        ;(0,_module_WW_js__WEBPACK_IMPORTED_MODULE_1__.$$$)("#username", "#email", "#password", ".signupChild__error", ".signupChild__confirm", "/data/signup.php").signup().run()
    }
    function bioPage() {
        (0,_module_W_js__WEBPACK_IMPORTED_MODULE_0__.$$)((typeof(url) === 'string') ? url : '', ".shareWindow__link").copyToClipboard().run(()=>{
            $(".shareWindow__btn.shareWindow__link .check").show()
            $(".shareWindow__btn.shareWindow__link .copy").hide()
            setTimeout(()=>{
                $(".shareWindow__btn.shareWindow__link .check").hide()
                $(".shareWindow__btn.shareWindow__link .copy").show()
            }, 2000)
        })
        $(".share__btn.qr").click(()=>{
            $(".shareWindow_parent.qrcode").addClass("active")
            $("#container").addClass("touch-disabled")
        })
        $(".share__btn.image").click(()=>{
            const element = document.querySelector("#template-container")
            const d = element.getBoundingClientRect()
            html2canvas(element, {
                width: d.width,
                height: ( 16 / 9 ) * d.width,
                x: 0,
                y: 0,
                useCORS: true
            }).then(canvas => {
                document.querySelector(".image .shareWindow__qr").src = canvas.toDataURL("image/png");
                document.querySelector(".image .shareWindow__download").download = "card.png"
                document.querySelector(".image .shareWindow__download").href = canvas.toDataURL("image/png")
                $(".shareWindow_parent.image").addClass("active")
                $("#container").addClass("touch-disabled")
            })
        })
        $(".shareWindow__close").click(()=>{
            $(".shareWindow_parent").removeClass("active")
            $("#container").removeClass("touch-disabled")
        })
        $("#share .share__btn.share").click(() => {
            if(navigator.share) {
                navigator.share({
                    title: username,
                    url: window.document.location.href+"?share=true"
                }).then(()=> {
                    alert("Sent!")
                }).catch(console.error)
            } else {
                alert("Share does not support this browser")
            }
        })
    }
    function adminPage() {
        // Variable Declaration and Initialization
        const img = document.querySelector(".info__img--location img")
        let transform, uploadImage = false

        // Add spinner
        const spinner = (0,_module_W_js__WEBPACK_IMPORTED_MODULE_0__.$$)(".adminBtn__save").addSpinner().singleSpinner()

        // Make "choose" button able to open file box
        const upload = (0,_module_W_js__WEBPACK_IMPORTED_MODULE_0__.$$)(".info__img--choose", ".info__img input").upload().openFile()

        // Make image container able to open file box
        ;(0,_module_W_js__WEBPACK_IMPORTED_MODULE_0__.$$)(".info__img--location", ".info__img input").upload().openFile()

        // Manage change event of the file box
        $(".info__img input").on("change", (e) => {
            upload.fileHandling(e, function(src) {
                uploadImage = true
                // Make the image container transformable
                transform = (0,_module_W_js__WEBPACK_IMPORTED_MODULE_0__.$$)(".info__img--location img").transform().draggable().distort()
                img.src = src
            })
        })

        // Make Address box searchable using Google Maps API
        // const API_KEY = 'AIzaSyDzVaJBzfYI99plotEoYzCKASerLaeNNGY'
        // $$$(null).googleAPI(API_KEY).runGoogleMapsAPI(".Address #social__info")

        // Make toggle for country code box
        ;(0,_module_W_js__WEBPACK_IMPORTED_MODULE_0__.$$)(".countryCode", "active").toggle().custom()
    
        // Show previously uploaded data to the admin page
        if(typeof(username) === 'string') {
            $.ajax({
                url: "/data/update.php",
                method: "POST",
                dataType: "json",
                data: JSON.stringify({
                    username: username,
                    type: "getInfo"
                }),
                success: function(e) {
                    const list = e[0]
                    if(list !== undefined) {
                        $(".info__img .uploadImg__filename").val(list.image === null ? '' : list.image)
                        $(".info__name #name").val(list.name === null ? '' : list.name)
                        $(".info__org #org").val(list.organization === null ? '' : list.organization)
                        $(".info__des #des").val(list.description === null ? '' : list.description)
                        for(let i = 0; i < socialName.length; i++) {
                            let ele = list[socialName[i]]
                            ele = (ele === null || ele === '') ? '' : ele
                            if(socialName[i] === "Messenger") {
                                ele = ele.replace("https://m.me/", "")
                            }
                            else if (socialName[i] === 'Zalo') {
                                ele = ele.replace("https://zalo.me/", "")
                            }
                            else if (socialName[i] === "Mobile" || socialName[i] === "Work") {
                                let dial, index, code
                                if(ele === '') {
                                    dial = '+1'
                                    code = 'US'
                                } else {
                                    code = ele.split(" ")[0]
                                    dial = ele.split(" ")[1]
                                    ele = ele.split(" ")[2]
                                }
                                $("."+socialName[i]+" .countryCode").data("dial", dial)
                                $("."+socialName[i]+" .countryCode").data("code", code)
                                $("."+socialName[i]+" .countryCode > .flag > img").attr("src", "/src/module/flags/" + code.toLowerCase() + ".png")
                                $("."+socialName[i]+" .countryCode > .code").html(dial)
                            }
                            $("."+socialName[i]+" #social__info").val(ele)
                        }
                        img.src = (list.image === null || list.image === '') ? defaultImgPath : '/user/' + username + '/' + list.image
                    } else {
                        img.src = defaultImgPath
                    }
                }
            })
        }
        // Click delete button, then do the work below
        $(".adminBtn__delete").click(function() {
            $(".warning__parent").addClass("active")
        })
        // Click back button, then do the work below
        $(".warning__child .btn__back").click(function() {
            $(".warning__parent").removeClass("active")
        })
        // Click confirm button, the do the work below
        $(".warning__child .btn__confirm").click(function() {
            let listForUpdate = {
                type: "deleteToken",
                token: time,
                username: username
            }
            $.ajax({
                url: "/data/update.php",
                method: "POST",
                dataType: "html",
                contentType: 'application/json',
                data: JSON.stringify(listForUpdate),
                success: function(e) {
                    if(e) {
                        window.location.href = "/";
                    }
                }
            })
        })
        // Go back to bio page
        $(".adminBtn__index").click(function() {
            window.location.href = `/${username}`
        })
        // Click remove avatar picture
        $(".info__img--remove").click(function() {
            let data = {
                type: 'avaDelete',
                username: username,
                img: $(".info__img .uploadImg__filename").val()
            }
            $.ajax({
                url: "/data/update.php",
                method: "POST",
                data: JSON.stringify(data),
                dataType: "html",
                contentType: "application.json",
                success: function(e) {
                    if(e) {
                        img.src = defaultImgPath
                    } else {
                        location.reload()
                    }
                }
            })
        })

        // Format and Validation
        const isValid = {}
        for(let i = 0; i < socialName.length; i++) {
            if(!(socialName[i] === 'Mobile' || socialName[i] === 'Email' || socialName[i] === 'Messenger' || socialName[i] === 'Work')) {
                isValid[socialName[i]] = (0,_module_WW_js__WEBPACK_IMPORTED_MODULE_1__.$$$)("."+socialName[i]+" #social__info", "."+socialName[i]+" span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^(https?:\/\/)\w*/).formValidate().run()
            }
        }
        // Mobile Phone Validation
        isValid.Mobile = (0,_module_WW_js__WEBPACK_IMPORTED_MODULE_1__.$$$)(".Mobile #social__info", ".Mobile span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^\d{3}-\d{3}-\d{4}$/).formValidate().run()
        isValid.Mobile.phoneFormat()

        // Work Phone Validation
        isValid.Work = (0,_module_WW_js__WEBPACK_IMPORTED_MODULE_1__.$$$)(".Work #social__info", ".Work span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^\d{3}-\d{3}-\d{4}$/).formValidate().run()
        isValid.Work.phoneFormat()

        // Zalo Phone Validation
        isValid.Zalo = (0,_module_WW_js__WEBPACK_IMPORTED_MODULE_1__.$$$)(".Zalo #social__info", ".Zalo span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^\d{3}\d{3}\d{4}$/).formValidate().run()
        
        // Email Validation
        isValid.Email = (0,_module_WW_js__WEBPACK_IMPORTED_MODULE_1__.$$$)(".Email #social__info", ".Email span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^[^\s@]+@[^\s@]+\.[^\s@]+$/).formValidate().run()

        // Messenger Validation
        isValid.Messenger = (0,_module_WW_js__WEBPACK_IMPORTED_MODULE_1__.$$$)(".Messenger #social__info", ".Messenger span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^.*$/).formValidate().run()

        // Address Validation
        isValid.Address  = (0,_module_WW_js__WEBPACK_IMPORTED_MODULE_1__.$$$)(".Address #social__info", ".Address span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^.*$/).formValidate().run()

        // Click save button, then do the work below
        $(".adminBtn__save").click(function() {
            let booleanArr = []
            for(let i = 0; i < socialName.length; i++) {
                booleanArr.push(isValid[socialName[i]].getValidity())
            }
            booleanArr.push(isValid.Mobile.getValidity())
            booleanArr.push(isValid.Work.getValidity())
            booleanArr.push(isValid.Email.getValidity())
            booleanArr.push(isValid.Messenger.getValidity())
            booleanArr.push(isValid.Address.getValidity())
            const allTrue = booleanArr.every(ele => ele === true)
            if(allTrue) {
                let listForUpdate = {}
                if(uploadImage) {
                    let [x, y, scale, angle] = transform.exportData()
                    let src = upload.drawImage(img, x, y, scale, angle, 700, 700, $(".info__img--location").width(), $(".info__img--location").height())
                    listForUpdate.src = src
                }
                listForUpdate.type = "info"
                listForUpdate.username = username
                listForUpdate.image = $(".info__img .uploadImg__filename").val()
                listForUpdate.name = $(".info__name #name").val()
                listForUpdate.organization = $(".info__org #org").val()
                listForUpdate.description = $(".info__des #des").val()
                for(let i = 0; i < socialName.length; i++) {
                    if(socialName[i] === 'Messenger') {
                        const v = $("."+socialName[i]+" #social__info").val()
                        const link = (v === '') ? '' : `https://m.me/${v}`
                        listForUpdate[socialName[i]] = link
                    } 
                    else if (socialName[i] === 'Zalo') {
                        const v = $("."+socialName[i]+" #social__info").val()
                        const link = (v === '') ? '' : `https://zalo.me/${v}`
                        listForUpdate[socialName[i]] = link
                    }
                    else if (socialName[i] === 'Mobile' || socialName[i] === 'Work') {
                        const dial = $("." + socialName[i] + " .countryCode").data("dial")
                        const value = $("."+socialName[i]+" #social__info").val()
                        const code = $("." + socialName[i] + " .countryCode").data("code")
                        if(value === '') {
                            listForUpdate[socialName[i]] = ''
                        } else {
                            listForUpdate[socialName[i]] = `${code} ${dial} ${$("."+socialName[i]+" #social__info").val()}`
                        }
                    }
                    else {
                        listForUpdate[socialName[i]] = $("."+socialName[i]+" #social__info").val()
                    }
                }
                $.ajax({
                    url: "/data/update.php",
                    method: "POST",
                    data: JSON.stringify(listForUpdate),
                    dataType: "html",
                    contentType: "application/json",
                    beforeSend: function() {
                        spinner.show()
                        $(".adminBtn__save span").css("visibility", "hidden")
                    },
                    success: function(e) {
                        if(e !== null) {
                            spinner.hide()
                            $(".adminBtn__save span").css("visibility", "visible")
                            $(".info__img .uploadImg__filename").val(e)
                            uploadImage ? transform.terminate() : null
                            $(".msg").removeClass("active")
                            $(".successMsg").addClass("active")
                            setTimeout(()=>{
                                $(".successMsg").removeClass("active")
                                window.location.href = `/${username}`
                            }, 1000)
                        }
                    },
                    error: function() {
                        $(".msg").removeClass("active")
                        $(".errorMsg").addClass("active")
                        setTimeout(()=>{
                            location.reload()
                        }, 3000)
                    }
                })
            } else {
                $(".msg").removeClass("active")
                $(".notValidForm").addClass("active")
                setTimeout(()=>{
                    $(".notValidForm").removeClass("active")
                }, 3000)
            }
        })
    }
    function aic() {
        const spinner = (0,_module_W_js__WEBPACK_IMPORTED_MODULE_0__.$$)("#userData").addSpinner().singleSpinner()
        $.ajax({
            url: "/data/update.php",
            method: "POST",
            dataType: "json",
            data: JSON.stringify({
                type: "getUserInfo"
            }),
            beforeSend: function() {
                spinner.show()
            },
            success: function(userArray) {
                const userObj = {}
                for(let i = 0; i < userArray.length; i++) {
                    userArray[i].bioLink = `<a target="_blank" href="/${userArray[i].username}" style="color: #000;">Bio</a>`
                    userArray[i].admin = `<a target="_blank" href="/${userArray[i].username}/admin" style="color: #000;">Admin</a>`
                    userArray[i].delete = `<button value="${userArray[i].username}">Delete</button>`
                    userObj[i] = userArray[i]
                }
                const headerObj = {
                    1: '#',
                    2: 'Username',
                    3: 'Email',
                    4: 'Password',
                    5: 'Token',
                    6: 'Delete Token',
                    7: 'Bio',
                    8: 'Admin',
                    9: 'Delete'
                }
                ;(0,_module_W_js__WEBPACK_IMPORTED_MODULE_0__.$$)("#userData", headerObj, userObj).table().create()
                spinner.hide()
                let currentUsernameValue
                $("#userData button").click(function(e) {
                    $(".warning__parent").addClass("active")
                    currentUsernameValue = e.currentTarget.value
                })
                $(".btn__confirm").click(function() {
                    $.ajax({
                        url: "/data/update.php",
                        method: "POST",
                        dataType: "html",
                        contentType: 'application/json',
                        data: JSON.stringify({
                            type: 'delete',
                            username: currentUsernameValue
                        }),
                        success: function(e) {
                            if(e) {
                                location.reload()
                            }
                        }
                    })
                })
                $(".btn__back").click(function() {
                    $(".warning__parent").removeClass("active")
                })
            }
        })
    }
    function signinPage() {
        (0,_module_W_js__WEBPACK_IMPORTED_MODULE_0__.$$)("#password").passShowHide().run()
    }
    function forgot() {
        
    }
    function forgotUsername() {
        
    }
    function resetPass() {
        (0,_module_W_js__WEBPACK_IMPORTED_MODULE_0__.$$)("#password").passShowHide().run()
        ;(0,_module_W_js__WEBPACK_IMPORTED_MODULE_0__.$$)("#verifyPassword").passShowHide().run()
    }

    function restore() {
        $(".btn__ele--restore").click(function() {
            $.ajax({
                url: "/data/update.php",
                method: "POST",
                dataType: "json",
                data: JSON.stringify({
                    type: "restoreAccount",
                    username: username
                }),
                success: function(e) {
                    if(e) {
                        window.location.href = `/`
                    }
                },
                error: function() {

                }
            })
        })
        $(".btn__ele--delete").click(function() {
            $.ajax({
                url: "/data/update.php",
                method: "POST",
                dataType: "html",
                contentType: 'application/json',
                data: JSON.stringify({
                    type: "delete",
                    username: username
                }),
                success: function(e) {
                    if(e) {
                        window.location.href = "/";
                    }
                },
                error: function() {
                    
                }
            })
        })
    }

    function template(props) {
        const username = props.username // user username
        const isSignedin = props.isSignedin // if user is signed in
        let template = {} // template table fetched from database
        let favorite = {} // favorite created from favorite column of table template
        let localData = JSON.parse(localStorage.getItem("cart")) // get local storage data
        let cart = localData === null ? {} : localData // cart object to hold what user puts in the cart, and store it to local storage
        // cart object will be sent to merchant service for processing

        // Initially fetch cart component
        const cartComponentInstance = (0,_module_components_Cart_js__WEBPACK_IMPORTED_MODULE_2__.cartComponent)({
            container: ".logo",
            cart: cart,
            cartEle: ".cart"
        }).render().addCount()

        // Initial fetch for cart
        for(const key in cart) {
            handleAddToCart('.add[data-id="'+key+'"]', cart, key, cartComponentInstance)
        }

        // This is strictly followed that customer info is only fetched when they signed in
        if(username !== "" && isSignedin === "true") {
            $.ajax({
                url: '/data/template.php',
                method: 'POST',
                dataType: 'json',
                data: {
                    type: 'fetch',
                    username: username
                },
                success: function(e) {
                    template = e
                    if(template.favorite !== null && template.favorite !== '') {
                        template.favorite.split(",").forEach(e => {
                            if(e !== '') {
                                handleLike('.like[data-id="'+e+'"]', e, favorite)
                            }
                        })
                    }
                },
                error: function() {
                    console.log("error")
                }
            })
        }
        
        // Handle like and unlike
        $(".template .template-img .like").click(e => {
            if(username !== "" && isSignedin === "true") {
                const current = $(e.currentTarget)
                const id = current.data("id")
                const pressed = current.data("pressed")
                // Handle like
                if(pressed === 0) {
                    handleLike('.like[data-id="'+id+'"]', id, favorite)
                }
                // Handle unlike
                else {
                    handleUnLike('.like[data-id="'+id+'"]', id, favorite)
                }
                $.ajax({
                    url: '/data/template.php',
                    method: 'POST',
                    dataType: 'json',
                    data: {
                        type: 'favorite',
                        username: username,
                        favorite: convertToString(favorite)
                    },
                    success: function(e) {
                        return
                    },
                    error: function() {
                        console.log("error")
                    }
                })
            } else {
                location.href = `/signin?template=true`
            }
        })

        $(".template .template-choice .add").click(e => {
            if(username !== "" && isSignedin === "true") {
                const current = $(e.currentTarget) // get current element that gets clicked
                const id = current.data("id") // get current element id
                const pressed = current.data("pressed") // get current element pressed
                // Handle add to cart
                if(pressed === 0) {
                    handleAddToCart('.add[data-id="'+id+'"]', cart, id, cartComponentInstance)
                }
                // Handle remove from cart
                else {
                    handleRemoveFromCart('.add[data-id="'+id+'"]', cart, id, cartComponentInstance)
                }
            } else {
                window.location.href = `/signin?template=true`
            }
        })

        // Handle click on cart
        $(".cart").click(e => handleOpenCart(e))

        // Handle exit cart
        $(".cart_parent .exit").click(e => handleExitCart(e))

        // Handle checkout from cart
        $(".cart_checkout").click(e => {
            e.preventDefault()
            const count = Object.keys(cart).length;
            if(count > 0) {
                if(username !== "" && isSignedin === "true") {
                    window.location.href = '/checkout?username=' + username;
                } else {
                    window.location.href = '/signin?checkout=true';
                }
            } else {
                shakingMsg($(".cart_empty_msg"))
            }
        })

        // Handle checkout from single item
        $(".buy").click(e => {
            const current = $(e.currentTarget) // get current element that gets clicked
            const id = current.data("id") // get current element id
            if(username !== "" && isSignedin === "true") {
                window.location.href = '/checkout?username=' + username + '&itemid=' + id;
            } else {
                window.location.href = '/signin?checkout=true&itemid=' + id;
            }
        })
        
        // Handle select
        $(".select").click(e => {
            const current = e.currentTarget;
            const id = $(current).data("id");
            $.ajax({
                url: '/data/template.php',
                method: 'POST',
                data: JSON.stringify({
                    type: "select",
                    username: props.username,
                    themeid: id
                }),
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
//======================================================
        // Necessary function
        // Function to convert object to string
        function convertToString(Obj) {
            let ObjString = ''
            for(const key in Obj) {
                ObjString += key + ','
            }
            return ObjString
        }
        // Handle like
        function handleLike(element, id, obj) {
            $(element).css({
                borderColor: "red",
                color: "red"
            })
            obj[id] = true
            $(element).data("pressed", 1)
        }
        // Handle unlike
        function handleUnLike(element, id, obj) {
            $(element).css({
                borderColor: "black",
                color: "black"
            })
            delete obj[id]
            $(element).data("pressed", 0)
        }
        // Handle open cart
        function handleOpenCart(e) {
            e.preventDefault()
            $(".cart_parent").css({
                "display" : "flex"
            })
            $("body").css({
                "overflow": "hidden",
                "touch-action": "none"
            })
        }
        // Handle exit cart
        function handleExitCart(e) {
            e.preventDefault()
            $(".cart_parent").css({
                "display" : "none"
            })
            $("body").css({
                "overflow": "auto",
                "touch-action": "auto"
            })
        }
        // Handle add to cart
        function handleAddToCart(element, cart, id, instance) {
            $(element).data("pressed", 1) // set pressed to 1
            $(element).find(".check").addClass("active")
            $(element).css({
                backgroundColor: "#c1dfc1" // set background of cart icon
            })
            instance.addItem(id) // add item to parent cart
            // Handle remove from cart, be mindful to clear event click created from previous handleAddToCart function call
            $(".cart_parent .cart_item-remove").off('click', null)
            $(".cart_parent .cart_item-remove").click(e => {
                const current = $(e.currentTarget) // get current element that gets clicked
                const id = current.data("id") // get current element id
                handleRemoveFromCart('.add[data-id="'+id+'"]', cart, id, cartComponentInstance)
            })
            cart[id] = true // add to cart object
            localStorage.setItem("cart", JSON.stringify(cart)) // store cart (being converted to JSON) to local storage
        }
        // Handle remove from cart
        function handleRemoveFromCart(element, cart, id, instance) {
            $(element).data("pressed", 0) // set pressed to 0
            $(element).find(".check").removeClass("active")
            $(element).css({
                backgroundColor: "#fff" // set background of cart icon back to normal
            })
            delete cart[id] // delete from cart object
            instance.removeItem(id) // remove item from parent cart
            localStorage.setItem("cart", JSON.stringify(cart)) // store cart (being converted to JSON) to local storage
        }

        // Handle shaking message
        function shakingMsg(error) {
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
    }
})

//# sourceURL=webpack://htdocs/./src/main.js?