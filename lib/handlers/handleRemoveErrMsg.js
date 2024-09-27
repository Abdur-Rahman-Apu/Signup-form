export default function handleRemoveErrMsg(e) {
  const errMsgElm = e.target
    .closest(".input-container")
    .querySelector(".input-err-msg");

  errMsgElm.classList.add("hide");
}
