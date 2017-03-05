export default function (fun) {
  return function preventDefaultWrapper(e) {
    e.preventDefault();
    return fun(e);
  };
}
