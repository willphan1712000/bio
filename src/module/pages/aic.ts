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
           interface Data {
               [key: number]: {
                   [key: string]: string
               }
           }
           const data = await $$$("/data/update.php", {
               type: "getUserInfo",
           }).api().post() as Data;

           for(const i in data) {
            data[i].a = '<a target="_blank" href="/'+data[i].username+'" style="color: #000;">Bio</a>'
            data[i].admin = '<a target="_blank" href="/'+data[i].username+'/admin" style="color: #000;">Admin</a>'
            data[i].delete = '<button value="'+data[i].username+'">Delete</button>'
           }
           
           const search = $$("#search", {
            location: "#userData",
            header: {
                1: "#",
                2: "Username",
                3: "Email",
                4: "Password",
                5: "Token",
                6: "Delete Token",
                7: "Bio",
                8: "Admin",
                9: "Delete"
            },
            data
           }, "/src/dist/module/Web-Development/worker.js", () => {
                $("#userData button").off("click", e => {
                    return null;
                });
                $("#userData button").click(function(e) {
                    $(".warning__parent").addClass("active")
                    let currentUsernameElement = e.currentTarget as HTMLInputElement;
                    let currentUsernameValue = currentUsernameElement.value;
                    
                    $(".btn__confirm").off("click", e => {
                        return null;
                    });
                    $(".btn__confirm").click(async function() {
                        const r = await $$$("/data/api/deleteAccount.php", {
                            username: currentUsernameValue,
                        }).api().post();
                        console.log(r);
                    })
                })
           }).search().run();
       })()
    }