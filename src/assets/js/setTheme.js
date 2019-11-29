import '../theme/dark/styls.less';
import '../theme/default/styls.less';


export const setTheme = () => {
  console.log(localStorage.getItem('theme'))
  document.body.className = localStorage.getItem('theme') ? localStorage.getItem('theme'): ''
}