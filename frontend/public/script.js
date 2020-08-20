/**
 * Babel: converte(transpila) o código do react para um código que o browser entenda
 * webpack: Pra cad tipo de arquivo (.js .css .png) converta para uma maneira diferente
 * 
 * Loaders (dentro do webpack) babel-loader -> faz com que o browser entenda o js moderno
 * css-loader responsavel por converter o css, image-loader entre outros
 * 
 * pacotes necessários: @babel/core @babel/cli @babel/preset-env @babel/preset-react  webpack webpack-cli
 * com o babel/cli instalado, iremos gerar o arquivo de bundle
 * yarn babel src/index.js --out-file public/bundle.js
 */