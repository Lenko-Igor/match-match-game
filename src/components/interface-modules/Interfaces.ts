export interface SettingData {
  image?: {
    auto: string[]
  },
  difficulty?: {
    easy: number,
    middle: number,
    difficult: number
  }
}

export interface RegistrationData {
  firstName: string, 
  lastName: string, 
  email: string,
}