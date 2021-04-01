import * as auth from "./auth";
import * as actions from "./actions";
import * as loaduserdata from "./loaduserdata";

export default {
    ...auth,
    ...actions,
    ...loaduserdata
}