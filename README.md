

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Paso 1: Instalar Librerías

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# Utilizar npm
npm install

# y para iOS
cd ios && pod install
```

## Paso 2: Iniciar Aplicación

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

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

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

<!-- ## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes! -->

 
#
#
# React Native Web 
Para instalar/desinstalar, ejecutar build y levantar el ambiente local se recomienda realizar lo siguiente dentro del archivo `package.json`: 


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