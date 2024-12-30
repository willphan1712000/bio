import { $$ } from "../client/src/Web-Development/W";

$(document).ready(function() {
    aic()
})

export default function aic() {
        // search mechanism
       (async function() {
            // Perform search mechanism
           $$("#search", {
                container: "#userData",
                target: "#copyright",
                limit: 50,
                like: "",
                url: {
                    get: "/data/api/user/GETALL.php",
                    delete: "/data/api/user/DELETE.php"
                },
                html: {
                    button: "#userData button",
                    confirm: ".btn__confirm",
                    back: ".btn__back",
                    parent: ".warning__parent"
               }
           }).search();
       })()
    }