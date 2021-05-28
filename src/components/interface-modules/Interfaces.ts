export interface SettingData {
  images?: {
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

export interface ItemsForScore {
  amountAllCards: number,
  amountOpenedCards: number,
  amountAllCompareCards: number,
  amountFatalCompareCards: number,
  timer: number
}

export interface PersonalData {
  firstName?: string,
  lastName?: string,
  email?: string,
  score?: number,
}