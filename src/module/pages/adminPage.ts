// import { $$ } from "../Web-Development/W";

// export default function adminPage() {
//     // Variable Declaration and Initialization
//     const img = document.querySelector(".info__img--location img")
//     let transform, uploadImage = false

//     // Add spinner
//     const spinner = $$(".adminBtn__save").addSpinner().singleSpinner()

//     // Make "choose" button able to open file box
//     const upload = $$(".info__img--choose", ".info__img input").upload().openFile()

//     // Make image container able to open file box
//     $$(".info__img--location", ".info__img input").upload().openFile()

//     // Manage change event of the file box
//     $(".info__img input").on("change", (e) => {
//         upload.fileHandling(e, function(src) {
//             uploadImage = true
//             // Make the image container transformable
//             transform = $$(".info__img--location img").transform().draggable().distort()
//             img.src = src
//         })
//     })

//     // Make Address box searchable using Google Maps API
//     // const API_KEY = 'AIzaSyDzVaJBzfYI99plotEoYzCKASerLaeNNGY'
//     // $$$(null).googleAPI(API_KEY).runGoogleMapsAPI(".Address #social__info")

//     // Make toggle for country code box
//     $$(".countryCode", "active").toggle().custom()

//     // Show previously uploaded data to the admin page
//     if(typeof(username) === 'string') {
//         $.ajax({
//             url: "/data/update.php",
//             method: "POST",
//             dataType: "json",
//             data: JSON.stringify({
//                 username: username,
//                 type: "getInfo"
//             }),
//             success: function(e) {
//                 const list = e[0]
//                 if(list !== undefined) {
//                     $(".info__img .uploadImg__filename").val(list.image === null ? '' : list.image)
//                     $(".info__name #name").val(list.name === null ? '' : list.name)
//                     $(".info__org #org").val(list.organization === null ? '' : list.organization)
//                     $(".info__des #des").val(list.description === null ? '' : list.description)
//                     for(let i = 0; i < socialName.length; i++) {
//                         let ele = list[socialName[i]]
//                         ele = (ele === null || ele === '') ? '' : ele
//                         if(socialName[i] === "Messenger") {
//                             ele = ele.replace("https://m.me/", "")
//                         }
//                         else if (socialName[i] === 'Zalo') {
//                             ele = ele.replace("https://zalo.me/", "")
//                         }
//                         else if (socialName[i] === "Mobile" || socialName[i] === "Work") {
//                             let dial, index, code
//                             if(ele === '') {
//                                 dial = '+1'
//                                 code = 'US'
//                             } else {
//                                 code = ele.split(" ")[0]
//                                 dial = ele.split(" ")[1]
//                                 ele = ele.split(" ")[2]
//                             }
//                             $("."+socialName[i]+" .countryCode").data("dial", dial)
//                             $("."+socialName[i]+" .countryCode").data("code", code)
//                             $("."+socialName[i]+" .countryCode > .flag > img").attr("src", "/src/module/flags/" + code.toLowerCase() + ".png")
//                             $("."+socialName[i]+" .countryCode > .code").html(dial)
//                         }
//                         $("."+socialName[i]+" #social__info").val(ele)
//                     }
//                     img.src = (list.image === null || list.image === '') ? defaultImgPath : '/user/' + username + '/' + list.image
//                 } else {
//                     img.src = defaultImgPath
//                 }
//             }
//         })
//     }
//     // Click delete button, then do the work below
//     $(".adminBtn__delete").click(function() {
//         $(".warning__parent").addClass("active")
//     })
//     // Click back button, then do the work below
//     $(".warning__child .btn__back").click(function() {
//         $(".warning__parent").removeClass("active")
//     })
//     // Click confirm button, the do the work below
//     $(".warning__child .btn__confirm").click(function() {
//         let listForUpdate = {
//             type: "deleteToken",
//             token: time,
//             username: username
//         }
//         $.ajax({
//             url: "/data/update.php",
//             method: "POST",
//             dataType: "html",
//             contentType: 'application/json',
//             data: JSON.stringify(listForUpdate),
//             success: function(e) {
//                 if(e) {
//                     window.location.href = "/";
//                 }
//             }
//         })
//     })
//     // Go back to bio page
//     $(".adminBtn__index").click(function() {
//         window.location.href = `/${username}`
//     })
//     // Click remove avatar picture
//     $(".info__img--remove").click(function() {
//         let data = {
//             type: 'avaDelete',
//             username: username,
//             img: $(".info__img .uploadImg__filename").val()
//         }
//         $.ajax({
//             url: "/data/update.php",
//             method: "POST",
//             data: JSON.stringify(data),
//             dataType: "html",
//             contentType: "application.json",
//             success: function(e) {
//                 if(e) {
//                     img.src = defaultImgPath
//                 } else {
//                     location.reload()
//                 }
//             }
//         })
//     })

//     // Format and Validation
//     const isValid = {}
//     for(let i = 0; i < socialName.length; i++) {
//         if(!(socialName[i] === 'Mobile' || socialName[i] === 'Email' || socialName[i] === 'Messenger' || socialName[i] === 'Work')) {
//             isValid[socialName[i]] = (0,_module_WW_js__WEBPACK_IMPORTED_MODULE_1__.$$$)("."+socialName[i]+" #social__info", "."+socialName[i]+" span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^(https?:\/\/)\w*/).formValidate().run()
//         }
//     }
//     // Mobile Phone Validation
//     isValid.Mobile = (0,_module_WW_js__WEBPACK_IMPORTED_MODULE_1__.$$$)(".Mobile #social__info", ".Mobile span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^\d{3}-\d{3}-\d{4}$/).formValidate().run()
//     isValid.Mobile.phoneFormat()

//     // Work Phone Validation
//     isValid.Work = (0,_module_WW_js__WEBPACK_IMPORTED_MODULE_1__.$$$)(".Work #social__info", ".Work span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^\d{3}-\d{3}-\d{4}$/).formValidate().run()
//     isValid.Work.phoneFormat()

//     // Zalo Phone Validation
//     isValid.Zalo = (0,_module_WW_js__WEBPACK_IMPORTED_MODULE_1__.$$$)(".Zalo #social__info", ".Zalo span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^\d{3}\d{3}\d{4}$/).formValidate().run()
    
//     // Email Validation
//     isValid.Email = (0,_module_WW_js__WEBPACK_IMPORTED_MODULE_1__.$$$)(".Email #social__info", ".Email span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^[^\s@]+@[^\s@]+\.[^\s@]+$/).formValidate().run()

//     // Messenger Validation
//     isValid.Messenger = (0,_module_WW_js__WEBPACK_IMPORTED_MODULE_1__.$$$)(".Messenger #social__info", ".Messenger span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^.*$/).formValidate().run()

//     // Address Validation
//     isValid.Address  = (0,_module_WW_js__WEBPACK_IMPORTED_MODULE_1__.$$$)(".Address #social__info", ".Address span", '<i style="color:green;" class="fa-solid fa-check"></i>', '<i style="color:red;" class="fa-solid fa-x"></i>', /^.*$/).formValidate().run()

//     // Click save button, then do the work below
//     $(".adminBtn__save").click(function() {
//         let booleanArr = []
//         for(let i = 0; i < socialName.length; i++) {
//             booleanArr.push(isValid[socialName[i]].getValidity())
//         }
//         booleanArr.push(isValid.Mobile.getValidity())
//         booleanArr.push(isValid.Work.getValidity())
//         booleanArr.push(isValid.Email.getValidity())
//         booleanArr.push(isValid.Messenger.getValidity())
//         booleanArr.push(isValid.Address.getValidity())
//         const allTrue = booleanArr.every(ele => ele === true)
//         if(allTrue) {
//             let listForUpdate = {}
//             if(uploadImage) {
//                 let [x, y, scale, angle] = transform.exportData()
//                 let src = upload.drawImage(img, x, y, scale, angle, 700, 700, $(".info__img--location").width(), $(".info__img--location").height())
//                 listForUpdate.src = src
//             }
//             listForUpdate.type = "info"
//             listForUpdate.username = username
//             listForUpdate.image = $(".info__img .uploadImg__filename").val()
//             listForUpdate.name = $(".info__name #name").val()
//             listForUpdate.organization = $(".info__org #org").val()
//             listForUpdate.description = $(".info__des #des").val()
//             for(let i = 0; i < socialName.length; i++) {
//                 if(socialName[i] === 'Messenger') {
//                     const v = $("."+socialName[i]+" #social__info").val()
//                     const link = (v === '') ? '' : `https://m.me/${v}`
//                     listForUpdate[socialName[i]] = link
//                 } 
//                 else if (socialName[i] === 'Zalo') {
//                     const v = $("."+socialName[i]+" #social__info").val()
//                     const link = (v === '') ? '' : `https://zalo.me/${v}`
//                     listForUpdate[socialName[i]] = link
//                 }
//                 else if (socialName[i] === 'Mobile' || socialName[i] === 'Work') {
//                     const dial = $("." + socialName[i] + " .countryCode").data("dial")
//                     const value = $("."+socialName[i]+" #social__info").val()
//                     const code = $("." + socialName[i] + " .countryCode").data("code")
//                     if(value === '') {
//                         listForUpdate[socialName[i]] = ''
//                     } else {
//                         listForUpdate[socialName[i]] = `${code} ${dial} ${$("."+socialName[i]+" #social__info").val()}`
//                     }
//                 }
//                 else {
//                     listForUpdate[socialName[i]] = $("."+socialName[i]+" #social__info").val()
//                 }
//             }
//             $.ajax({
//                 url: "/data/update.php",
//                 method: "POST",
//                 data: JSON.stringify(listForUpdate),
//                 dataType: "html",
//                 contentType: "application/json",
//                 beforeSend: function() {
//                     spinner.show()
//                     $(".adminBtn__save span").css("visibility", "hidden")
//                 },
//                 success: function(e) {
//                     if(e !== null) {
//                         spinner.hide()
//                         $(".adminBtn__save span").css("visibility", "visible")
//                         $(".info__img .uploadImg__filename").val(e)
//                         uploadImage ? transform.terminate() : null
//                         $(".msg").removeClass("active")
//                         $(".successMsg").addClass("active")
//                         setTimeout(()=>{
//                             $(".successMsg").removeClass("active")
//                             window.location.href = `/${username}`
//                         }, 1000)
//                     }
//                 },
//                 error: function() {
//                     $(".msg").removeClass("active")
//                     $(".errorMsg").addClass("active")
//                     setTimeout(()=>{
//                         location.reload()
//                     }, 3000)
//                 }
//             })
//         } else {
//             $(".msg").removeClass("active")
//             $(".notValidForm").addClass("active")
//             setTimeout(()=>{
//                 $(".notValidForm").removeClass("active")
//             }, 3000)
//         }
//     })
// }