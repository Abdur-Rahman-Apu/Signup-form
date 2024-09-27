export default function handleRemoveErrMsg(e) {
  console.log(e.target);
  e.target.nextElementSibling.classList.add("hide");
}
