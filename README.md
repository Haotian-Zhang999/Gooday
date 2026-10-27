# 花飞雨追 · Gooday

这是花飞雨追的个人书房，用于写博客、展示作品，也欢迎好友来坐坐。页面采用纸白、松墨与朱砂的安静风格，支持中英文切换，并适配手机浏览。

## GitHub Pages 发布

本目录是无需构建的静态网站。index.html 位于根部；上传根目录中的全部文件（包括 .nojekyll、mountain-study.svg 和 seal.svg），再将 GitHub Pages 的发布目录设为对应分支的根目录即可。assets 目录保留了一份图片副本，当前页面不依赖这个目录；浏览器上传时可只上传根部文件。

GitHub Pages 发布地址为 https://haotian-zhang999.github.io/Gooday/ （部署成功后可访问）。目前未设置独立域名；域名主体计划使用 gooday，后缀和注册状态需另行确认。

## 补充内容

content.js 是文章、作品和个人资料的数据入口。博客和作品列表目前为空，页面会显示自然的留白状态。

- profile：个人介绍、公开邮箱、简历下载地址和社交链接。
- posts：博客文章列表，支持分类、中英文标题、摘要及 Markdown 正文。
- works：作品列表，可添加封面、说明和外部链接。
- 图片、未来的简历 PDF 等素材可直接放在根目录，并使用相对路径引用，例如 ./portrait.jpg 或 ./resume.pdf。

当前没有在线写作后台。后续可以编辑 content.js，也可以将文章、作品和素材交给助手补充。
