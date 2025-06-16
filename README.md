# AuthCodeApp

Um aplicativo React Native para autenticação.  

Link para instalar o arquivo .APK:  
➡️ [Ir para o dowload](https://drive.google.com/file/d/1pQ2Snv4_sRhIW8Iexz9xvwUmsUKm92PN/view?usp=sharing)  

Esta é uma aplicação Full Stack, Acesse o Back-end através dos links abaixo: 

Link do repositório GitHub:   
➡️ [Ir para o repositório](https://github.com/luan-rodrigues1/AuthCodeApi)  

Link da API em produção:  
➡️ https://authcode-api-77008956635.us-central1.run.app  

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js
- npm ou yarn
- React Native CLI
- Android Studio (para desenvolvimento Android)
- Xcode (para desenvolvimento iOS - apenas macOS)
- CocoaPods (para iOS)

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone [URL_DO_REPOSITÓRIO]
cd AuthCodeApp
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Para iOS, instale os pods:

```bash
cd ios
pod install
cd ..
```

## 💻 Rodando Localmente

### Desenvolvimento

1. Inicie o Metro Bundler:

```bash
npm start
# ou
yarn start
```

2. Em outro terminal, execute o aplicativo:

Para Android:

```bash
npm run android
# ou
yarn android
```

Para iOS:

```bash
npm run ios
# ou
yarn ios
```

## 📱 Build para Produção

### Android

1. Configure as variáveis de ambiente:

   - Crie um arquivo `android/gradle.properties` com suas configurações de release
   - Configure a keystore para assinatura do app

2. Gere o APK de release:

```bash
cd android
./gradlew assembleRelease
```

O APK será gerado em: `android/app/build/outputs/apk/release/app-release.apk`

3. Para gerar um AAB (Android App Bundle):

```bash
cd android
./gradlew bundleRelease
```

O AAB será gerado em: `android/app/build/outputs/bundle/release/app-release.aab`

### iOS

1. Abra o projeto no Xcode:

```bash
cd ios
open AuthCodeApp.xcworkspace
```

2. No Xcode:

   - Selecione o dispositivo de destino
   - Configure o certificado de distribuição
   - Configure o perfil de provisionamento
   - Selecione "Product > Archive"

3. Após o arquivo ser gerado:
   - Clique em "Distribute App"
   - Escolha o método de distribuição (App Store, Ad Hoc, etc.)
   - Siga as instruções do assistente

## 🔧 Scripts Disponíveis

- `npm start` ou `yarn start`: Inicia o Metro Bundler
- `npm run android` ou `yarn android`: Executa o app no Android
- `npm run ios` ou `yarn ios`: Executa o app no iOS
- `npm test` ou `yarn test`: Executa os testes
- `npm run lint` ou `yarn lint`: Executa o linter
