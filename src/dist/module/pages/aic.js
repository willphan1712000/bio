var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { $$ } from "../Web-Development/W";
import { $$$ } from "../Web-Development/WW";
export default function aic() {
    $(".migration").click(function (e) {
        return __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            const result = yield $$$("/data/api/migration.php", null).api().get();
            if (result) {
                alert("Database has been migrated successfully");
            }
            else {
                alert("Database has failed to migrate");
            }
        });
    });
    (function () {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    })();
}
