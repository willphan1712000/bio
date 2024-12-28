import { $$$ } from "../client/src/Web-Development/WW"

interface Props {
    [key: string]: string
}

export default function restore(props: Props) {
    $(".btn__ele--restore").click(async function() {
        const r = await $$$("/data/api/restoreAccount.php", {
            username: props.username
        }).api().post()
        if(r) {
            window.location.href = "/"
        }
    })
    $(".btn__ele--delete").click(async function() {
        const r = await $$$("/data/api/deleteAccount.php", {
            username: props.username
        }).api().post()
        if(r) {
            window.location.href = "/"
        }
    })
}