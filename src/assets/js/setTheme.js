import '../theme/dark/styls.less';
import '../theme/default/styls.less';


export const setTheme = () => {
  document.body.className = document.body.className ? '': 'dark'
  // if (themeName === 'default') {
  //   // 移除之前主题的属性
  //   window.localStorage.removeItem(key)
  //   if (document.body.className) document.body.className = ''
  // } else {
  //   // 把该主题的所有属性存到缓存
  //   document.body.className = themeName;
  // }
}