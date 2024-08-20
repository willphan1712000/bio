import { $$ } from "../Web-Development/W";
import { $$$ } from "../Web-Development/WW";

export default function aic() {
        // Handle migration
        $(".migration").click(async function(e) {
            e.preventDefault();
            const result = await $$$("/data/api/migration.php", null).api().get();
            if(result) {
                alert("Database has been migrated successfully");
            } else {
                alert("Database has failed to migrate");
            }
        });

        // search mechanism
       (async function() {
            // Perform search mechanism
           $$("#search", {
                tableContainer: "#userData",
                targetObserver: "#copyright",
                header: {
                    2: "Username",
                    3: "Email",
                    4: "Password",
                    5: "Token",
                    6: "Delete Token",
                    7: "Bio",
                    8: "Admin",
                    9: "Delete"
                }
           }, "/data/api/getAllUser.php", {
                button: "#userData button",
                confirm: ".btn__confirm",
                back: ".btn__back",
                parent: ".warning__parent"
           }).search();
       })()
    }