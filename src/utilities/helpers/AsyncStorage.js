// import { Platform } from 'react-native';
// import Storage from 'react-native-storage';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// class EncryptedStorage {
//   constructor() {
//     this.storage = new Storage({
//       size: 1000, //max keys 
//       storageBackend: Platform.OS === "web" ? window.localStorage : AsyncStorage,
//       defaultExpires: 1000 * 3600 * 24 * 30, //30 days
//       enableCache: true,
//       sync: {},
//     });
//   }

//   verbose = false;
//   log(message){
//     if (this.verbose) console.log(message);
//   }

//   async saveData(key, data) {
//     try {
//       await this.storage.save({
//         key,
//         data:  data,
//       });
//       this.log('Data saved:', { key, data });
//     } catch (error) {
//       this.log('Error saving data: ' + key + ' ::: ', error);
//     }
//   }


//   async retrieveData(key) {
//     try {
//       const data = await this.storage.load({ key });
//       this.log('Data retrieved:', { key, data: data });
//       return data;
//     } catch (error) {
//       this.log('Error retrieving data: ' + key + ' ::: ', error);
//       return null;
//     }
//   }

//   async removeData(key) {
//     try {
//       await this.storage.remove({ key });
//       this.log('Data removed:', key);
//     } catch (error) {
//       this.log('Error removing data: ' + key + ' ::: ', error);
//     }
//   }
//   async validateSurveyIsAnwered(number ) {
//     let aux = false;
//     const key = `loginCount-${number}`;
//     let data = await this.retrieveData(key);
//     if (data === null) {
//       return false;
//     }
//     else {
//       return data.isSurveyAnswered
//     } 
//   }
  
//   async setSurveyIsAnwered(number) {
//     let aux = false;
//     const key = `loginCount-${number}`;
//     let data = await this.retrieveData(key);
//     if (data !== null) {
//       await this.saveData(key, { count: data.count, isSurveyAnswered: true});
//     }
//   }

//   async validateAskSurvey(number) {
//     let aux = false;
//     const key = `loginCount-${number}`;
//     let data = await this.retrieveData(key);
//     if (data !== null && data.count === 2) {
//       aux = true;
//     }
//     return aux;
//   }

//   async setSurveyCount(number) {
//     const key = `loginCount-${number}`;
//     let data = await this.retrieveData(key);
//     if (data === null) {
//       await this.saveData(key, { count: 1, isSurveyAnswered: false});
//     }
//     else if (data.count === 2) {
//       await this.saveData(key, { count: 0, isSurveyAnswered: data.isSurveyAnswered});
//     } else if (data.count < 2) {
//       await this.saveData(key,{ count: data.count + 1, isSurveyAnswered: data.isSurveyAnswered});
//     }
//   }

// }

// export default new EncryptedStorage();
