import { $$ } from "../Web-Development/W";

export default function aic() {
        // search mechanism
       (async function() {
            // Perform search mechanism
           $$("#search", {
                container: "#userData",
                header: {
                    2: "Username",
                    3: "Email",
                    4: "Password",
                    5: "Token",
                    6: "Delete Token",
                    7: "Bio",
                    8: "Admin",
                    9: "Delete"
                },
                target: "#copyright",
                limit: 50,
                like: "",
                url: "/data/api/getAllUser.php",
                html: {
                    button: "#userData button",
                    confirm: ".btn__confirm",
                    back: ".btn__back",
                    parent: ".warning__parent"
               }
           }).search();
       })()
    }