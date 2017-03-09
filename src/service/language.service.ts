export class LanguageService{
    lang:string = "en";

  toggleLang(lang) {
    switch(lang){
      case "en":
        return this.lang = "fr";
      case "fr":
        return this.lang = "es";
      case "es":
        return this.lang = "en";
    }
    
  }

}