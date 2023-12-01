

# Getting Started

>**Nota**: Asegurarse de completar las instrucciones de: [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup)  hasta el paso "Crear una nueva aplicación".

## Paso 1: Instalar Librerías
```bash
# Utilizar npm
npm install

# y para iOS
cd ios && pod install
```

## Paso 2: Iniciar Aplicación 

### For Android

```bash
# using npm
npx react-native run android 
```

### For iOS

```bash
# using npm
npx react-native run ios 
``` 

Si todo está configurado correctamente, la aplicación se ejecutará en un Emulador de _Android_ o _iOS_.

Esta es una forma de ejecutar la aplicación; también se puede ejecutar directamente desde Android Studio y Xcode respectivamente.


 
#
#
# React Native Web 
Para instalar/desinstalar, ejecutar build y levantar el ambiente local se recomienda realizar lo siguiente dentro del archivo `package.json`: 

<kbd>Para este proyecto ya están configuradas las líneas de código dentro del archivo mencionado, por lo tanto solo aplica ejecutar los comandos. La integración de scripts aplica para proyectos nuevos</kbd>

### Instalar WebPack: 
```bash
   "scripts": { 
      "install-webpack": "npm install react-native-web && npm install babel-plugin-react-native-web webpack webpack-cli webpack-dev-server html-webpack-plugin react-dom babel-loader url-loader @svgr/webpack && mkdir public && git clone https://github.com/camividalt/files-react-native-web/ && mv files-react-native-web/public/index.html ./public && mv files-react-native-web/App.web.tsx ./ && mv files-react-native-web/index.web.js ./ && mv files-react-native-web/webpack.config.js ./ && rm -rf files-react-native-web"
  },
```

### Build WebPack
```bash
   "scripts": {
      "build-webpack": "rm -rf dist/ && webpack --mode=production --config webpack.config.js",
   }
```

### Ejecutar Localhost
```bash
   "scripts": {
      "web": "webpack serve --mode=development --config webpack.config.js",
   }
```

### Desinstalar 
```bash
   "scripts": {
      "uninstall-webpack": "npm uninstall react-native-web && npm uninstall babel-plugin-react-native-web webpack webpack-cli webpack-dev-server html-webpack-plugin react-dom babel-loader url-loader @svgr/webpack && rm -rf public/ && rm -rf index.web.js && rm -rf App.web.tsx && rm -rf webpack.config.js",
   },
```

### Comandos: 
```bash
   # Instalar librerías y descargar archivos para generar proyecto web 
   npm run install-webpack
   # Transformar proyecto RN en web 
   npm run build-webpack
   # Levantar ambiente localhost 
   npm run web
   # Desinstalar librerías y eliminar archivos correspondientes al mundo web
   npm run uninstall-webpack
```